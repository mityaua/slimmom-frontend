import axios from 'axios';
import { toast } from 'react-toastify';
// import { PersistGate } from 'redux-persist/integration/react';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth_action';
import { reset } from '../day/day_action';
axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = payload => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/signup', payload);
    token.set(response.data.accessToken);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.message));
    toast.error(err.message);
  }
};

export const login = payload => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/auth/login', payload);
    token.set(response.data.accessToken);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
    toast.error(error.message);
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/auth/logout');
    token.unset();
    dispatch(logoutSuccess());
    dispatch(reset());
  } catch (error) {
    dispatch(logoutError(error.message));
    toast.error(error.message);
  }
};

export const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/user');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
