import { useState, useEffect } from "react";
import { mockBookDetails } from "../utils/mockBookDetails.js";

export function useBook(bookId) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!bookId) {
            setLoading(false);
            setError("ID de libro no válido");
            return;
        }

        const fetchBook = async () => {
            setLoading(true);
            setError("");

            try {
                // Simular petición HTTP que siempre falla
                const response = await fetch(`http://localhost:8080/api/v1/books/${bookId}`);

                if (!response.ok) {
                    throw new Error('Error al cargar el libro del servidor');
                }

                const data = await response.json();
                setBook(data);
                setLoading(false);
            } catch (err) {
                console.log("Error en petición HTTP:", err.message);
                console.log("Cargando datos de respaldo para libro ID:", bookId);

                // Cargar datos de respaldo con un pequeño delay para simular carga
                setTimeout(() => {
                    const bookData = mockBookDetails[bookId];
                    if (bookData) {
                        setBook(bookData);
                        setError("Datos cargados desde caché local");
                    } else {
                        setError("Libro no encontrado");
                    }
                    setLoading(false);
                }, 800);
            }
        };

        fetchBook();
    }, [bookId]); // Se ejecuta cuando cambia el bookId

    return {
        book,
        loading,
        error
    };
}
