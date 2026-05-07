import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {GlobalContext} from "../../context/global/GlobalContext.jsx";
import {AuthContext} from "../../context/auth/AuthContext.jsx";

export default function Menu() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/books">Libros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        {user ? (
          <li><Link to="/profile">Mi Perfil</Link></li>
        ) : (
          <li><Link to="/login">Iniciar Sesión</Link></li>
        )}
      </ul>
    </nav>
  );
}