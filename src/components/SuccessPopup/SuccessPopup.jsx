import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import './SuccessPopup.css';

const SuccessPopup = () => {
  const { showSuccess, setShowSuccess, darkMode } = useContext(GlobalContext);

  if (!showSuccess) return null;

  return (
    <div className="success-overlay" onClick={() => setShowSuccess(false)}>
      <div className={`success-modal ${darkMode ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
        <p>Pedido realizado satisfactoriamente</p>
        <button onClick={() => setShowSuccess(false)}>Cerrar</button>
      </div>
    </div>
  );
};

export default SuccessPopup;