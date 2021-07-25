import styles from './Button.module.css';

const Button = ({ text, type }) => {
  const className = type === 'primary' ? styles.primary : styles.secondary;
  return <button className={`${styles.button} ${className}`}>{text}</button>;
};

export default Button;
