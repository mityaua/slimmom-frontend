import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import DateForm from '../../components/DateForm';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import RightSideBar from '../../components/RightSideBar';
import DiaryProductsList from '../../components/DiaryProductsList';
import Button from '../../components/Button';

import { getUserInfo } from '../../redux/user/user_operation';
import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
  getNotAllowedProductsAll
} from '../../redux/day/day_selector';

import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const kcalLeft = useSelector(getKcalLeft);
  const kcalConsumed = useSelector(getKcalConsumed);
  const dailyRate = useSelector(getDailyRate);
  const percentsOfDailyRate = useSelector(getPercentsOfDailyRate);
  const notAllowedProductsAll = useSelector(getNotAllowedProductsAll);
  
  const dispatch = useDispatch();
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };
  useEffect(() => {
    document.title = 'Дневник | SlimMom';
    dispatch(getUserInfo());
  }, [dispatch]);
  return (
    <>
      <Header coloredBg />
      <div className={styles.flexBox}>
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
              <DateForm />
              <div className={styles.isHidddenMobile}>
                <DiaryAddProductForm />
              </div>

              <DiaryProductsList />
              <div className={styles.isHidddenTablet}>
                <Button
                  customType="primary"
                  className="small"
                  onClick={handleClick}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
            <RightSideBar
              kcalLeft={kcalLeft}
              kcalConsumed={kcalConsumed}
              dailyRate={dailyRate}
              percentsOfDailyRate={percentsOfDailyRate}
              notAllowedProductsAll={notAllowedProductsAll}
               />
          </>
        ) : (
          <>
            <div className={styles.exampleBox}>
              <DiaryAddProductForm />
              <KeyboardBackspaceIcon
                className={styles.backButton}
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiaryPage;
