import { createAction } from '@reduxjs/toolkit';

export const getUserInfoRequest = createAction('user/getUserInfoRequest');
export const getUserInfoSuccess = createAction('user/getUserInfoSuccess');
export const getUserInfoError = createAction('user/getUserInfoError');
