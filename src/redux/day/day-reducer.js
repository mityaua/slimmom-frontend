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
} from './day_action';

const initial = { daySummary: {}, _id: '', eatenProducts: [], date: '' };

const dayInfo = createReducer(initial, {
  [dayInfoSuccess]: (_, { payload }) => payload, // Проверить
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    eatenProducts: payload.eatenProducts,
  }), // формат ответа бекенда при удалении?????
  // [deleteProductSuccess]: (state, { payload }) => ({
  //   ...state,
  //   eatenProducts: payload.eatenProducts,
  // }),
});

const error = createReducer(null, {
  [dayInfoError]: (_, { payload }) => payload,
  [addProductError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,
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
