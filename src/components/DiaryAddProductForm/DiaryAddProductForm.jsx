import styles from './DiaryAddProductForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '../Container';
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/day/day_operation';
import { date } from '../../redux/day/day_selector';

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
      const payload = {
        productName: values.productName,
        productWeight: values.productWeight,
      };

      console.log(payload);
      // dispatch(addContact(currentDate, productId, values.productWeight)); // productId ???
    },
  });
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
          value={formik.values.productName}
          placeholder="Введите название продукта"
          onChange={formik.handleChange}
          error={
            formik.touched.productName && Boolean(formik.errors.productName)
          }
          helperText={formik.touched.productName && formik.errors.productName}
        />
        <TextField
          className={`${classes.input} ${classes.weightInput}`}
          id="productWeight"
          name="productWeight"
          value={formik.values.productWeight}
          placeholder="Граммы"
          onChange={formik.handleChange}
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
    </div>
  );
};

export default DiaryAddProductForm;
