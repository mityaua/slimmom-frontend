export const getIsAuthenticated = state => state.auth.isLogged;
export const getUserNickName = state => state.auth.user.login; // Стучать по имени, логин ниже добавить
export const getLoading = state => state.auth.isLoading;
