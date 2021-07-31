import { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import subDays from 'date-fns/subDays';
import ruRU from 'date-fns/locale/ru';

import { getDay } from '../../redux/day/day_operation';
import { getUserId, getDays } from '../../redux/auth/auth_selector';

import styles from './DateForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as CalendarIcon } from '../../images/bg-pictures/mobile/calender.svg';

// Компонент выбора даты на календаре
const DateForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const userId = useSelector(getUserId); // ID юзера
  const days = useSelector(getDays); // Масив дней из юзера
  const includeDays = days?.map(day => new Date(day.date)); // массив дней юзера в нужном формате + проверка (нужен дин.рендер)

  useEffect(() => {
    dispatch(getDay(userId, startDate.toISOString().split('T')[0]));
  }, [dispatch, startDate, userId]);

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
        includeDates={includeDays}
        todayButton="Сегодня"
        locale="ru-RU"
      />
    </div>
  );
};

export default DateForm;
