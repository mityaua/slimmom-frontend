import axios from 'axios';
import {
  fetchDailyCaloriesRequest,
  fetchDailyCaloriesSuccess,
  fetchDailyCaloriesError,
} from './dailyCalories_action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchDailyCalories = payload => async dispatch => {
  dispatch(fetchDailyCaloriesRequest);
  try {
    const response = await axios.post('/daily-rate', payload);
    console.log('response.data', response.data);
    dispatch(fetchDailyCaloriesSuccess(response.data));
  } catch (err) {
    dispatch(fetchDailyCaloriesError(err.message));
  }
};
