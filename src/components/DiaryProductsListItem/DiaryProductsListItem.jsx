import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/day/day_operation';
import { date, dateId } from '../../redux/day/day_selector';

const DiaryProductsListItem = ({ product: { _id, title, weight, kcal } }) => {
  const dispatch = useDispatch();
  const dayId = useSelector(dateId);
  const currentDate = useSelector(date);

  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0]; // Текущий день с учётом временных зон, мать их

  const handleClick = async () => {
    if (currentDate === today) {
      dispatch(deleteProduct(dayId, _id));
    }
  };

  const disabledIcon = currentDate === today ? null : styles.disabled;

  return (
    <>
      <li className={styles.item}>
        <div className={styles.name}>{title}</div>
        <div className={styles.weight}>{weight} г</div>
        <div className={styles.calories}>
          {kcal} <span>ккал</span>
        </div>
        <CloseIcon
          className={`${styles.icon} ${disabledIcon}`}
          onClick={handleClick}
        />
      </li>
    </>
  );
};

export default DiaryProductsListItem;
