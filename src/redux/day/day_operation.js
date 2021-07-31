import axios from 'axios';
import {
  dayInfoRequest,
  dayInfoSuccess,
  dayInfoError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
} from './day_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

// Операция получения информации по определённому дню
export const getDay = (id, date) => async dispatch => {
  const info = { id, date };
  dispatch(dayInfoRequest());

  try {
    const response = await axios.post('day/info', info);
    dispatch(dayInfoSuccess(response.data));
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};

export const addContact = (date, productId, weight) => async dispatch => {
  const product = { date, productId, weight };
  dispatch(addProductRequest());

  try {
    const response = await axios.post('/day', product);
    dispatch(addProductSuccess(response));
  } catch (error) {
    dispatch(addProductError(error.message));
  }
};

export const deleteContact = (dayId, productId) => async dispatch => {
  const product = { dayId, productId };
  dispatch(deleteProductRequest());
  try {
    const response = await axios.delete(`/day`, product);
    dispatch(deleteProductSuccess(response));
  } catch (error) {
    dispatch(deleteProductError(error.message));
  }
};
