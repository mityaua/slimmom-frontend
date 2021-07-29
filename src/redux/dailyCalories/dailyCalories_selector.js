import { createSelector } from '@reduxjs/toolkit';

export const getDailyCalories = state => state.dailyCalories.userCalories;
