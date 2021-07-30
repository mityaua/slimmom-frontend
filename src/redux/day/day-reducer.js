import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { dayInfoRequest, dayInfoSuccess, dayInfoError } from './day_action';

const initial = { eatenProducts: null, date: null, daySummary: null };

const dayInfo = createReducer(initial, {
  [dayInfoSuccess]: (_, { payload }) => payload, // Проверить
});

const error = createReducer(null, {
  [dayInfoRequest]: () => null,
  [dayInfoError]: (_, { payload }) => payload,
});

// Cостояние спиннера при запросах
const isLoading = createReducer(false, {
  [dayInfoRequest]: () => true,
  [dayInfoSuccess]: () => false,
  [dayInfoError]: () => false,
});

export default combineReducers({
  dayInfo,
  error,
  isLoading,
});
