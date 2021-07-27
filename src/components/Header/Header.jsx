import styles from './Header.module.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../Container';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';
import { getIsAuthenticated } from '../../redux/auth/auth_selector';

const Header = () => {
  // const [isLogged, setIsLogged] = useState(true); // имитация залогиненого юзера
  const isLogged = useSelector(state => getIsAuthenticated(state));
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo isLogged={isLogged} />
          <div className={styles.flexContainer2}>
            {isLogged && <UserInfo />}
            <Navigation isLogged={isLogged} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
