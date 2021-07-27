// import Container from '../../components/Container';
import Header from '../../components/Header';
import RightSideBar from '../../components/RightSideBar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';

import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  return (
    <>
      <Header />
      <div className={styles.flexBox}>
        <div className={styles.exampleBox}>
          <DiaryAddProductForm />
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default DiaryPage;
