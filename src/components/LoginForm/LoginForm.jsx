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
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

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
        />
        {/* {formik.touched.email && Boolean(formik.errors.email)}
        {formik.touched.email && formik.errors.email} */}
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          className={styles.formInput}
          id="password"
          name="password"
          placeholder="Пароль *"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && Boolean(formik.errors.password) ? (
          <div>{formik.errors.password}</div>
        ) : null}
        {/* {formik.touched.password && Boolean(formik.errors.password)}
        {formik.touched.password && formik.errors.password} */}
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button text="Вход" type="submit" customType="primary" />
          </div>

          <NavLink
            to={routes.registration}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            <div className={styles.button}>
              <Button text="Registartion" type="secondary" />
            </div>
          </NavLink>
        </div>
        ;
      </form>
    </div>
  );
};

export default LoginForm;
