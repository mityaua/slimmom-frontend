import styles from './LoginForm.module.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth_operation';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: 289,

    '@media (min-width: 768px)': {
      width: 240,
    },
  },
  emailInput: {
    marginBottom: 40,
  },
  passwordInput: {
    marginBottom: 60,
  },
});

const validationSchema = yup.object({
  email: yup
    .string('Введите ваш email')
    .email('Введите правильный email')
    .required('Email обязательный'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен быть длинее 8 символов')
    .required('Пароль обязательный'),
});

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      resetForm();
      dispatch(login(payload));
    },
  });

  return (
    <div className={styles.loginForm}>
      <form className={styles.formAuth} onSubmit={formik.handleSubmit}>
        <h2 className={styles.formTitle}>Вход</h2>
        <TextField
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.emailInput}`}
          id="email"
          name="email"
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
          <div className={styles.button}>
            <Button
              text="Вход"
              type="submit"
              customType="primary"
              disabled={!formik.isValid || !formik.dirty}
              className={styles.button}
            />
          </div>

          <NavLink to={routes.registration}>
            <div className={styles.button}>
              <Button text="Регистрация" type="secondary" />
            </div>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
