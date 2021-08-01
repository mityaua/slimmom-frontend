import axios from 'axios';
import {
  dailyCaloriesRequest,
  dailyCaloriesSuccess,
  dailyCaloriesError,
  dailyCaloriesAuthRequest,
  dailyCaloriesAuthSuccess,
  dailyCaloriesAuthError,
} from './dailyCalories_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

export const dailyCalories = payload => async dispatch => {
  dispatch(dailyCaloriesRequest);
  try {
    const response = await axios.post('/daily-rate', payload);
    dispatch(dailyCaloriesSuccess(response.data));
  } catch (err) {
    dispatch(dailyCaloriesError(err.message));
  }
};

export const dailyCaloriesAuth = payload => async dispatch => {
  dispatch(dailyCaloriesAuthRequest);
  try {
    const response = await axios.post(`/daily-rate/{$userId}`, payload);
    dispatch(dailyCaloriesAuthSuccess(response.data));
  } catch (err) {
    dispatch(dailyCaloriesAuthError(err.message));
  }
};
