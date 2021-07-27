import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth_reducer';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const rootReducer = combineReducers({ contacts: contactsReducer });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger), // serializableCheck - костылёк от ошибки
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
// export default store;
