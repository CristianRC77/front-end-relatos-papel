import React, {useContext} from "react";
import { useParams, Link } from "react-router-dom";
import "./BookDetail.css";
import{ useBook } from "../../hooks/useBook.js";
import {GlobalContext} from "../../context/global/GlobalContext.jsx";

export default function BookDetail() {
  const { bookId } = useParams();
  const { book, loading, error } = useBook(bookId);
  const { darkMode, addToCart, setShowAdded } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="book-detail">
        <div className="loading-container">
          <p className="loading-message">Cargando Libro...</p>
        </div>
      </div>
    );
  }

  if (error && !book) {
    return (
      <div className="book-detail">
        <div className="error-container">
          <h2>Libro no encontrado</h2>
          <p>No se pudo encontrar el libro solicitado.</p>
          <Link to="/books" className="back-link">← Volver a Libros</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail">
      <div className="breadcrumb">
        <Link to="/books" className="back-link">← Volver a Libros</Link>
      </div>

      {/*{error && <p className="fetch-error">{error}</p>}*/}

      {book && (
        <div className="book-detail-content">
          <div className="book-images">
            <div className="main-image">
              <img
                src={book.images.cover}
                alt={book.title}
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'%3EImagen del libro%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {book.images.gallery.length > 1 && (
              <div className="thumbnail-images">
                {book.images.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${book.title} - Vista ${index + 1}`}
                    className="thumbnail"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='75' viewBox='0 0 100 75'%3E%3Crect width='100' height='75' fill='%23f0f0f0'/%3E%3Ctext x='50' y='40' text-anchor='middle' fill='%23999' font-family='Arial' font-size='10'%3EImg%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="book-info">
            <div className="book-header">
              <h1 className="book-title">{book.title}</h1>
              <span className="book-category">{book.format}</span>
            </div>

            <p className="book-description">{book.shortDescription}</p>
            <p className="book-full-description">{book.description}</p>

              <div className="product-specifications">
                  <h3>Autor/es</h3>
                  <div className="specs-grid">
                      {book.authors.map((aut, index) => (
                          <div key={index} className="spec-item">
                              <span className="spec-value">{aut.name}</span>
                              <span className="spec-value">{aut.biography}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="product-specifications">
                  <h3>Categorias</h3>
                  <div className="specs-grid">
                      {book.categories.map((cat, index) => (
                          <div key={index} className="spec-item">
                              <span className="spec-value">{cat.name}</span>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="product-specifications">
                  <h3>Editorial</h3>
                  <div className="specs-grid">
                          <div className="spec-item">
                              <span className="spec-value">{book.publisher.name}</span>
                          </div>

                  </div>
              </div>

            <div className="book-pricing">
              <span className="book-price">${book.price}</span>
            </div>

            <div className="book-actions">
              <button
                className="add-to-cart-btn"
                onClick={() => { addToCart(book); setShowAdded(true); }}
                disabled={book.stock === 0}
              >
                {book.stock > 0 ? "Añadir al carrito" : "Sin stock"}
              </button>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}