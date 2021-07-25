// - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на указанный роут
// - В противном случае рендерит компонент

import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// Компонент публичного роута (перед внедрением подогнать под наш стейт!)
const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsAuthenticated); // Селектор статуса аутентификации
  const isLoggedIn = false; // имитация селектора, нужно убрать после реализации!

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
