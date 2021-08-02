import { createReducer } from '@reduxjs/toolkit';
import { dailyCaloriesSuccess } from './dailyCalories_action';

const initial = { daySummary: {}, _id: '', eatenProducts: [], date: '' };

const dailyRate = createReducer(initial, {
  [dailyCaloriesSuccess]: (_, { payload }) => payload,
});

export default dailyRate;
