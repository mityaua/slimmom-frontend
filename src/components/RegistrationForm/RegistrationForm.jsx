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

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: 'Jone',
      email: 'foobar@example.com',
      password: 'foobar',
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
    <div className={styles.loginForm}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button text="Login" type="submit" />
        <Button text="Registartion" type="submit" />
        {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default LoginForm;
