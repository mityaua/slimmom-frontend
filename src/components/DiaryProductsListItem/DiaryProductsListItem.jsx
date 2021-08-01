import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/day/day_operation';
import { dateId } from '../../redux/day/day_selector';

const DiaryProductsListItem = ({ product: { _id, title, weight, kcal } }) => {
  const dispatch = useDispatch();
  const dayId = useSelector(dateId);

  const handleClick = async () => {
    dispatch(deleteProduct(dayId, _id));
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.name}>{title}</div>
        <div className={styles.weight}>{weight} г</div>
        <div className={styles.calories}>
          {kcal} <span>ккал</span>
        </div>
        <CloseIcon className={styles.icon} onClick={handleClick} />
      </li>
    </>
  );
};

export default DiaryProductsListItem;
