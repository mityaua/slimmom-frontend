import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './user_action';

const initial = {
  userId: '',
};

const userInfo = createReducer(initial, {
  [getUserInfoSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [getUserInfoRequest]: () => null,
  [getUserInfoError]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getUserInfoRequest]: () => true,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => false,
});

export default combineReducers({
  userInfo,
  error,
  isLoading,
});
