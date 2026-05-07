import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';
import './Cart.css';

const Cart = () => {
  const { cart, showCart, setShowCart, removeFromCart, updateQuantity, darkMode, setCart, showSuccess, setShowSuccess } = useContext(GlobalContext);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!showCart) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={() => setShowCart(false)}>
      <div className={`cart-modal ${darkMode ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total">Total: ${total.toFixed(2)}</div>
            <button className="checkout-btn" onClick={() => setShowConfirm(true)}>Proceder al Pago</button>
          </div>
        )}
      </div>
      {showConfirm && (
        <div className="confirm-popup">
          <div className="confirm-content">
            <p>¿Confirmar pago?</p>
            <div className="confirm-buttons">
              <button onClick={() => {
                setCart([]);
                setShowCart(false);
                setShowSuccess(true);
                setShowConfirm(false);
              }}>Sí</button>
              <button onClick={() => setShowConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;