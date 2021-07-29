import { useEffect } from 'react';

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';

import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  useEffect(() => {
    document.title = 'Калькулятор | SlimMom';
  }, []);

  return (
    <>
      <Header coloredBg />
      <div className={styles.flexBox}>
        <div className={styles.formContainer}>
          <DailyCaloriesForm />
        </div>

        <RightSideBar />
      </div>
    </>
  );
};

export default CalculatorPage;
