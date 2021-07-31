export const getIsAuthenticated = state => state.auth.isLogged;
export const getUserNickName = state => state.auth.user.login; // Стучать по имени, логин ниже добавить
export const getLoading = state => state.auth.isLoading;
export const getUserId = state => state.auth.user._id;
export const getDays = state => state.auth.user.days;
