import { createReducer } from '@reduxjs/toolkit';
import {
  dailyCaloriesSuccess,
  dailyCaloriesAuthSuccess,
} from './dailyCalories_action';

const initial = { daySummary: {}, _id: '', eatenProducts: [], date: '' };

const dailyRate = createReducer(initial, {
  [dailyCaloriesSuccess]: (_, { payload }) => payload,
  [dailyCaloriesAuthSuccess]: (_, { payload }) => payload,
});

export default dailyRate;
