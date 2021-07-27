import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App';
import Loader from './components/Loader';

import 'modern-normalize/modern-normalize.css';
import './fonts/fonts.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
