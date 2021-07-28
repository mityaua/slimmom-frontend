import styles from './LoginForm.module.css';
import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
import Button from '../Button/Button';
// import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth_operation';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'fgfhg@gmail.com',
      password: '123456789',
    },
    validationSchema: validationSchema,

    onSubmit: values => {
      const payload = {
        email: values.email,
        password: values.password,
      };

      dispatch(login(payload));
    },
  });

  return (
    <div className={styles.loginForm}>
      <form className={styles.formAuth} onSubmit={formik.handleSubmit}>
        <h2 className={styles.formTitle}>Вход</h2>

        <input
          className={styles.formInput}
          id="email"
          name="email"
          // label="Логин *"
          placeholder="Логин *"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <input
          className={styles.formInput}
          id="password"
          name="password"
          placeholder="Пароль *"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          // error={formik.touched.password && Boolean(formik.errors.password)}
          // helperText={formik.touched.password && formik.errors.password}
        />

        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button text="Login" type="submit" customType="primary" />
          </div>
          <div className={styles.button}>
            <Button text="Registartion" type="secondary" />
          </div>

          {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
