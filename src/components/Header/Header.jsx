import React, {useContext} from "react";
import "./Header.css";
import {GlobalContext} from "../../context/global/GlobalContext.jsx";

export default function Header() {
    const { darkMode } = useContext(GlobalContext);
    return (
        <header className="header">
            <p>CREAR COMPONENTE BUSCAR Y CARRITO DE COMPRAS</p>
        </header>
    );
}
