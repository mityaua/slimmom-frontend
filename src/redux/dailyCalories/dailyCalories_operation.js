import axios from 'axios';
import {
  dailyCaloriesRequest,
  dailyCaloriesSuccess,
  dailyCaloriesError,
  dailyCaloriesAuthRequest,
  dailyCaloriesAuthError,
} from './dailyCalories_action';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

export const dailyCalories = payload => async dispatch => {
  dispatch(dailyCaloriesRequest);
  try {
    const response = await axios.post('/daily-rate', payload);
    dispatch(dailyCaloriesSuccess(response.data));
  } catch (error) {
    dispatch(dailyCaloriesError(error.message));
  }
};

export const dailyCaloriesAuth = (values, userId) => async dispatch => {
  dispatch(dailyCaloriesAuthRequest);
  try {
    console.log(userId);
    const response = await axios.post(`/daily-rate/${userId}`, values);
    console.log(response.data);
    dispatch(dailyCaloriesSuccess(response.data));
    toast.success('😋 Данные обновлены');
  } catch (error) {
    dispatch(dailyCaloriesAuthError(error.message));
    toast.error(error.message);
  }
};
