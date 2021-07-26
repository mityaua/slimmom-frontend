import { Suspense, lazy, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
import Modal from './components/Modal';
import Loader from './components/Loader'; // Ожидаем спиннер

import routes from './routes';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import './loader.css';

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
          <h1>Ваша рекомендуемая суточная норма калорий составляет</h1>
          <p>2800 ккал</p>
          <button type="button" className="close-btn" onClick={toggleModal}>
            Close modal
          </button>
        </Modal>
      )}

      <ToastContainer autoClose={2500} />
    </div>
  );
};

export default App;
