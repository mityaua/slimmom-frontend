import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';
import { getUserInfo } from '../../redux/user/user_operation';
// import {
//   getKcalLeft,
//   getKcalConsumed,
//   getDailyRate,
//   getPercentsOfDailyRate,
//   getNotAllowedProductsAll
// } from '../../redux/day/day_selector';
// import {
//   getSideBarDailyCalories,
//   getSideBarEatenCalories,
//   getSideBarDailyRate,
//   getSideBarPercents
// } from '../../redux/dailyCalories/dailyCalories_selector';

import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  // const kcalLeft = useSelector(getKcalLeft);
  // const kcalConsumed = useSelector(getKcalConsumed);
  // const dailyRate = useSelector(getDailyRate);
  // const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);
  // const notAllowedProductsAll = useSelector(getNotAllowedProductsAll);
  // const sideBarDailyCalories = useSelector(getSideBarDailyCalories);
  // const sideBarEatenCalories = useSelector(getSideBarEatenCalories);
  // const sideBarDailyRate = useSelector(getSideBarDailyRate);
  // const sideBarPercents = useSelector(getSideBarPercents);

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

        {/* <RightSideBar
          kcalLeft={sideBarDailyCalories ? sideBarDailyCalories : kcalLeft}
          kcalConsumed={sideBarEatenCalories ? sideBarEatenCalories : kcalConsumed}
          dailyRate={sideBarDailyRate ? sideBarDailyRate : dailyRate}
          percentsOfDailyRate={sideBarPercents ? sideBarPercents : percentsOfDailyRate}
          notAllowedProductsAll={notAllowedProductsAll}
        /> */}
      </div>
    </>
  );
};

export default CalculatorPage;
