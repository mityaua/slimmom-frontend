import styles from './DiaryAddProductForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container';
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import AddIcon from '@material-ui/icons/Add';

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
  productName: yup.string('Enter product').required('Product is required'),
  productWeight: yup
    .number('Enter number')
    .typeError('Enter number')
    .positive()
    .integer()
    .min(10, 'Enter more gramms')
    .max(1000, 'Enter less gramms')
    .required('Weight is required'),
});

const DiaryAddProductForm = () => {
  const classes = useStyles();

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
    },
  });
  return (
    <div className={styles.diaryAddProductForm}>
      <Container>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
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
              formik.touched.productWeight &&
              Boolean(formik.errors.productWeight)
            }
            helperText={
              formik.touched.productWeight && formik.errors.productWeight
            }
          />
          <Button customType="primary" type="submit" className="small">
            <AddIcon className={styles.hiddenIcon} />
            <span className={styles.hiddenText}>Добавить</span>
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default DiaryAddProductForm;
