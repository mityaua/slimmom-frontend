import { useEffect } from 'react';

import Container from '../../components/Container';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

import styles from './MainPage.module.css';

const MainPage = () => {
  useEffect(() => {
    document.title = 'SlimMom | Худей эффективно!';
  }, []);

  return (
    <>
      <div className={styles.mainPage}>
        <Container>
          <Header />
          <DailyCaloriesForm />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
