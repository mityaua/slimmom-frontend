import styles from './Header.module.css';
import Container from '../Container';
import Logo from '../Logo';
import UserInfo from '../UserInfo';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
