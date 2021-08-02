import styles from './RightSideBar.module.css';
import Container from '../Container';

const RightSideBar = ({ kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate, notAllowedProductsAll }) => {
  return (
    <aside className={styles.rightSideBar}>
      <Container>
        <div className={styles.flexBox}>
          <div>
            <h4 className={styles.rightSideBar_title}>сводка за DATE</h4>
            <ul className={styles.rightSideBar_list}>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Осталось</span>
                <span className={styles.rightSideBar_text}>{kcalLeft ? kcalLeft : '0'} ккал</span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Употреблено</span>
                <span className={styles.rightSideBar_text}>{kcalConsumed ? kcalConsumed : '0'} ккал</span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>Дневная норма</span>
                <span className={styles.rightSideBar_text}>{dailyRate ? dailyRate : '0'} ккал</span>
              </li>
              <li className={styles.rightSideBar_el}>
                <span className={styles.rightSideBar_text}>n% от нормы</span>
                <span className={styles.rightSideBar_text}>{percentsOfDailyRate ? Math.floor(percentsOfDailyRate) : '0'} %</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.rightSideBar_title}>Нерекомендуемые продукты</h4>
            <ul className={styles.rightSideBar_product_list}>
              {notAllowedProductsAll ? (notAllowedProductsAll.map(product =>              
                <li className={styles.rightSideBar_product_item} key={product}>{product}, </li>)) :
                <li className={styles.rightSideBar_text}>Здесь будет отображаться Ваш рацион</li>}
            </ul>
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default RightSideBar;
