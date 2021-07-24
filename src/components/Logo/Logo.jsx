import styles from './Logo.module.css';
import LogoImg from '../../images/logo/logo.png';

const Logo = () => {
  return (
    <a href="#" className={styles.link}>
      <img src={LogoImg} alt="slim mom logo" className={styles.logo} />
      <p className={styles.logoTitle}>
        Slim<span className={styles.activeColorLogo}>Mom</span>
      </p>
    </a>
  );
};

export default Logo;
