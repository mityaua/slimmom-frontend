// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на указанный роут

import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// Компонент приватного роута (перед внедрением подогнать под наш стейт!)
const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса аутентификации
  const isLoggedIn = false; // имитация селектора, нужно убрать после реализации!

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
