import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <Container>
      <Header className={styles.loginPage__header} />
      <div className={styles.loginPage}>
        <LoginForm className={styles.loginPage__form} />
      </div>
    </Container>
  );
};

export default LoginPage;
