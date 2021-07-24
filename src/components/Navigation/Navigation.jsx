import styles from './Navigation.module.css';

const Navigation = ({ isHidden }) => {
  const hidden = isHidden ? styles.isHidden : null;
  return (
    <nav className={`${styles.navigation} ${hidden}`}>
      <a href="#" className={styles.link}>
        Вход
      </a>
      <a href="#" className={styles.link}>
        Регистрация
      </a>
    </nav>
  );
};

export default Navigation;
