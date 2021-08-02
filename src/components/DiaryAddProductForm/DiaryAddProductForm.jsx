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
  const today = new Date().toISOString().split('T')[0];

  const formik = useFormik({
    initialValues: {
      productName: '',
      productWeight: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const productWeight = values.productWeight;
      if (currentDate === today) {
        dispatch(addProduct(currentDate, selectedData, productWeight));
        resetForm({ values: '' });
        setSearchProductRes([]);
        setSelectedData('');
      }
    },
  });

  const [searchProductRes, setSearchProductRes] = useState([]);

  const { productName, productWeight } = formik.values;

  useEffect(() => {
    if (productName.length >= 3) {
      fetchData(productName);
    }
  }, [productName]);

  const fetchData = async name => {
    const { data } = await axios.get(`/products?search=${name}`);
    setSearchProductRes(data);
  };

  const [selectedData, setSelectedData] = useState(searchProductRes[0] || '');

  useEffect(() => {
    if (searchProductRes.length) {
      setSelectedData(searchProductRes[0]._id);
    }
  }, [searchProductRes]);

  const handleChangeSelect = ({ target: { value } }) => {
    setSelectedData(value);
  };

  useEffect(() => {
    setSearchProductRes([]);
    formik.resetForm();
    // eslint-disable-next-line
  }, [currentDate]);

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
          disabled={currentDate !== today}
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
          disabled={currentDate !== today}
        />
        <Button
          customType="primary"
          type="submit"
          className="smallFromTablet"
          disabled={currentDate !== today}
        >
          <span className={styles.hiddenIcon}>
            <AddIcon />
          </span>
          <span className={styles.hiddenText}>Добавить</span>
        </Button>
      </form>
      {searchProductRes.length > 0 && (
        <select
          className={styles.selectProduct}
          // value={selectedData}
          onChange={handleChangeSelect}
        >
          {searchProductRes.map(({ title, _id }) => (
            <option key={_id} value={_id}>
              {title.ru}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default DiaryAddProductForm;
