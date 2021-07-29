import styles from './Navigation.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth_selector';

const Navigation = ({ isHidden }) => {
  const hidden = isHidden ? styles.isHidden : null; // этот проп прячет нафигацию на LoginPage и RegistrationPage
  const isLogged = useSelector(state => getIsAuthenticated(state));

  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => {
    setVisibleMenu(prev => !prev);
  };

  return (
    <nav className={`${styles.navigation} ${hidden}`}>
      {!isLogged && (
        <>
          <NavLink
            to={routes.login}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Вход
          </NavLink>
          <NavLink
            to={routes.registration}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Регистрация
          </NavLink>
        </>
      )}
      {isLogged && (
        <div className={styles.isHidden}>
          {visibleMenu ? (
            <>
              <CloseIcon onClick={handleMenuBtnClick} />
              <ul className={styles.mobileNavigation}>
                <li className={styles.mobileNavigationItem}>
                  <NavLink
                    to={routes.diary}
                    className={styles.mobileNavigationLink}
                    activeClassName={styles.mobileNavigationLinkActive}
                  >
                    Дневник
                  </NavLink>
                </li>
                <li className={styles.mobileNavigationItem}>
                  <NavLink
                    to={routes.calculator}
                    className={styles.mobileNavigationLink}
                    activeClassName={styles.mobileNavigationLinkActive}
                  >
                    Калькулятор
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <MenuIcon onClick={handleMenuBtnClick} />
          )}
        </div>
      )}
      {isLogged && (
        <div className={styles.toggleHidden}>
          <NavLink
            to={routes.diary}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Дневник
          </NavLink>
          <NavLink
            to={routes.calculator}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Калькулятор
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
