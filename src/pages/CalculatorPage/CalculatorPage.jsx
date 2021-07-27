// import Container from '../../components/Container';
import Header from '../../components/Header';
import RightSideBar from '../../components/RightSideBar';

import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  return (
    <>
       <Header />
      <div className={styles.flexBox}>
        <div className={styles.exampleBox}></div>
        <RightSideBar />
      </div>
    </>
  );
};

export default CalculatorPage;
