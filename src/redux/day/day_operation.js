import axios from 'axios';
import { dayInfoRequest, dayInfoSuccess, dayInfoError } from './day_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

// Операция получения информации по определённому дню
export const getDay = (id, date) => async dispatch => {
  const info = { id, date };
  console.log('day payload', id, date);
  dispatch(dayInfoRequest());

  try {
    const response = await axios.post('​/day​/info', info);
    dispatch(dayInfoSuccess(response));
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};
