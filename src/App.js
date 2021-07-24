import { useState } from 'react';
import Modal from './components/Modal';

import './App.css';

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {/* Привязать к другой кнопке в форме просчёта */}
      <button type="button" onClick={toggleModal}>
        Show modal
      </button>

      {modal && (
        <Modal onClose={toggleModal}>
          <h1>Ваша рекомендуемая суточная норма калорий составляет</h1>
          <p>2800 ккал</p>
          <button type="button" className="close-btn" onClick={toggleModal}>
            Close modal
          </button>
        </Modal>
      )}
    </div>
  );
};

export default App;
