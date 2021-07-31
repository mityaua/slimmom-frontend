import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';
import { eatenProducts } from '../../redux/day/day_selector';
import { getDay } from '../../redux/day/day_operation';

const mockProducts = [
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
  const dispatch = useDispatch();
  const products = useSelector(eatenProducts);

  useEffect(() => {
    // dispatch(getDay(userId, date));   //где хранятся userId и date
  }, [products]);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {mockProducts.map(product => (
          <DiaryProductsListItem key={product.title} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryProductsList;
