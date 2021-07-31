import axios from 'axios';
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './user_action';

axios.defaults.baseURL = 'https://slimmom-backend-fs26.herokuapp.com/';

// Операция получения информации о юзере
export const getUserInfo = () => async dispatch => {
  dispatch(getUserInfoRequest());

  try {
    const { data } = await axios.get('/user');
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
