import Container from '../../components/Container';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <Container>
      <Header className={styles.registrationPage__header} />
      <div className={styles.registrationPage}>
        <RegistrationForm className={styles.registrationPage__form} />
      </div>
    </Container>
  );
};

export default RegistrationPage;
