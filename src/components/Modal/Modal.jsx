import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

// Компонент модального окна
const Modal = ({ children, onClose }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {      
      onClose();
    }
  };  

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }); // Возможно нужны будут зависимости!

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
