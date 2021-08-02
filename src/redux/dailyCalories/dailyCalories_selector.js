export const getDailyCalories = state => state.dailyCalories.dailyRate;
export const getNotAllowedProducts = state => state.dailyCalories.notAllowedProducts;

// sideBar 

export const getSideBarDailyCalories = state => state.dailyCalories.daySummary.kcalLeft;
export const getSideBarEatenCalories = state => state.dailyCalories.daySummary.kcalConsumed;
export const getSideBarDailyRate = state => state.dailyCalories.daySummary.dailyRate;
export const getSideBarPercents = state => state.dailyCalories.daySummary.percentsOfDailyRate;
