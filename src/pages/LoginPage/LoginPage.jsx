import { useEffect } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <>
      <Container>
        <div className={styles.loginPage}>
          <Header className={styles.loginPage__header} />
          <LoginForm className={styles.loginPage__form} />
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
