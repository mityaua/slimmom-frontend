import { createReducer } from '@reduxjs/toolkit';
import { fetchDailyCaloriesSuccess } from './dailyCalories_action';

const userCalories = createReducer([], {
  [fetchDailyCaloriesSuccess]: (_, { payload }) => payload,
});

export default userCalories;
