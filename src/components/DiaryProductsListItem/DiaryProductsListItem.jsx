import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import CloseIcon from '@material-ui/icons/Close';

const DiaryProductsListItem = ({ product: { title, weight, kcal } }) => {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.name}>{title}</div>
        <div className={styles.weight}>{weight} г</div>
        <div className={styles.calories}>
          {kcal} <span>ккал</span>
        </div>
        <CloseIcon className={styles.icon} />
      </li>
    </>
  );
};

export default DiaryProductsListItem;
