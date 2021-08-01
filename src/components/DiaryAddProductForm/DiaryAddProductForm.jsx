import { useState, useEffect } from 'react';
import styles from './DiaryAddProductForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/day/day_operation';
import { date } from '../../redux/day/day_selector';
import axios from 'axios';

const useStyles = makeStyles({
  input: {
    width: '100%',
  },
  nameInput: {
    marginBottom: 30,
    '@media (min-width: 768px)': {
      width: 240,
      marginRight: 30,
    },
  },
  weightInput: {
    marginBottom: 60,
    '@media (min-width: 768px)': {
      width: 105,
      marginRight: 48,
    },
    '@media (min-width: 1280px)': {
      width: 105,
      marginRight: 75,
    },
  },
});

const validationSchema = yup.object({
  productName: yup.string('Enter product').required('Продукт обязателен!'),
  productWeight: yup
    .number('Введите число')
    .typeError('Введите число')
    .positive()
    .integer()
    .min(10, 'Введите больший вес')
    .max(1000, 'Введите меньший вес')
    .required('Вес обязателен!'),
});

const DiaryAddProductForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDate = useSelector(date);

  const formik = useFormik({
    initialValues: {
      productName: '',
      productWeight: '',
    },
    validationSchema: validationSchema,

    onSubmit: values => {
      const productWeight = values.productWeight;

      dispatch(addProduct('2021-08-01', '5d51694802b2373622ff553b', 100)); // productId ???
      // dispatch(addProduct(currentDate, productId, productWeight));
    },
  });

  const [searchProductRes, setSearchProductRes] = useState([
    'Бургер',
    'Шашлык',
    'Пицца',
  ]);

  const { productName, productWeight } = formik.values;

  useEffect(() => {
    if (productName.length >= 3) {
      const products = fetchData(productName);
      setSearchProductRes(products);
    }
  }, [productName]);

  const fetchData = async name => {
    const { data } = await axios.get(`/products?search=${name}`);
    console.log(data);
    return data.map(({ title }) => title.ru);
  };

  const [selectData, setSelectData] = useState(searchProductRes[0] || '');

  const handleChangeSelect = ({ target: { value } }) => {
    setSelectData(value);
  };

  return (
    <div className={styles.diaryAddProductForm}>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
        autoсomplete="off"
      >
        <TextField
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.nameInput}`}
          id="productName"
          name="productName"
          value={productName}
          placeholder="Введите название продукта"
          onChange={formik.handleChange}
          autoComplete="off"
          error={
            formik.touched.productName && Boolean(formik.errors.productName)
          }
          helperText={formik.touched.productName && formik.errors.productName}
        />
        <TextField
          className={`${classes.input} ${classes.weightInput}`}
          id="productWeight"
          name="productWeight"
          value={productWeight}
          placeholder="Граммы"
          onChange={formik.handleChange}
          autoComplete="off"
          error={
            formik.touched.productWeight && Boolean(formik.errors.productWeight)
          }
          helperText={
            formik.touched.productWeight && formik.errors.productWeight
          }
        />
        <Button customType="primary" type="submit" className="smallFromTablet">
          <span className={styles.hiddenIcon}>
            <AddIcon />
          </span>
          <span className={styles.hiddenText}>Добавить</span>
        </Button>
      </form>
      {searchProductRes.length > 0 && searchProductRes.length < 10 && (
        <select
          className={styles.selectProduct}
          value={selectData}
          onChange={handleChangeSelect}
        >
          {searchProductRes.map(product => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default DiaryAddProductForm;
