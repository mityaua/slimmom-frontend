import { useState } from 'react';

import styles from './MainPage.module.css';
// import './MainPage.module.css';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

const MainPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return <div className={styles.mainPage}>
    {/* Привязать к другой кнопке в форме просчёта */}
      <button type="button" onClick={toggleModal}>
        Show modal
      </button>

      {modal && (
        <Modal onClose={toggleModal}>
          <h1 className={styles.modal_title}>Ваша рекомендуемая суточная норма калорий составляет</h1>
          <p className={styles.modal_caloriesNumber}>2800 <span className={styles.modal_calories}>ккал</span></p>
          <h2 className={styles.modal_subTitle}>Продукты, которые вам не рекомендуется употреблять</h2>
          <ul className={styles.modal_list}>
            <li className={styles.modal_el}>1. Мучные продукты</li>
            <li className={styles.modal_el}>2. Молоко</li>
            <li className={styles.modal_el}>3. Красное мясо</li>
            <li className={styles.modal_el}>4. Копчености</li>
          </ul>
          <div className={styles.modal_button}><Button text='Начать худеть' type='primary'/></div>    
          <button type="button" className={styles.modal_closeBtn} onClick={toggleModal}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8333 1.3415L10.6583 0.166504L5.99998 4.82484L1.34164 0.166504L0.166641 1.3415L4.82498 5.99984L0.166641 10.6582L1.34164 11.8332L5.99998 7.17484L10.6583 11.8332L11.8333 10.6582L7.17498 5.99984L11.8333 1.3415Z" fill="black"/>
            </svg>
          </button>
        </Modal>
      )}
  </div>;
};

export default MainPage;
