import { createAction } from '@reduxjs/toolkit';

export const fetchDailyCaloriesRequest = createAction(
  'dailyCalories/fetchDailyCaloriesRequest',
);
export const fetchDailyCaloriesSuccess = createAction(
  'dailyCalories/fetchDailyCaloriesSuccess',
);
export const fetchDailyCaloriesError = createAction(
  'dailyCalories/fetchDailyCaloriesError',
);
