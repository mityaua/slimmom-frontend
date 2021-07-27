import styles from './Button.module.css';

const Button = ({ text, customType, type }) => {
  const className =
    customType === 'primary' ? styles.primary : styles.secondary;
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
