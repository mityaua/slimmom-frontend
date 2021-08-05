import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import authReducer from './auth/auth_reducer';
import dailyRate from './dailyCalories/dailyCalories_reducer';
import dayReducer from './day/day-reducer';
import user from './user/user_reducer';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    dailyCalories: dailyRate,
    day: dayReducer,
    user,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),

  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
// export default store;
