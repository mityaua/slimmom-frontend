import styles from './Header.module.css';
import { useState } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';

const Header = () => {
  const [isLogged, setIsLogged] = useState(true); // имитация залогиненого юзера
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo isLogged={isLogged} />
          <Navigation isLogged={isLogged} />
          {/* {isLogged && <UserInfo />} */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
