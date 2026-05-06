import { useState, useEffect } from "react";
import { mockBooks } from "../utils/mockBooks.js";

export function useBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setError("");
            try {
                // Simular petición HTTP que siempre falla
                const response = await fetch('http://localhost:8080/api/v1/books');

                if (!response.ok) {
                    throw new Error('Error al cargar libros del servidor');
                }

                const data = await response.json();
                setBooks(data.books);
                setLoading(false);
            } catch (err) {
                console.log("Error en petición HTTP:", err.message);
                console.log("Cargando datos de respaldo...");

                // Cargar datos de respaldo con un pequeño delay para simular carga
                setTimeout(() => {
                    setBooks(mockBooks);
                    setError("Datos cargados desde caché local");
                    setLoading(false);
                }, 1000);
            }
        };
        fetchBooks();
    }, []); // Se ejecuta en cada montaje del componente
    return {books, loading, error};
}