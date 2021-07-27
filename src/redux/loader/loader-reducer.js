import { createReducer } from '@reduxjs/toolkit';

import { userActions } from '../auth';

import loaderAction from './loader-action.js';

const loader = createReducer(false, {
  [loaderAction.endLoader]: () => false,

  [userActions.loginUserError]: () => true,
  [userActions.loginUserRequest]: () => true,
  [userActions.loginUserSuccess]: () => false,

  [userActions.registerUserError]: () => true,
  [userActions.registerUserRequest]: () => true,
  [userActions.registerUserSuccess]: () => false,

  [userActions.logoutUserError]: () => true,
  [userActions.logoutUserRequest]: () => true,
  [userActions.logoutUserSuccess]: () => false,

  [userActions.currentUserError]: () => true,
  [userActions.currentUserRequest]: () => true,
  [userActions.currentUserSuccess]: () => false,
});

export default loader;
