export const getDailyCalories = state =>
  state.dailyCalories.dailyRate.dailyRate; // Лимит калорий, публичный
export const getNotAllowedProducts = state =>
  state.dailyCalories.dailyRate.notAllowedProducts; // Нерекомендуемые продукты, публичные

// sideBar (приватные)
export const getSideBarDailyCalories = state =>
  state.dailyCalories?.dailyRate?.daySummary?.kcalLeft;
export const getSideBarEatenCalories = state =>
  state.dailyCalories?.dailyRate?.daySummary?.kcalConsumed;
export const getSideBarDailyRate = state =>
  state.dailyCalories?.dailyRate?.daySummary?.dailyRate;
export const getSideBarPercents = state =>
  state.dailyCalories?.dailyRate?.daySummary?.percentsOfDailyRate;

export const getLoading = state => state.dailyCalories.isLoading;
