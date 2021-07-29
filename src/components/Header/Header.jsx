import styles from './Header.module.css';
import { useState } from 'react';
import Container from '../Container';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';

const Header = ({ isHidden, coloredBg }) => {
  const [isLogged, setIsLogged] = useState(true); // имитация залогиненого юзера
  const addBg = coloredBg ? styles.coloredBg : null;
  return (
    <header className={styles.header}>
      <Container>
        <div className={`${styles.flexContainer} ${addBg}`}>
          <Logo isLogged={isLogged} />
          <div className={styles.flexContainer2}>
            {isLogged && <UserInfo />}
            <Navigation isLogged={isLogged} isHidden={isHidden} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
