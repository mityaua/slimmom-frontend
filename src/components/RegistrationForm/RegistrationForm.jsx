import styles from './RegistrationForm.module.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth_operation';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: 289,
    height: 35.5,
    '@media (min-width: 768px)': {
      width: 240,
    },
  },
  nameInput: {
    marginBottom: 40,
  },
  emailInput: {
    marginBottom: 40,
    // '@media (min-width: 768px)': {},
  },
  passwordInput: {
    marginBottom: 60,
  },
});

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: 'name',
      email: 'abc@gmail.com',
      password: '123456789',
    },
    validationSchema: validationSchema,

    onSubmit: values => {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      dispatch(register(payload));
    },
  });

  return (
    <div className={styles.registrationForm}>
      <form className={styles.formAuth} onSubmit={formik.handleSubmit}>
        <h2 className={styles.formTitle}>Регистрация</h2>
        <TextField
          // className={styles.formInput}
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.nameInput}`}
          id="name"
          name="name"
          value={formik.values.name}
          placeholder="Имя *"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        {/* {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null} */}
        <TextField
          // className={styles.formInput}
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.emailInput}`}
          id="email"
          name="email"
          // label="Логин *"
          placeholder="Логин *"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null} */}
        <TextField
          // className={styles.formInput}
          className={`${classes.input} ${classes.passwordInput}`}
          styles={{ color: 'blue' }}
          id="password"
          name="password"
          placeholder="Пароль *"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {/* {formik.touched.password && Boolean(formik.errors.password) ? (
          <div>{formik.errors.password}</div>
        ) : null} */}
        <div className={styles.buttons}>
          <NavLink to={routes.login}>
            <div className={styles.button}>
              <Button text="Вход" type="secondary" />
            </div>
          </NavLink>{' '}
          <div className={styles.button}>
            <Button text="Registartion" type="submit" customType="primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
