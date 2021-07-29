import styles from './Button.module.css';

const Button = ({ text, customType, type, children, className, onClick }) => {
  const addType = customType === 'primary' ? styles.primary : styles.secondary;
  const addClass = styles[className];
  return (
    <button
      type={type}
      className={`${styles.button} ${addType} ${addClass}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
