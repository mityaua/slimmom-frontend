import styles from './Navigation.module.css';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navigation = ({ isHidden, isLogged }) => {
  const hidden = isHidden ? styles.isHidden : null; // этот проп прячет нафигацию на LoginPage и RegistrationPage

  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => {
    setVisibleMenu(prev => !prev);
  };

  return (
    <nav className={`${styles.navigation} ${hidden}`}>
      {!isLogged && (
        <>
          <a href="#" className={styles.link}>
            Вход
          </a>
          <a href="#" className={styles.link}>
            Регистрация
          </a>
        </>
      )}
      {isLogged && (
        <div className={styles.isHidden}>
          {visibleMenu ? (
            <>
              <CloseIcon onClick={handleMenuBtnClick} />
              <ul className={styles.mobileNavigation}>
                <li className={styles.mobileNavigationItem}>
                  <a href="#" className={styles.mobileNavigationLink}>
                    Дневник
                  </a>
                </li>
                <li className={styles.mobileNavigationItem}>
                  <a href="#" className={styles.mobileNavigationLink}>
                    Калькулятор
                  </a>
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
          <a href="#" className={styles.link}>
            Дневник
          </a>
          <a href="#" className={styles.link}>
            Калькулятор
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
