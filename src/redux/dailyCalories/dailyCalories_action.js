import { createAction } from '@reduxjs/toolkit';

export const dailyCaloriesRequest = createAction(
  'dailyCalories/dailyCaloriesRequest',
);
export const dailyCaloriesSuccess = createAction(
  'dailyCalories/dailyCaloriesSuccess',
);
export const dailyCaloriesError = createAction(
  'dailyCalories/dailyCaloriesError',
);

export const dailyCaloriesAuthRequest = createAction(
  'dailyCalories/dailyCaloriesAuthRequest',
);
export const dailyCaloriesAuthSuccess = createAction(
  'dailyCalories/dailyCaloriesAuthSuccess',
);
export const dailyCaloriesAuthError = createAction(
  'dailyCalories/dailyCaloriesAuthError',
);
