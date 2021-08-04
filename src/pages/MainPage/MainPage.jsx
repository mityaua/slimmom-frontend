import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import Loader from '../../components/Loader';

import { getLoading } from '../../redux/dailyCalories/dailyCalories_selector';

import styles from './MainPage.module.css';

const MainPage = () => {
  const isLoading = useSelector(getLoading);

  console.log(isLoading);

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

      {isLoading && <Loader />}
    </>
  );
};

export default MainPage;
