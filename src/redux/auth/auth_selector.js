export const getIsAuthenticated = state => state.auth.isLogged;
export const getUserNickName = state => state.auth.user.name;
export const getLoading = state => state.auth.isLoading;
