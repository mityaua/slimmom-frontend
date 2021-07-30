import { useState, forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ruRU from 'date-fns/locale/ru';

import { getDay } from '../../redux/day/day_operation';

import styles from './DateForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as CalendarIcon } from '../../images/bg-pictures/mobile/calender.svg';

// Компонент выбора даты на календаре
const DateForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  // Тестовые данные
  useEffect(() => {
    dispatch(getDay('6101ac13d1f44f5468d7ef3a', '2021-07-26'));

    console.log(
      `useEffect и зависимость от даты: ${
        startDate.toISOString().split('T')[0]
      }`,
    );
  }, [dispatch, startDate]);

  registerLocale('ru-RU', ruRU);

  // Кастомный инпут библиотеки (содержит дату и иконку)
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <>
      <span
        className={styles.date}
        onClick={onClick}
        ref={ref}
        title="Нажмите для выбора даты"
      >
        {startDate.toLocaleDateString('ru-RU')}
      </span>

      <span>
        <CalendarIcon
          alt="Выбор даты на календаре"
          width="18px"
          height="20px"
          className={styles.icon}
          onClick={onClick}
        />
      </span>
    </>
  ));

  // Возвращает кастомный инпут
  return (
    <div className={styles.wrapper}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput />}
        maxDate={new Date()}
        todayButton="Сегодня"
        locale="ru-RU"
      />
    </div>
  );
};

export default DateForm;
