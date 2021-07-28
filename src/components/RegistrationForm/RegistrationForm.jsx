import styles from './RegistrationForm.module.css';
import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
//import Button from '@material-ui/core/Button';
import Button from '../Button/Button';
// import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth_operation';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';

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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: 'vita',
      email: 'fgfhg@gmail.com',
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
        <input
          className={styles.formInput}
          id="name"
          name="name"
          label="Имя *"
          value={formik.values.name}
          placeholder="Имя *"
          onChange={formik.handleChange}
          // error={formik.touched.name && Boolean(formik.errors.name)}
          // helperText={formik.touched.name && formik.errors.name}
        />
        <input
          className={styles.formInput}
          id="email"
          name="email"
          // label="Логин *"
          placeholder="Логин *"
          value={formik.values.email}
          onChange={formik.handleChange}
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
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
          <NavLink
            to={routes.login}
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            <div className={styles.button}>
              <Button text="Вход" type="secondary" />
            </div>
          </NavLink>{' '}
          <div className={styles.button}>
            <Button text="Registartion" type="submit" customType="primary" />
          </div>
          {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
