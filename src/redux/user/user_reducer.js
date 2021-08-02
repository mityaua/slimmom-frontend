import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './user_action';

const initialUserInfo = {
  userData: {
    currentWeight: 0,
    height: 0,
    age: 0,
    desiredWeight: 0,
    bloodType: 0,
    dailyRate: 0,
    notAllowedProducts: [],
    notAllowedProductsAll: [],
  },
  days: [],
  _id: '',
  name: '',
  login: '',
  password: '',
  accessTofen: '',
};

const userInfo = createReducer(initialUserInfo, {
  [getUserInfoSuccess]: (_, { payload }) => payload,
});

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
