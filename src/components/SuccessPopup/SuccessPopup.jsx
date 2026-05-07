import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/global/GlobalContext';
import './SuccessPopup.css';

const SuccessPopup = () => {
  const { showSuccess, setShowSuccess} = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowSuccess(false);
    navigate('/books');
  };

  if (!showSuccess) return null;

  return (
    <div className="success-overlay" >
      <div className="success-modal" >
        <p>Pedido realizado satisfactoriamente</p>
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SuccessPopup;