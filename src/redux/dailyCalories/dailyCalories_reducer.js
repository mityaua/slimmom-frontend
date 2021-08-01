import { createReducer } from '@reduxjs/toolkit';
import { dailyCaloriesSuccess } from './dailyCalories_action';

const dailyRate = createReducer([], {
  [dailyCaloriesSuccess]: (_, { payload }) => payload,
});

export default dailyRate;
