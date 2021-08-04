import { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import ruRU from 'date-fns/locale/ru';

import { getDay } from '../../redux/day/day_operation';
import { getUserId, getDays } from '../../redux/user/user_selector';

import styles from './DateForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as CalendarIcon } from '../../images/bg-pictures/mobile/calender-1.svg';

// Компонент выбора даты на календаре
const DateForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const userId = useSelector(getUserId); // ID юзера
  const days = useSelector(getDays); // масив дней из юзера

  const includeDays = days?.map(day => new Date(day.date)); // массив дней юзера в нужном формате

  // Текущий день с учётом временных зон, мать их
  const isoDateTime = new Date(
    startDate.getTime() - startDate.getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0];

  useEffect(() => {
    dispatch(getDay(userId, isoDateTime));
  }, [dispatch, startDate, isoDateTime, userId]);

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
          title="Нажмите для выбора даты"
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
