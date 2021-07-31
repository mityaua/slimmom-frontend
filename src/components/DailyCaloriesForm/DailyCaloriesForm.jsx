import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import Button from '../Button';
import Modal from '../Modal';

import { fetchDailyCalories } from '../../redux/dailyCalories/dailyCalories_operation';
import { getIsAuthenticated } from '../../redux/auth/auth_selector';
import { getDailyCalories } from '../../redux/dailyCalories/dailyCalories_selector';
import styles from './DailyCaloriesForm.module.css';
import { withStyles } from '@material-ui/core/styles';

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const IsAuthenticated = useSelector(getIsAuthenticated);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = values => {
    values.bloodType = Number(values.bloodType);
    dispatch(fetchDailyCalories(values));
    setTimeout(() => {
      toggleModal();
    }, 1000);
  };

  const validationsSchema = yup.object().shape({
    height: yup
      .number()
      .typeError('Должно быть числом')
      .min(100, 'Минимальное значение 120 см')
      .max(260, 'Максимальное значение 260 см')
      .required('Обязательное поле'),
    age: yup
      .number()
      .typeError('Должно быть числом')
      .min(18, 'Минимальное значение 18 лет')
      .max(120, 'Максимальное значение 120 лет')
      .required('Обязательное поле'),
    currentWeight: yup
      .number()
      .typeError('Должно быть числом')
      .min(50, 'Минимальное значение 50 кг')
      .max(250, 'Максимальное значение 250 кг')
      .required('Обязательное поле'),
    desiredWeight: yup
      .number()
      .typeError('Должно быть числом')
      .min(50, 'Минимальное значение 45 кг')
      .max(
        yup.ref('currentWeight'),
        'Максимальное значение не может быть больше текущего',
      )
      .required('Обязательное поле'),
    bloodType: yup.number().required('Обязательное поле'),
  });

  const heading = () => {
    if (IsAuthenticated) {
      return 'Узнай свою суточную норму калорий';
    }
    return 'Просчитай свою суточную норму калорий прямо сейчас';
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            height: '',
            age: '',
            currentWeight: '',
            desiredWeight: '',
            bloodType: '',
          }}
          validateOnBlur
          onSubmit={values => {
            handleSubmit(values);
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <form className={styles.caloriesForm} onSubmit={handleSubmit}>
              <h2>{heading()}</h2>
              <div className={styles.formContainerMain}>
                <div className={styles.formContainerLeft}>
                  <InputField
                    label="Рост *"
                    type="number"
                    name={'height'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                  />
                  {touched.height && errors.height && (
                    <p className={styles.caloriesFormError}>{errors.height}</p>
                  )}
                  <InputField
                    label="Возраст *"
                    type="number"
                    name={'age'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  {touched.age && errors.age && (
                    <p className={styles.caloriesFormError}>{errors.age}</p>
                  )}
                  <InputField
                    label="Текущий вес *"
                    type="number"
                    name={'currentWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.currentWeight}
                  />
                  {touched.currentWeight && errors.currentWeight && (
                    <p className={styles.caloriesFormError}>
                      {errors.currentWeight}
                    </p>
                  )}
                </div>
                <div className={styles.formContainerRight}>
                  <InputField
                    label="Желаемый вес *"
                    type="number"
                    name={'desiredWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.desiredWeight}
                  />
                  {touched.desiredWeight && errors.desiredWeight && (
                    <p className={styles.caloriesFormError}>
                      {errors.desiredWeight}
                    </p>
                  )}
                  <FormControl component="fieldset">
                    <StyleFormLabel component="legend">
                      Группа крови *
                    </StyleFormLabel>
                    <RadioGroup
                      row
                      aria-label="position"
                      name="bloodType"
                      defaultValue="top"
                    >
                      <div className={styles.radioButton}>
                        <FormControlLabel
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="1"
                          control={<StyleRadio />}
                          label="1"
                        />
                      </div>
                      <div className={styles.radioButton}>
                        <FormControlLabel
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="2"
                          control={<StyleRadio />}
                          label="2"
                        />
                      </div>
                      <div className={styles.radioButton}>
                        <FormControlLabel
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="3"
                          control={<StyleRadio />}
                          label="3"
                        />
                      </div>
                      <div className={styles.radioButton}>
                        <FormControlLabel
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="4"
                          control={<StyleRadio />}
                          label="4"
                        />
                      </div>
                      {touched.bloodType && errors.bloodType && (
                        <p className={styles.caloriesFormError}>
                          {errors.bloodType}
                        </p>
                      )}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className={styles.form_button}>
              <Button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type="submit"
                text="Похудеть"
                customType="primary"
              />
              </div>
            </form>
          )}
        </Formik>
      </div>

      {modal && (
        <Modal onClose={toggleModal}>
          <h1 className={styles.modal_title}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h1>
          <p className={styles.modal_caloriesNumber}>
          2800<span className={styles.modal_calories}> ккал</span>
          </p>
          <h2 className={styles.modal_subTitle}>
            Продукты, которые вам не рекомендуется употреблять
          </h2>
          <ul className={styles.modal_list}>
            <li className={styles.modal_el}>1. Мучные продукты</li>
            <li className={styles.modal_el}>2. Молоко</li>
            <li className={styles.modal_el}>3. Красное мясо</li>
            <li className={styles.modal_el}>4. Копчености</li>
          </ul>
          <div className={styles.modal_button}>
            <Button text="Начать худеть" type="primary" />
          </div>
          <button
            type="button"
            className={styles.modal_closeBtn}
            onClick={toggleModal}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z"
                fill="black"
              />
            </svg>
          </button>
        </Modal>
      )}
    </>
  );
};

const StyleRadio = withStyles({
  root: {
    '&$checked': {
      color: '#FC842D',
    },
  },
  checked: {},
})(props => <Radio {...props} />);

const StyleFormLabel = withStyles({
  root: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '1.2',
    color: '#9B9FAA',
    '&$focused': {
      color: '#9B9FAA',
    },
  },
  focused: {},
})(props => <FormLabel {...props} />);

const InputField = ({ label, type, value, name, onChange, onBlur }) => (
  <label>
    {label}
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  </label>
);

export default DailyCaloriesForm;
