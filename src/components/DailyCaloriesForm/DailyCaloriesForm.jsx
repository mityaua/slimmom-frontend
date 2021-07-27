import React from 'react';
import { useState } from 'react';
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

import styles from './DailyCaloriesForm.module.css';
import { withStyles } from '@material-ui/core/styles';

const DailyCaloriesForm = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const validationsSchema = yup.object().shape({
    height: yup
      .number()
      .typeError('Должно быть числом')
      .min(100, 'Минимальное значение 120 см')
      .max(260, 'Максимальное значение 260 см')
      .required('Обязательно'),
    age: yup
      .number()
      .typeError('Должно быть числом')
      .min(18, 'Минимальное значение 18 лет')
      .max(120, 'Максимальное значение 120 лет')
      .required('Обязательно'),
    cWeight: yup
      .number()
      .typeError('Должно быть числом')
      .min(50, 'Минимальное значение 50 кг')
      .max(250, 'Максимальное значение 250 кг')
      .required('Обязательно'),
    dWeight: yup
      .number()
      .typeError('Должно быть числом')
      .min(50, 'Минимальное значение 45 кг')
      .max(
        yup.ref('cWeight'),
        'Максимальное значение не может быть больше текущего',
      )
      .required('Обязательно'),
  });

  return (
    <>
      <div>
        <Formik
          initialValues={{
            height: '',
            age: '',
            cWeight: '',
            dWeight: '',
            bloodType: '',
          }}
          validateOnBlur
          onSubmit={values => {
            console.log(values);
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
              <h2>Узнай свою суточную норму калорий</h2>
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
                  {touched.height && errors.height && <p>{errors.height}</p>}
                  <InputField
                    label="Возраст *"
                    type="number"
                    name={'age'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  {touched.age && errors.age && <p>{errors.age}</p>}
                  <InputField
                    label="Текущий вес *"
                    type="number"
                    name={'cWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cWeight}
                  />
                  {touched.cWeight && errors.cWeight && <p>{errors.cWeight}</p>}
                </div>
                <div className={styles.formContainerRight}>
                  <InputField
                    label="Желаемый вес *"
                    type="number"
                    name={'dWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dWeight}
                  />
                  {touched.dWeight && errors.dWeight && <p>{errors.dWeight}</p>}
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
                      <FormControlLabel
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="1"
                        control={<StyleRadio />}
                        label="1"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="2"
                        control={<StyleRadio />}
                        label="2"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="3"
                        control={<StyleRadio />}
                        label="3"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value="4"
                        control={<StyleRadio />}
                        label="4"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <Button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type="submit"
                text="Похудеть"
              />
            </form>
          )}
        </Formik>
      </div>

      <button onClick={toggleModal}>Модалка</button>

      {modal && (
        <Modal onClose={toggleModal}>
          <h1>Ваша рекомендуемая суточная норма калорий составляет</h1>
          <p>2800 ккал</p>
          <button type="button" className="close-btn" onClick={toggleModal}>
            Close modal
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
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '1.2',
    color: '#9B9FAA',
  },
})(props => <FormLabel {...props} />);

const InputField = ({ label, type, value, name, onChange }) => (
  <label>
    {label}
    <input type={type} value={value} name={name} onChange={onChange} />
  </label>
);

export default DailyCaloriesForm;
