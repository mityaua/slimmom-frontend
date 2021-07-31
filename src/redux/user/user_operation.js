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
    const response = await axios.get('​/user');
    dispatch(getUserInfoSuccess(response));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
