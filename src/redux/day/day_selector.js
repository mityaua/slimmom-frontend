export const eatenProducts = state => state.day.dayInfo.eatenProducts;
export const date = state => state.day.dayInfo.date;
export const dateId = state => state.day.dayInfo._id;
export const getLoading = state => state.day.isLoading;

// sideBar

export const getKcalLeft = state => state.day.dayInfo.daySummary.kcalLeft;
export const getKcalConsumed = state =>
  state.day.dayInfo.daySummary.kcalConsumed;
export const getDailyRate = state => state.day.dayInfo.daySummary.dailyRate;
export const getPercentsOfDailyRate = state =>
  state.day.dayInfo.daySummary.percentsOfDailyRate;
