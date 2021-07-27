// - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на указанный роут
// - В противном случае рендерит компонент

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth/auth_selector';

// Компонент публичного роута (перед внедрением подогнать под наш стейт!)
const PublicRoute = ({ redirectTo, children, ...routeProps }) => {
  const isLogged = useSelector(getIsAuthenticated); // Селектор статуса аутентификации
  // const isLoggedIn = false; // имитация селектора, нужно убрать после реализации!

  return (
    <Route {...routeProps}>
      {isLogged && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
