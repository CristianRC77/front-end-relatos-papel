import React, {useContext, useState} from "react";
import "./Books.css";
import {GlobalContext} from "../../context/global/GlobalContext";
import {useBooks} from "../../hooks/useBooks.js";
import { Link } from "react-router-dom";

export default function Books() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { darkMode, addToCart } = useContext(GlobalContext);

    // Custom hook que maneja toda la lógica de libros
    const{books, loading, error: fetchError} = useBooks();

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (value === "" || validateEmail(value)) {
            setError("");
        } else {
            setError("Introduce un correo electrónico válido.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log("Correo enviado:", email);
            setEmail("");
            setError("");
        } else {
            setError("Introduce un correo electrónico válido.");
            alert("El correo no es válido");
        }
    }

    return (
        <div className="books">
            {/* Sección de libros */}
            <section className="books-section">
                <h2>Libros Disponibles</h2>

                {loading && <p className="loading-message">Cargando libros...</p>}

                {/*{fetchError && <p className="fetch-error">{fetchError}</p>}*/}

                {!loading && books.length > 0 && (
                    <div className="books-grid">
                        {books.map(book => (
                            <div key={book.id} className="book-card">
                                <div className="book-header">
                                    <h3 className="book-name">{book.title}</h3>
                                    <span className="book-type">{book.format}</span>
                                </div>
                                <p className="book-description">{book.shortDescription}</p>
                                <div className="cover-image">
                                    <img
                                        src={book.cover}
                                        alt={book.title}
                                        onError={(e) => {
                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>

                                <div className="book-footer">
                                    <span className="product-price">${book.price}</span>
                                </div>
                                <div className="book-actions">
                                    <Link
                                        to={`/books/${book.id}`}
                                        className="view-detail-btn"
                                    >
                                        Ver detalles
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Formulario de newsletter */}
            <section className="newsletter-section">
                <h2>Newsletter</h2>
                <form className="newsletter-form" onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="newsletter-email">Suscríbete a la newsletter:</label>
                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                    <p className="newsletter-error">
                        {error}
                    </p>
                </form>
            </section>
        </div>
    );
}