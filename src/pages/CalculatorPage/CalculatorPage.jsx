import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';
import Loader from '../../components/Loader';

import { getUserInfo } from '../../redux/user/user_operation';
import {
  getUserId,
  getNotAllowedProductsAll,
} from '../../redux/user/user_selector';
import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
} from '../../redux/day/day_selector';
import { getDay } from '../../redux/day/day_operation';
import {
  getSideBarDailyCalories,
  getSideBarEatenCalories,
  getSideBarDailyRate,
  getSideBarPercents,
  getLoading,
} from '../../redux/dailyCalories/dailyCalories_selector';
import { dailyCaloriesAuth } from '../../redux/dailyCalories/dailyCalories_operation';

import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  const isLoading = useSelector(getLoading);

  const kcalLeft = useSelector(getKcalLeft);
  const kcalConsumed = useSelector(getKcalConsumed);
  const dailyRate = useSelector(getDailyRate);
  const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);

  const notAllowedProductsAll = useSelector(getNotAllowedProductsAll);

  const sideBarDailyCalories = useSelector(getSideBarDailyCalories);
  const sideBarEatenCalories = useSelector(getSideBarEatenCalories);
  const sideBarDailyRate = useSelector(getSideBarDailyRate);
  const sideBarPercents = useSelector(getSideBarPercents);

  const userId = useSelector(getUserId); // ID юзера
  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0]; // Текущий день с учётом временных зон, мать их

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Калькулятор | SlimMom';
    dispatch(getUserInfo());
    dispatch(getDay(userId, today));
  }, [dispatch, userId, today]);

  useEffect(() => {
    const age = localStorage.getItem('age');
    const currentWeight = localStorage.getItem('currentWeight');
    const desiredWeight = localStorage.getItem('desiredWeight');
    const height = localStorage.getItem('height');
    const blood = localStorage.getItem('blood');

    if (
      age !== null &&
      currentWeight !== null &&
      desiredWeight !== null &&
      height !== null &&
      blood !== null
    ) {
      const values = {
        age: Number(age),
        currentWeight: Number(currentWeight),
        desiredWeight: Number(desiredWeight),
        height: Number(height),
        bloodType: Number(blood),
      };

      dispatch(dailyCaloriesAuth(values, userId));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header coloredBg />
      <div className={styles.flexBox}>
        <div className={styles.formContainer}>
          <DailyCaloriesForm />
        </div>

        <RightSideBar
          kcalLeft={sideBarDailyCalories ? sideBarDailyCalories : kcalLeft}
          kcalConsumed={
            sideBarEatenCalories ? sideBarEatenCalories : kcalConsumed
          }
          dailyRate={sideBarDailyRate ? sideBarDailyRate : dailyRate}
          percentsOfDailyRate={
            sideBarPercents ? sideBarPercents : percentsOfDailyRate
          }
          notAllowedProductsAll={notAllowedProductsAll}
        />
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default CalculatorPage;
