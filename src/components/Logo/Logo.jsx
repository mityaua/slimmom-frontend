import styles from './Logo.module.css';
import LogoImg from '../../images/logo/logo.png';

const Logo = ({ isLogged }) => {
  const hidden = isLogged ? null : styles.isHidden; // этот проп прячет нафигацию на LoginPage и RegistrationPage
  return (
    <a href="#" className={styles.link}>
      <img src={LogoImg} alt="slim mom logo" className={styles.logo} />
      <p className={`${styles.logoTitle} ${hidden}`}>
        Slim<span className={styles.activeColorLogo}>Mom</span>
      </p>
    </a>
  );
};

export default Logo;
