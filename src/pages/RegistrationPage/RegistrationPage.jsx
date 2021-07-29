import { useEffect } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  useEffect(() => {
    document.title = 'Регистрация | SlimMom';
  }, []);

  return (
    <>
      <Container>
        <div className={styles.registrationPage}>
          <Header className={styles.registrationPage__header} />
          <RegistrationForm className={styles.registrationPage__form} />
        </div>
      </Container>
    </>
  );
};

export default RegistrationPage;
