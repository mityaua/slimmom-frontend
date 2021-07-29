import axios from 'axios';
import {
  fetchDailyCaloriesRequest,
  fetchDailyCaloriesSuccess,
  fetchDailyCaloriesError,
} from './dailyCalories_action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchDailyCalories = () => dispatch => {
  dispatch(fetchDailyCaloriesRequest);

  axios
    .post('/daily-rate')
    .then(({ data }) => dispatch(fetchDailyCaloriesSuccess(data)))
    .catch(error => dispatch(fetchDailyCaloriesError(error.message)));
};
