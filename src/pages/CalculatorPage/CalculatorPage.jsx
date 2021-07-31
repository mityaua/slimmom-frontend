import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';
import { getUserInfo } from '../../redux/user/user_operation';

import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Калькулятор | SlimMom';
    dispatch(getUserInfo());
  }, [dispatch]);

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
