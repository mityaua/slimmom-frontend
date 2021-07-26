import styles from './Logo.module.css';
import { ReactComponent as LogoImg } from '../../images/logo/logo.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Logo = ({ isLogged }) => {
  const hidden = isLogged ? null : styles.isHidden; // этот проп прячет нафигацию на LoginPage и RegistrationPage
  return (
    <Link to={routes.diary} className={styles.link}>
      <LogoImg className={styles.logo} />
      <p className={`${styles.logoTitle} ${hidden}`}>
        Slim<span className={styles.activeColorLogo}>Mom</span>
      </p>
    </Link>
  );
};

export default Logo;
