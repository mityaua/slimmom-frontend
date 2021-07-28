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
      `useEffect и зависимость от даты: ${startDate.toLocaleDateString(
        'ru-RU',
      )}`,
    );
  }, [startDate]);

  registerLocale('ru-RU', ruRU);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <CalendarIcon
      title="Выберете дату"
      alt="Выбор даты на календаре"
      width="18px"
      height="20px"
      onClick={onClick}
      ref={ref}
      className={styles.icon}
    />
  ));

  return (
    <ErrorBoundary>
      <div className={styles.wrapper}>
        <span className={styles.date}>
          {startDate.toLocaleDateString('ru-RU')}
        </span>

        <div>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            customInput={<ExampleCustomInput />}
            maxDate={new Date()}
            todayButton="Сегодня"
            locale="ru-RU"
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DateForm;
