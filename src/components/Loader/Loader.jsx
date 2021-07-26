import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.ring}>
      SlimMom
      <span className={styles.point}></span>
    </div>
  );
};

export default Loader;
