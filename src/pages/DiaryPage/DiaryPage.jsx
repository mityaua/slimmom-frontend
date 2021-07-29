import { useState } from 'react';
import Header from '../../components/Header';
import DateForm from '../../components/DateForm';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import RightSideBar from '../../components/RightSideBar';
import DiaryProductsList from '../../components/DiaryProductsList';
import Button from '../../components/Button';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);

  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };
  return (
    <>
      <Header />
      <div className={styles.flexBox}>
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
              <DateForm />
              <div className={styles.isHidddenMobile}>
                <DiaryAddProductForm />
              </div>

              <DiaryProductsList />
              <div className={styles.isHidddenTablet}>
                <Button
                  customType="primary"
                  className="small"
                  onClick={handleClick}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
            <RightSideBar />
          </>
        ) : (
          <>
            <div className={styles.exampleBox}>
              <DiaryAddProductForm />
              <KeyboardBackspaceIcon
                className={styles.backButton}
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiaryPage;
