import React from 'react';
import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';

const eatenProducts = [
  {
    title: 'Баклажан',
    weight: 100,
    kcal: 320,
  },
  {
    title: 'Мясо птицы',
    weight: 100,
    kcal: 320,
  },
  {
    title: 'Хлеб',
    weight: 100,
    kcal: 320,
  },
  {
    title: 'Орех',
    weight: 100,
    kcal: 320,
  },
  {
    title: 'Мясо свинное',
    weight: 100,
    kcal: 320,
  },
];

const DiaryProductsList = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {eatenProducts.map(product => (
          <DiaryProductsListItem key={product.title} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryProductsList;
