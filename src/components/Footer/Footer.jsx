import React, {useContext} from "react";
import "./Footer.css";
import {GlobalContext} from "../../context/global/GlobalContext.jsx";

export default function Footer() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <footer className={`footer${darkMode ? " dark" : ""}`}>
      <p>© 2026 Relatos de Papel. Todos los derechos reservados.</p>
    </footer>
  );
}
