import React from 'react';
import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DiaryProductsListItem />
      </div>
    </div>
  );
};

export default DiaryProductsList;
