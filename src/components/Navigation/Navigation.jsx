import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
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
