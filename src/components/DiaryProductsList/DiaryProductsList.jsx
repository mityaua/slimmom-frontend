import { useSelector } from 'react-redux';
import DiaryProductsListItem from '../DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';
import { eatenProducts } from '../../redux/day/day_selector';

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
  const products = useSelector(eatenProducts);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {products.map(product => (
          <DiaryProductsListItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default DiaryProductsList;
