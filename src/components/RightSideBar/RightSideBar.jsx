import styles from './RightSideBar.module.css';

const RightSideBar = () => {
  return (
    <aside className={styles.rightSideBar}>
      <div>
        <h4 className={styles.rightSideBar_title}>сводка за DATE</h4>
        <ul className={styles.rightSideBar_list}>
          <li className={styles.rightSideBar_el}>
            <span className={styles.rightSideBar_text}>Осталось</span>
            <span className={styles.rightSideBar_text}>000 ккал</span>
          </li>
          <li className={styles.rightSideBar_el}>
            <span className={styles.rightSideBar_text}>Употреблено</span>
            <span className={styles.rightSideBar_text}>000 ккал</span>
          </li>
          <li className={styles.rightSideBar_el}>
            <span className={styles.rightSideBar_text}>Дневная норма</span>
            <span className={styles.rightSideBar_text}>000 ккал</span>
          </li>
          <li className={styles.rightSideBar_el}>
            <span className={styles.rightSideBar_text}>n% от нормы</span>
            <span className={styles.rightSideBar_text}>000 ккал</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className={styles.rightSideBar_title}>Нерекомендуемые продукты</h4>
        <span className={styles.rightSideBar_text}>
          Здесь будет отображаться Ваш рацион
        </span>
      </div>
    </aside>
  );
};

export default RightSideBar;
