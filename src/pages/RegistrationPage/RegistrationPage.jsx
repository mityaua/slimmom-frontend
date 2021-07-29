import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';
import Loader from '../../components/Loader';

import { getLoading } from '../../redux/auth/auth_selector';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const isLoading = useSelector(getLoading); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Регистрация | SlimMom';
  }, []);

  return (
    <>
      <Container>
        <div className={styles.registrationPage}>
          <Header className={styles.registrationPage__header} isHidden />
          <RegistrationForm className={styles.registrationPage__form} />
        </div>
      </Container>

      {isLoading && <Loader />}
    </>
  );
};

export default RegistrationPage;
