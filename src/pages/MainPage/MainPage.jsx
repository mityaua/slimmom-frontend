import { useEffect } from 'react';

import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';

const MainPage = () => {
  useEffect(() => {
    document.title = 'SlimMom | Худей эффективно!';
  }, []);

  return (
    <>
      <Header />
      <DailyCaloriesForm />
    </>
  );
};

export default MainPage;
