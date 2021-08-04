import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Container';
import { getSideBarDailyCalories } from '../../redux/dailyCalories/dailyCalories_selector';
import { date } from '../../redux/day/day_selector';
import { getUserInfo } from '../../redux/user/user_operation';

import styles from './RightSideBar.module.css';

const RightSideBar = ({
  kcalLeft,
  kcalConsumed,
  dailyRate,
  percentsOfDailyRate,
  notAllowedProductsAll,
}) => {
  const dispatch = useDispatch();
  const kcal = useSelector(getSideBarDailyCalories);
  const currentDay = useSelector(date);
  const today = currentDay.split('-').reverse().join('.'); // Текущий день c привязкой ко смене даты в календаре

  // Если изменились показатели юзера - запрашиваем юзера и обновляет стейт (в итоге обновляем продукты в сайдбаре)
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch, kcal]);

  return (
    <aside className={styles.rightSideBar}>
      <Container>
        <div className={styles.flexBox}>
          <div>
            <h4 className={styles.rightSideBar_title}>Сводка за {today}</h4>
            <ul className={styles.rightSideBar_list}>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Осталось</span>
                <span className={styles.rightSideBar_text}>
                  {kcalLeft ? kcalLeft : '0'} ккал
                </span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Употреблено</span>
                <span className={styles.rightSideBar_text}>
                  {kcalConsumed ? kcalConsumed : '0'} ккал
                </span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Дневная норма</span>
                <span className={styles.rightSideBar_text}>
                  {dailyRate ? dailyRate : '0'} ккал
                </span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>n% от нормы</span>
                <span className={styles.rightSideBar_text}>
                  {percentsOfDailyRate ? Math.floor(percentsOfDailyRate) : '0'}{' '}
                  %
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.rightSideBar_title}>
              Нерекомендуемые продукты
            </h4>
            <ul className={styles.rightSideBar_product_list}>
              {notAllowedProductsAll.length !== 0 ? (
                notAllowedProductsAll ? (
                  notAllowedProductsAll.map(product => (
                    <li
                      className={styles.rightSideBar_product_item}
                      key={product}
                    >
                      {notAllowedProductsAll[
                        notAllowedProductsAll.length - 1
                      ] !== product
                        ? `${product}, `
                        : `${product}`}
                    </li>
                  ))
                ) : (
                  <li className={styles.rightSideBar_text}>
                    Здесь будет отображаться Ваш рацион
                  </li>
                )
              ) : (
                <li className={styles.rightSideBar_text}>
                  Здесь будет отображаться Ваш рацион
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default RightSideBar;
