import { Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Button from './components/Button';

import routes from './routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = lazy(() =>
  import('./pages/MainPage' /* webpackChunkName: "main-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage' /* webpackChunkName: "reg-page" */),
);
const DiaryPage = lazy(() =>
  import('./pages/DiaryPage' /* webpackChunkName: "diary-page" */),
);
const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage' /* webpackChunkName: "calc-page" */),
);

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const isAccess = true;

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />

          <Route
            path={routes.login}
            exact
            render={() => {
              return isAccess ? (
                <Redirect to={routes.calculator} />
              ) : (
                <LoginPage />
              );
            }}
          />

          <Route
            path={routes.registration}
            exact
            render={() => {
              return isAccess ? (
                <Redirect to={routes.calculator} />
              ) : (
                <RegistrationPage />
              );
            }}
          />

          <Route
            path={routes.diary}
            exact
            render={() => {
              return isAccess ? <DiaryPage /> : <Redirect to={routes.login} />;
            }}
          />

          <Route
            path={routes.calculator}
            exact
            render={() => {
              return isAccess ? (
                <CalculatorPage />
              ) : (
                <Redirect to={routes.login} />
              );
            }}
          />
          <Redirect to={routes.home} />

          {/* <PublicRoute exact path={routes.home}>
            <MainPage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.login}
            restricted
            redirectTo={routes.calculator}
          >
            <LoginPage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.register}
            restricted
            redirectTo={routes.calculator}
          >
            <RegistrationPage />
          </PublicRoute>
          <PrivateRoute exact path={routes.diary} redirectTo={routes.login}>
            <DiaryPage />
          </PrivateRoute>
          <PrivateRoute
            exact
            path={routes.calculator}
            redirectTo={routes.login}
          >
            <CalculatorPage />
          </PrivateRoute>
          <Redirect to={routes.home} /> */}
        </Switch>
      </Suspense>

      {/* Привязать к другой кнопке в форме просчёта */}
      <button type="button" onClick={toggleModal}>
        Show modal
      </button>

      {modal && (
        <Modal onClose={toggleModal}>
          <h1 className='modal_title'>Ваша рекомендуемая суточная норма калорий составляет</h1>
          <p className='modal_caloriesNumber'>2800 <span className='modal_calories'>ккал</span></p>
          <h2 className='modal_subTitle'>Продукты, которые вам не рекомендуется употреблять</h2>
          <ul className='modal_list'>
            <li className='modal_el'>1. Мучные продукты</li>
            <li className='modal_el'>2. Молоко</li>
            <li className='modal_el'>3. Красное мясо</li>
            <li className='modal_el'>4. Копчености</li>
          </ul>
          <div className='modal_button'><Button text='Начать худеть' type='primary'/></div>    
          <button type="button" className="modal_close-btn" onClick={toggleModal}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z" fill="black"/>
            </svg>
          </button>
        </Modal>
      )}

      <ToastContainer autoClose={2500} />
    </div>
  );
};

export default App;
