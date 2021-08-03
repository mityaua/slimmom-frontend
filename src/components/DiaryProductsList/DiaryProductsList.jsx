import { useSelector } from 'react-redux';
import DiaryProductsListItem from '../DiaryProductsListItem';

import { eatenProducts } from '../../redux/day/day_selector';

import styles from './DiaryProductsList.module.css';

const DiaryProductsList = () => {
  const products = useSelector(eatenProducts);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {products.length > 0
          ? products.map(product => (
              <DiaryProductsListItem key={product._id} product={product} />
            ))
          : []}
      </ul>
    </div>
  );
};

export default DiaryProductsList;
