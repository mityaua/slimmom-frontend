import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  reset,
} from './day_action';

const initial = { daySummary: {}, _id: '', eatenProducts: [], date: '' };

const dayInfo = createReducer(initial, {
  [dayInfoSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: payload.eatenProducts,
    daySummary: payload.daySummary,
  }),
  [deleteProductSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: payload.eatenProducts,
    daySummary: payload.updatedDayData,
  }),
  [reset]: (_, { payload }) => initial,
});

const error = createReducer(null, {
  [dayInfoError]: (_, { payload }) => payload,
  [addProductError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,

  [dayInfoRequest]: () => null,
  [dayInfoSuccess]: () => null,

  [addProductRequest]: () => null,
  [addProductSuccess]: () => null,

  [deleteProductRequest]: () => null,
  [deleteProductSuccess]: () => null,
});

// Cостояние спиннера при запросах
const isLoading = createReducer(false, {
  [dayInfoRequest]: () => true,
  [dayInfoSuccess]: () => false,
  [dayInfoError]: () => false,

  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,

  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
});

export default combineReducers({
  dayInfo,
  error,
  isLoading,
});
