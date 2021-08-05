import axios from 'axios';
import { toast } from 'react-toastify';

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
  reset,
} from './day_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com';

// Операция получения информации по определённому дню
export const getDay = (id, date) => async dispatch => {
  const info = { id, date };
  dispatch(dayInfoRequest());

  try {
    const response = await axios.post('/day/info', info);
    dispatch(dayInfoSuccess(response.data));
  } catch (error) {
    dispatch(dayInfoError(error.message));
  }
};

export const addProduct = (date, productId, weight) => async dispatch => {
  const product = { date, productId, weight };
  dispatch(addProductRequest());

  try {
    const { data } = await axios.post('/day', product);
    dispatch(addProductSuccess(data));
    toast.success('😋 Продукт успешно добавлен');
  } catch (error) {
    dispatch(addProductError(error.message));
    toast.error(error.message);
  }
};

export const deleteProduct = (dayId, eatenProductId) => async dispatch => {
  dispatch(deleteProductRequest());
  try {
    const { data } = await axios.delete('/day', {
      data: { dayId: dayId, eatenProductId: eatenProductId },
    });
    dispatch(deleteProductSuccess(data));
    toast.info('👌 Продукт успешно удален');
  } catch (error) {
    dispatch(deleteProductError(error.message));
    toast.error(error.message);
  }
};

export const resetDayInfo = () => dispatch => {
  dispatch(reset());
};
