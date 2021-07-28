// import Container from '../../components/Container';
import Header from '../../components/Header';
import DateForm from '../../components/DateForm';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import RightSideBar from '../../components/RightSideBar';

import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <>
      <Header />
      <div className={styles.flexBox}>
        <div className={styles.exampleBox}>
          <DateForm />
          <DiaryAddProductForm />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default DiaryPage;
