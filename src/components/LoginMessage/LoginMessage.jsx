import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/global/GlobalContext';
import './LoginMessage.css';

const LoginMessage = () => {
  const { showLoginMessage, setShowLoginMessage, darkMode } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (!showLoginMessage) return null;

  const handleLogin = () => {
    setShowLoginMessage(false);
    navigate('/login');
  };

  const handleClose = () => {
    setShowLoginMessage(false);
  };

  return (
    <div className="login-message-overlay" onClick={handleClose}>
      <div className={`login-message-modal ${darkMode ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
        <p>Debes iniciar sesión para continuar con la compra</p>
        <div className="login-message-buttons">
          <button onClick={handleLogin}>Iniciar Sesión</button>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default LoginMessage;