import styles from './RegistrationForm.module.css';
import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
//import Button from '@material-ui/core/Button';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth_operation';

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
    <section className={styles.container}>
      <div className={styles.registrationForm}>
        <h2 className={styles.loginTitle}>Регистрация</h2>
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
          <label>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Имя *"
              value={formik.values.name}
              placeholder="Логин *"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </label>
          <label>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Логин *"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </label>
          <label>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Пароль *"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </label>
          <Button text="Login" type="submit" />
          <Button text="Registartion" type="submit" />
          {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
