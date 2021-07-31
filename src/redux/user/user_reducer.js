import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './user_action';

const userInfo = createReducer(
  {},
  {
    [getUserInfoSuccess]: (_, { payload }) => payload,
  },
);

const error = createReducer(null, {
  [getUserInfoRequest]: () => false,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => true,
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
