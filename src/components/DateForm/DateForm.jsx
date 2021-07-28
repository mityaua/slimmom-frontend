import { useState, forwardRef, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ruRU from 'date-fns/locale/ru';

import ErrorBoundary from '../ErrorBoundary';

import styles from './DateForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as CalendarIcon } from '../../images/bg-pictures/mobile/calender.svg';

// Компонент выбора даты на календаре
const DateForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(
      `useEffect и зависимость от даты: ${
        startDate.toISOString().split('T')[0]
      }`,
    );
  }, [startDate]);

  registerLocale('ru-RU', ruRU);

  // Кастомный инпут библиотеки (содержит дату и иконку)
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <span
          className={styles.date}
          onClick={onClick}
          ref={ref}
          title="Нажмите для выбора даты"
        >
          {startDate.toLocaleDateString('ru-RU')}
        </span>

        <div>
          <CalendarIcon
            alt="Выбор даты на календаре"
            width="18px"
            height="20px"
            className={styles.icon}
            onClick={onClick}
          />
        </div>
      </div>
    </ErrorBoundary>
  ));

  // Возвращает кастомный инпут
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      maxDate={new Date()}
      todayButton="Сегодня"
      locale="ru-RU"
      calendarClassName="rasta-stripes"
    />
  );
};

export default DateForm;
