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
  loginInput: {
    marginBottom: 40,
    // '@media (min-width: 768px)': {},
  },
  passwordInput: {
    marginBottom: 60,
  },
});

const validationSchema = yup.object({
  name: yup.string('Введите ваше Имя').required('Имя обязательное'),
  login: yup.string('Введите ваш login').required('login обязательный'),
  password: yup
    .string('Введите пароль')
    .min(6, 'Пароль должен быть длинее 6 символов')
    .required('Пароль обязательный'),
});

const RegistrationForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const payload = {
        name: values.name,
        login: values.login,
        password: values.password,
      };

      dispatch(register(payload));
      resetForm({ values: '' });
    },
  });

  return (
    <div className={styles.registrationForm}>
      <form className={styles.formAuth} onSubmit={formik.handleSubmit}>
        <h2 className={styles.formTitle}>Регистрация</h2>
        <TextField
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

        <TextField
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.loginInput}`}
          id="login"
          name="login"
          placeholder="Логин *"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />

        <TextField
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
        <div className={styles.buttons}>
          <NavLink to={routes.login}>
            <div className={styles.button}>
              <Button text="Вход" type="secondary" />
            </div>
          </NavLink>
          <div className={styles.button}>
            <Button
              text="Регистрация"
              type="submit"
              customType="primary"
              disabled={formik.isSubmitting || !formik.dirty}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
