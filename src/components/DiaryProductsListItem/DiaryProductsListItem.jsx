import React from 'react';
import styles from './DiaryProductsListItem.module.css';
import CloseIcon from '@material-ui/icons/Close';

const DiaryProductsListItem = () => {
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.name}>Баклажан</div>
        <div className={styles.weight} placeholder="съедено">
          100 г
        </div>
        <div className={styles.calories}>
          <span>320 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>Мясо птицы</div>
        <div className={styles.weight}>100 г</div>
        <div className={styles.calories}>
          <span>480 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>Хлеб</div>
        <div className={styles.weight}>100 г</div>
        <div className={styles.calories}>
          <span>200 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>Орех </div>
        <div className={styles.weight}>100 г</div>
        <div className={styles.calories}>
          <span>205 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>Мясо свинное</div>
        <div className={styles.weight}>100 г</div>
        <div className={styles.calories}>
          <span>580 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>Картофель</div>
        <div className={styles.weight}>100 г</div>
        <div className={styles.calories}>
          <span>380 ккал</span>
        </div>
        <button className={styles.btn}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default DiaryProductsListItem;
