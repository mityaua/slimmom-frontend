import axios from 'axios';
import {
  fetchDailyCaloriesRequest,
  fetchDailyCaloriesSuccess,
  fetchDailyCaloriesError,
} from './dailyCalories_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

export const fetchDailyCalories = payload => async dispatch => {
  dispatch(fetchDailyCaloriesRequest);
  try {
    const response = await axios.post('/daily-rate', payload);
    dispatch(fetchDailyCaloriesSuccess(response.data));
  } catch (err) {
    dispatch(fetchDailyCaloriesError(err.message));
  }
};
