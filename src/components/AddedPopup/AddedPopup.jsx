import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext.jsx';
import './AddedPopup.css';

const AddedPopup = () => {
  const { showAdded, setShowAdded, darkMode } = useContext(GlobalContext);

  useEffect(() => {
    if (!showAdded) return;
    const t = setTimeout(() => setShowAdded(false), 2000);
    return () => clearTimeout(t);
  }, [showAdded, setShowAdded]);

  if (!showAdded) return null;

  return (
    <div className={`added-toast ${darkMode ? 'dark' : ''}`} onClick={() => setShowAdded(false)}>
      <p>Libro agregado al carrito</p>
    </div>
  );
};

export default AddedPopup;
