import styles from './DiaryAddProductForm.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../Container';
import TextField from '@material-ui/core/TextField';
import Button from '../Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles({
  input: {
    width: '100%',
  },
  nameInput: {
    marginBottom: 30,
  },
  weightInput: {
    marginBottom: 60,
  },
});

const validationSchema = yup.object({
  productName: yup.string('Enter product').required('Product is required'),
  productWeight: yup
    .number('Enter number')
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
          <Button text="Добавить" customType="primary" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default DiaryAddProductForm;
