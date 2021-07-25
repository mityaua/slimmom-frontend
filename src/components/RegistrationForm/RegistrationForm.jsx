import styles from './registrationForm';
import React from 'react';
// import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';

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

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.registrationForm}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="Имя"
          label="name"
          type="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.name)}
          helperText={formik.touched.password && formik.errors.name}
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

        <Button text="Login" type="secondary" />
        <Button text="Registartion" type="primary" />
        {/* <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default RegistrationForm;
