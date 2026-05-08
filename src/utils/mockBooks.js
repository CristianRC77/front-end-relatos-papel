export const mockBooks = [
    {
        id: 1,
        isbn: "978-0-13-235088-4",
        title: "Clean Code",
        format: "e-book",
        shortDescription: "Guía práctica para escribir código limpio y mantenible.",
        authors: ["Robert C. Martin"],
        price: 45.99,
        publisher: "Prentice Hall",
        cover: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg"
    },
    {
        id: 2,
        isbn: "978-0-201-61622-4",
        title: "The Pragmatic Programmer",
        format: "e-book",
        shortDescription: "Consejos prácticos para programadores profesionales.",
        authors: ["Andrew Hunt", "David Thomas"],
        price: 49.99,
        publisher: "Addison-Wesley",
        cover: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg"
    },
    {
        id: 3,
        isbn: "978-0-201-63361-0",
        title: "Design Patterns",
        format: "Físico",
        shortDescription: "Referencia esencial sobre patrones de diseño.",
        authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
        price: 54.99,
        publisher: "Addison-Wesley",
        cover: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg"
    },
    {
        id: 4,
        isbn: "978-0-321-12742-6",
        title: "Domain-Driven Design",
        format: "Físico",
        shortDescription: "Guía sobre modelado de dominios complejos.",
        authors: ["Eric Evans"],
        price: 62.99,
        publisher: "Addison-Wesley",
        cover: "https://covers.openlibrary.org/b/isbn/9780321127426-L.jpg"
    },
    {
        id: 5,
        isbn: "978-0-13-475759-9",
        title: "Refactoring",
        format: "Físico",
        shortDescription: "Técnicas para mejorar código existente.",
        authors: ["Martin Fowler"],
        price: 58.5,
        publisher: "Addison-Wesley",
        cover: "https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg"
    },
    {
        id: 6,
        isbn: "978-1-491-94765-9",
        title: "Designing Data-Intensive Applications",
        format: "e-book",
        shortDescription: "Diseño de sistemas de datos escalables.",
        authors: ["Martin Kleppmann"],
        price: 64.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491947659-L.jpg"
    },
    {
        id: 7,
        isbn: "978-1-449-37332-0",
        title: "Learning Python",
        format: "Físico",
        shortDescription: "Guía completa para aprender Python.",
        authors: ["Mark Lutz"],
        price: 79.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg"
    },
    {
        id: 8,
        isbn: "978-1-59327-928-8",
        title: "Python Crash Course",
        format: "e-book",
        shortDescription: "Curso práctico de Python basado en proyectos.",
        authors: ["Eric Matthes"],
        price: 39.95,
        publisher: "No Starch Press",
        cover: "https://covers.openlibrary.org/b/isbn/9781593279288-L.jpg"
    },
    {
        id: 9,
        isbn: "978-1-491-91646-6",
        title: "Fluent Python",
        format: "Físico",
        shortDescription: "Python avanzado con enfoque idiomático.",
        authors: ["Luciano Ramalho"],
        price: 69.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491916466-L.jpg"
    },
    {
        id: 10,
        isbn: "978-1-491-94600-8",
        format: "Físico",
        title: "JavaScript: The Definitive Guide",
        shortDescription: "Referencia completa de JavaScript.",
        authors: ["David Flanagan"],
        price: 59.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491946008-L.jpg"
    },
    {
        id: 11,
        isbn: "978-1-61729-586-7",
        title: "Node.js Design Patterns",
        format: "e-book",
        shortDescription: "Patrones de diseño para aplicaciones Node.js.",
        authors: ["Mario Casciaro", "Luciano Mammino"],
        price: 52.99,
        publisher: "Manning Publications",
        cover: "https://covers.openlibrary.org/b/isbn/9781617295867-L.jpg"
    },
    {
        id: 12,
        isbn: "978-1-4842-8149-3",
        title: "Beginning React",
        format: "e-book",
        shortDescription: "Introducción práctica al desarrollo con React.",
        authors: ["Greg Lim"],
        price: 34.99,
        publisher: "Apress",
        cover: "https://covers.openlibrary.org/b/isbn/9781484281493-L.jpg"
    },
    {
        id: 13,
        isbn: "978-1-4842-8144-8",
        title: "Full Stack Development with Spring Boot and React",
        format: "Físico",
        shortDescription: "Desarrollo full stack con Spring Boot y React.",
        authors: ["Juha Hinkula"],
        price: 44.99,
        publisher: "Apress",
        cover: "https://covers.openlibrary.org/b/isbn/9781484281448-L.jpg"
    },
    {
        id: 14,
        isbn: "978-1-4842-8791-4",
        title: "Pro ASP.NET Core 6",
        format: "Físico",
        shortDescription: "Desarrollo web profesional con ASP.NET Core.",
        authors: ["Adam Freeman"],
        price: 74.99,
        publisher: "Apress",
        cover: "https://covers.openlibrary.org/b/isbn/9781484287914-L.jpg"
    },
    {
        id: 15,
        isbn: "978-1-4920-3843-9",
        title: "Kubernetes: Up and Running",
        format: "e-book",
        shortDescription: "Guía práctica para iniciar con Kubernetes.",
        authors: ["Brendan Burns", "Joe Beda", "Kelsey Hightower"],
        price: 47.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781492038439-L.jpg"
    },
    {
        id: 16,
        isbn: "978-1-4920-0673-9",
        title: "Terraform: Up and Running",
        format: "Físico",
        shortDescription: "Infraestructura como código con Terraform.",
        authors: ["Yevgeniy Brikman"],
        price: 55.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781492006739-L.jpg"
    },
    {
        id: 17,
        isbn: "978-1-59327-950-9",
        title: "Automate the Boring Stuff with Python",
        format: "e-book",
        shortDescription: "Automatización práctica con Python.",
        authors: ["Al Sweigart"],
        price: 36.99,
        publisher: "No Starch Press",
        cover: "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg"
    },
    {
        id: 18,
        isbn: "978-1-4920-7619-7",
        title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        format: "Físico",
        shortDescription: "Machine learning práctico con Python.",
        authors: ["Aurélien Géron"],
        price: 72.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781492076197-L.jpg"
    },
    {
        id: 19,
        isbn: "978-1-4842-7366-9",
        title: "Practical Deep Learning",
        format: "e-book",
        shortDescription: "Introducción práctica al deep learning.",
        authors: ["Ronald T. Kneusel"],
        price: 48.99,
        publisher: "No Starch Press",
        cover: "https://covers.openlibrary.org/b/isbn/9781484273669-L.jpg"
    },
    {
        id: 20,
        isbn: "978-1-4919-1425-0",
        title: "Data Science from Scratch",
        format: "e-book",
        shortDescription: "Ciencia de datos desde cero con Python.",
        authors: ["Joel Grus"],
        price: 46.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491914250-L.jpg"
    },
    {
        id: 21,
        isbn: "978-1-4919-5766-0",
        title: "Python for Data Analysis",
        format: "e-book",
        shortDescription: "Análisis de datos con pandas y NumPy.",
        authors: ["Wes McKinney"],
        price: 59.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491957660-L.jpg"
    },
    {
        id: 22,
        isbn: "978-0-13-461099-3",
        title: "Artificial Intelligence",
        format: "Físico",
        shortDescription: "Referencia académica de inteligencia artificial.",
        authors: ["Stuart Russell", "Peter Norvig"],
        price: 89.99,
        publisher: "Pearson",
        cover: "https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg"
    },
    {
        id: 23,
        isbn: "978-0-262-04630-5",
        title: "Introduction to Algorithms",
        format: "Físico",
        shortDescription: "Referencia completa sobre algoritmos.",
        authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"],
        price: 94.99,
        publisher: "MIT Press",
        cover: "https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg"
    },
    {
        id: 24,
        isbn: "978-0-13-110362-7",
        title: "The C Programming Language",
        format: "Físico",
        shortDescription: "Referencia clásica del lenguaje C.",
        authors: ["Brian W. Kernighan", "Dennis M. Ritchie"],
        price: 42.99,
        publisher: "Prentice Hall",
        cover: "https://covers.openlibrary.org/b/isbn/9780131103627-L.jpg"
    },
    {
        id: 25,
        isbn: "978-0-321-35668-0",
        title: "Effective Java",
        format: "Físico",
        shortDescription: "Buenas prácticas avanzadas para Java.",
        authors: ["Joshua Bloch"],
        price: 51.99,
        publisher: "Addison-Wesley",
        cover: "https://covers.openlibrary.org/b/isbn/9780321356680-L.jpg"
    },
    {
        id: 26,
        isbn: "978-1-4919-5326-2",
        title: "Head First Java",
        format: "e-book",
        shortDescription: "Introducción visual y práctica a Java.",
        authors: ["Kathy Sierra", "Bert Bates", "Trisha Gee"],
        price: 59.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491953262-L.jpg"
    },
    {
        id: 27,
        isbn: "978-1-59327-584-6",
        title: "Eloquent JavaScript",
        format: "e-book",
        shortDescription: "Introducción moderna a JavaScript.",
        authors: ["Marijn Haverbeke"],
        price: 38.99,
        publisher: "No Starch Press",
        cover: "https://covers.openlibrary.org/b/isbn/9781593275846-L.jpg"
    },
    {
        id: 28,
        isbn: "978-1-59327-828-1",
        title: "The Rust Programming Language",
        format: "e-book",
        shortDescription: "Guía práctica para aprender Rust.",
        authors: ["Steve Klabnik", "Carol Nichols"],
        price: 44.99,
        publisher: "No Starch Press",
        cover: "https://covers.openlibrary.org/b/isbn/9781593278281-L.jpg"
    },
    {
        id: 29,
        isbn: "978-1-4920-7853-3",
        title: "Software Architecture: The Hard Parts",
        format: "Físico",
        shortDescription: "Análisis de decisiones difíciles en arquitectura.",
        authors: ["Neal Ford", "Mark Richards", "Pramod Sadalage", "Zhamak Dehghani"],
        price: 61.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781492078533-L.jpg"
    },
    {
        id: 30,
        isbn: "978-1-4919-3969-0",
        title: "Building Microservices",
        format: "e-book",
        shortDescription: "Diseño e implementación de microservicios.",
        authors: ["Sam Newman"],
        price: 63.99,
        publisher: "O'Reilly Media",
        cover: "https://covers.openlibrary.org/b/isbn/9781491939690-L.jpg"
    },
  {
    "id": 31,
    "isbn": "978059685634",
    "title": "El Eco de la Noche 6384",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel Smith"
    ],
    "price": 21.02,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978059685634-L.jpg"
  },
  {
    "id": 32,
    "isbn": "9783354571174",
    "title": "El Eco de la Noche 5624",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Pérez",
      "Isabel Brown"
    ],
    "price": 98.08,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783354571174-L.jpg"
  },
  {
    "id": 33,
    "isbn": "9782795727249",
    "title": "El Eco de la Montaña 2884",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Davis",
      "Jorge Thomas"
    ],
    "price": 81.91,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782795727249-L.jpg"
  },
  {
    "id": 34,
    "isbn": "9784474016538",
    "title": "La Sombra de la Ciudad Perdida 9425",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Moore",
      "Valeria Johnson"
    ],
    "price": 96.86,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784474016538-L.jpg"
  },
  {
    "id": 35,
    "isbn": "9785853646421",
    "title": "Lágrimas de la Montaña 353",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Rodríguez",
      "Fernando Hernández"
    ],
    "price": 21.75,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785853646421-L.jpg"
  },
  {
    "id": 36,
    "isbn": "9783602735907",
    "title": "Espejos de los Olvidados 4634",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Moore"
    ],
    "price": 31.03,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783602735907-L.jpg"
  },
  {
    "id": 37,
    "isbn": "9785241930101",
    "title": "El Eco de el Viento 8371",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John García",
      "Mary Sánchez"
    ],
    "price": 71.79,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785241930101-L.jpg"
  },
  {
    "id": 38,
    "isbn": "9789618240701",
    "title": "El Legado de las Estrellas 9852",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Miller"
    ],
    "price": 73.53,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789618240701-L.jpg"
  },
  {
    "id": 39,
    "isbn": "9784760875252",
    "title": "El Renacer de el Desierto 7590",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Miller",
      "Michael Anderson"
    ],
    "price": 65.48,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784760875252-L.jpg"
  },
  {
    "id": 40,
    "isbn": "9781147462685",
    "title": "La Sombra de los Olvidados 1088",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Miller",
      "John Davis"
    ],
    "price": 74.9,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781147462685-L.jpg"
  },
  {
    "id": 41,
    "isbn": "9787659754492",
    "title": "Crónicas de la Luna Roja 7909",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Hernández"
    ],
    "price": 42.46,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787659754492-L.jpg"
  },
  {
    "id": 42,
    "isbn": "9781728642116",
    "title": "Las Luces de la Memoria 256",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Moore",
      "Gabriel Moore"
    ],
    "price": 32.87,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781728642116-L.jpg"
  },
  {
    "id": 43,
    "isbn": "9788675189343",
    "title": "El Eco de el Viento 3327",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Smith"
    ],
    "price": 22.97,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788675189343-L.jpg"
  },
  {
    "id": 44,
    "isbn": "9784616278480",
    "title": "El Secreto de la Esperanza 4240",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Taylor"
    ],
    "price": 108.0,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784616278480-L.jpg"
  },
  {
    "id": 45,
    "isbn": "9788563451576",
    "title": "Espejos de el Destino 995",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Taylor",
      "Patricia Wilson"
    ],
    "price": 48.35,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788563451576-L.jpg"
  },
  {
    "id": 46,
    "isbn": "9787612986656",
    "title": "La Búsqueda de el Destino 2290",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena López"
    ],
    "price": 5.95,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787612986656-L.jpg"
  },
  {
    "id": 47,
    "isbn": "978596052359",
    "title": "El Camino hacia los Sueños 8204",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Martínez",
      "Sofía Williams"
    ],
    "price": 51.51,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978596052359-L.jpg"
  },
  {
    "id": 48,
    "isbn": "9780489952946",
    "title": "El Legado de la Eternidad 5172",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Martínez"
    ],
    "price": 106.81,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780489952946-L.jpg"
  },
  {
    "id": 49,
    "isbn": "9789313369905",
    "title": "El Canto de los Ancestros 8539",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Brown"
    ],
    "price": 29.3,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789313369905-L.jpg"
  },
  {
    "id": 50,
    "isbn": "9787682270211",
    "title": "El Renacer de la Esperanza 6897",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Williams",
      "Ricardo García"
    ],
    "price": 14.48,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787682270211-L.jpg"
  },
  {
    "id": 51,
    "isbn": "9786619767244",
    "title": "La Sombra de las Estrellas 7710",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Taylor"
    ],
    "price": 28.73,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786619767244-L.jpg"
  },
  {
    "id": 52,
    "isbn": "9786727732943",
    "title": "Bajo el Cielo de la Travesía 521",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria García",
      "David Anderson"
    ],
    "price": 62.28,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786727732943-L.jpg"
  },
  {
    "id": 53,
    "isbn": "9785178950968",
    "title": "La Búsqueda de el Viento 2009",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Lucía Thomas",
      "Miguel Moore"
    ],
    "price": 6.53,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785178950968-L.jpg"
  },
  {
    "id": 54,
    "isbn": "9782743083717",
    "title": "El Misterio de la Justicia 7558",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Carla Johnson"
    ],
    "price": 5.4,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782743083717-L.jpg"
  },
  {
    "id": 55,
    "isbn": "9788844143718",
    "title": "El Camino hacia la Luna Roja 8279",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Martínez",
      "Ricardo García"
    ],
    "price": 59.0,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788844143718-L.jpg"
  },
  {
    "id": 56,
    "isbn": "978479295792",
    "title": "Las Voces de las Estrellas 65",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Miller"
    ],
    "price": 104.75,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978479295792-L.jpg"
  },
  {
    "id": 57,
    "isbn": "9786908976609",
    "title": "Lágrimas de la Ciudad Perdida 1866",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel García",
      "Isabel Davis"
    ],
    "price": 43.95,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786908976609-L.jpg"
  },
  {
    "id": 58,
    "isbn": "9780319219348",
    "title": "Rastros en las Estrellas 1176",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel González"
    ],
    "price": 89.2,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780319219348-L.jpg"
  },
  {
    "id": 59,
    "isbn": "9787823058487",
    "title": "Las Luces de los Sueños 3529",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Davis"
    ],
    "price": 77.0,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787823058487-L.jpg"
  },
  {
    "id": 60,
    "isbn": "9788375432299",
    "title": "Crónicas de la Montaña 614",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "David Williams"
    ],
    "price": 103.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788375432299-L.jpg"
  },
  {
    "id": 61,
    "isbn": "9782483347940",
    "title": "El Renacer de la Justicia 9774",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Thomas"
    ],
    "price": 23.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782483347940-L.jpg"
  },
  {
    "id": 62,
    "isbn": "9784652540237",
    "title": "Lágrimas de las Estrellas 3919",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth García",
      "Elizabeth Johnson"
    ],
    "price": 29.82,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784652540237-L.jpg"
  },
  {
    "id": 63,
    "isbn": "9780294574401",
    "title": "Bajo el Cielo de la Sabiduría 4982",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Davis"
    ],
    "price": 56.54,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780294574401-L.jpg"
  },
  {
    "id": 64,
    "isbn": "9787845479253",
    "title": "Vientos de el Tiempo 8739",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Jones"
    ],
    "price": 52.14,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787845479253-L.jpg"
  },
  {
    "id": 65,
    "isbn": "9782406461913",
    "title": "Las Voces de el Horizonte 7806",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Hernández"
    ],
    "price": 97.7,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782406461913-L.jpg"
  },
  {
    "id": 66,
    "isbn": "9781248832578",
    "title": "El Canto de la Noche 7261",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Taylor"
    ],
    "price": 50.76,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781248832578-L.jpg"
  },
  {
    "id": 67,
    "isbn": "9788579214196",
    "title": "La Búsqueda de el Tiempo 422",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Martínez"
    ],
    "price": 27.32,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788579214196-L.jpg"
  },
  {
    "id": 68,
    "isbn": "9786440181615",
    "title": "Rastros en el Viento 8377",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Jones",
      "Sofía Wilson"
    ],
    "price": 83.18,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786440181615-L.jpg"
  },
  {
    "id": 69,
    "isbn": "9783228011744",
    "title": "El Camino hacia la Luna Roja 1392",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 72.23,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783228011744-L.jpg"
  },
  {
    "id": 70,
    "isbn": "9786985728719",
    "title": "Espejos de la Eternidad 3043",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Hernández",
      "Patricia Miller"
    ],
    "price": 40.39,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786985728719-L.jpg"
  },
  {
    "id": 71,
    "isbn": "9787276450456",
    "title": "Lágrimas de el Desierto 6005",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Pérez",
      "John Anderson"
    ],
    "price": 6.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787276450456-L.jpg"
  },
  {
    "id": 72,
    "isbn": "978131524655",
    "title": "El Camino hacia la Montaña 4976",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Jones",
      "Elena Smith"
    ],
    "price": 5.51,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978131524655-L.jpg"
  },
  {
    "id": 73,
    "isbn": "9786999753592",
    "title": "Lágrimas de la Sabiduría 9619",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Pérez"
    ],
    "price": 114.94,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786999753592-L.jpg"
  },
  {
    "id": 74,
    "isbn": "9786242124698",
    "title": "Las Luces de la Montaña 1598",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Mary Williams",
      "Patricia Martínez"
    ],
    "price": 92.21,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786242124698-L.jpg"
  },
  {
    "id": 75,
    "isbn": "9787320284396",
    "title": "El Misterio de el Tiempo 2926",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge González"
    ],
    "price": 65.07,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787320284396-L.jpg"
  },
  {
    "id": 76,
    "isbn": "9782994683278",
    "title": "Bajo el Cielo de la Ciudad Perdida 8659",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Davis"
    ],
    "price": 105.01,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782994683278-L.jpg"
  },
  {
    "id": 77,
    "isbn": "978314843326",
    "title": "El Legado de el Horizonte 209",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Anderson"
    ],
    "price": 111.94,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978314843326-L.jpg"
  },
  {
    "id": 78,
    "isbn": "9787714637982",
    "title": "Lágrimas de la Sabiduría 8856",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Davis"
    ],
    "price": 101.67,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787714637982-L.jpg"
  },
  {
    "id": 79,
    "isbn": "9783223388896",
    "title": "El Misterio de los Olvidados 6495",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 32.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783223388896-L.jpg"
  },
  {
    "id": 80,
    "isbn": "9782126438639",
    "title": "Rastros en la Montaña 4487",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Jones",
      "David Pérez"
    ],
    "price": 60.37,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782126438639-L.jpg"
  },
  {
    "id": 81,
    "isbn": "9782171030673",
    "title": "Espejos de el Horizonte 9179",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Pérez",
      "Ricardo Smith"
    ],
    "price": 23.38,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782171030673-L.jpg"
  },
  {
    "id": 82,
    "isbn": "9788750053750",
    "title": "El Renacer de la Memoria 8238",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elena Sánchez"
    ],
    "price": 71.31,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788750053750-L.jpg"
  },
  {
    "id": 83,
    "isbn": "9781804487679",
    "title": "El Misterio de el Horizonte 176",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Brown",
      "Fernando Miller"
    ],
    "price": 77.23,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781804487679-L.jpg"
  },
  {
    "id": 84,
    "isbn": "978649599756",
    "title": "El Canto de los Olvidados 5533",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Sánchez",
      "David Jones"
    ],
    "price": 14.87,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978649599756-L.jpg"
  },
  {
    "id": 85,
    "isbn": "9782375245149",
    "title": "Espejos de el Desierto 5395",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Wilson",
      "Gabriel Taylor"
    ],
    "price": 27.43,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782375245149-L.jpg"
  },
  {
    "id": 86,
    "isbn": "9789331756169",
    "title": "El Eco de la Verdad 2801",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Smith",
      "David García"
    ],
    "price": 96.41,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789331756169-L.jpg"
  },
  {
    "id": 87,
    "isbn": "9782290788332",
    "title": "El Camino hacia la Montaña 1215",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Rodríguez",
      "Lucía Wilson"
    ],
    "price": 104.17,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782290788332-L.jpg"
  },
  {
    "id": 88,
    "isbn": "9781527968158",
    "title": "El Misterio de el Tiempo 522",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Anderson",
      "Carla Johnson"
    ],
    "price": 23.5,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781527968158-L.jpg"
  },
  {
    "id": 89,
    "isbn": "9788487111204",
    "title": "El Camino hacia el Horizonte 556",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria García"
    ],
    "price": 109.82,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788487111204-L.jpg"
  },
  {
    "id": 90,
    "isbn": "9787728360333",
    "title": "El Guardián de el Destino 1852",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "David Moore",
      "Mary Davis"
    ],
    "price": 79.6,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787728360333-L.jpg"
  },
  {
    "id": 91,
    "isbn": "9786129967639",
    "title": "Fragmentos de el Destino 1714",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Anderson",
      "Miguel Moore"
    ],
    "price": 27.73,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786129967639-L.jpg"
  },
  {
    "id": 92,
    "isbn": "9782450879214",
    "title": "La Sombra de el Viento 9975",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Rodríguez",
      "Andrés Pérez"
    ],
    "price": 91.17,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782450879214-L.jpg"
  },
  {
    "id": 93,
    "isbn": "9788402653284",
    "title": "Rastros en los Ancestros 5609",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Anderson"
    ],
    "price": 13.97,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788402653284-L.jpg"
  },
  {
    "id": 94,
    "isbn": "9781553138389",
    "title": "El Secreto de la Eternidad 4364",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Brown",
      "Isabel Brown"
    ],
    "price": 63.01,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781553138389-L.jpg"
  },
  {
    "id": 95,
    "isbn": "9788690843985",
    "title": "Crónicas de la Ciudad Perdida 9572",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Anderson"
    ],
    "price": 30.41,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788690843985-L.jpg"
  },
  {
    "id": 96,
    "isbn": "9789717263311",
    "title": "Vientos de las Estrellas 6924",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Martínez"
    ],
    "price": 78.58,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789717263311-L.jpg"
  },
  {
    "id": 97,
    "isbn": "9780293259590",
    "title": "El Camino hacia la Esperanza 964",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Thomas",
      "Isabel Hernández"
    ],
    "price": 20.77,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780293259590-L.jpg"
  },
  {
    "id": 98,
    "isbn": "9782561357236",
    "title": "El Eco de los Sueños 3333",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Rodríguez"
    ],
    "price": 31.92,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782561357236-L.jpg"
  },
  {
    "id": 99,
    "isbn": "978195341391",
    "title": "El Eco de el Viento 5880",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Sánchez",
      "Miguel Taylor"
    ],
    "price": 94.34,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978195341391-L.jpg"
  },
  {
    "id": 100,
    "isbn": "9788872516638",
    "title": "El Canto de el Horizonte 166",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Smith"
    ],
    "price": 32.98,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788872516638-L.jpg"
  },
  {
    "id": 101,
    "isbn": "9788174569318",
    "title": "Las Voces de el Viento 858",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Moore"
    ],
    "price": 106.2,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788174569318-L.jpg"
  },
  {
    "id": 102,
    "isbn": "9785461684891",
    "title": "El Renacer de los Olvidados 1812",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Smith",
      "Andrés Rodríguez"
    ],
    "price": 43.53,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785461684891-L.jpg"
  },
  {
    "id": 103,
    "isbn": "9787970583634",
    "title": "Las Luces de las Estrellas 8918",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo López"
    ],
    "price": 67.53,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787970583634-L.jpg"
  },
  {
    "id": 104,
    "isbn": "9781120674401",
    "title": "La Búsqueda de la Noche 1893",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Miller"
    ],
    "price": 102.59,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781120674401-L.jpg"
  },
  {
    "id": 105,
    "isbn": "978789210588",
    "title": "El Guardián de el Desierto 2789",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Sánchez",
      "Andrés Sánchez"
    ],
    "price": 16.02,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978789210588-L.jpg"
  },
  {
    "id": 106,
    "isbn": "9786523592833",
    "title": "Fragmentos de la Sabiduría 533",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Hernández",
      "Michael Pérez"
    ],
    "price": 48.93,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786523592833-L.jpg"
  },
  {
    "id": 107,
    "isbn": "978823672123",
    "title": "El Eco de los Olvidados 865",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Hernández",
      "Lucía Anderson"
    ],
    "price": 65.95,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978823672123-L.jpg"
  },
  {
    "id": 108,
    "isbn": "978114630472",
    "title": "Lágrimas de el Horizonte 5590",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Pérez",
      "Carla López"
    ],
    "price": 65.79,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978114630472-L.jpg"
  },
  {
    "id": 109,
    "isbn": "978987241922",
    "title": "Lágrimas de la Ciudad Perdida 1798",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Rodríguez"
    ],
    "price": 108.47,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978987241922-L.jpg"
  },
  {
    "id": 110,
    "isbn": "9786200617439",
    "title": "El Guardián de la Ciudad Perdida 447",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Wilson",
      "Jorge Pérez"
    ],
    "price": 114.38,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786200617439-L.jpg"
  },
  {
    "id": 111,
    "isbn": "9789219225114",
    "title": "Espejos de los Ancestros 7167",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Smith"
    ],
    "price": 25.64,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789219225114-L.jpg"
  },
  {
    "id": 112,
    "isbn": "9785746148292",
    "title": "El Renacer de las Estrellas 6029",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Wilson"
    ],
    "price": 33.0,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785746148292-L.jpg"
  },
  {
    "id": 113,
    "isbn": "9780799276084",
    "title": "El Renacer de la Esperanza 2879",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Moore",
      "Fernando López"
    ],
    "price": 34.15,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780799276084-L.jpg"
  },
  {
    "id": 114,
    "isbn": "978155870091",
    "title": "Las Voces de la Memoria 5784",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Moore"
    ],
    "price": 57.56,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978155870091-L.jpg"
  },
  {
    "id": 115,
    "isbn": "9780114662677",
    "title": "Rastros en la Verdad 3909",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary López",
      "Patricia Miller"
    ],
    "price": 35.48,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780114662677-L.jpg"
  },
  {
    "id": 116,
    "isbn": "9787727879522",
    "title": "La Búsqueda de los Ancestros 6536",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Rodríguez",
      "Carla Jones"
    ],
    "price": 32.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787727879522-L.jpg"
  },
  {
    "id": 117,
    "isbn": "9781678232887",
    "title": "Fragmentos de los Olvidados 9568",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Carla Jones",
      "Valeria Miller"
    ],
    "price": 83.1,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781678232887-L.jpg"
  },
  {
    "id": 118,
    "isbn": "9787311544171",
    "title": "Las Luces de el Viento 7961",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Martínez"
    ],
    "price": 92.83,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787311544171-L.jpg"
  },
  {
    "id": 119,
    "isbn": "9780500983768",
    "title": "El Guardián de la Verdad 1224",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Brown"
    ],
    "price": 50.79,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780500983768-L.jpg"
  },
  {
    "id": 120,
    "isbn": "9787484351187",
    "title": "Las Luces de el Destino 7272",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Anderson",
      "Andrés Johnson"
    ],
    "price": 34.26,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787484351187-L.jpg"
  },
  {
    "id": 121,
    "isbn": "9781759816456",
    "title": "Más allá de la Sabiduría 1341",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Martínez"
    ],
    "price": 47.75,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781759816456-L.jpg"
  },
  {
    "id": 122,
    "isbn": "9780776116273",
    "title": "Lágrimas de la Noche 2858",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Miguel Taylor"
    ],
    "price": 69.98,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780776116273-L.jpg"
  },
  {
    "id": 123,
    "isbn": "9787270817903",
    "title": "Más allá de el Destino 7137",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Miller",
      "Gabriel Anderson"
    ],
    "price": 10.32,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787270817903-L.jpg"
  },
  {
    "id": 124,
    "isbn": "9782689147320",
    "title": "Las Luces de la Montaña 7613",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 85.64,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782689147320-L.jpg"
  },
  {
    "id": 125,
    "isbn": "9782925891529",
    "title": "Las Luces de la Sabiduría 2042",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Jones"
    ],
    "price": 104.47,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782925891529-L.jpg"
  },
  {
    "id": 126,
    "isbn": "9787854389789",
    "title": "El Camino hacia el Destino 5672",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena Wilson"
    ],
    "price": 26.52,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787854389789-L.jpg"
  },
  {
    "id": 127,
    "isbn": "9788766575062",
    "title": "Las Voces de la Travesía 3058",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David González",
      "Gabriel Davis"
    ],
    "price": 112.93,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788766575062-L.jpg"
  },
  {
    "id": 128,
    "isbn": "978771896851",
    "title": "Las Voces de la Ciudad Perdida 6184",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Thomas"
    ],
    "price": 74.51,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978771896851-L.jpg"
  },
  {
    "id": 129,
    "isbn": "9784397957604",
    "title": "Rastros en el Desierto 3970",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Miller"
    ],
    "price": 15.85,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784397957604-L.jpg"
  },
  {
    "id": 130,
    "isbn": "9785554532757",
    "title": "La Búsqueda de las Estrellas 5970",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Williams",
      "Mary Davis"
    ],
    "price": 12.28,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785554532757-L.jpg"
  },
  {
    "id": 131,
    "isbn": "9780452220669",
    "title": "Crónicas de el Desierto 7929",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Wilson"
    ],
    "price": 97.62,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780452220669-L.jpg"
  },
  {
    "id": 132,
    "isbn": "9786600678269",
    "title": "El Legado de la Memoria 7956",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Smith"
    ],
    "price": 103.91,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786600678269-L.jpg"
  },
  {
    "id": 133,
    "isbn": "9781112048654",
    "title": "Vientos de la Eternidad 2369",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Taylor",
      "Carla Taylor"
    ],
    "price": 118.33,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781112048654-L.jpg"
  },
  {
    "id": 134,
    "isbn": "9782339380701",
    "title": "El Camino hacia los Ancestros 5500",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Jones"
    ],
    "price": 116.72,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782339380701-L.jpg"
  },
  {
    "id": 135,
    "isbn": "9781521186725",
    "title": "El Legado de la Esperanza 2492",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Johnson",
      "Mary Martínez"
    ],
    "price": 65.33,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781521186725-L.jpg"
  },
  {
    "id": 136,
    "isbn": "9784914932565",
    "title": "El Legado de la Memoria 6955",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando López",
      "Miguel García"
    ],
    "price": 18.74,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784914932565-L.jpg"
  },
  {
    "id": 137,
    "isbn": "9781103078134",
    "title": "Rastros en la Memoria 6534",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Johnson"
    ],
    "price": 36.22,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781103078134-L.jpg"
  },
  {
    "id": 138,
    "isbn": "9784792719050",
    "title": "Las Voces de la Eternidad 2234",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John Moore"
    ],
    "price": 118.69,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784792719050-L.jpg"
  },
  {
    "id": 139,
    "isbn": "9785977979931",
    "title": "Fragmentos de la Travesía 5840",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía García",
      "Miguel López"
    ],
    "price": 95.01,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785977979931-L.jpg"
  },
  {
    "id": 140,
    "isbn": "9781736892756",
    "title": "Las Voces de la Montaña 3483",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Williams"
    ],
    "price": 19.04,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781736892756-L.jpg"
  },
  {
    "id": 141,
    "isbn": "9780133223408",
    "title": "El Legado de los Ancestros 4841",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Pérez"
    ],
    "price": 23.09,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780133223408-L.jpg"
  },
  {
    "id": 142,
    "isbn": "9788139533422",
    "title": "Vientos de la Sabiduría 683",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Miller"
    ],
    "price": 8.04,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788139533422-L.jpg"
  },
  {
    "id": 143,
    "isbn": "9785760252050",
    "title": "Lágrimas de el Desierto 7846",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Thomas",
      "Valeria Miller"
    ],
    "price": 64.33,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785760252050-L.jpg"
  },
  {
    "id": 144,
    "isbn": "9785115149165",
    "title": "El Guardián de la Memoria 5340",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Sánchez"
    ],
    "price": 22.62,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785115149165-L.jpg"
  },
  {
    "id": 145,
    "isbn": "9782776320230",
    "title": "El Camino hacia la Sabiduría 3377",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Thomas"
    ],
    "price": 115.52,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782776320230-L.jpg"
  },
  {
    "id": 146,
    "isbn": "9783120188445",
    "title": "Bajo el Cielo de el Desierto 3715",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 75.08,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783120188445-L.jpg"
  },
  {
    "id": 147,
    "isbn": "978726890732",
    "title": "El Canto de la Montaña 1372",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Pérez",
      "Lucía Johnson"
    ],
    "price": 77.12,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978726890732-L.jpg"
  },
  {
    "id": 148,
    "isbn": "9782334342230",
    "title": "El Secreto de la Memoria 3345",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Rodríguez"
    ],
    "price": 8.09,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782334342230-L.jpg"
  },
  {
    "id": 149,
    "isbn": "9781367727755",
    "title": "El Eco de los Sueños 6148",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel González",
      "Fernando Martínez"
    ],
    "price": 17.62,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781367727755-L.jpg"
  },
  {
    "id": 150,
    "isbn": "9787600377886",
    "title": "Más allá de los Ancestros 3766",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel García",
      "David Martínez"
    ],
    "price": 9.69,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787600377886-L.jpg"
  },
  {
    "id": 151,
    "isbn": "9782705657758",
    "title": "Crónicas de la Eternidad 4398",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary López",
      "Fernando González"
    ],
    "price": 79.82,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782705657758-L.jpg"
  },
  {
    "id": 152,
    "isbn": "9781242522710",
    "title": "Vientos de la Sabiduría 2882",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel Moore"
    ],
    "price": 25.76,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781242522710-L.jpg"
  },
  {
    "id": 153,
    "isbn": "9786898741768",
    "title": "La Sombra de los Olvidados 1015",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John Brown",
      "Linda Sánchez"
    ],
    "price": 41.73,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786898741768-L.jpg"
  },
  {
    "id": 154,
    "isbn": "9787483035613",
    "title": "El Legado de la Montaña 1593",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Hernández",
      "Linda López"
    ],
    "price": 62.42,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787483035613-L.jpg"
  },
  {
    "id": 155,
    "isbn": "9781997852797",
    "title": "Vientos de el Destino 8520",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Michael Jones"
    ],
    "price": 46.97,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781997852797-L.jpg"
  },
  {
    "id": 156,
    "isbn": "9786549285061",
    "title": "Las Voces de la Eternidad 4372",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Davis"
    ],
    "price": 39.82,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786549285061-L.jpg"
  },
  {
    "id": 157,
    "isbn": "9783948770396",
    "title": "La Búsqueda de los Sueños 2609",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Moore",
      "John González"
    ],
    "price": 38.03,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783948770396-L.jpg"
  },
  {
    "id": 158,
    "isbn": "9781243678317",
    "title": "La Sombra de la Travesía 2433",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Wilson"
    ],
    "price": 113.95,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781243678317-L.jpg"
  },
  {
    "id": 159,
    "isbn": "9789489152172",
    "title": "Fragmentos de la Ciudad Perdida 8696",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Moore",
      "Jorge Johnson"
    ],
    "price": 16.41,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789489152172-L.jpg"
  },
  {
    "id": 160,
    "isbn": "9783774753327",
    "title": "El Misterio de los Ancestros 9457",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert González"
    ],
    "price": 28.41,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783774753327-L.jpg"
  },
  {
    "id": 161,
    "isbn": "9786842436771",
    "title": "Vientos de el Destino 6591",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Martínez"
    ],
    "price": 65.86,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786842436771-L.jpg"
  },
  {
    "id": 162,
    "isbn": "9782254429646",
    "title": "Más allá de los Ancestros 5658",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena González"
    ],
    "price": 101.28,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782254429646-L.jpg"
  },
  {
    "id": 163,
    "isbn": "9785741232675",
    "title": "El Camino hacia la Ciudad Perdida 5386",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel Taylor",
      "Elizabeth Rodríguez"
    ],
    "price": 6.14,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785741232675-L.jpg"
  },
  {
    "id": 164,
    "isbn": "9786485029262",
    "title": "Fragmentos de el Desierto 5984",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Sánchez",
      "Mary Brown"
    ],
    "price": 99.97,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786485029262-L.jpg"
  },
  {
    "id": 165,
    "isbn": "9784433711306",
    "title": "La Búsqueda de los Ancestros 7119",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Sánchez",
      "Jorge Brown"
    ],
    "price": 46.84,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784433711306-L.jpg"
  },
  {
    "id": 166,
    "isbn": "9788433117038",
    "title": "El Eco de la Luna Roja 1331",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Thomas"
    ],
    "price": 114.57,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788433117038-L.jpg"
  },
  {
    "id": 167,
    "isbn": "978116560849",
    "title": "El Canto de la Sabiduría 3106",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 63.3,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978116560849-L.jpg"
  },
  {
    "id": 168,
    "isbn": "978669455238",
    "title": "Espejos de el Tiempo 9246",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Jorge Jones",
      "John Hernández"
    ],
    "price": 74.11,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978669455238-L.jpg"
  },
  {
    "id": 169,
    "isbn": "978771360143",
    "title": "El Guardián de la Verdad 6376",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Davis"
    ],
    "price": 103.67,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978771360143-L.jpg"
  },
  {
    "id": 170,
    "isbn": "9784115390720",
    "title": "Crónicas de la Memoria 7040",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Brown",
      "Valeria Martínez"
    ],
    "price": 72.29,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784115390720-L.jpg"
  },
  {
    "id": 171,
    "isbn": "9788478373987",
    "title": "El Misterio de los Ancestros 5387",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Moore"
    ],
    "price": 85.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788478373987-L.jpg"
  },
  {
    "id": 172,
    "isbn": "9787191566133",
    "title": "El Secreto de la Memoria 3930",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Wilson"
    ],
    "price": 64.26,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787191566133-L.jpg"
  },
  {
    "id": 173,
    "isbn": "9786821181548",
    "title": "El Legado de el Destino 3658",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Hernández",
      "Sofía García"
    ],
    "price": 43.38,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786821181548-L.jpg"
  },
  {
    "id": 174,
    "isbn": "9789950637986",
    "title": "Las Luces de los Olvidados 4243",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Rodríguez"
    ],
    "price": 45.24,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789950637986-L.jpg"
  },
  {
    "id": 175,
    "isbn": "9781675587133",
    "title": "Fragmentos de la Sabiduría 6479",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Smith",
      "Jorge Williams"
    ],
    "price": 16.72,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781675587133-L.jpg"
  },
  {
    "id": 176,
    "isbn": "9788542662870",
    "title": "El Guardián de la Eternidad 6201",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Smith",
      "Valeria Jones"
    ],
    "price": 24.88,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788542662870-L.jpg"
  },
  {
    "id": 177,
    "isbn": "9788834153772",
    "title": "El Guardián de los Ancestros 8009",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés García"
    ],
    "price": 7.39,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788834153772-L.jpg"
  },
  {
    "id": 178,
    "isbn": "9788882198848",
    "title": "Más allá de la Verdad 1779",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Davis"
    ],
    "price": 35.43,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788882198848-L.jpg"
  },
  {
    "id": 179,
    "isbn": "9780893319878",
    "title": "Rastros en la Memoria 7867",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Jones"
    ],
    "price": 67.9,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780893319878-L.jpg"
  },
  {
    "id": 180,
    "isbn": "9781748315304",
    "title": "La Búsqueda de la Montaña 7340",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Brown"
    ],
    "price": 105.8,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781748315304-L.jpg"
  },
  {
    "id": 181,
    "isbn": "9784347281711",
    "title": "El Guardián de la Eternidad 705",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Moore"
    ],
    "price": 108.64,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784347281711-L.jpg"
  },
  {
    "id": 182,
    "isbn": "9789947182284",
    "title": "El Camino hacia las Estrellas 3557",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía González"
    ],
    "price": 46.16,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789947182284-L.jpg"
  },
  {
    "id": 183,
    "isbn": "9785669635701",
    "title": "El Renacer de la Luna Roja 219",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel González"
    ],
    "price": 74.85,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785669635701-L.jpg"
  },
  {
    "id": 184,
    "isbn": "9786339922480",
    "title": "Rastros en los Sueños 2249",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 63.98,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786339922480-L.jpg"
  },
  {
    "id": 185,
    "isbn": "9781380915627",
    "title": "Más allá de las Estrellas 169",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Anderson"
    ],
    "price": 13.84,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781380915627-L.jpg"
  },
  {
    "id": 186,
    "isbn": "9782885759372",
    "title": "Lágrimas de la Justicia 296",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel Brown"
    ],
    "price": 15.51,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782885759372-L.jpg"
  },
  {
    "id": 187,
    "isbn": "9782167166652",
    "title": "El Legado de la Memoria 8844",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Hernández",
      "Mary Martínez"
    ],
    "price": 118.4,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782167166652-L.jpg"
  },
  {
    "id": 188,
    "isbn": "9782619052229",
    "title": "Crónicas de la Montaña 387",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Smith"
    ],
    "price": 41.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782619052229-L.jpg"
  },
  {
    "id": 189,
    "isbn": "978376226396",
    "title": "El Camino hacia la Esperanza 5681",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Taylor"
    ],
    "price": 54.32,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978376226396-L.jpg"
  },
  {
    "id": 190,
    "isbn": "9783634213008",
    "title": "Las Voces de la Verdad 8916",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Smith"
    ],
    "price": 7.86,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783634213008-L.jpg"
  },
  {
    "id": 191,
    "isbn": "9789656188904",
    "title": "El Canto de el Destino 4349",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Davis"
    ],
    "price": 72.35,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789656188904-L.jpg"
  },
  {
    "id": 192,
    "isbn": "9788428587235",
    "title": "El Camino hacia la Eternidad 7485",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Wilson"
    ],
    "price": 93.88,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788428587235-L.jpg"
  },
  {
    "id": 193,
    "isbn": "978279153401",
    "title": "La Búsqueda de la Justicia 6255",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel Brown",
      "Sofía Hernández"
    ],
    "price": 44.39,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978279153401-L.jpg"
  },
  {
    "id": 194,
    "isbn": "9788796981291",
    "title": "El Secreto de la Ciudad Perdida 6062",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Rodríguez",
      "Michael García"
    ],
    "price": 92.34,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788796981291-L.jpg"
  },
  {
    "id": 195,
    "isbn": "9781741817324",
    "title": "Las Voces de la Esperanza 8422",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Johnson",
      "David Rodríguez"
    ],
    "price": 84.41,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781741817324-L.jpg"
  },
  {
    "id": 196,
    "isbn": "9780171869811",
    "title": "El Renacer de la Noche 8619",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Davis",
      "Sofía García"
    ],
    "price": 18.8,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780171869811-L.jpg"
  },
  {
    "id": 197,
    "isbn": "9783623277592",
    "title": "El Renacer de el Desierto 1882",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Anderson"
    ],
    "price": 14.44,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783623277592-L.jpg"
  },
  {
    "id": 198,
    "isbn": "9788586751257",
    "title": "Más allá de la Esperanza 5413",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Moore",
      "Sofía Taylor"
    ],
    "price": 117.0,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788586751257-L.jpg"
  },
  {
    "id": 199,
    "isbn": "9789608628915",
    "title": "Vientos de la Memoria 4305",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Miller",
      "Patricia Davis"
    ],
    "price": 108.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789608628915-L.jpg"
  },
  {
    "id": 200,
    "isbn": "9786629180521",
    "title": "Las Luces de la Ciudad Perdida 279",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John Anderson",
      "Valeria Rodríguez"
    ],
    "price": 89.94,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786629180521-L.jpg"
  },
  {
    "id": 201,
    "isbn": "9786842933454",
    "title": "La Búsqueda de la Montaña 2283",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Jones"
    ],
    "price": 90.65,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786842933454-L.jpg"
  },
  {
    "id": 202,
    "isbn": "9786502726075",
    "title": "Las Voces de la Justicia 1829",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Johnson"
    ],
    "price": 108.91,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786502726075-L.jpg"
  },
  {
    "id": 203,
    "isbn": "9784426480264",
    "title": "El Secreto de la Esperanza 1207",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Hernández",
      "Valeria Thomas"
    ],
    "price": 113.43,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784426480264-L.jpg"
  },
  {
    "id": 204,
    "isbn": "9786410056790",
    "title": "Espejos de el Horizonte 9339",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Sánchez",
      "Valeria Thomas"
    ],
    "price": 12.43,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786410056790-L.jpg"
  },
  {
    "id": 205,
    "isbn": "9787645946245",
    "title": "Bajo el Cielo de el Desierto 86",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Davis"
    ],
    "price": 6.37,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787645946245-L.jpg"
  },
  {
    "id": 206,
    "isbn": "9784495988784",
    "title": "El Guardián de la Travesía 6138",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria López",
      "Patricia Johnson"
    ],
    "price": 78.79,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784495988784-L.jpg"
  },
  {
    "id": 207,
    "isbn": "978154734774",
    "title": "El Canto de la Ciudad Perdida 8621",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 70.18,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978154734774-L.jpg"
  },
  {
    "id": 208,
    "isbn": "9782890176447",
    "title": "El Camino hacia el Destino 2577",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Jones",
      "Mary Thomas"
    ],
    "price": 103.73,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782890176447-L.jpg"
  },
  {
    "id": 209,
    "isbn": "9780121870010",
    "title": "Bajo el Cielo de la Montaña 2764",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Davis"
    ],
    "price": 100.35,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780121870010-L.jpg"
  },
  {
    "id": 210,
    "isbn": "9789956658572",
    "title": "Crónicas de la Ciudad Perdida 5247",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel Anderson",
      "Mary Brown"
    ],
    "price": 79.35,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789956658572-L.jpg"
  },
  {
    "id": 211,
    "isbn": "9782459524627",
    "title": "Vientos de la Sabiduría 2270",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Davis",
      "Carla Moore"
    ],
    "price": 108.99,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782459524627-L.jpg"
  },
  {
    "id": 212,
    "isbn": "978717979134",
    "title": "El Legado de los Ancestros 7246",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 69.54,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978717979134-L.jpg"
  },
  {
    "id": 213,
    "isbn": "9785771642543",
    "title": "El Canto de la Eternidad 2776",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Anderson",
      "Linda Sánchez"
    ],
    "price": 16.17,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785771642543-L.jpg"
  },
  {
    "id": 214,
    "isbn": "9784400992530",
    "title": "Lágrimas de la Travesía 7490",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Pérez",
      "Fernando Anderson"
    ],
    "price": 65.04,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784400992530-L.jpg"
  },
  {
    "id": 215,
    "isbn": "9787428686481",
    "title": "El Canto de el Horizonte 8522",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Anderson",
      "Valeria Pérez"
    ],
    "price": 117.71,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787428686481-L.jpg"
  },
  {
    "id": 216,
    "isbn": "9785483549321",
    "title": "Fragmentos de el Viento 6195",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Davis",
      "Patricia Smith"
    ],
    "price": 5.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785483549321-L.jpg"
  },
  {
    "id": 217,
    "isbn": "9786652863231",
    "title": "Lágrimas de la Luna Roja 8027",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Johnson",
      "Fernando Martínez"
    ],
    "price": 38.58,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786652863231-L.jpg"
  },
  {
    "id": 218,
    "isbn": "978073926722",
    "title": "El Secreto de la Verdad 2526",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Johnson"
    ],
    "price": 44.24,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978073926722-L.jpg"
  },
  {
    "id": 219,
    "isbn": "9781547089567",
    "title": "El Canto de la Esperanza 1638",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Smith",
      "Carla Johnson"
    ],
    "price": 69.71,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781547089567-L.jpg"
  },
  {
    "id": 220,
    "isbn": "9783776641059",
    "title": "El Canto de la Sabiduría 3780",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Davis",
      "Miguel Hernández"
    ],
    "price": 24.27,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783776641059-L.jpg"
  },
  {
    "id": 221,
    "isbn": "9787293618136",
    "title": "Más allá de la Memoria 4174",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Miller",
      "Andrés Anderson"
    ],
    "price": 111.16,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787293618136-L.jpg"
  },
  {
    "id": 222,
    "isbn": "9784701253903",
    "title": "Espejos de los Olvidados 5783",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Pérez",
      "Elizabeth Taylor"
    ],
    "price": 12.86,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784701253903-L.jpg"
  },
  {
    "id": 223,
    "isbn": "9783687022497",
    "title": "Rastros en la Ciudad Perdida 781",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Jones",
      "Fernando Johnson"
    ],
    "price": 70.34,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783687022497-L.jpg"
  },
  {
    "id": 224,
    "isbn": "978636427273",
    "title": "Crónicas de el Destino 6215",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Mary Moore",
      "Michael Wilson"
    ],
    "price": 101.61,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978636427273-L.jpg"
  },
  {
    "id": 225,
    "isbn": "9789798050138",
    "title": "Más allá de los Ancestros 3606",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Williams"
    ],
    "price": 77.39,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789798050138-L.jpg"
  },
  {
    "id": 226,
    "isbn": "9781272770921",
    "title": "El Camino hacia la Sabiduría 293",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Pérez",
      "Isabel García"
    ],
    "price": 34.34,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781272770921-L.jpg"
  },
  {
    "id": 227,
    "isbn": "9788983866233",
    "title": "Las Luces de los Ancestros 578",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 15.6,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788983866233-L.jpg"
  },
  {
    "id": 228,
    "isbn": "978912744953",
    "title": "La Sombra de el Desierto 6321",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Thomas",
      "Elizabeth Wilson"
    ],
    "price": 107.53,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978912744953-L.jpg"
  },
  {
    "id": 229,
    "isbn": "9788770919111",
    "title": "Vientos de el Destino 3801",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Wilson",
      "Elena Thomas"
    ],
    "price": 56.11,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788770919111-L.jpg"
  },
  {
    "id": 230,
    "isbn": "978897570039",
    "title": "El Guardián de los Sueños 512",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Anderson",
      "David Smith"
    ],
    "price": 46.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978897570039-L.jpg"
  },
  {
    "id": 231,
    "isbn": "9785413646649",
    "title": "La Búsqueda de la Esperanza 2739",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Smith",
      "Isabel García"
    ],
    "price": 51.01,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785413646649-L.jpg"
  },
  {
    "id": 232,
    "isbn": "9780677259536",
    "title": "Las Voces de el Destino 911",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Johnson",
      "Jorge González"
    ],
    "price": 103.96,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780677259536-L.jpg"
  },
  {
    "id": 233,
    "isbn": "9786430576032",
    "title": "El Canto de la Eternidad 6586",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Rodríguez",
      "John Williams"
    ],
    "price": 24.82,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786430576032-L.jpg"
  },
  {
    "id": 234,
    "isbn": "9783447763936",
    "title": "El Misterio de el Destino 7399",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Anderson"
    ],
    "price": 47.99,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783447763936-L.jpg"
  },
  {
    "id": 235,
    "isbn": "9786632711347",
    "title": "La Sombra de el Tiempo 9128",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "David Pérez"
    ],
    "price": 31.65,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786632711347-L.jpg"
  },
  {
    "id": 236,
    "isbn": "9788546529315",
    "title": "El Renacer de la Montaña 9045",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Sánchez"
    ],
    "price": 53.83,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788546529315-L.jpg"
  },
  {
    "id": 237,
    "isbn": "9782609378452",
    "title": "El Legado de los Sueños 6278",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Rodríguez",
      "Fernando Pérez"
    ],
    "price": 103.22,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782609378452-L.jpg"
  },
  {
    "id": 238,
    "isbn": "9782135993563",
    "title": "Las Luces de la Montaña 2734",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando González"
    ],
    "price": 61.28,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782135993563-L.jpg"
  },
  {
    "id": 239,
    "isbn": "9783792150405",
    "title": "El Guardián de la Justicia 8816",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Jones"
    ],
    "price": 87.22,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783792150405-L.jpg"
  },
  {
    "id": 240,
    "isbn": "9785157371685",
    "title": "El Misterio de la Luna Roja 2465",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Wilson",
      "Michael Thomas"
    ],
    "price": 40.67,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785157371685-L.jpg"
  },
  {
    "id": 241,
    "isbn": "9781306647663",
    "title": "Lágrimas de el Tiempo 5102",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Wilson",
      "David Brown"
    ],
    "price": 42.69,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781306647663-L.jpg"
  },
  {
    "id": 242,
    "isbn": "978643640049",
    "title": "El Misterio de el Tiempo 2136",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Smith"
    ],
    "price": 7.68,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978643640049-L.jpg"
  },
  {
    "id": 243,
    "isbn": "9786433088594",
    "title": "El Eco de el Horizonte 2603",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Rodríguez"
    ],
    "price": 30.4,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786433088594-L.jpg"
  },
  {
    "id": 244,
    "isbn": "9787872978095",
    "title": "Las Luces de la Sabiduría 5669",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía Brown",
      "Isabel Thomas"
    ],
    "price": 60.18,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787872978095-L.jpg"
  },
  {
    "id": 245,
    "isbn": "9784963261920",
    "title": "El Misterio de la Verdad 8025",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Johnson"
    ],
    "price": 47.61,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784963261920-L.jpg"
  },
  {
    "id": 246,
    "isbn": "9781867945697",
    "title": "Espejos de la Sabiduría 6031",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel López"
    ],
    "price": 40.29,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781867945697-L.jpg"
  },
  {
    "id": 247,
    "isbn": "9784182261046",
    "title": "Las Voces de la Noche 3104",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 30.58,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784182261046-L.jpg"
  },
  {
    "id": 248,
    "isbn": "9783846149492",
    "title": "Rastros en la Eternidad 8536",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Brown",
      "Patricia Brown"
    ],
    "price": 68.65,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783846149492-L.jpg"
  },
  {
    "id": 249,
    "isbn": "9786730789514",
    "title": "Lágrimas de la Esperanza 6590",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Davis",
      "Robert Williams"
    ],
    "price": 12.6,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786730789514-L.jpg"
  },
  {
    "id": 250,
    "isbn": "9780752122410",
    "title": "Espejos de la Verdad 7551",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 36.31,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780752122410-L.jpg"
  },
  {
    "id": 251,
    "isbn": "9780427241149",
    "title": "Espejos de el Destino 2406",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia García",
      "Carla Thomas"
    ],
    "price": 93.71,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780427241149-L.jpg"
  },
  {
    "id": 252,
    "isbn": "9786464054599",
    "title": "El Camino hacia la Noche 5402",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Wilson"
    ],
    "price": 28.63,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786464054599-L.jpg"
  },
  {
    "id": 253,
    "isbn": "9782376332909",
    "title": "La Búsqueda de la Verdad 8745",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés García"
    ],
    "price": 70.17,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782376332909-L.jpg"
  },
  {
    "id": 254,
    "isbn": "978822544708",
    "title": "Bajo el Cielo de el Destino 4807",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Martínez"
    ],
    "price": 88.0,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978822544708-L.jpg"
  },
  {
    "id": 255,
    "isbn": "9789600417739",
    "title": "Rastros en el Tiempo 3003",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John López"
    ],
    "price": 69.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789600417739-L.jpg"
  },
  {
    "id": 256,
    "isbn": "9787618143411",
    "title": "El Renacer de la Sabiduría 4491",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Miller"
    ],
    "price": 76.17,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787618143411-L.jpg"
  },
  {
    "id": 257,
    "isbn": "9785960625975",
    "title": "El Canto de la Noche 3809",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Wilson",
      "Carla Martínez"
    ],
    "price": 104.84,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785960625975-L.jpg"
  },
  {
    "id": 258,
    "isbn": "9785819769737",
    "title": "Lágrimas de los Ancestros 1900",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Johnson",
      "Patricia Rodríguez"
    ],
    "price": 61.55,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785819769737-L.jpg"
  },
  {
    "id": 259,
    "isbn": "9780832026546",
    "title": "El Canto de los Ancestros 5687",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Martínez"
    ],
    "price": 23.68,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780832026546-L.jpg"
  },
  {
    "id": 260,
    "isbn": "9785230557166",
    "title": "Fragmentos de los Ancestros 5079",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Martínez",
      "Isabel Smith"
    ],
    "price": 9.73,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785230557166-L.jpg"
  },
  {
    "id": 261,
    "isbn": "9785713564506",
    "title": "El Secreto de el Viento 4801",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Thomas",
      "Fernando González"
    ],
    "price": 25.7,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785713564506-L.jpg"
  },
  {
    "id": 262,
    "isbn": "9782540019056",
    "title": "El Renacer de la Montaña 6866",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Smith",
      "Lucía Miller"
    ],
    "price": 77.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782540019056-L.jpg"
  },
  {
    "id": 263,
    "isbn": "9784185136204",
    "title": "El Legado de la Esperanza 8661",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Moore",
      "Miguel Miller"
    ],
    "price": 23.77,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784185136204-L.jpg"
  },
  {
    "id": 264,
    "isbn": "9785282936841",
    "title": "La Búsqueda de la Sabiduría 1603",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Smith"
    ],
    "price": 14.82,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785282936841-L.jpg"
  },
  {
    "id": 265,
    "isbn": "9789893264065",
    "title": "Espejos de la Montaña 6664",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Sánchez"
    ],
    "price": 115.26,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789893264065-L.jpg"
  },
  {
    "id": 266,
    "isbn": "9785390160268",
    "title": "El Secreto de los Sueños 5009",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla López",
      "Sofía Rodríguez"
    ],
    "price": 21.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785390160268-L.jpg"
  },
  {
    "id": 267,
    "isbn": "9787193889681",
    "title": "Lágrimas de la Noche 8539",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 91.27,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787193889681-L.jpg"
  },
  {
    "id": 268,
    "isbn": "9787243348113",
    "title": "La Sombra de el Desierto 6709",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Smith"
    ],
    "price": 31.02,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787243348113-L.jpg"
  },
  {
    "id": 269,
    "isbn": "9785255524334",
    "title": "Bajo el Cielo de la Memoria 854",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Williams"
    ],
    "price": 113.09,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785255524334-L.jpg"
  },
  {
    "id": 270,
    "isbn": "9784247541939",
    "title": "El Canto de los Sueños 4022",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Lucía Brown"
    ],
    "price": 5.91,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784247541939-L.jpg"
  },
  {
    "id": 271,
    "isbn": "9783786758846",
    "title": "La Sombra de la Noche 7856",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Rodríguez",
      "Michael Miller"
    ],
    "price": 63.03,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783786758846-L.jpg"
  },
  {
    "id": 272,
    "isbn": "9784179657012",
    "title": "Espejos de la Justicia 454",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Moore",
      "Ricardo González"
    ],
    "price": 15.3,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784179657012-L.jpg"
  },
  {
    "id": 273,
    "isbn": "9789951743990",
    "title": "Las Luces de el Horizonte 5032",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Smith",
      "Ricardo Jones"
    ],
    "price": 68.82,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789951743990-L.jpg"
  },
  {
    "id": 274,
    "isbn": "9781630988098",
    "title": "El Camino hacia el Tiempo 5043",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Williams"
    ],
    "price": 83.6,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781630988098-L.jpg"
  },
  {
    "id": 275,
    "isbn": "9782923651620",
    "title": "Crónicas de la Memoria 1558",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Williams"
    ],
    "price": 103.72,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782923651620-L.jpg"
  },
  {
    "id": 276,
    "isbn": "978813360441",
    "title": "Fragmentos de la Noche 4634",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Wilson",
      "Isabel Pérez"
    ],
    "price": 23.57,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978813360441-L.jpg"
  },
  {
    "id": 277,
    "isbn": "9784211053376",
    "title": "Las Voces de el Desierto 5439",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Sánchez"
    ],
    "price": 47.17,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784211053376-L.jpg"
  },
  {
    "id": 278,
    "isbn": "9787639297629",
    "title": "Rastros en el Viento 6643",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Pérez",
      "Miguel Wilson"
    ],
    "price": 5.72,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787639297629-L.jpg"
  },
  {
    "id": 279,
    "isbn": "9787262178227",
    "title": "Vientos de la Luna Roja 1625",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael González",
      "Linda Smith"
    ],
    "price": 93.22,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787262178227-L.jpg"
  },
  {
    "id": 280,
    "isbn": "9789697092130",
    "title": "Vientos de la Justicia 4694",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Sánchez"
    ],
    "price": 7.85,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789697092130-L.jpg"
  },
  {
    "id": 281,
    "isbn": "9789114694978",
    "title": "El Secreto de los Sueños 7931",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 112.85,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789114694978-L.jpg"
  },
  {
    "id": 282,
    "isbn": "9786575741630",
    "title": "Más allá de los Olvidados 9962",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Johnson",
      "Mary Williams"
    ],
    "price": 108.32,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786575741630-L.jpg"
  },
  {
    "id": 283,
    "isbn": "9784888360487",
    "title": "Más allá de los Olvidados 70",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Miller"
    ],
    "price": 25.86,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784888360487-L.jpg"
  },
  {
    "id": 284,
    "isbn": "9783971126597",
    "title": "El Secreto de el Destino 460",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Jones"
    ],
    "price": 9.93,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783971126597-L.jpg"
  },
  {
    "id": 285,
    "isbn": "9784835932262",
    "title": "La Búsqueda de la Luna Roja 5283",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Thomas"
    ],
    "price": 10.6,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784835932262-L.jpg"
  },
  {
    "id": 286,
    "isbn": "978287973077",
    "title": "Espejos de el Destino 1018",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Johnson"
    ],
    "price": 27.68,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978287973077-L.jpg"
  },
  {
    "id": 287,
    "isbn": "9782408774387",
    "title": "Lágrimas de la Verdad 24",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Martínez",
      "Gabriel Johnson"
    ],
    "price": 60.55,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782408774387-L.jpg"
  },
  {
    "id": 288,
    "isbn": "9781859945292",
    "title": "La Búsqueda de el Tiempo 8228",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Davis"
    ],
    "price": 38.41,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781859945292-L.jpg"
  },
  {
    "id": 289,
    "isbn": "9783549895108",
    "title": "El Misterio de el Viento 239",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Johnson"
    ],
    "price": 48.9,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783549895108-L.jpg"
  },
  {
    "id": 290,
    "isbn": "9786856137893",
    "title": "Fragmentos de el Horizonte 236",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Johnson",
      "Valeria Hernández"
    ],
    "price": 10.94,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786856137893-L.jpg"
  },
  {
    "id": 291,
    "isbn": "9782860982108",
    "title": "Espejos de el Destino 3595",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Taylor"
    ],
    "price": 47.08,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782860982108-L.jpg"
  },
  {
    "id": 292,
    "isbn": "9788888494791",
    "title": "La Búsqueda de la Eternidad 381",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Wilson",
      "David Rodríguez"
    ],
    "price": 62.25,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788888494791-L.jpg"
  },
  {
    "id": 293,
    "isbn": "978527127374",
    "title": "Espejos de la Esperanza 5773",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Miller"
    ],
    "price": 41.62,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978527127374-L.jpg"
  },
  {
    "id": 294,
    "isbn": "978852752474",
    "title": "La Sombra de la Sabiduría 6352",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Brown"
    ],
    "price": 92.22,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978852752474-L.jpg"
  },
  {
    "id": 295,
    "isbn": "9789176381731",
    "title": "El Secreto de la Noche 1942",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Anderson",
      "Valeria Moore"
    ],
    "price": 34.58,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789176381731-L.jpg"
  },
  {
    "id": 296,
    "isbn": "978749614742",
    "title": "Bajo el Cielo de la Noche 8073",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge García"
    ],
    "price": 34.88,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978749614742-L.jpg"
  },
  {
    "id": 297,
    "isbn": "9782248437855",
    "title": "Vientos de la Memoria 2056",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Linda Miller",
      "Carla Pérez"
    ],
    "price": 113.45,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782248437855-L.jpg"
  },
  {
    "id": 298,
    "isbn": "9782925971061",
    "title": "El Renacer de la Memoria 2478",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Hernández"
    ],
    "price": 19.74,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782925971061-L.jpg"
  },
  {
    "id": 299,
    "isbn": "9788124078907",
    "title": "Vientos de la Verdad 1775",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth González",
      "Mary González"
    ],
    "price": 22.15,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788124078907-L.jpg"
  },
  {
    "id": 300,
    "isbn": "9781701167407",
    "title": "El Misterio de la Noche 7935",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 61.07,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781701167407-L.jpg"
  },
  {
    "id": 301,
    "isbn": "9784990574369",
    "title": "El Eco de los Olvidados 3656",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 64.16,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784990574369-L.jpg"
  },
  {
    "id": 302,
    "isbn": "9788595478589",
    "title": "Lágrimas de la Memoria 1946",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Rodríguez",
      "Elena Hernández"
    ],
    "price": 61.06,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788595478589-L.jpg"
  },
  {
    "id": 303,
    "isbn": "9789213826256",
    "title": "Vientos de el Tiempo 4251",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Brown",
      "Elizabeth Sánchez"
    ],
    "price": 81.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789213826256-L.jpg"
  },
  {
    "id": 304,
    "isbn": "9782772340034",
    "title": "Rastros en el Tiempo 2434",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Pérez",
      "Patricia García"
    ],
    "price": 40.35,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782772340034-L.jpg"
  },
  {
    "id": 305,
    "isbn": "978987426833",
    "title": "Espejos de la Esperanza 7702",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Moore",
      "Isabel Taylor"
    ],
    "price": 5.87,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978987426833-L.jpg"
  },
  {
    "id": 306,
    "isbn": "9786226733755",
    "title": "Bajo el Cielo de el Desierto 5177",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Williams",
      "Carla López"
    ],
    "price": 41.04,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786226733755-L.jpg"
  },
  {
    "id": 307,
    "isbn": "9786861117378",
    "title": "El Camino hacia el Tiempo 9075",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Anderson"
    ],
    "price": 17.7,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786861117378-L.jpg"
  },
  {
    "id": 308,
    "isbn": "9782759455928",
    "title": "Crónicas de la Memoria 7631",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés García",
      "Miguel Johnson"
    ],
    "price": 42.48,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782759455928-L.jpg"
  },
  {
    "id": 309,
    "isbn": "9782275190181",
    "title": "El Legado de el Viento 7442",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Hernández",
      "Michael Johnson"
    ],
    "price": 23.78,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782275190181-L.jpg"
  },
  {
    "id": 310,
    "isbn": "9789938188622",
    "title": "El Secreto de la Ciudad Perdida 9919",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Williams",
      "David Jones"
    ],
    "price": 101.15,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789938188622-L.jpg"
  },
  {
    "id": 311,
    "isbn": "9786320187430",
    "title": "Espejos de las Estrellas 1184",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Rodríguez",
      "John Smith"
    ],
    "price": 119.18,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786320187430-L.jpg"
  },
  {
    "id": 312,
    "isbn": "9782997472442",
    "title": "La Búsqueda de la Luna Roja 5542",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Anderson"
    ],
    "price": 107.74,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782997472442-L.jpg"
  },
  {
    "id": 313,
    "isbn": "9783557261223",
    "title": "Las Voces de la Esperanza 3294",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Moore",
      "Robert López"
    ],
    "price": 22.49,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783557261223-L.jpg"
  },
  {
    "id": 314,
    "isbn": "9788453615767",
    "title": "El Canto de las Estrellas 9828",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Miller"
    ],
    "price": 55.15,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788453615767-L.jpg"
  },
  {
    "id": 315,
    "isbn": "9787761996025",
    "title": "El Misterio de el Viento 5592",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Anderson"
    ],
    "price": 30.0,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787761996025-L.jpg"
  },
  {
    "id": 316,
    "isbn": "9780651679770",
    "title": "Las Voces de la Ciudad Perdida 3657",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 87.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780651679770-L.jpg"
  },
  {
    "id": 317,
    "isbn": "9789300977687",
    "title": "El Canto de la Verdad 3614",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Rodríguez",
      "Lucía López"
    ],
    "price": 114.79,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789300977687-L.jpg"
  },
  {
    "id": 318,
    "isbn": "9782166823433",
    "title": "El Camino hacia la Memoria 2008",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael García"
    ],
    "price": 63.68,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782166823433-L.jpg"
  },
  {
    "id": 319,
    "isbn": "9786681090820",
    "title": "Las Voces de la Eternidad 3437",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Davis"
    ],
    "price": 109.74,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786681090820-L.jpg"
  },
  {
    "id": 320,
    "isbn": "9781884725869",
    "title": "El Secreto de los Sueños 511",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Taylor",
      "John Rodríguez"
    ],
    "price": 88.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781884725869-L.jpg"
  },
  {
    "id": 321,
    "isbn": "9789320632412",
    "title": "Bajo el Cielo de la Noche 2912",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Anderson"
    ],
    "price": 81.21,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789320632412-L.jpg"
  },
  {
    "id": 322,
    "isbn": "9780879780203",
    "title": "Lágrimas de la Eternidad 1503",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Wilson"
    ],
    "price": 83.12,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780879780203-L.jpg"
  },
  {
    "id": 323,
    "isbn": "9788919588338",
    "title": "El Camino hacia el Viento 2559",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Wilson"
    ],
    "price": 13.72,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788919588338-L.jpg"
  },
  {
    "id": 324,
    "isbn": "978770913160",
    "title": "El Legado de la Ciudad Perdida 1918",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David García",
      "Elizabeth Rodríguez"
    ],
    "price": 98.61,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978770913160-L.jpg"
  },
  {
    "id": 325,
    "isbn": "9780551074477",
    "title": "Lágrimas de los Olvidados 6335",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary López",
      "Lucía Rodríguez"
    ],
    "price": 89.7,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780551074477-L.jpg"
  },
  {
    "id": 326,
    "isbn": "9781692663988",
    "title": "Lágrimas de los Sueños 691",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando González",
      "Andrés García"
    ],
    "price": 46.39,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781692663988-L.jpg"
  },
  {
    "id": 327,
    "isbn": "9784432056484",
    "title": "Fragmentos de la Verdad 8079",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Davis",
      "Robert Jones"
    ],
    "price": 28.31,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784432056484-L.jpg"
  },
  {
    "id": 328,
    "isbn": "9781106030405",
    "title": "La Sombra de los Sueños 1522",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Pérez",
      "Michael García"
    ],
    "price": 68.65,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781106030405-L.jpg"
  },
  {
    "id": 329,
    "isbn": "9782116585787",
    "title": "Crónicas de las Estrellas 8426",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena Moore"
    ],
    "price": 43.09,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782116585787-L.jpg"
  },
  {
    "id": 330,
    "isbn": "9782786443837",
    "title": "Rastros en la Sabiduría 3240",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Rodríguez"
    ],
    "price": 34.02,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782786443837-L.jpg"
  },
  {
    "id": 331,
    "isbn": "9782371172753",
    "title": "Las Voces de la Luna Roja 4379",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Taylor",
      "Ricardo Anderson"
    ],
    "price": 67.9,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782371172753-L.jpg"
  },
  {
    "id": 332,
    "isbn": "9787967656563",
    "title": "Las Voces de el Destino 2852",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Smith",
      "John Johnson"
    ],
    "price": 90.69,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787967656563-L.jpg"
  },
  {
    "id": 333,
    "isbn": "9782715484139",
    "title": "El Renacer de la Montaña 9241",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Moore"
    ],
    "price": 13.16,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782715484139-L.jpg"
  },
  {
    "id": 334,
    "isbn": "9785784559401",
    "title": "El Eco de la Justicia 6796",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando López",
      "Robert Brown"
    ],
    "price": 109.67,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785784559401-L.jpg"
  },
  {
    "id": 335,
    "isbn": "9785505685907",
    "title": "Las Luces de la Verdad 7660",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Moore"
    ],
    "price": 83.81,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785505685907-L.jpg"
  },
  {
    "id": 336,
    "isbn": "9786578367561",
    "title": "El Renacer de la Verdad 8118",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Williams"
    ],
    "price": 46.04,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786578367561-L.jpg"
  },
  {
    "id": 337,
    "isbn": "9780541793524",
    "title": "El Misterio de la Esperanza 4761",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo López"
    ],
    "price": 23.41,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780541793524-L.jpg"
  },
  {
    "id": 338,
    "isbn": "9786462138277",
    "title": "Lágrimas de la Esperanza 2875",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Jones",
      "Patricia Taylor"
    ],
    "price": 25.97,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786462138277-L.jpg"
  },
  {
    "id": 339,
    "isbn": "9783255495753",
    "title": "El Legado de los Sueños 5724",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Martínez"
    ],
    "price": 79.59,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783255495753-L.jpg"
  },
  {
    "id": 340,
    "isbn": "9783371240237",
    "title": "Espejos de los Sueños 1797",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Jones"
    ],
    "price": 12.36,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783371240237-L.jpg"
  },
  {
    "id": 341,
    "isbn": "9785688525205",
    "title": "El Guardián de los Sueños 3477",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Thomas",
      "Mary Brown"
    ],
    "price": 80.58,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785688525205-L.jpg"
  },
  {
    "id": 342,
    "isbn": "9786260785741",
    "title": "Espejos de la Esperanza 9441",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 110.18,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786260785741-L.jpg"
  },
  {
    "id": 343,
    "isbn": "9782848844763",
    "title": "Fragmentos de la Ciudad Perdida 3237",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Davis",
      "Patricia Pérez"
    ],
    "price": 48.5,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782848844763-L.jpg"
  },
  {
    "id": 344,
    "isbn": "9783120231202",
    "title": "Más allá de la Esperanza 3864",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 101.57,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783120231202-L.jpg"
  },
  {
    "id": 345,
    "isbn": "9781270383314",
    "title": "El Canto de la Memoria 4553",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Hernández"
    ],
    "price": 87.08,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781270383314-L.jpg"
  },
  {
    "id": 346,
    "isbn": "9783237898435",
    "title": "El Legado de la Esperanza 8675",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Martínez"
    ],
    "price": 66.22,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783237898435-L.jpg"
  },
  {
    "id": 347,
    "isbn": "9789424656109",
    "title": "La Búsqueda de el Horizonte 4782",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Williams"
    ],
    "price": 55.88,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789424656109-L.jpg"
  },
  {
    "id": 348,
    "isbn": "9782867640643",
    "title": "Crónicas de la Noche 1682",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Anderson"
    ],
    "price": 100.0,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782867640643-L.jpg"
  },
  {
    "id": 349,
    "isbn": "9785421569039",
    "title": "El Canto de la Montaña 2558",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Williams"
    ],
    "price": 67.96,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785421569039-L.jpg"
  },
  {
    "id": 350,
    "isbn": "9784667644494",
    "title": "El Renacer de el Destino 9217",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Johnson",
      "Ricardo Taylor"
    ],
    "price": 88.8,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784667644494-L.jpg"
  },
  {
    "id": 351,
    "isbn": "9785663896238",
    "title": "El Misterio de la Memoria 6718",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Anderson",
      "Mary Thomas"
    ],
    "price": 61.38,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785663896238-L.jpg"
  },
  {
    "id": 352,
    "isbn": "9783557870616",
    "title": "El Canto de la Ciudad Perdida 8588",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Smith"
    ],
    "price": 14.33,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783557870616-L.jpg"
  },
  {
    "id": 353,
    "isbn": "9786938814759",
    "title": "El Renacer de la Travesía 9483",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Rodríguez"
    ],
    "price": 76.0,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786938814759-L.jpg"
  },
  {
    "id": 354,
    "isbn": "9782659239031",
    "title": "El Camino hacia las Estrellas 9901",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Hernández",
      "Mary Martínez"
    ],
    "price": 88.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782659239031-L.jpg"
  },
  {
    "id": 355,
    "isbn": "9789908787824",
    "title": "El Canto de la Sabiduría 1653",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía García",
      "Fernando Johnson"
    ],
    "price": 111.15,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789908787824-L.jpg"
  },
  {
    "id": 356,
    "isbn": "9789758041305",
    "title": "La Sombra de el Viento 3504",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Martínez",
      "Ricardo Anderson"
    ],
    "price": 105.5,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789758041305-L.jpg"
  },
  {
    "id": 357,
    "isbn": "9784335391279",
    "title": "Más allá de la Verdad 7028",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Moore"
    ],
    "price": 33.07,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784335391279-L.jpg"
  },
  {
    "id": 358,
    "isbn": "9785145923995",
    "title": "Crónicas de los Olvidados 3902",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Smith"
    ],
    "price": 116.81,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785145923995-L.jpg"
  },
  {
    "id": 359,
    "isbn": "9780343427443",
    "title": "El Eco de los Ancestros 5022",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Pérez",
      "Ricardo Thomas"
    ],
    "price": 42.08,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780343427443-L.jpg"
  },
  {
    "id": 360,
    "isbn": "9785469259800",
    "title": "El Eco de la Luna Roja 3003",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Miller"
    ],
    "price": 29.39,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785469259800-L.jpg"
  },
  {
    "id": 361,
    "isbn": "9786104419184",
    "title": "Bajo el Cielo de la Luna Roja 9253",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Rodríguez",
      "Fernando Williams"
    ],
    "price": 19.78,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786104419184-L.jpg"
  },
  {
    "id": 362,
    "isbn": "9785839759077",
    "title": "Las Voces de la Esperanza 6614",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Miller"
    ],
    "price": 82.1,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785839759077-L.jpg"
  },
  {
    "id": 363,
    "isbn": "9781832290340",
    "title": "El Renacer de la Montaña 3890",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Anderson"
    ],
    "price": 10.83,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781832290340-L.jpg"
  },
  {
    "id": 364,
    "isbn": "9783418197746",
    "title": "Vientos de los Sueños 5936",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "David Rodríguez"
    ],
    "price": 106.72,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783418197746-L.jpg"
  },
  {
    "id": 365,
    "isbn": "9786513731112",
    "title": "El Canto de la Esperanza 116",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Williams",
      "Elizabeth Pérez"
    ],
    "price": 59.89,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786513731112-L.jpg"
  },
  {
    "id": 366,
    "isbn": "9781625753748",
    "title": "La Búsqueda de la Ciudad Perdida 5914",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Rodríguez"
    ],
    "price": 39.9,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781625753748-L.jpg"
  },
  {
    "id": 367,
    "isbn": "9789876429962",
    "title": "El Renacer de la Sabiduría 4116",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel López",
      "John Sánchez"
    ],
    "price": 22.13,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789876429962-L.jpg"
  },
  {
    "id": 368,
    "isbn": "9782232986970",
    "title": "El Misterio de los Olvidados 6391",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Thomas"
    ],
    "price": 37.15,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782232986970-L.jpg"
  },
  {
    "id": 369,
    "isbn": "9784542565289",
    "title": "El Renacer de la Sabiduría 355",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo López"
    ],
    "price": 11.86,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784542565289-L.jpg"
  },
  {
    "id": 370,
    "isbn": "9785633642797",
    "title": "El Secreto de la Esperanza 4880",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Williams",
      "Ricardo Jones"
    ],
    "price": 89.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785633642797-L.jpg"
  },
  {
    "id": 371,
    "isbn": "9781125676004",
    "title": "El Camino hacia el Horizonte 2119",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Sánchez"
    ],
    "price": 95.4,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781125676004-L.jpg"
  },
  {
    "id": 372,
    "isbn": "9784692527854",
    "title": "El Renacer de la Justicia 8937",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla García",
      "Elizabeth Anderson"
    ],
    "price": 81.09,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784692527854-L.jpg"
  },
  {
    "id": 373,
    "isbn": "9780190376727",
    "title": "Espejos de la Justicia 7277",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Thomas",
      "Andrés Jones"
    ],
    "price": 5.63,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780190376727-L.jpg"
  },
  {
    "id": 374,
    "isbn": "9788251990332",
    "title": "La Búsqueda de los Olvidados 1033",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Brown"
    ],
    "price": 115.56,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788251990332-L.jpg"
  },
  {
    "id": 375,
    "isbn": "9787154110113",
    "title": "La Sombra de la Memoria 3483",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Rodríguez"
    ],
    "price": 26.27,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787154110113-L.jpg"
  },
  {
    "id": 376,
    "isbn": "9786549969787",
    "title": "El Eco de la Ciudad Perdida 8450",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth García",
      "Lucía Moore"
    ],
    "price": 13.3,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786549969787-L.jpg"
  },
  {
    "id": 377,
    "isbn": "9783974311099",
    "title": "El Legado de la Eternidad 6980",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda Jones",
      "Ricardo Wilson"
    ],
    "price": 38.06,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783974311099-L.jpg"
  },
  {
    "id": 378,
    "isbn": "9789750145483",
    "title": "Vientos de la Sabiduría 6897",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Davis"
    ],
    "price": 44.05,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789750145483-L.jpg"
  },
  {
    "id": 379,
    "isbn": "9781179396996",
    "title": "El Guardián de el Viento 1511",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Jones"
    ],
    "price": 103.05,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781179396996-L.jpg"
  },
  {
    "id": 380,
    "isbn": "9785140113919",
    "title": "El Eco de la Esperanza 2799",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Williams",
      "Sofía Wilson"
    ],
    "price": 105.83,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785140113919-L.jpg"
  },
  {
    "id": 381,
    "isbn": "9785929179105",
    "title": "Vientos de las Estrellas 5529",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert González"
    ],
    "price": 63.01,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785929179105-L.jpg"
  },
  {
    "id": 382,
    "isbn": "9785616590916",
    "title": "Crónicas de el Viento 2388",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Miller"
    ],
    "price": 105.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785616590916-L.jpg"
  },
  {
    "id": 383,
    "isbn": "9780378724357",
    "title": "La Búsqueda de la Justicia 3276",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 110.39,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780378724357-L.jpg"
  },
  {
    "id": 384,
    "isbn": "9783486280722",
    "title": "El Legado de la Justicia 5452",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel López"
    ],
    "price": 117.5,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783486280722-L.jpg"
  },
  {
    "id": 385,
    "isbn": "9788889863848",
    "title": "Más allá de el Horizonte 635",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda García",
      "Elena Davis"
    ],
    "price": 53.64,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788889863848-L.jpg"
  },
  {
    "id": 386,
    "isbn": "9786991749425",
    "title": "El Legado de la Montaña 5289",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Moore"
    ],
    "price": 109.76,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786991749425-L.jpg"
  },
  {
    "id": 387,
    "isbn": "9783214793876",
    "title": "Bajo el Cielo de el Viento 6142",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Pérez"
    ],
    "price": 99.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783214793876-L.jpg"
  },
  {
    "id": 388,
    "isbn": "978915177985",
    "title": "El Camino hacia las Estrellas 4615",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John Williams"
    ],
    "price": 110.96,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978915177985-L.jpg"
  },
  {
    "id": 389,
    "isbn": "9782248246648",
    "title": "El Secreto de la Montaña 2869",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Brown"
    ],
    "price": 56.09,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782248246648-L.jpg"
  },
  {
    "id": 390,
    "isbn": "9782147654827",
    "title": "Lágrimas de la Travesía 3071",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Moore",
      "Miguel González"
    ],
    "price": 58.38,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782147654827-L.jpg"
  },
  {
    "id": 391,
    "isbn": "9787583074512",
    "title": "El Guardián de la Justicia 6493",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Taylor",
      "John Thomas"
    ],
    "price": 67.29,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787583074512-L.jpg"
  },
  {
    "id": 392,
    "isbn": "9781807766238",
    "title": "La Sombra de el Viento 2485",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Thomas",
      "David Davis"
    ],
    "price": 6.72,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781807766238-L.jpg"
  },
  {
    "id": 393,
    "isbn": "9787934112948",
    "title": "Espejos de el Viento 9989",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elena Johnson",
      "Elizabeth Hernández"
    ],
    "price": 118.16,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787934112948-L.jpg"
  },
  {
    "id": 394,
    "isbn": "978756220666",
    "title": "El Misterio de la Justicia 738",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Taylor"
    ],
    "price": 62.03,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978756220666-L.jpg"
  },
  {
    "id": 395,
    "isbn": "9786149061263",
    "title": "El Secreto de el Destino 4334",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Thomas"
    ],
    "price": 78.04,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786149061263-L.jpg"
  },
  {
    "id": 396,
    "isbn": "9783483240057",
    "title": "Las Luces de el Viento 9567",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Moore",
      "David Johnson"
    ],
    "price": 10.09,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783483240057-L.jpg"
  },
  {
    "id": 397,
    "isbn": "9780898694352",
    "title": "El Renacer de la Luna Roja 9834",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía González",
      "Mary Rodríguez"
    ],
    "price": 66.98,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780898694352-L.jpg"
  },
  {
    "id": 398,
    "isbn": "9787329570872",
    "title": "Crónicas de la Verdad 8229",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Thomas"
    ],
    "price": 43.88,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787329570872-L.jpg"
  },
  {
    "id": 399,
    "isbn": "978047456251",
    "title": "Crónicas de la Sabiduría 5310",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Davis"
    ],
    "price": 15.51,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978047456251-L.jpg"
  },
  {
    "id": 400,
    "isbn": "9783305592173",
    "title": "La Búsqueda de el Horizonte 1331",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Brown"
    ],
    "price": 19.12,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783305592173-L.jpg"
  },
  {
    "id": 401,
    "isbn": "9787913532453",
    "title": "Más allá de la Eternidad 1815",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Martínez"
    ],
    "price": 114.74,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787913532453-L.jpg"
  },
  {
    "id": 402,
    "isbn": "9787139049759",
    "title": "El Guardián de los Sueños 6546",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Rodríguez"
    ],
    "price": 62.61,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787139049759-L.jpg"
  },
  {
    "id": 403,
    "isbn": "9784942669228",
    "title": "El Guardián de la Eternidad 8659",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Pérez"
    ],
    "price": 117.3,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784942669228-L.jpg"
  },
  {
    "id": 404,
    "isbn": "9784729513256",
    "title": "Crónicas de la Justicia 2649",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Martínez"
    ],
    "price": 54.19,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784729513256-L.jpg"
  },
  {
    "id": 405,
    "isbn": "9780483776043",
    "title": "Más allá de el Desierto 4777",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Taylor"
    ],
    "price": 29.89,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780483776043-L.jpg"
  },
  {
    "id": 406,
    "isbn": "9789196254879",
    "title": "Fragmentos de la Verdad 5341",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Smith",
      "Robert Thomas"
    ],
    "price": 96.9,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789196254879-L.jpg"
  },
  {
    "id": 407,
    "isbn": "9784285528404",
    "title": "El Guardián de los Ancestros 4778",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Smith",
      "Ricardo Rodríguez"
    ],
    "price": 20.9,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784285528404-L.jpg"
  },
  {
    "id": 408,
    "isbn": "9781324021421",
    "title": "La Sombra de el Destino 8962",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Wilson",
      "Carla Sánchez"
    ],
    "price": 6.25,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781324021421-L.jpg"
  },
  {
    "id": 409,
    "isbn": "9786678660005",
    "title": "Crónicas de los Sueños 818",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Smith",
      "Elena Williams"
    ],
    "price": 57.25,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786678660005-L.jpg"
  },
  {
    "id": 410,
    "isbn": "9787579414766",
    "title": "Las Voces de la Sabiduría 8791",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda López",
      "Ricardo Smith"
    ],
    "price": 23.02,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787579414766-L.jpg"
  },
  {
    "id": 411,
    "isbn": "9787841777346",
    "title": "Espejos de la Montaña 8574",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert López",
      "Jorge García"
    ],
    "price": 37.46,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787841777346-L.jpg"
  },
  {
    "id": 412,
    "isbn": "9788945938428",
    "title": "La Sombra de el Tiempo 6233",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Martínez"
    ],
    "price": 28.24,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788945938428-L.jpg"
  },
  {
    "id": 413,
    "isbn": "978325173533",
    "title": "El Eco de la Esperanza 4896",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Davis",
      "Michael Pérez"
    ],
    "price": 41.87,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978325173533-L.jpg"
  },
  {
    "id": 414,
    "isbn": "9786800838920",
    "title": "El Legado de la Memoria 3965",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Wilson",
      "Carla Hernández"
    ],
    "price": 36.31,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786800838920-L.jpg"
  },
  {
    "id": 415,
    "isbn": "9784983311049",
    "title": "Más allá de la Ciudad Perdida 7317",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Martínez",
      "Elizabeth Sánchez"
    ],
    "price": 60.26,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784983311049-L.jpg"
  },
  {
    "id": 416,
    "isbn": "9787400666029",
    "title": "El Legado de la Sabiduría 371",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia González"
    ],
    "price": 11.29,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787400666029-L.jpg"
  },
  {
    "id": 417,
    "isbn": "978830374274",
    "title": "El Eco de las Estrellas 4206",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Davis"
    ],
    "price": 41.43,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978830374274-L.jpg"
  },
  {
    "id": 418,
    "isbn": "9789855495360",
    "title": "Rastros en la Verdad 9174",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Wilson"
    ],
    "price": 53.89,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789855495360-L.jpg"
  },
  {
    "id": 419,
    "isbn": "978819633932",
    "title": "Espejos de la Memoria 8833",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Thomas"
    ],
    "price": 65.78,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978819633932-L.jpg"
  },
  {
    "id": 420,
    "isbn": "9788440774866",
    "title": "El Misterio de la Montaña 7876",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Moore"
    ],
    "price": 52.2,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788440774866-L.jpg"
  },
  {
    "id": 421,
    "isbn": "9788809151178",
    "title": "Crónicas de el Desierto 4420",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Davis"
    ],
    "price": 85.88,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788809151178-L.jpg"
  },
  {
    "id": 422,
    "isbn": "9780337682865",
    "title": "Lágrimas de el Viento 960",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 47.79,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780337682865-L.jpg"
  },
  {
    "id": 423,
    "isbn": "9781700025098",
    "title": "Rastros en las Estrellas 2531",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Jones"
    ],
    "price": 43.27,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781700025098-L.jpg"
  },
  {
    "id": 424,
    "isbn": "9788744855049",
    "title": "Vientos de la Verdad 4143",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Taylor",
      "Linda Brown"
    ],
    "price": 17.95,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788744855049-L.jpg"
  },
  {
    "id": 425,
    "isbn": "978858449350",
    "title": "Vientos de la Verdad 7172",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Wilson"
    ],
    "price": 94.22,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978858449350-L.jpg"
  },
  {
    "id": 426,
    "isbn": "9786954420149",
    "title": "El Secreto de el Desierto 8365",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Wilson",
      "Elizabeth Williams"
    ],
    "price": 117.27,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786954420149-L.jpg"
  },
  {
    "id": 427,
    "isbn": "9783112017869",
    "title": "Lágrimas de el Horizonte 3955",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena López"
    ],
    "price": 7.96,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783112017869-L.jpg"
  },
  {
    "id": 428,
    "isbn": "9782429538340",
    "title": "El Misterio de el Viento 8488",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Johnson"
    ],
    "price": 73.53,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782429538340-L.jpg"
  },
  {
    "id": 429,
    "isbn": "978823078965",
    "title": "El Misterio de el Horizonte 2824",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Johnson"
    ],
    "price": 22.82,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978823078965-L.jpg"
  },
  {
    "id": 430,
    "isbn": "9786894224685",
    "title": "Vientos de los Olvidados 7531",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Johnson",
      "Carla Pérez"
    ],
    "price": 101.94,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786894224685-L.jpg"
  },
  {
    "id": 431,
    "isbn": "9786942347083",
    "title": "La Búsqueda de los Sueños 2208",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Rodríguez",
      "Mary García"
    ],
    "price": 24.43,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786942347083-L.jpg"
  },
  {
    "id": 432,
    "isbn": "9782671942308",
    "title": "Las Voces de la Noche 2052",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Taylor",
      "Andrés Rodríguez"
    ],
    "price": 111.06,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782671942308-L.jpg"
  },
  {
    "id": 433,
    "isbn": "9782134265104",
    "title": "Las Voces de la Travesía 4523",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Williams"
    ],
    "price": 66.69,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782134265104-L.jpg"
  },
  {
    "id": 434,
    "isbn": "978294736085",
    "title": "El Guardián de el Destino 8866",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena González",
      "Patricia Martínez"
    ],
    "price": 63.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978294736085-L.jpg"
  },
  {
    "id": 435,
    "isbn": "9782684264701",
    "title": "El Misterio de la Eternidad 171",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Wilson",
      "Miguel Wilson"
    ],
    "price": 112.6,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782684264701-L.jpg"
  },
  {
    "id": 436,
    "isbn": "9785804250295",
    "title": "El Renacer de las Estrellas 2451",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Smith",
      "Gabriel Johnson"
    ],
    "price": 68.26,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785804250295-L.jpg"
  },
  {
    "id": 437,
    "isbn": "9781956228854",
    "title": "Rastros en la Montaña 3583",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Smith",
      "Patricia Johnson"
    ],
    "price": 70.13,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781956228854-L.jpg"
  },
  {
    "id": 438,
    "isbn": "9780440565987",
    "title": "Crónicas de la Verdad 9285",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Anderson",
      "Andrés Smith"
    ],
    "price": 9.76,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780440565987-L.jpg"
  },
  {
    "id": 439,
    "isbn": "978319842696",
    "title": "Crónicas de la Montaña 1896",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Moore"
    ],
    "price": 113.42,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978319842696-L.jpg"
  },
  {
    "id": 440,
    "isbn": "9789668724985",
    "title": "Las Luces de el Tiempo 7509",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elena Wilson",
      "Carla Hernández"
    ],
    "price": 6.86,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789668724985-L.jpg"
  },
  {
    "id": 441,
    "isbn": "9789763882252",
    "title": "El Renacer de los Olvidados 6359",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Wilson",
      "Isabel Wilson"
    ],
    "price": 102.0,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789763882252-L.jpg"
  },
  {
    "id": 442,
    "isbn": "9784454366653",
    "title": "Crónicas de la Justicia 8356",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John Martínez"
    ],
    "price": 94.19,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784454366653-L.jpg"
  },
  {
    "id": 443,
    "isbn": "9780243458592",
    "title": "El Legado de los Olvidados 237",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Brown"
    ],
    "price": 33.87,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780243458592-L.jpg"
  },
  {
    "id": 444,
    "isbn": "9784785545888",
    "title": "El Eco de la Esperanza 7862",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Davis"
    ],
    "price": 85.48,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784785545888-L.jpg"
  },
  {
    "id": 445,
    "isbn": "9789692079860",
    "title": "Las Luces de el Destino 7177",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Jones"
    ],
    "price": 116.11,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789692079860-L.jpg"
  },
  {
    "id": 446,
    "isbn": "978027586697",
    "title": "Fragmentos de las Estrellas 6401",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Johnson",
      "David Smith"
    ],
    "price": 19.26,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978027586697-L.jpg"
  },
  {
    "id": 447,
    "isbn": "9781794670938",
    "title": "El Renacer de la Memoria 5345",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés González",
      "David Sánchez"
    ],
    "price": 19.47,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781794670938-L.jpg"
  },
  {
    "id": 448,
    "isbn": "9780132642163",
    "title": "El Misterio de la Noche 9954",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 80.04,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780132642163-L.jpg"
  },
  {
    "id": 449,
    "isbn": "9789475369522",
    "title": "Más allá de los Ancestros 8199",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel García"
    ],
    "price": 71.8,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789475369522-L.jpg"
  },
  {
    "id": 450,
    "isbn": "9780216263109",
    "title": "El Guardián de la Ciudad Perdida 6365",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Miller",
      "Lucía Thomas"
    ],
    "price": 43.39,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780216263109-L.jpg"
  },
  {
    "id": 451,
    "isbn": "9789316590900",
    "title": "El Legado de el Destino 7594",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary González"
    ],
    "price": 90.89,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789316590900-L.jpg"
  },
  {
    "id": 452,
    "isbn": "9787839071869",
    "title": "Crónicas de el Desierto 1481",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Brown"
    ],
    "price": 28.58,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787839071869-L.jpg"
  },
  {
    "id": 453,
    "isbn": "9785910477920",
    "title": "El Canto de la Luna Roja 5796",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Hernández",
      "Robert Williams"
    ],
    "price": 55.44,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785910477920-L.jpg"
  },
  {
    "id": 454,
    "isbn": "9786597386437",
    "title": "El Eco de el Destino 6821",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Brown",
      "Patricia Johnson"
    ],
    "price": 33.08,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786597386437-L.jpg"
  },
  {
    "id": 455,
    "isbn": "9785657863345",
    "title": "El Guardián de la Esperanza 702",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia Smith",
      "Carla Brown"
    ],
    "price": 86.59,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785657863345-L.jpg"
  },
  {
    "id": 456,
    "isbn": "9787798643008",
    "title": "El Renacer de los Ancestros 8776",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Williams"
    ],
    "price": 86.63,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787798643008-L.jpg"
  },
  {
    "id": 457,
    "isbn": "9780139757945",
    "title": "El Secreto de el Destino 204",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Smith",
      "Andrés García"
    ],
    "price": 92.33,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780139757945-L.jpg"
  },
  {
    "id": 458,
    "isbn": "9789357858984",
    "title": "Más allá de los Ancestros 8082",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla González"
    ],
    "price": 114.65,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789357858984-L.jpg"
  },
  {
    "id": 459,
    "isbn": "9789759414573",
    "title": "Las Luces de la Noche 5049",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Williams"
    ],
    "price": 40.34,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789759414573-L.jpg"
  },
  {
    "id": 460,
    "isbn": "9786199391921",
    "title": "El Camino hacia la Esperanza 6521",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Thomas",
      "Andrés Taylor"
    ],
    "price": 90.93,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786199391921-L.jpg"
  },
  {
    "id": 461,
    "isbn": "9788898585724",
    "title": "Las Luces de la Montaña 6323",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Davis"
    ],
    "price": 103.21,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788898585724-L.jpg"
  },
  {
    "id": 462,
    "isbn": "9788575751688",
    "title": "El Canto de la Travesía 1733",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Wilson"
    ],
    "price": 55.78,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788575751688-L.jpg"
  },
  {
    "id": 463,
    "isbn": "9789136915280",
    "title": "Espejos de la Memoria 9077",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda García",
      "Jorge Pérez"
    ],
    "price": 69.31,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789136915280-L.jpg"
  },
  {
    "id": 464,
    "isbn": "9781146569224",
    "title": "El Guardián de el Horizonte 5273",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Pérez",
      "Elena Miller"
    ],
    "price": 25.14,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781146569224-L.jpg"
  },
  {
    "id": 465,
    "isbn": "9788750853848",
    "title": "El Legado de el Destino 8147",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Williams"
    ],
    "price": 33.97,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788750853848-L.jpg"
  },
  {
    "id": 466,
    "isbn": "9781146559485",
    "title": "La Sombra de la Sabiduría 9071",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Brown",
      "Linda González"
    ],
    "price": 70.56,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781146559485-L.jpg"
  },
  {
    "id": 467,
    "isbn": "9781857025477",
    "title": "Rastros en el Horizonte 4382",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 75.48,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781857025477-L.jpg"
  },
  {
    "id": 468,
    "isbn": "978525446983",
    "title": "El Eco de la Eternidad 8227",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Miller"
    ],
    "price": 14.36,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978525446983-L.jpg"
  },
  {
    "id": 469,
    "isbn": "9784142869046",
    "title": "El Canto de la Justicia 9606",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Hernández"
    ],
    "price": 26.69,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784142869046-L.jpg"
  },
  {
    "id": 470,
    "isbn": "9781402079245",
    "title": "La Búsqueda de la Montaña 3724",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 51.38,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781402079245-L.jpg"
  },
  {
    "id": 471,
    "isbn": "9783807443201",
    "title": "Fragmentos de el Horizonte 5073",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary González",
      "Mary Williams"
    ],
    "price": 51.74,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783807443201-L.jpg"
  },
  {
    "id": 472,
    "isbn": "9784919963526",
    "title": "El Eco de la Ciudad Perdida 3143",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "David Taylor",
      "John Wilson"
    ],
    "price": 114.09,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784919963526-L.jpg"
  },
  {
    "id": 473,
    "isbn": "9783625910480",
    "title": "El Eco de la Eternidad 1052",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Rodríguez",
      "Elena Rodríguez"
    ],
    "price": 22.81,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783625910480-L.jpg"
  },
  {
    "id": 474,
    "isbn": "9780447928235",
    "title": "Rastros en la Montaña 9410",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 12.13,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780447928235-L.jpg"
  },
  {
    "id": 475,
    "isbn": "9782425387638",
    "title": "Las Voces de la Luna Roja 8632",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Hernández",
      "David Brown"
    ],
    "price": 23.47,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782425387638-L.jpg"
  },
  {
    "id": 476,
    "isbn": "9783286291744",
    "title": "Crónicas de la Sabiduría 9602",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Pérez"
    ],
    "price": 34.07,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783286291744-L.jpg"
  },
  {
    "id": 477,
    "isbn": "978212254804",
    "title": "Más allá de la Justicia 1399",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel González"
    ],
    "price": 49.22,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978212254804-L.jpg"
  },
  {
    "id": 478,
    "isbn": "9784914946111",
    "title": "El Canto de la Esperanza 1016",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Johnson",
      "Andrés González"
    ],
    "price": 101.83,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784914946111-L.jpg"
  },
  {
    "id": 479,
    "isbn": "9785811642663",
    "title": "Más allá de la Montaña 2061",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel García"
    ],
    "price": 6.25,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785811642663-L.jpg"
  },
  {
    "id": 480,
    "isbn": "9781416113164",
    "title": "El Camino hacia la Sabiduría 7029",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Davis",
      "Carla Moore"
    ],
    "price": 21.06,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781416113164-L.jpg"
  },
  {
    "id": 481,
    "isbn": "9786770191810",
    "title": "Fragmentos de el Viento 7703",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Hernández",
      "Robert Brown"
    ],
    "price": 55.69,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786770191810-L.jpg"
  },
  {
    "id": 482,
    "isbn": "9784675445724",
    "title": "Vientos de los Sueños 4522",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Miller",
      "Patricia Smith"
    ],
    "price": 55.46,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784675445724-L.jpg"
  },
  {
    "id": 483,
    "isbn": "9784138559395",
    "title": "El Guardián de el Viento 6921",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Pérez"
    ],
    "price": 82.14,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784138559395-L.jpg"
  },
  {
    "id": 484,
    "isbn": "9781155983110",
    "title": "El Camino hacia el Destino 7358",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Brown",
      "Patricia Rodríguez"
    ],
    "price": 92.25,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781155983110-L.jpg"
  },
  {
    "id": 485,
    "isbn": "9788638198238",
    "title": "El Camino hacia los Sueños 1373",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Williams"
    ],
    "price": 95.46,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788638198238-L.jpg"
  },
  {
    "id": 486,
    "isbn": "9781764935654",
    "title": "Rastros en el Viento 5782",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Martínez",
      "Michael Thomas"
    ],
    "price": 60.5,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781764935654-L.jpg"
  },
  {
    "id": 487,
    "isbn": "9784282159823",
    "title": "El Guardián de el Viento 4796",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda López"
    ],
    "price": 96.42,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784282159823-L.jpg"
  },
  {
    "id": 488,
    "isbn": "9787737555515",
    "title": "Rastros en la Travesía 8820",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Johnson",
      "Lucía Taylor"
    ],
    "price": 84.13,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787737555515-L.jpg"
  },
  {
    "id": 489,
    "isbn": "9788182676947",
    "title": "El Guardián de la Luna Roja 5323",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Martínez"
    ],
    "price": 39.47,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788182676947-L.jpg"
  },
  {
    "id": 490,
    "isbn": "9781296444082",
    "title": "Las Voces de la Luna Roja 4559",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Davis",
      "Elena Hernández"
    ],
    "price": 49.89,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781296444082-L.jpg"
  },
  {
    "id": 491,
    "isbn": "9785200923243",
    "title": "El Camino hacia la Ciudad Perdida 8033",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria López"
    ],
    "price": 33.49,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785200923243-L.jpg"
  },
  {
    "id": 492,
    "isbn": "9787432772699",
    "title": "Las Voces de el Destino 6503",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Taylor",
      "Isabel Thomas"
    ],
    "price": 25.92,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787432772699-L.jpg"
  },
  {
    "id": 493,
    "isbn": "9780214319327",
    "title": "El Renacer de el Desierto 2393",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Williams",
      "Andrés Wilson"
    ],
    "price": 98.42,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780214319327-L.jpg"
  },
  {
    "id": 494,
    "isbn": "9780977616367",
    "title": "La Búsqueda de los Ancestros 2918",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Jorge Davis",
      "Sofía Miller"
    ],
    "price": 116.76,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780977616367-L.jpg"
  },
  {
    "id": 495,
    "isbn": "9782457980579",
    "title": "Crónicas de el Horizonte 542",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Anderson",
      "Fernando Sánchez"
    ],
    "price": 117.49,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782457980579-L.jpg"
  },
  {
    "id": 496,
    "isbn": "9787731380748",
    "title": "La Búsqueda de los Olvidados 6562",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Brown",
      "Linda Thomas"
    ],
    "price": 38.93,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787731380748-L.jpg"
  },
  {
    "id": 497,
    "isbn": "9788545351665",
    "title": "El Guardián de la Montaña 6666",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía López"
    ],
    "price": 67.53,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788545351665-L.jpg"
  },
  {
    "id": 498,
    "isbn": "9783110569919",
    "title": "La Sombra de el Viento 996",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel López",
      "Sofía Smith"
    ],
    "price": 56.95,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783110569919-L.jpg"
  },
  {
    "id": 499,
    "isbn": "9789333225441",
    "title": "El Canto de la Verdad 7797",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia López"
    ],
    "price": 113.88,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789333225441-L.jpg"
  },
  {
    "id": 500,
    "isbn": "9788422543091",
    "title": "El Secreto de la Justicia 4356",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Sánchez",
      "Isabel Sánchez"
    ],
    "price": 21.56,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788422543091-L.jpg"
  },
  {
    "id": 501,
    "isbn": "9782436968932",
    "title": "Crónicas de la Esperanza 9804",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Anderson"
    ],
    "price": 86.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782436968932-L.jpg"
  },
  {
    "id": 502,
    "isbn": "9783933170675",
    "title": "El Camino hacia la Sabiduría 8468",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía Williams"
    ],
    "price": 33.33,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783933170675-L.jpg"
  },
  {
    "id": 503,
    "isbn": "9784882368649",
    "title": "El Camino hacia la Memoria 9106",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo Williams"
    ],
    "price": 61.18,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784882368649-L.jpg"
  },
  {
    "id": 504,
    "isbn": "9782361815127",
    "title": "Bajo el Cielo de los Olvidados 4533",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Davis"
    ],
    "price": 19.59,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782361815127-L.jpg"
  },
  {
    "id": 505,
    "isbn": "9788548831980",
    "title": "El Eco de la Noche 7924",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Johnson",
      "Lucía Johnson"
    ],
    "price": 83.76,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788548831980-L.jpg"
  },
  {
    "id": 506,
    "isbn": "9786637352354",
    "title": "Crónicas de la Sabiduría 9655",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Miller",
      "David Johnson"
    ],
    "price": 29.24,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786637352354-L.jpg"
  },
  {
    "id": 507,
    "isbn": "9780624873129",
    "title": "El Guardián de la Sabiduría 4644",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Thomas",
      "Michael Hernández"
    ],
    "price": 44.3,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780624873129-L.jpg"
  },
  {
    "id": 508,
    "isbn": "9786896156427",
    "title": "El Legado de la Ciudad Perdida 1111",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel Jones",
      "Gabriel Taylor"
    ],
    "price": 114.78,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786896156427-L.jpg"
  },
  {
    "id": 509,
    "isbn": "978475893259",
    "title": "La Sombra de el Tiempo 7987",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena García"
    ],
    "price": 80.16,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978475893259-L.jpg"
  },
  {
    "id": 510,
    "isbn": "9784565240033",
    "title": "El Renacer de los Sueños 7656",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Taylor"
    ],
    "price": 26.37,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784565240033-L.jpg"
  },
  {
    "id": 511,
    "isbn": "9786150916873",
    "title": "La Sombra de los Olvidados 6982",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Williams"
    ],
    "price": 6.45,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786150916873-L.jpg"
  },
  {
    "id": 512,
    "isbn": "9784514467023",
    "title": "El Eco de la Esperanza 5382",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Sánchez"
    ],
    "price": 69.55,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784514467023-L.jpg"
  },
  {
    "id": 513,
    "isbn": "9787835567533",
    "title": "El Secreto de las Estrellas 4801",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Johnson"
    ],
    "price": 56.04,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787835567533-L.jpg"
  },
  {
    "id": 514,
    "isbn": "9785725136067",
    "title": "El Misterio de la Verdad 6046",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 80.83,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785725136067-L.jpg"
  },
  {
    "id": 515,
    "isbn": "9783444542374",
    "title": "Las Luces de el Tiempo 3472",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Brown",
      "Gabriel Sánchez"
    ],
    "price": 22.42,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783444542374-L.jpg"
  },
  {
    "id": 516,
    "isbn": "9782206615622",
    "title": "El Secreto de las Estrellas 4443",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Johnson",
      "Gabriel López"
    ],
    "price": 94.07,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782206615622-L.jpg"
  },
  {
    "id": 517,
    "isbn": "9784188592755",
    "title": "El Legado de el Viento 6447",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Wilson",
      "Ricardo García"
    ],
    "price": 47.54,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784188592755-L.jpg"
  },
  {
    "id": 518,
    "isbn": "9786604969059",
    "title": "Vientos de el Viento 1256",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Pérez",
      "Linda Johnson"
    ],
    "price": 78.72,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786604969059-L.jpg"
  },
  {
    "id": 519,
    "isbn": "9786166748598",
    "title": "Espejos de la Ciudad Perdida 3635",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Taylor",
      "Miguel Davis"
    ],
    "price": 82.92,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786166748598-L.jpg"
  },
  {
    "id": 520,
    "isbn": "9781874168225",
    "title": "Las Voces de los Olvidados 8924",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elena Wilson",
      "Linda Pérez"
    ],
    "price": 57.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781874168225-L.jpg"
  },
  {
    "id": 521,
    "isbn": "978514776347",
    "title": "Crónicas de el Viento 2218",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Jones",
      "Carla Hernández"
    ],
    "price": 51.58,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978514776347-L.jpg"
  },
  {
    "id": 522,
    "isbn": "9783606079243",
    "title": "Espejos de la Justicia 1879",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Rodríguez",
      "Miguel Anderson"
    ],
    "price": 41.75,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783606079243-L.jpg"
  },
  {
    "id": 523,
    "isbn": "9780256161496",
    "title": "El Legado de los Ancestros 9872",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Moore",
      "Elena García"
    ],
    "price": 63.72,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780256161496-L.jpg"
  },
  {
    "id": 524,
    "isbn": "9780747339687",
    "title": "El Misterio de el Destino 7768",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía González"
    ],
    "price": 102.11,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780747339687-L.jpg"
  },
  {
    "id": 525,
    "isbn": "9782709388870",
    "title": "Las Voces de el Tiempo 3577",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Taylor",
      "Jorge Davis"
    ],
    "price": 46.2,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782709388870-L.jpg"
  },
  {
    "id": 526,
    "isbn": "9782226989710",
    "title": "Rastros en los Olvidados 4913",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Williams"
    ],
    "price": 69.68,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782226989710-L.jpg"
  },
  {
    "id": 527,
    "isbn": "9780107370855",
    "title": "El Eco de la Eternidad 3508",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Miller"
    ],
    "price": 35.53,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780107370855-L.jpg"
  },
  {
    "id": 528,
    "isbn": "9787249628868",
    "title": "Bajo el Cielo de la Ciudad Perdida 8496",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Mary Taylor",
      "Valeria Wilson"
    ],
    "price": 6.72,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787249628868-L.jpg"
  },
  {
    "id": 529,
    "isbn": "9787865625708",
    "title": "Lágrimas de la Justicia 1886",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Williams",
      "Mary Smith"
    ],
    "price": 83.43,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787865625708-L.jpg"
  },
  {
    "id": 530,
    "isbn": "9787347034042",
    "title": "El Guardián de el Viento 7866",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Brown",
      "John Brown"
    ],
    "price": 47.95,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787347034042-L.jpg"
  },
  {
    "id": 531,
    "isbn": "9781280357190",
    "title": "El Camino hacia las Estrellas 7573",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Pérez",
      "Carla Jones"
    ],
    "price": 15.73,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781280357190-L.jpg"
  },
  {
    "id": 532,
    "isbn": "9784451352048",
    "title": "Las Voces de la Ciudad Perdida 1538",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Taylor",
      "Valeria Wilson"
    ],
    "price": 84.0,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784451352048-L.jpg"
  },
  {
    "id": 533,
    "isbn": "9788465789159",
    "title": "El Camino hacia la Travesía 7113",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Johnson",
      "Lucía García"
    ],
    "price": 85.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788465789159-L.jpg"
  },
  {
    "id": 534,
    "isbn": "9784829267134",
    "title": "Más allá de el Horizonte 359",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía López",
      "Linda Brown"
    ],
    "price": 49.51,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784829267134-L.jpg"
  },
  {
    "id": 535,
    "isbn": "9782837918741",
    "title": "Lágrimas de el Destino 261",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Williams",
      "Lucía Smith"
    ],
    "price": 86.83,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782837918741-L.jpg"
  },
  {
    "id": 536,
    "isbn": "9789402255652",
    "title": "Lágrimas de los Olvidados 3384",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 117.24,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789402255652-L.jpg"
  },
  {
    "id": 537,
    "isbn": "9784530269090",
    "title": "El Canto de el Destino 8892",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Pérez",
      "John Smith"
    ],
    "price": 46.17,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784530269090-L.jpg"
  },
  {
    "id": 538,
    "isbn": "9781341557903",
    "title": "Vientos de la Ciudad Perdida 6593",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel López",
      "Elena Anderson"
    ],
    "price": 36.58,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781341557903-L.jpg"
  },
  {
    "id": 539,
    "isbn": "9788123069968",
    "title": "El Renacer de la Montaña 6485",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Taylor"
    ],
    "price": 5.74,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788123069968-L.jpg"
  },
  {
    "id": 540,
    "isbn": "9787655777143",
    "title": "Fragmentos de los Olvidados 3967",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Hernández"
    ],
    "price": 103.56,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787655777143-L.jpg"
  },
  {
    "id": 541,
    "isbn": "9780577556001",
    "title": "La Búsqueda de el Destino 675",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 11.9,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780577556001-L.jpg"
  },
  {
    "id": 542,
    "isbn": "9781612135755",
    "title": "El Misterio de la Esperanza 5764",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Pérez"
    ],
    "price": 92.83,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781612135755-L.jpg"
  },
  {
    "id": 543,
    "isbn": "9789453328428",
    "title": "Más allá de la Verdad 1817",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Williams",
      "Ricardo Pérez"
    ],
    "price": 34.57,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789453328428-L.jpg"
  },
  {
    "id": 544,
    "isbn": "9789438583309",
    "title": "Rastros en la Verdad 1042",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 91.81,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789438583309-L.jpg"
  },
  {
    "id": 545,
    "isbn": "978418598467",
    "title": "El Eco de los Ancestros 7291",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Rodríguez"
    ],
    "price": 28.16,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978418598467-L.jpg"
  },
  {
    "id": 546,
    "isbn": "9788412367263",
    "title": "Crónicas de la Justicia 9630",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Pérez",
      "Mary Pérez"
    ],
    "price": 54.2,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788412367263-L.jpg"
  },
  {
    "id": 547,
    "isbn": "978396465993",
    "title": "Crónicas de el Viento 8988",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Brown",
      "Linda Jones"
    ],
    "price": 88.91,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978396465993-L.jpg"
  },
  {
    "id": 548,
    "isbn": "9787845112204",
    "title": "Las Luces de la Noche 5877",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Wilson",
      "Andrés Miller"
    ],
    "price": 65.15,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787845112204-L.jpg"
  },
  {
    "id": 549,
    "isbn": "9786455515696",
    "title": "El Canto de la Ciudad Perdida 4737",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Miller",
      "Jorge Pérez"
    ],
    "price": 74.24,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786455515696-L.jpg"
  },
  {
    "id": 550,
    "isbn": "9786773941689",
    "title": "Espejos de los Sueños 2089",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Wilson"
    ],
    "price": 116.88,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786773941689-L.jpg"
  },
  {
    "id": 551,
    "isbn": "9780621961720",
    "title": "Las Luces de la Verdad 4965",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Jones",
      "Lucía Brown"
    ],
    "price": 109.63,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780621961720-L.jpg"
  },
  {
    "id": 552,
    "isbn": "9785746669742",
    "title": "El Secreto de la Justicia 7180",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Johnson",
      "John Williams"
    ],
    "price": 44.42,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785746669742-L.jpg"
  },
  {
    "id": 553,
    "isbn": "9784473117755",
    "title": "La Búsqueda de la Montaña 4849",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Brown",
      "Elizabeth Brown"
    ],
    "price": 8.54,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784473117755-L.jpg"
  },
  {
    "id": 554,
    "isbn": "9781440899140",
    "title": "La Sombra de la Verdad 6702",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Brown"
    ],
    "price": 60.24,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781440899140-L.jpg"
  },
  {
    "id": 555,
    "isbn": "9788774288992",
    "title": "El Renacer de las Estrellas 595",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Jones",
      "Carla Hernández"
    ],
    "price": 85.2,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788774288992-L.jpg"
  },
  {
    "id": 556,
    "isbn": "9781577829232",
    "title": "Fragmentos de el Horizonte 2629",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés García"
    ],
    "price": 18.69,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781577829232-L.jpg"
  },
  {
    "id": 557,
    "isbn": "9785676280475",
    "title": "La Sombra de los Sueños 8556",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Taylor"
    ],
    "price": 62.59,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785676280475-L.jpg"
  },
  {
    "id": 558,
    "isbn": "9782352175698",
    "title": "El Eco de la Esperanza 5323",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda González",
      "Carla Moore"
    ],
    "price": 111.71,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782352175698-L.jpg"
  },
  {
    "id": 559,
    "isbn": "9783362951272",
    "title": "El Renacer de la Memoria 502",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Davis",
      "Isabel Moore"
    ],
    "price": 64.88,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783362951272-L.jpg"
  },
  {
    "id": 560,
    "isbn": "9788130592930",
    "title": "El Secreto de el Desierto 9214",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia González",
      "Patricia Pérez"
    ],
    "price": 57.4,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788130592930-L.jpg"
  },
  {
    "id": 561,
    "isbn": "9788296390234",
    "title": "Las Luces de la Luna Roja 6332",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Davis",
      "Valeria Smith"
    ],
    "price": 12.05,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788296390234-L.jpg"
  },
  {
    "id": 562,
    "isbn": "9781580372237",
    "title": "Lágrimas de la Montaña 3636",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 90.17,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781580372237-L.jpg"
  },
  {
    "id": 563,
    "isbn": "9786894971169",
    "title": "Las Voces de la Noche 4837",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert González",
      "Lucía Taylor"
    ],
    "price": 84.85,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786894971169-L.jpg"
  },
  {
    "id": 564,
    "isbn": "9784478963470",
    "title": "El Eco de el Tiempo 446",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Smith",
      "Carla García"
    ],
    "price": 114.14,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784478963470-L.jpg"
  },
  {
    "id": 565,
    "isbn": "9782740566640",
    "title": "El Legado de la Verdad 2938",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth García",
      "Elizabeth Jones"
    ],
    "price": 63.17,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782740566640-L.jpg"
  },
  {
    "id": 566,
    "isbn": "9781684332755",
    "title": "El Guardián de la Ciudad Perdida 1904",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Williams",
      "Mary Rodríguez"
    ],
    "price": 93.17,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781684332755-L.jpg"
  },
  {
    "id": 567,
    "isbn": "978866234212",
    "title": "El Canto de la Luna Roja 7885",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel García",
      "John Rodríguez"
    ],
    "price": 113.27,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978866234212-L.jpg"
  },
  {
    "id": 568,
    "isbn": "978894344390",
    "title": "El Misterio de el Destino 7585",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Hernández"
    ],
    "price": 49.23,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978894344390-L.jpg"
  },
  {
    "id": 569,
    "isbn": "9784222433853",
    "title": "Las Voces de el Destino 161",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Moore",
      "John Moore"
    ],
    "price": 39.31,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784222433853-L.jpg"
  },
  {
    "id": 570,
    "isbn": "9788362015764",
    "title": "El Canto de la Montaña 3933",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Miller",
      "Elena Davis"
    ],
    "price": 118.9,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788362015764-L.jpg"
  },
  {
    "id": 571,
    "isbn": "9786115377206",
    "title": "La Sombra de el Viento 6403",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Jones",
      "Linda Johnson"
    ],
    "price": 35.0,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786115377206-L.jpg"
  },
  {
    "id": 572,
    "isbn": "9789901638833",
    "title": "Lágrimas de el Desierto 4072",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Moore",
      "Mary Brown"
    ],
    "price": 43.39,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789901638833-L.jpg"
  },
  {
    "id": 573,
    "isbn": "9785363071430",
    "title": "El Eco de el Tiempo 832",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Michael Davis"
    ],
    "price": 11.01,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785363071430-L.jpg"
  },
  {
    "id": 574,
    "isbn": "9787977095413",
    "title": "La Sombra de la Luna Roja 2450",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Miller",
      "John Jones"
    ],
    "price": 25.23,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787977095413-L.jpg"
  },
  {
    "id": 575,
    "isbn": "9787559726216",
    "title": "Bajo el Cielo de la Montaña 6713",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Anderson"
    ],
    "price": 65.29,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787559726216-L.jpg"
  },
  {
    "id": 576,
    "isbn": "9783616798677",
    "title": "El Eco de la Montaña 3206",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Brown",
      "John Jones"
    ],
    "price": 80.29,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783616798677-L.jpg"
  },
  {
    "id": 577,
    "isbn": "978992040336",
    "title": "El Secreto de la Memoria 8650",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge González"
    ],
    "price": 19.81,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978992040336-L.jpg"
  },
  {
    "id": 578,
    "isbn": "9786977741016",
    "title": "Rastros en la Justicia 1417",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Miller",
      "Michael Thomas"
    ],
    "price": 21.9,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786977741016-L.jpg"
  },
  {
    "id": 579,
    "isbn": "9787857268647",
    "title": "El Eco de la Justicia 6986",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés García"
    ],
    "price": 50.95,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787857268647-L.jpg"
  },
  {
    "id": 580,
    "isbn": "9783380094470",
    "title": "Fragmentos de la Verdad 9899",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía García",
      "Carla Jones"
    ],
    "price": 115.09,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783380094470-L.jpg"
  },
  {
    "id": 581,
    "isbn": "9786454318786",
    "title": "Lágrimas de el Viento 8990",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Miller"
    ],
    "price": 15.65,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786454318786-L.jpg"
  },
  {
    "id": 582,
    "isbn": "978171756597",
    "title": "Bajo el Cielo de la Sabiduría 740",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Jones"
    ],
    "price": 5.35,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978171756597-L.jpg"
  },
  {
    "id": 583,
    "isbn": "9781569073551",
    "title": "Rastros en los Olvidados 8054",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel López",
      "Miguel Martínez"
    ],
    "price": 76.86,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781569073551-L.jpg"
  },
  {
    "id": 584,
    "isbn": "978656459067",
    "title": "La Sombra de los Sueños 6912",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando García",
      "Fernando Hernández"
    ],
    "price": 27.43,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978656459067-L.jpg"
  },
  {
    "id": 585,
    "isbn": "978614159820",
    "title": "Vientos de la Noche 5823",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Brown"
    ],
    "price": 70.38,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978614159820-L.jpg"
  },
  {
    "id": 586,
    "isbn": "9787346163439",
    "title": "El Eco de las Estrellas 6551",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Wilson"
    ],
    "price": 97.6,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787346163439-L.jpg"
  },
  {
    "id": 587,
    "isbn": "9785720254674",
    "title": "Las Luces de la Verdad 5483",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Brown"
    ],
    "price": 62.87,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785720254674-L.jpg"
  },
  {
    "id": 588,
    "isbn": "9788427552074",
    "title": "Lágrimas de la Justicia 7357",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Smith"
    ],
    "price": 111.82,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788427552074-L.jpg"
  },
  {
    "id": 589,
    "isbn": "9781922172150",
    "title": "Bajo el Cielo de los Olvidados 4593",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Carla Thomas",
      "Elena González"
    ],
    "price": 23.91,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781922172150-L.jpg"
  },
  {
    "id": 590,
    "isbn": "9789262656170",
    "title": "La Búsqueda de la Eternidad 3651",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Miller",
      "Lucía Johnson"
    ],
    "price": 76.22,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789262656170-L.jpg"
  },
  {
    "id": 591,
    "isbn": "9785739482198",
    "title": "Fragmentos de la Travesía 9198",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Thomas"
    ],
    "price": 29.37,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785739482198-L.jpg"
  },
  {
    "id": 592,
    "isbn": "9785863815251",
    "title": "La Búsqueda de la Esperanza 9013",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Smith",
      "Michael Wilson"
    ],
    "price": 8.8,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785863815251-L.jpg"
  },
  {
    "id": 593,
    "isbn": "9783950330809",
    "title": "Espejos de los Ancestros 2369",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Williams"
    ],
    "price": 32.44,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783950330809-L.jpg"
  },
  {
    "id": 594,
    "isbn": "9784575315219",
    "title": "La Sombra de el Viento 8517",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo García"
    ],
    "price": 47.79,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784575315219-L.jpg"
  },
  {
    "id": 595,
    "isbn": "9789762737133",
    "title": "El Secreto de la Verdad 1399",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Jones",
      "Mary Jones"
    ],
    "price": 104.68,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789762737133-L.jpg"
  },
  {
    "id": 596,
    "isbn": "9784927418995",
    "title": "Más allá de el Tiempo 9070",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 61.41,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784927418995-L.jpg"
  },
  {
    "id": 597,
    "isbn": "9782920652705",
    "title": "Bajo el Cielo de la Montaña 6668",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Rodríguez",
      "Robert Anderson"
    ],
    "price": 101.81,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782920652705-L.jpg"
  },
  {
    "id": 598,
    "isbn": "9782578647016",
    "title": "El Camino hacia los Sueños 3567",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John Sánchez",
      "Mary Sánchez"
    ],
    "price": 49.17,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782578647016-L.jpg"
  },
  {
    "id": 599,
    "isbn": "9781627645171",
    "title": "El Legado de la Noche 6513",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Moore",
      "Jorge López"
    ],
    "price": 41.31,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781627645171-L.jpg"
  },
  {
    "id": 600,
    "isbn": "9782699862459",
    "title": "Crónicas de el Desierto 8384",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Smith",
      "Valeria Moore"
    ],
    "price": 91.97,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782699862459-L.jpg"
  },
  {
    "id": 601,
    "isbn": "9783434799269",
    "title": "Crónicas de los Olvidados 6024",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla López",
      "Sofía Miller"
    ],
    "price": 55.56,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783434799269-L.jpg"
  },
  {
    "id": 602,
    "isbn": "9788432822216",
    "title": "El Canto de la Esperanza 3599",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth López"
    ],
    "price": 98.49,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788432822216-L.jpg"
  },
  {
    "id": 603,
    "isbn": "978031883719",
    "title": "Más allá de el Destino 3817",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Moore",
      "Patricia Brown"
    ],
    "price": 16.16,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978031883719-L.jpg"
  },
  {
    "id": 604,
    "isbn": "9784883892006",
    "title": "El Guardián de la Esperanza 6721",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo Wilson"
    ],
    "price": 46.26,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784883892006-L.jpg"
  },
  {
    "id": 605,
    "isbn": "9784156224022",
    "title": "Lágrimas de el Viento 6131",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Sánchez"
    ],
    "price": 48.68,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784156224022-L.jpg"
  },
  {
    "id": 606,
    "isbn": "9787774651447",
    "title": "El Secreto de la Esperanza 2833",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Jones"
    ],
    "price": 34.92,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787774651447-L.jpg"
  },
  {
    "id": 607,
    "isbn": "978892421093",
    "title": "Las Luces de los Olvidados 9408",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Martínez",
      "Lucía Martínez"
    ],
    "price": 12.21,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978892421093-L.jpg"
  },
  {
    "id": 608,
    "isbn": "9785419534070",
    "title": "La Sombra de la Verdad 5789",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Wilson"
    ],
    "price": 70.53,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785419534070-L.jpg"
  },
  {
    "id": 609,
    "isbn": "9788194148470",
    "title": "El Eco de los Olvidados 3248",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael González"
    ],
    "price": 57.89,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788194148470-L.jpg"
  },
  {
    "id": 610,
    "isbn": "9782195281686",
    "title": "El Renacer de la Travesía 6112",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Williams",
      "Miguel Rodríguez"
    ],
    "price": 112.0,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782195281686-L.jpg"
  },
  {
    "id": 611,
    "isbn": "9789608327016",
    "title": "Lágrimas de la Memoria 9416",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Moore",
      "Sofía Sánchez"
    ],
    "price": 38.62,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789608327016-L.jpg"
  },
  {
    "id": 612,
    "isbn": "978211893785",
    "title": "Fragmentos de el Destino 2529",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Moore"
    ],
    "price": 5.06,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978211893785-L.jpg"
  },
  {
    "id": 613,
    "isbn": "9782929788030",
    "title": "El Renacer de el Destino 9756",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando López"
    ],
    "price": 86.78,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782929788030-L.jpg"
  },
  {
    "id": 614,
    "isbn": "9788927485087",
    "title": "La Búsqueda de los Sueños 7428",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Hernández",
      "Miguel Thomas"
    ],
    "price": 40.98,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788927485087-L.jpg"
  },
  {
    "id": 615,
    "isbn": "978352989365",
    "title": "El Guardián de la Eternidad 6476",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Hernández"
    ],
    "price": 43.46,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978352989365-L.jpg"
  },
  {
    "id": 616,
    "isbn": "9783638042376",
    "title": "Espejos de la Memoria 4546",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Taylor"
    ],
    "price": 43.24,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783638042376-L.jpg"
  },
  {
    "id": 617,
    "isbn": "9788419826596",
    "title": "El Renacer de la Esperanza 4747",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Davis",
      "Fernando Moore"
    ],
    "price": 18.66,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788419826596-L.jpg"
  },
  {
    "id": 618,
    "isbn": "9787496319090",
    "title": "Espejos de la Luna Roja 6590",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Brown"
    ],
    "price": 40.25,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787496319090-L.jpg"
  },
  {
    "id": 619,
    "isbn": "9784305753021",
    "title": "El Renacer de el Desierto 8581",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Pérez",
      "Michael Moore"
    ],
    "price": 117.78,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784305753021-L.jpg"
  },
  {
    "id": 620,
    "isbn": "978125723422",
    "title": "Crónicas de la Verdad 3470",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Miller",
      "Andrés Rodríguez"
    ],
    "price": 76.9,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978125723422-L.jpg"
  },
  {
    "id": 621,
    "isbn": "9783783171600",
    "title": "Crónicas de los Sueños 4745",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Davis"
    ],
    "price": 50.7,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783783171600-L.jpg"
  },
  {
    "id": 622,
    "isbn": "9789243933245",
    "title": "Rastros en el Desierto 5123",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Sofía Thomas",
      "Lucía Miller"
    ],
    "price": 50.11,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789243933245-L.jpg"
  },
  {
    "id": 623,
    "isbn": "9781132445723",
    "title": "Lágrimas de la Eternidad 3987",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Rodríguez",
      "Miguel López"
    ],
    "price": 87.23,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781132445723-L.jpg"
  },
  {
    "id": 624,
    "isbn": "9783815522219",
    "title": "La Búsqueda de el Viento 5954",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Smith"
    ],
    "price": 32.69,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783815522219-L.jpg"
  },
  {
    "id": 625,
    "isbn": "978183727172",
    "title": "El Renacer de el Desierto 12",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Thomas"
    ],
    "price": 62.11,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978183727172-L.jpg"
  },
  {
    "id": 626,
    "isbn": "9782639153333",
    "title": "El Legado de la Montaña 3290",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Patricia Hernández",
      "Ricardo Johnson"
    ],
    "price": 48.95,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782639153333-L.jpg"
  },
  {
    "id": 627,
    "isbn": "9783387076066",
    "title": "Rastros en la Luna Roja 6433",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Rodríguez"
    ],
    "price": 85.9,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783387076066-L.jpg"
  },
  {
    "id": 628,
    "isbn": "978474682726",
    "title": "Rastros en la Ciudad Perdida 4308",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John López",
      "Andrés Williams"
    ],
    "price": 41.8,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978474682726-L.jpg"
  },
  {
    "id": 629,
    "isbn": "9789734055036",
    "title": "Rastros en el Destino 3719",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Martínez"
    ],
    "price": 39.55,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789734055036-L.jpg"
  },
  {
    "id": 630,
    "isbn": "9781144811127",
    "title": "Rastros en la Sabiduría 2808",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Jones",
      "Isabel Smith"
    ],
    "price": 10.27,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781144811127-L.jpg"
  },
  {
    "id": 631,
    "isbn": "9784443575929",
    "title": "La Sombra de la Travesía 6846",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo López"
    ],
    "price": 16.96,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784443575929-L.jpg"
  },
  {
    "id": 632,
    "isbn": "9780815912002",
    "title": "Bajo el Cielo de la Luna Roja 3707",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Davis",
      "Patricia Jones"
    ],
    "price": 5.81,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780815912002-L.jpg"
  },
  {
    "id": 633,
    "isbn": "9788443731514",
    "title": "La Búsqueda de el Viento 376",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Williams",
      "Ricardo Anderson"
    ],
    "price": 90.85,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788443731514-L.jpg"
  },
  {
    "id": 634,
    "isbn": "9788705784852",
    "title": "La Sombra de la Montaña 6528",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Hernández"
    ],
    "price": 48.19,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788705784852-L.jpg"
  },
  {
    "id": 635,
    "isbn": "9783260052415",
    "title": "La Sombra de los Olvidados 7851",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Johnson",
      "Miguel Pérez"
    ],
    "price": 102.66,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783260052415-L.jpg"
  },
  {
    "id": 636,
    "isbn": "9780621316377",
    "title": "El Legado de los Olvidados 7523",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Wilson"
    ],
    "price": 49.54,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780621316377-L.jpg"
  },
  {
    "id": 637,
    "isbn": "9789462899315",
    "title": "Más allá de la Sabiduría 3549",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Johnson",
      "Michael Johnson"
    ],
    "price": 105.29,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789462899315-L.jpg"
  },
  {
    "id": 638,
    "isbn": "9789489365367",
    "title": "Vientos de la Luna Roja 3524",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Williams",
      "Mary Hernández"
    ],
    "price": 54.53,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789489365367-L.jpg"
  },
  {
    "id": 639,
    "isbn": "9783943092295",
    "title": "Las Voces de el Destino 5719",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Johnson"
    ],
    "price": 92.43,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783943092295-L.jpg"
  },
  {
    "id": 640,
    "isbn": "978714153832",
    "title": "Las Luces de el Desierto 2301",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth González"
    ],
    "price": 43.82,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978714153832-L.jpg"
  },
  {
    "id": 641,
    "isbn": "9786280374123",
    "title": "Más allá de la Noche 2708",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Hernández",
      "Linda Moore"
    ],
    "price": 20.4,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786280374123-L.jpg"
  },
  {
    "id": 642,
    "isbn": "9782744429828",
    "title": "El Eco de la Travesía 7957",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Pérez"
    ],
    "price": 41.23,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782744429828-L.jpg"
  },
  {
    "id": 643,
    "isbn": "9788214287769",
    "title": "Más allá de la Eternidad 6884",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel Moore",
      "Valeria Moore"
    ],
    "price": 88.54,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788214287769-L.jpg"
  },
  {
    "id": 644,
    "isbn": "9781984764744",
    "title": "El Legado de los Olvidados 6178",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés García"
    ],
    "price": 31.23,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781984764744-L.jpg"
  },
  {
    "id": 645,
    "isbn": "9789709370256",
    "title": "Las Luces de la Sabiduría 4964",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía Taylor",
      "Sofía Jones"
    ],
    "price": 119.82,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789709370256-L.jpg"
  },
  {
    "id": 646,
    "isbn": "9784593657773",
    "title": "Las Luces de el Destino 7198",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Johnson"
    ],
    "price": 72.85,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784593657773-L.jpg"
  },
  {
    "id": 647,
    "isbn": "978047981377",
    "title": "El Canto de el Destino 4732",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Moore",
      "Miguel Jones"
    ],
    "price": 87.13,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978047981377-L.jpg"
  },
  {
    "id": 648,
    "isbn": "9788666771052",
    "title": "Espejos de la Esperanza 3673",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Wilson"
    ],
    "price": 110.91,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788666771052-L.jpg"
  },
  {
    "id": 649,
    "isbn": "9788124793695",
    "title": "El Secreto de la Montaña 7441",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Smith",
      "Michael Taylor"
    ],
    "price": 81.88,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788124793695-L.jpg"
  },
  {
    "id": 650,
    "isbn": "9786608833356",
    "title": "El Legado de la Luna Roja 6031",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Johnson"
    ],
    "price": 64.26,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786608833356-L.jpg"
  },
  {
    "id": 651,
    "isbn": "9789499260768",
    "title": "Lágrimas de los Olvidados 48",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Rodríguez",
      "Elizabeth López"
    ],
    "price": 102.82,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789499260768-L.jpg"
  },
  {
    "id": 652,
    "isbn": "9788216412237",
    "title": "El Canto de la Memoria 9168",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Pérez",
      "Sofía Anderson"
    ],
    "price": 76.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788216412237-L.jpg"
  },
  {
    "id": 653,
    "isbn": "9785539645953",
    "title": "El Guardián de la Sabiduría 5424",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge González",
      "Ricardo Davis"
    ],
    "price": 62.4,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785539645953-L.jpg"
  },
  {
    "id": 654,
    "isbn": "9781882356102",
    "title": "El Camino hacia el Tiempo 1624",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John García",
      "Valeria Smith"
    ],
    "price": 78.24,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781882356102-L.jpg"
  },
  {
    "id": 655,
    "isbn": "9787114863622",
    "title": "Rastros en la Justicia 1199",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Taylor",
      "Miguel Anderson"
    ],
    "price": 23.81,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787114863622-L.jpg"
  },
  {
    "id": 656,
    "isbn": "9786169596318",
    "title": "El Camino hacia la Luna Roja 5503",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Brown",
      "Patricia Martínez"
    ],
    "price": 22.7,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786169596318-L.jpg"
  },
  {
    "id": 657,
    "isbn": "9787489098339",
    "title": "La Búsqueda de la Esperanza 3526",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Michael Hernández",
      "Lucía Anderson"
    ],
    "price": 28.68,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787489098339-L.jpg"
  },
  {
    "id": 658,
    "isbn": "9785502534413",
    "title": "El Camino hacia la Noche 6118",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo López",
      "Carla Thomas"
    ],
    "price": 111.27,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785502534413-L.jpg"
  },
  {
    "id": 659,
    "isbn": "9789835933059",
    "title": "El Camino hacia el Viento 8776",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Rodríguez",
      "Miguel Smith"
    ],
    "price": 14.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789835933059-L.jpg"
  },
  {
    "id": 660,
    "isbn": "9787447622002",
    "title": "Crónicas de la Eternidad 1427",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Taylor",
      "Jorge Martínez"
    ],
    "price": 62.72,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787447622002-L.jpg"
  },
  {
    "id": 661,
    "isbn": "9787252853172",
    "title": "Las Luces de la Montaña 7232",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Martínez"
    ],
    "price": 94.02,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787252853172-L.jpg"
  },
  {
    "id": 662,
    "isbn": "9784787626820",
    "title": "El Canto de la Esperanza 1563",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla González",
      "Carla Sánchez"
    ],
    "price": 68.22,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784787626820-L.jpg"
  },
  {
    "id": 663,
    "isbn": "9781911763963",
    "title": "Más allá de los Sueños 5258",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Hernández",
      "Elena García"
    ],
    "price": 85.87,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781911763963-L.jpg"
  },
  {
    "id": 664,
    "isbn": "9788860135704",
    "title": "El Guardián de la Luna Roja 3283",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Miller",
      "Elizabeth Taylor"
    ],
    "price": 96.58,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788860135704-L.jpg"
  },
  {
    "id": 665,
    "isbn": "9783155570963",
    "title": "Rastros en la Travesía 8362",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia Hernández"
    ],
    "price": 92.05,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783155570963-L.jpg"
  },
  {
    "id": 666,
    "isbn": "9781614029274",
    "title": "El Legado de el Destino 1740",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Williams"
    ],
    "price": 83.37,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781614029274-L.jpg"
  },
  {
    "id": 667,
    "isbn": "9784269080065",
    "title": "Las Voces de la Noche 6118",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Taylor",
      "Ricardo Anderson"
    ],
    "price": 14.32,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784269080065-L.jpg"
  },
  {
    "id": 668,
    "isbn": "9783668183711",
    "title": "El Guardián de los Sueños 5916",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo Johnson"
    ],
    "price": 43.68,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783668183711-L.jpg"
  },
  {
    "id": 669,
    "isbn": "9786633497752",
    "title": "La Búsqueda de el Desierto 9769",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John García"
    ],
    "price": 78.93,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786633497752-L.jpg"
  },
  {
    "id": 670,
    "isbn": "9780156621700",
    "title": "Más allá de la Verdad 8768",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Jones",
      "Lucía Jones"
    ],
    "price": 24.85,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780156621700-L.jpg"
  },
  {
    "id": 671,
    "isbn": "9783751920209",
    "title": "El Camino hacia la Travesía 7433",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Rodríguez"
    ],
    "price": 15.61,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783751920209-L.jpg"
  },
  {
    "id": 672,
    "isbn": "9785511643496",
    "title": "El Eco de los Sueños 6805",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Sánchez",
      "Elena Hernández"
    ],
    "price": 94.12,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785511643496-L.jpg"
  },
  {
    "id": 673,
    "isbn": "9786198182643",
    "title": "El Camino hacia la Memoria 6016",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Hernández",
      "Mary Hernández"
    ],
    "price": 112.46,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786198182643-L.jpg"
  },
  {
    "id": 674,
    "isbn": "9788228271662",
    "title": "El Camino hacia la Noche 219",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth Jones",
      "Fernando Johnson"
    ],
    "price": 56.13,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788228271662-L.jpg"
  },
  {
    "id": 675,
    "isbn": "9784515160138",
    "title": "Vientos de la Noche 7130",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Smith"
    ],
    "price": 92.59,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784515160138-L.jpg"
  },
  {
    "id": 676,
    "isbn": "9781333581930",
    "title": "Bajo el Cielo de la Montaña 279",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Martínez",
      "Ricardo González"
    ],
    "price": 119.59,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781333581930-L.jpg"
  },
  {
    "id": 677,
    "isbn": "9781831258846",
    "title": "El Canto de el Destino 3227",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Moore",
      "Michael Davis"
    ],
    "price": 94.8,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781831258846-L.jpg"
  },
  {
    "id": 678,
    "isbn": "9787594237517",
    "title": "La Búsqueda de la Sabiduría 497",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Brown"
    ],
    "price": 78.8,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787594237517-L.jpg"
  },
  {
    "id": 679,
    "isbn": "9788527181082",
    "title": "El Guardián de la Travesía 5401",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 33.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788527181082-L.jpg"
  },
  {
    "id": 680,
    "isbn": "9788887573077",
    "title": "El Renacer de el Desierto 9541",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Thomas"
    ],
    "price": 101.76,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788887573077-L.jpg"
  },
  {
    "id": 681,
    "isbn": "9786442656968",
    "title": "La Búsqueda de los Ancestros 8840",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Thomas",
      "Jorge López"
    ],
    "price": 34.86,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786442656968-L.jpg"
  },
  {
    "id": 682,
    "isbn": "9782411753515",
    "title": "Las Luces de los Olvidados 6379",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Taylor"
    ],
    "price": 26.11,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782411753515-L.jpg"
  },
  {
    "id": 683,
    "isbn": "9787431885062",
    "title": "El Secreto de los Olvidados 679",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Michael Miller",
      "Jorge Wilson"
    ],
    "price": 12.17,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787431885062-L.jpg"
  },
  {
    "id": 684,
    "isbn": "9788901057200",
    "title": "Crónicas de la Montaña 316",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Martínez",
      "Sofía Taylor"
    ],
    "price": 97.98,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788901057200-L.jpg"
  },
  {
    "id": 685,
    "isbn": "9787458133405",
    "title": "Fragmentos de la Luna Roja 1825",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Williams"
    ],
    "price": 38.27,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787458133405-L.jpg"
  },
  {
    "id": 686,
    "isbn": "9781157327769",
    "title": "Vientos de la Noche 9247",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Johnson",
      "Patricia Anderson"
    ],
    "price": 18.62,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781157327769-L.jpg"
  },
  {
    "id": 687,
    "isbn": "9788527646758",
    "title": "Lágrimas de la Eternidad 3375",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Smith",
      "Carla García"
    ],
    "price": 78.48,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788527646758-L.jpg"
  },
  {
    "id": 688,
    "isbn": "9780994546425",
    "title": "El Camino hacia los Olvidados 639",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Smith"
    ],
    "price": 87.72,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780994546425-L.jpg"
  },
  {
    "id": 689,
    "isbn": "978889663671",
    "title": "La Sombra de la Memoria 565",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Sofía Brown"
    ],
    "price": 114.04,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978889663671-L.jpg"
  },
  {
    "id": 690,
    "isbn": "9780848413996",
    "title": "Más allá de la Esperanza 4652",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria González",
      "Patricia Pérez"
    ],
    "price": 78.18,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780848413996-L.jpg"
  },
  {
    "id": 691,
    "isbn": "9782422423124",
    "title": "La Búsqueda de la Justicia 6323",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Pérez",
      "Isabel Rodríguez"
    ],
    "price": 66.98,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782422423124-L.jpg"
  },
  {
    "id": 692,
    "isbn": "9783600891926",
    "title": "Lágrimas de la Sabiduría 2374",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Williams",
      "Patricia Jones"
    ],
    "price": 28.96,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783600891926-L.jpg"
  },
  {
    "id": 693,
    "isbn": "9783142510255",
    "title": "Lágrimas de el Desierto 6179",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Hernández",
      "David Hernández"
    ],
    "price": 53.05,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783142510255-L.jpg"
  },
  {
    "id": 694,
    "isbn": "9789615058705",
    "title": "Espejos de el Tiempo 8290",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Taylor",
      "Sofía Martínez"
    ],
    "price": 95.74,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789615058705-L.jpg"
  },
  {
    "id": 695,
    "isbn": "9789509520646",
    "title": "Espejos de las Estrellas 8682",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Miller"
    ],
    "price": 14.47,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789509520646-L.jpg"
  },
  {
    "id": 696,
    "isbn": "9780694156856",
    "title": "El Legado de la Sabiduría 6841",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Michael Sánchez"
    ],
    "price": 39.44,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780694156856-L.jpg"
  },
  {
    "id": 697,
    "isbn": "9781372544521",
    "title": "El Secreto de el Desierto 5534",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Thomas",
      "Ricardo Davis"
    ],
    "price": 94.58,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781372544521-L.jpg"
  },
  {
    "id": 698,
    "isbn": "9789194270840",
    "title": "Vientos de la Travesía 8931",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Miller"
    ],
    "price": 28.27,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789194270840-L.jpg"
  },
  {
    "id": 699,
    "isbn": "9784406354417",
    "title": "Rastros en la Montaña 9404",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel González"
    ],
    "price": 70.25,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784406354417-L.jpg"
  },
  {
    "id": 700,
    "isbn": "9789980093103",
    "title": "La Sombra de la Memoria 7207",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Williams"
    ],
    "price": 95.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789980093103-L.jpg"
  },
  {
    "id": 701,
    "isbn": "978219542513",
    "title": "Las Voces de la Ciudad Perdida 5386",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Rodríguez"
    ],
    "price": 47.55,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978219542513-L.jpg"
  },
  {
    "id": 702,
    "isbn": "9780298170456",
    "title": "Espejos de la Ciudad Perdida 2416",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo García"
    ],
    "price": 34.62,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780298170456-L.jpg"
  },
  {
    "id": 703,
    "isbn": "9783773142580",
    "title": "Fragmentos de la Sabiduría 3945",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge González"
    ],
    "price": 98.73,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783773142580-L.jpg"
  },
  {
    "id": 704,
    "isbn": "9784635339377",
    "title": "Más allá de los Ancestros 1143",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Carla Miller",
      "Gabriel Smith"
    ],
    "price": 63.15,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784635339377-L.jpg"
  },
  {
    "id": 705,
    "isbn": "9785758156292",
    "title": "La Búsqueda de los Olvidados 5894",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Pérez"
    ],
    "price": 92.16,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785758156292-L.jpg"
  },
  {
    "id": 706,
    "isbn": "9781599729138",
    "title": "Espejos de los Olvidados 7654",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Brown",
      "Michael Wilson"
    ],
    "price": 47.1,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781599729138-L.jpg"
  },
  {
    "id": 707,
    "isbn": "9783498874667",
    "title": "La Sombra de el Horizonte 560",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Brown",
      "Ricardo Miller"
    ],
    "price": 119.04,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783498874667-L.jpg"
  },
  {
    "id": 708,
    "isbn": "9780294093872",
    "title": "Las Luces de el Desierto 7566",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Taylor",
      "Patricia González"
    ],
    "price": 25.93,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780294093872-L.jpg"
  },
  {
    "id": 709,
    "isbn": "9789843561527",
    "title": "El Legado de la Noche 7777",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Pérez",
      "Patricia Miller"
    ],
    "price": 92.01,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789843561527-L.jpg"
  },
  {
    "id": 710,
    "isbn": "9789841346010",
    "title": "El Renacer de los Olvidados 5662",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Sánchez"
    ],
    "price": 92.54,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789841346010-L.jpg"
  },
  {
    "id": 711,
    "isbn": "9784214511705",
    "title": "El Guardián de el Desierto 7437",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Taylor",
      "Lucía Moore"
    ],
    "price": 30.25,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784214511705-L.jpg"
  },
  {
    "id": 712,
    "isbn": "9787244486272",
    "title": "El Guardián de el Desierto 7128",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Rodríguez"
    ],
    "price": 19.39,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787244486272-L.jpg"
  },
  {
    "id": 713,
    "isbn": "9780318823706",
    "title": "El Misterio de el Destino 3669",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Hernández",
      "Sofía Wilson"
    ],
    "price": 114.5,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780318823706-L.jpg"
  },
  {
    "id": 714,
    "isbn": "9789921077506",
    "title": "El Guardián de el Tiempo 3182",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Moore",
      "Fernando Taylor"
    ],
    "price": 28.5,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789921077506-L.jpg"
  },
  {
    "id": 715,
    "isbn": "9783501131985",
    "title": "Más allá de la Noche 686",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Rodríguez"
    ],
    "price": 9.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783501131985-L.jpg"
  },
  {
    "id": 716,
    "isbn": "9782945411424",
    "title": "Bajo el Cielo de el Tiempo 5334",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Hernández",
      "Elizabeth Brown"
    ],
    "price": 100.53,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782945411424-L.jpg"
  },
  {
    "id": 717,
    "isbn": "9780210497500",
    "title": "El Guardián de la Travesía 6947",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda Wilson"
    ],
    "price": 40.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780210497500-L.jpg"
  },
  {
    "id": 718,
    "isbn": "9789853341799",
    "title": "El Canto de la Esperanza 4729",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Rodríguez"
    ],
    "price": 42.7,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789853341799-L.jpg"
  },
  {
    "id": 719,
    "isbn": "9781675596975",
    "title": "El Eco de los Ancestros 4457",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Williams",
      "Jorge Miller"
    ],
    "price": 105.4,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781675596975-L.jpg"
  },
  {
    "id": 720,
    "isbn": "9785221872797",
    "title": "El Legado de la Montaña 3459",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Williams"
    ],
    "price": 13.95,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785221872797-L.jpg"
  },
  {
    "id": 721,
    "isbn": "9782887586013",
    "title": "Las Voces de las Estrellas 292",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elena Williams"
    ],
    "price": 58.12,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782887586013-L.jpg"
  },
  {
    "id": 722,
    "isbn": "9783636961396",
    "title": "El Misterio de el Destino 8337",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Rodríguez",
      "Andrés Moore"
    ],
    "price": 78.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783636961396-L.jpg"
  },
  {
    "id": 723,
    "isbn": "9784139985490",
    "title": "Espejos de la Travesía 4630",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda Anderson"
    ],
    "price": 6.73,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784139985490-L.jpg"
  },
  {
    "id": 724,
    "isbn": "9788794726214",
    "title": "Rastros en los Ancestros 3909",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Johnson",
      "Lucía Williams"
    ],
    "price": 75.6,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788794726214-L.jpg"
  },
  {
    "id": 725,
    "isbn": "9782666684947",
    "title": "El Camino hacia la Verdad 9937",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Miller",
      "Lucía Hernández"
    ],
    "price": 92.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782666684947-L.jpg"
  },
  {
    "id": 726,
    "isbn": "9784247467437",
    "title": "Espejos de la Travesía 2148",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Williams"
    ],
    "price": 72.87,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784247467437-L.jpg"
  },
  {
    "id": 727,
    "isbn": "978045115448",
    "title": "El Eco de la Luna Roja 6558",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Rodríguez"
    ],
    "price": 78.6,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978045115448-L.jpg"
  },
  {
    "id": 728,
    "isbn": "9785376260982",
    "title": "Crónicas de la Noche 9262",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Hernández"
    ],
    "price": 91.58,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785376260982-L.jpg"
  },
  {
    "id": 729,
    "isbn": "9788538572770",
    "title": "El Legado de el Horizonte 3852",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Taylor"
    ],
    "price": 86.78,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788538572770-L.jpg"
  },
  {
    "id": 730,
    "isbn": "9785667879848",
    "title": "El Camino hacia la Noche 5286",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Davis"
    ],
    "price": 100.85,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785667879848-L.jpg"
  },
  {
    "id": 731,
    "isbn": "9784931389724",
    "title": "Espejos de el Destino 1907",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Thomas",
      "Michael Sánchez"
    ],
    "price": 90.0,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784931389724-L.jpg"
  },
  {
    "id": 732,
    "isbn": "9786334139135",
    "title": "El Renacer de la Noche 5389",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 46.09,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786334139135-L.jpg"
  },
  {
    "id": 733,
    "isbn": "9782698266227",
    "title": "El Secreto de la Travesía 9815",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía García",
      "Michael Williams"
    ],
    "price": 77.89,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782698266227-L.jpg"
  },
  {
    "id": 734,
    "isbn": "9788845918506",
    "title": "El Eco de el Horizonte 2597",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Wilson"
    ],
    "price": 87.48,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788845918506-L.jpg"
  },
  {
    "id": 735,
    "isbn": "9785206065350",
    "title": "El Renacer de la Sabiduría 225",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Pérez",
      "Fernando López"
    ],
    "price": 99.04,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785206065350-L.jpg"
  },
  {
    "id": 736,
    "isbn": "9788283732313",
    "title": "Lágrimas de el Tiempo 338",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Hernández",
      "Carla Taylor"
    ],
    "price": 11.14,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788283732313-L.jpg"
  },
  {
    "id": 737,
    "isbn": "9785475217085",
    "title": "Lágrimas de la Justicia 5603",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Jones",
      "Isabel Martínez"
    ],
    "price": 69.14,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785475217085-L.jpg"
  },
  {
    "id": 738,
    "isbn": "9782102579370",
    "title": "El Camino hacia el Viento 8025",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Pérez"
    ],
    "price": 105.58,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782102579370-L.jpg"
  },
  {
    "id": 739,
    "isbn": "9788219220983",
    "title": "La Sombra de el Desierto 5767",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Miguel Moore"
    ],
    "price": 5.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788219220983-L.jpg"
  },
  {
    "id": 740,
    "isbn": "9787600928811",
    "title": "El Guardián de el Tiempo 475",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Taylor"
    ],
    "price": 18.4,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787600928811-L.jpg"
  },
  {
    "id": 741,
    "isbn": "9783100083715",
    "title": "El Renacer de la Montaña 1445",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 23.91,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783100083715-L.jpg"
  },
  {
    "id": 742,
    "isbn": "9780353838413",
    "title": "El Renacer de los Ancestros 7926",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Davis"
    ],
    "price": 23.83,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780353838413-L.jpg"
  },
  {
    "id": 743,
    "isbn": "9785390293669",
    "title": "El Secreto de los Ancestros 1438",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Brown"
    ],
    "price": 18.5,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785390293669-L.jpg"
  },
  {
    "id": 744,
    "isbn": "9788955622294",
    "title": "Vientos de la Justicia 7754",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Smith"
    ],
    "price": 104.79,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788955622294-L.jpg"
  },
  {
    "id": 745,
    "isbn": "9787728277723",
    "title": "Las Voces de el Tiempo 8435",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elena Pérez"
    ],
    "price": 51.71,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787728277723-L.jpg"
  },
  {
    "id": 746,
    "isbn": "9781599284125",
    "title": "Espejos de el Horizonte 2228",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Miller"
    ],
    "price": 111.08,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781599284125-L.jpg"
  },
  {
    "id": 747,
    "isbn": "9784367020789",
    "title": "La Sombra de la Eternidad 7865",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel López"
    ],
    "price": 92.76,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784367020789-L.jpg"
  },
  {
    "id": 748,
    "isbn": "9781920234638",
    "title": "El Misterio de el Viento 8309",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 38.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781920234638-L.jpg"
  },
  {
    "id": 749,
    "isbn": "9782223796496",
    "title": "Fragmentos de la Noche 4376",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Davis"
    ],
    "price": 33.37,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782223796496-L.jpg"
  },
  {
    "id": 750,
    "isbn": "9784408084695",
    "title": "Las Luces de el Destino 7517",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Rodríguez",
      "Sofía Johnson"
    ],
    "price": 98.5,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784408084695-L.jpg"
  },
  {
    "id": 751,
    "isbn": "9784527083920",
    "title": "Las Voces de la Verdad 6263",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Brown"
    ],
    "price": 9.36,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784527083920-L.jpg"
  },
  {
    "id": 752,
    "isbn": "9781914396762",
    "title": "La Búsqueda de la Eternidad 3682",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Linda Davis",
      "Mary Jones"
    ],
    "price": 90.77,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781914396762-L.jpg"
  },
  {
    "id": 753,
    "isbn": "9782516626660",
    "title": "Vientos de el Desierto 576",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Johnson",
      "Andrés Moore"
    ],
    "price": 44.26,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782516626660-L.jpg"
  },
  {
    "id": 754,
    "isbn": "9788256935147",
    "title": "El Canto de la Justicia 3622",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Johnson"
    ],
    "price": 100.43,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788256935147-L.jpg"
  },
  {
    "id": 755,
    "isbn": "9783682966291",
    "title": "Vientos de el Horizonte 9264",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Brown",
      "Andrés Brown"
    ],
    "price": 21.47,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783682966291-L.jpg"
  },
  {
    "id": 756,
    "isbn": "9789241666022",
    "title": "Más allá de las Estrellas 8943",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Rodríguez",
      "John Sánchez"
    ],
    "price": 91.19,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789241666022-L.jpg"
  },
  {
    "id": 757,
    "isbn": "9784505273473",
    "title": "El Legado de la Sabiduría 9230",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Anderson"
    ],
    "price": 76.82,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784505273473-L.jpg"
  },
  {
    "id": 758,
    "isbn": "9784772357241",
    "title": "El Misterio de el Tiempo 4794",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Miller",
      "Valeria Rodríguez"
    ],
    "price": 53.13,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784772357241-L.jpg"
  },
  {
    "id": 759,
    "isbn": "9788255857471",
    "title": "Fragmentos de el Desierto 6977",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Wilson",
      "Elena García"
    ],
    "price": 113.0,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788255857471-L.jpg"
  },
  {
    "id": 760,
    "isbn": "9788500422638",
    "title": "El Canto de la Sabiduría 7552",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Jones",
      "Elizabeth Thomas"
    ],
    "price": 12.35,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788500422638-L.jpg"
  },
  {
    "id": 761,
    "isbn": "9780699447065",
    "title": "Las Luces de la Noche 4695",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Davis"
    ],
    "price": 29.26,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780699447065-L.jpg"
  },
  {
    "id": 762,
    "isbn": "9781653235223",
    "title": "El Secreto de la Travesía 5839",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Rodríguez"
    ],
    "price": 17.68,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781653235223-L.jpg"
  },
  {
    "id": 763,
    "isbn": "9785296760135",
    "title": "Fragmentos de la Montaña 2316",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Brown"
    ],
    "price": 16.26,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785296760135-L.jpg"
  },
  {
    "id": 764,
    "isbn": "9786212039311",
    "title": "Rastros en la Travesía 3581",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Jones"
    ],
    "price": 74.86,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786212039311-L.jpg"
  },
  {
    "id": 765,
    "isbn": "9780443785252",
    "title": "Fragmentos de las Estrellas 4704",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Taylor",
      "Andrés Sánchez"
    ],
    "price": 27.09,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780443785252-L.jpg"
  },
  {
    "id": 766,
    "isbn": "9788251571173",
    "title": "El Legado de la Montaña 4401",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía González",
      "Robert Wilson"
    ],
    "price": 52.49,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788251571173-L.jpg"
  },
  {
    "id": 767,
    "isbn": "9782888044949",
    "title": "El Renacer de los Sueños 879",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Thomas",
      "John Taylor"
    ],
    "price": 99.66,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782888044949-L.jpg"
  },
  {
    "id": 768,
    "isbn": "9788929245108",
    "title": "El Guardián de la Sabiduría 7030",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 100.7,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788929245108-L.jpg"
  },
  {
    "id": 769,
    "isbn": "9784764683549",
    "title": "El Secreto de la Justicia 6582",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel González",
      "Fernando Pérez"
    ],
    "price": 18.73,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784764683549-L.jpg"
  },
  {
    "id": 770,
    "isbn": "9788182429512",
    "title": "Vientos de la Montaña 2902",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Miller"
    ],
    "price": 72.81,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788182429512-L.jpg"
  },
  {
    "id": 771,
    "isbn": "978650959307",
    "title": "La Búsqueda de la Montaña 4867",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Williams",
      "Valeria Johnson"
    ],
    "price": 16.37,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978650959307-L.jpg"
  },
  {
    "id": 772,
    "isbn": "9780483824256",
    "title": "El Guardián de la Esperanza 6658",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Anderson"
    ],
    "price": 59.25,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780483824256-L.jpg"
  },
  {
    "id": 773,
    "isbn": "9781445927749",
    "title": "El Misterio de la Justicia 9106",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Sánchez"
    ],
    "price": 116.77,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781445927749-L.jpg"
  },
  {
    "id": 774,
    "isbn": "9784305916433",
    "title": "El Eco de la Travesía 6690",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla López",
      "Sofía Rodríguez"
    ],
    "price": 93.94,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784305916433-L.jpg"
  },
  {
    "id": 775,
    "isbn": "9788628218199",
    "title": "Vientos de la Noche 9848",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Johnson"
    ],
    "price": 70.15,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788628218199-L.jpg"
  },
  {
    "id": 776,
    "isbn": "9784186659115",
    "title": "Crónicas de las Estrellas 2276",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Williams",
      "Ricardo Johnson"
    ],
    "price": 97.45,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784186659115-L.jpg"
  },
  {
    "id": 777,
    "isbn": "9782321450283",
    "title": "Lágrimas de el Destino 9187",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Brown",
      "Lucía Wilson"
    ],
    "price": 31.39,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782321450283-L.jpg"
  },
  {
    "id": 778,
    "isbn": "9787891785520",
    "title": "El Camino hacia las Estrellas 4465",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Smith",
      "Robert Rodríguez"
    ],
    "price": 75.0,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787891785520-L.jpg"
  },
  {
    "id": 779,
    "isbn": "9786568838101",
    "title": "Crónicas de la Ciudad Perdida 1925",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Thomas"
    ],
    "price": 37.72,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786568838101-L.jpg"
  },
  {
    "id": 780,
    "isbn": "9780232698299",
    "title": "La Sombra de la Memoria 9015",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary López",
      "Carla Sánchez"
    ],
    "price": 98.93,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780232698299-L.jpg"
  },
  {
    "id": 781,
    "isbn": "9789766565374",
    "title": "El Guardián de la Eternidad 9575",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía García"
    ],
    "price": 72.5,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789766565374-L.jpg"
  },
  {
    "id": 782,
    "isbn": "9780555520147",
    "title": "Las Voces de la Memoria 1529",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Sánchez",
      "Linda Taylor"
    ],
    "price": 116.83,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780555520147-L.jpg"
  },
  {
    "id": 783,
    "isbn": "9782820731685",
    "title": "El Misterio de la Verdad 4485",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Williams",
      "Valeria Brown"
    ],
    "price": 54.24,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782820731685-L.jpg"
  },
  {
    "id": 784,
    "isbn": "9780755967407",
    "title": "El Legado de el Desierto 9810",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Miller"
    ],
    "price": 34.76,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780755967407-L.jpg"
  },
  {
    "id": 785,
    "isbn": "9783307930836",
    "title": "El Canto de los Sueños 2993",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel González",
      "Jorge Taylor"
    ],
    "price": 96.6,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783307930836-L.jpg"
  },
  {
    "id": 786,
    "isbn": "9786600347578",
    "title": "El Camino hacia la Esperanza 2266",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel González",
      "Ricardo Thomas"
    ],
    "price": 109.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786600347578-L.jpg"
  },
  {
    "id": 787,
    "isbn": "9789389084979",
    "title": "Las Luces de la Noche 9485",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Brown",
      "Ricardo Davis"
    ],
    "price": 7.79,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789389084979-L.jpg"
  },
  {
    "id": 788,
    "isbn": "9783842651784",
    "title": "El Renacer de los Olvidados 9604",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía López"
    ],
    "price": 28.84,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783842651784-L.jpg"
  },
  {
    "id": 789,
    "isbn": "9787340928706",
    "title": "El Camino hacia el Horizonte 587",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elena López",
      "Isabel Johnson"
    ],
    "price": 75.95,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787340928706-L.jpg"
  },
  {
    "id": 790,
    "isbn": "9780867158595",
    "title": "Crónicas de la Justicia 755",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Smith"
    ],
    "price": 40.12,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780867158595-L.jpg"
  },
  {
    "id": 791,
    "isbn": "9788342237001",
    "title": "Crónicas de el Destino 2210",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Wilson"
    ],
    "price": 115.08,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788342237001-L.jpg"
  },
  {
    "id": 792,
    "isbn": "9780871443021",
    "title": "Las Luces de el Desierto 3988",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Hernández",
      "Andrés Jones"
    ],
    "price": 80.76,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780871443021-L.jpg"
  },
  {
    "id": 793,
    "isbn": "9781795628822",
    "title": "Fragmentos de los Olvidados 6824",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Thomas",
      "Sofía González"
    ],
    "price": 31.8,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781795628822-L.jpg"
  },
  {
    "id": 794,
    "isbn": "9784994110952",
    "title": "Lágrimas de los Ancestros 7983",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Johnson"
    ],
    "price": 51.8,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784994110952-L.jpg"
  },
  {
    "id": 795,
    "isbn": "9789409629661",
    "title": "El Eco de el Viento 1572",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary López",
      "Miguel Jones"
    ],
    "price": 48.69,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789409629661-L.jpg"
  },
  {
    "id": 796,
    "isbn": "9786794316688",
    "title": "Bajo el Cielo de la Ciudad Perdida 2750",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda González"
    ],
    "price": 41.42,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786794316688-L.jpg"
  },
  {
    "id": 797,
    "isbn": "978062773869",
    "title": "Las Voces de el Tiempo 2678",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Sánchez"
    ],
    "price": 50.06,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978062773869-L.jpg"
  },
  {
    "id": 798,
    "isbn": "978023792652",
    "title": "El Secreto de la Justicia 7525",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Williams"
    ],
    "price": 41.9,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978023792652-L.jpg"
  },
  {
    "id": 799,
    "isbn": "9781167158117",
    "title": "Más allá de la Travesía 5190",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Jones",
      "Linda Anderson"
    ],
    "price": 10.96,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781167158117-L.jpg"
  },
  {
    "id": 800,
    "isbn": "9786128599046",
    "title": "El Legado de el Horizonte 4033",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Taylor",
      "Valeria Rodríguez"
    ],
    "price": 22.42,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786128599046-L.jpg"
  },
  {
    "id": 801,
    "isbn": "9782756696287",
    "title": "Lágrimas de el Horizonte 5695",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 44.67,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782756696287-L.jpg"
  },
  {
    "id": 802,
    "isbn": "9789799644022",
    "title": "El Camino hacia el Horizonte 6008",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 112.51,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789799644022-L.jpg"
  },
  {
    "id": 803,
    "isbn": "9788947911634",
    "title": "Crónicas de la Sabiduría 9344",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Wilson",
      "Gabriel García"
    ],
    "price": 69.23,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788947911634-L.jpg"
  },
  {
    "id": 804,
    "isbn": "9780345711229",
    "title": "Vientos de los Olvidados 8036",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés González",
      "Elizabeth Moore"
    ],
    "price": 41.86,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780345711229-L.jpg"
  },
  {
    "id": 805,
    "isbn": "9780488811886",
    "title": "Bajo el Cielo de la Sabiduría 6046",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "David Johnson",
      "David Taylor"
    ],
    "price": 23.86,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780488811886-L.jpg"
  },
  {
    "id": 806,
    "isbn": "9788626229074",
    "title": "El Secreto de la Montaña 5648",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Rodríguez",
      "Ricardo Miller"
    ],
    "price": 86.36,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788626229074-L.jpg"
  },
  {
    "id": 807,
    "isbn": "9781267972958",
    "title": "Más allá de los Olvidados 3676",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Johnson",
      "Elena Pérez"
    ],
    "price": 118.78,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781267972958-L.jpg"
  },
  {
    "id": 808,
    "isbn": "9783648420904",
    "title": "Lágrimas de los Sueños 6320",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Davis",
      "Valeria Williams"
    ],
    "price": 37.37,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783648420904-L.jpg"
  },
  {
    "id": 809,
    "isbn": "9783842446335",
    "title": "Vientos de los Ancestros 3842",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert González",
      "Gabriel López"
    ],
    "price": 40.52,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783842446335-L.jpg"
  },
  {
    "id": 810,
    "isbn": "9786646262859",
    "title": "Crónicas de el Horizonte 641",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Wilson"
    ],
    "price": 80.72,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786646262859-L.jpg"
  },
  {
    "id": 811,
    "isbn": "9782739651647",
    "title": "Crónicas de la Ciudad Perdida 42",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Thomas"
    ],
    "price": 28.44,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782739651647-L.jpg"
  },
  {
    "id": 812,
    "isbn": "9789555645072",
    "title": "El Eco de los Olvidados 8459",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Moore"
    ],
    "price": 109.3,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789555645072-L.jpg"
  },
  {
    "id": 813,
    "isbn": "9780109213006",
    "title": "Las Luces de la Sabiduría 5223",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Hernández",
      "Isabel Wilson"
    ],
    "price": 81.19,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780109213006-L.jpg"
  },
  {
    "id": 814,
    "isbn": "9783803458063",
    "title": "Vientos de la Travesía 7013",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Johnson"
    ],
    "price": 67.82,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783803458063-L.jpg"
  },
  {
    "id": 815,
    "isbn": "978084694245",
    "title": "El Guardián de la Montaña 7558",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Rodríguez"
    ],
    "price": 44.37,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978084694245-L.jpg"
  },
  {
    "id": 816,
    "isbn": "9783176638659",
    "title": "Vientos de la Memoria 7918",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Williams"
    ],
    "price": 82.8,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783176638659-L.jpg"
  },
  {
    "id": 817,
    "isbn": "9780172249124",
    "title": "Las Luces de la Esperanza 7600",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth López"
    ],
    "price": 105.53,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780172249124-L.jpg"
  },
  {
    "id": 818,
    "isbn": "9786462938785",
    "title": "La Búsqueda de el Tiempo 8492",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Johnson",
      "Ricardo Hernández"
    ],
    "price": 56.45,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786462938785-L.jpg"
  },
  {
    "id": 819,
    "isbn": "9781337078658",
    "title": "Rastros en los Ancestros 8941",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Brown"
    ],
    "price": 64.23,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781337078658-L.jpg"
  },
  {
    "id": 820,
    "isbn": "9786701637295",
    "title": "Vientos de la Travesía 3054",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Wilson"
    ],
    "price": 9.24,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786701637295-L.jpg"
  },
  {
    "id": 821,
    "isbn": "9785358286047",
    "title": "Rastros en la Noche 3500",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Thomas",
      "Sofía Johnson"
    ],
    "price": 118.63,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785358286047-L.jpg"
  },
  {
    "id": 822,
    "isbn": "978737519055",
    "title": "La Búsqueda de la Justicia 5272",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Rodríguez",
      "Patricia Anderson"
    ],
    "price": 8.86,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978737519055-L.jpg"
  },
  {
    "id": 823,
    "isbn": "9780984274727",
    "title": "Bajo el Cielo de la Travesía 842",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Sánchez",
      "Carla Brown"
    ],
    "price": 34.37,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780984274727-L.jpg"
  },
  {
    "id": 824,
    "isbn": "9787433486137",
    "title": "El Legado de la Esperanza 3807",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Wilson",
      "Carla Hernández"
    ],
    "price": 85.63,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787433486137-L.jpg"
  },
  {
    "id": 825,
    "isbn": "978949094827",
    "title": "El Legado de las Estrellas 6274",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Brown"
    ],
    "price": 63.32,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978949094827-L.jpg"
  },
  {
    "id": 826,
    "isbn": "9788900064780",
    "title": "El Renacer de los Sueños 6552",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Williams",
      "Lucía González"
    ],
    "price": 58.36,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788900064780-L.jpg"
  },
  {
    "id": 827,
    "isbn": "9781950451371",
    "title": "La Sombra de los Olvidados 9400",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Moore",
      "John Pérez"
    ],
    "price": 44.7,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781950451371-L.jpg"
  },
  {
    "id": 828,
    "isbn": "9783675781658",
    "title": "Vientos de la Montaña 3044",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Wilson",
      "Gabriel López"
    ],
    "price": 47.39,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783675781658-L.jpg"
  },
  {
    "id": 829,
    "isbn": "9780812625172",
    "title": "El Renacer de la Verdad 1484",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Brown"
    ],
    "price": 114.8,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780812625172-L.jpg"
  },
  {
    "id": 830,
    "isbn": "9781266647383",
    "title": "El Misterio de el Tiempo 1302",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Sánchez",
      "Jorge Hernández"
    ],
    "price": 97.22,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781266647383-L.jpg"
  },
  {
    "id": 831,
    "isbn": "9780514127899",
    "title": "Las Voces de el Horizonte 1789",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Miller",
      "Elizabeth Sánchez"
    ],
    "price": 7.59,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780514127899-L.jpg"
  },
  {
    "id": 832,
    "isbn": "9783636480002",
    "title": "La Búsqueda de la Verdad 2809",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Smith"
    ],
    "price": 82.46,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783636480002-L.jpg"
  },
  {
    "id": 833,
    "isbn": "9785986122588",
    "title": "Las Voces de la Ciudad Perdida 1276",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Thomas"
    ],
    "price": 70.48,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785986122588-L.jpg"
  },
  {
    "id": 834,
    "isbn": "9783300335430",
    "title": "Rastros en la Montaña 4668",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía Pérez"
    ],
    "price": 15.21,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783300335430-L.jpg"
  },
  {
    "id": 835,
    "isbn": "9784517697984",
    "title": "Las Luces de la Ciudad Perdida 9138",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Thomas",
      "Valeria García"
    ],
    "price": 82.01,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784517697984-L.jpg"
  },
  {
    "id": 836,
    "isbn": "9786750796271",
    "title": "El Secreto de el Viento 1463",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel Pérez",
      "Ricardo Brown"
    ],
    "price": 44.45,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786750796271-L.jpg"
  },
  {
    "id": 837,
    "isbn": "9788606043171",
    "title": "Las Voces de los Sueños 4147",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Davis",
      "Gabriel Martínez"
    ],
    "price": 42.95,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788606043171-L.jpg"
  },
  {
    "id": 838,
    "isbn": "9781873489048",
    "title": "La Sombra de la Montaña 7394",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda García",
      "Patricia Davis"
    ],
    "price": 47.25,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781873489048-L.jpg"
  },
  {
    "id": 839,
    "isbn": "9785367997514",
    "title": "Lágrimas de el Desierto 6907",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Davis",
      "David Hernández"
    ],
    "price": 23.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785367997514-L.jpg"
  },
  {
    "id": 840,
    "isbn": "9785782464301",
    "title": "El Guardián de la Sabiduría 2252",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Wilson",
      "Gabriel Williams"
    ],
    "price": 46.12,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785782464301-L.jpg"
  },
  {
    "id": 841,
    "isbn": "9788647941535",
    "title": "La Búsqueda de la Verdad 6128",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 41.18,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788647941535-L.jpg"
  },
  {
    "id": 842,
    "isbn": "9787435052392",
    "title": "Lágrimas de el Viento 5696",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Anderson"
    ],
    "price": 63.89,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787435052392-L.jpg"
  },
  {
    "id": 843,
    "isbn": "9782836335471",
    "title": "Lágrimas de los Ancestros 467",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Taylor"
    ],
    "price": 25.49,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782836335471-L.jpg"
  },
  {
    "id": 844,
    "isbn": "9782836524868",
    "title": "La Búsqueda de la Noche 5085",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía López"
    ],
    "price": 115.62,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782836524868-L.jpg"
  },
  {
    "id": 845,
    "isbn": "9789258255318",
    "title": "Lágrimas de la Montaña 5688",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Hernández",
      "John Jones"
    ],
    "price": 62.73,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789258255318-L.jpg"
  },
  {
    "id": 846,
    "isbn": "9786999065473",
    "title": "El Eco de el Desierto 5864",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Jones"
    ],
    "price": 118.52,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786999065473-L.jpg"
  },
  {
    "id": 847,
    "isbn": "9786679553634",
    "title": "El Camino hacia el Destino 8426",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge García"
    ],
    "price": 66.86,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786679553634-L.jpg"
  },
  {
    "id": 848,
    "isbn": "9780917363047",
    "title": "El Renacer de los Sueños 6005",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Sánchez",
      "Elizabeth Moore"
    ],
    "price": 43.47,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780917363047-L.jpg"
  },
  {
    "id": 849,
    "isbn": "9783742842626",
    "title": "Crónicas de los Sueños 9779",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Johnson",
      "Mary Jones"
    ],
    "price": 41.1,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783742842626-L.jpg"
  },
  {
    "id": 850,
    "isbn": "9780348626537",
    "title": "Crónicas de los Ancestros 5146",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Miller",
      "Michael Williams"
    ],
    "price": 66.05,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780348626537-L.jpg"
  },
  {
    "id": 851,
    "isbn": "9780193281608",
    "title": "Fragmentos de la Ciudad Perdida 2329",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Patricia Anderson",
      "Gabriel Sánchez"
    ],
    "price": 80.03,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780193281608-L.jpg"
  },
  {
    "id": 852,
    "isbn": "9786400971164",
    "title": "El Misterio de el Viento 1102",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Pérez",
      "Linda Taylor"
    ],
    "price": 30.88,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786400971164-L.jpg"
  },
  {
    "id": 853,
    "isbn": "9783806042757",
    "title": "Bajo el Cielo de los Olvidados 9810",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Wilson",
      "Fernando Williams"
    ],
    "price": 116.52,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783806042757-L.jpg"
  },
  {
    "id": 854,
    "isbn": "9789102749703",
    "title": "Vientos de el Horizonte 1682",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena López"
    ],
    "price": 99.92,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789102749703-L.jpg"
  },
  {
    "id": 855,
    "isbn": "9783822990186",
    "title": "Más allá de las Estrellas 3211",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Williams",
      "Miguel Davis"
    ],
    "price": 42.84,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783822990186-L.jpg"
  },
  {
    "id": 856,
    "isbn": "9781286681190",
    "title": "Espejos de el Tiempo 5812",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel García"
    ],
    "price": 46.93,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781286681190-L.jpg"
  },
  {
    "id": 857,
    "isbn": "9783985214761",
    "title": "Rastros en los Sueños 2070",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Pérez",
      "David Anderson"
    ],
    "price": 110.77,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783985214761-L.jpg"
  },
  {
    "id": 858,
    "isbn": "978933287240",
    "title": "El Renacer de la Esperanza 4684",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Johnson",
      "Fernando García"
    ],
    "price": 28.6,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978933287240-L.jpg"
  },
  {
    "id": 859,
    "isbn": "9780241998540",
    "title": "Las Luces de el Horizonte 5590",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Brown"
    ],
    "price": 91.73,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780241998540-L.jpg"
  },
  {
    "id": 860,
    "isbn": "9780474843273",
    "title": "Crónicas de los Sueños 770",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Anderson",
      "David Miller"
    ],
    "price": 110.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780474843273-L.jpg"
  },
  {
    "id": 861,
    "isbn": "9786208718169",
    "title": "Más allá de la Montaña 5467",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Sánchez",
      "Carla González"
    ],
    "price": 116.89,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786208718169-L.jpg"
  },
  {
    "id": 862,
    "isbn": "9780771322464",
    "title": "La Búsqueda de la Esperanza 6531",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Davis"
    ],
    "price": 32.56,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780771322464-L.jpg"
  },
  {
    "id": 863,
    "isbn": "9780864597595",
    "title": "Crónicas de la Verdad 8543",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Martínez"
    ],
    "price": 24.59,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780864597595-L.jpg"
  },
  {
    "id": 864,
    "isbn": "9789132156915",
    "title": "La Búsqueda de la Sabiduría 332",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Wilson",
      "Sofía Miller"
    ],
    "price": 69.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789132156915-L.jpg"
  },
  {
    "id": 865,
    "isbn": "978165575609",
    "title": "La Búsqueda de la Esperanza 2649",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Williams"
    ],
    "price": 36.71,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978165575609-L.jpg"
  },
  {
    "id": 866,
    "isbn": "9786665678112",
    "title": "Bajo el Cielo de el Destino 2424",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Rodríguez"
    ],
    "price": 62.72,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786665678112-L.jpg"
  },
  {
    "id": 867,
    "isbn": "9783271015256",
    "title": "El Renacer de las Estrellas 755",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Martínez"
    ],
    "price": 40.29,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783271015256-L.jpg"
  },
  {
    "id": 868,
    "isbn": "9789560324955",
    "title": "Las Voces de el Desierto 6417",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Wilson",
      "Linda Davis"
    ],
    "price": 87.37,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789560324955-L.jpg"
  },
  {
    "id": 869,
    "isbn": "9789914228700",
    "title": "El Canto de la Justicia 347",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Sánchez",
      "Linda Jones"
    ],
    "price": 16.58,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789914228700-L.jpg"
  },
  {
    "id": 870,
    "isbn": "9780878678525",
    "title": "Las Luces de el Desierto 8155",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Hernández",
      "Elizabeth Thomas"
    ],
    "price": 82.59,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780878678525-L.jpg"
  },
  {
    "id": 871,
    "isbn": "9781349180981",
    "title": "El Secreto de la Luna Roja 4188",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Taylor"
    ],
    "price": 87.85,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781349180981-L.jpg"
  },
  {
    "id": 872,
    "isbn": "9782378874995",
    "title": "La Búsqueda de la Noche 9387",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Martínez"
    ],
    "price": 35.79,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782378874995-L.jpg"
  },
  {
    "id": 873,
    "isbn": "9789852050746",
    "title": "Rastros en la Ciudad Perdida 8282",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Hernández",
      "Andrés Taylor"
    ],
    "price": 43.25,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789852050746-L.jpg"
  },
  {
    "id": 874,
    "isbn": "9784718125538",
    "title": "Crónicas de la Travesía 1347",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Miller",
      "David Brown"
    ],
    "price": 76.62,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784718125538-L.jpg"
  },
  {
    "id": 875,
    "isbn": "9784573511552",
    "title": "Las Voces de la Ciudad Perdida 5041",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Thomas"
    ],
    "price": 93.61,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784573511552-L.jpg"
  },
  {
    "id": 876,
    "isbn": "9785839199125",
    "title": "El Secreto de las Estrellas 174",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla López",
      "Fernando Pérez"
    ],
    "price": 29.34,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785839199125-L.jpg"
  },
  {
    "id": 877,
    "isbn": "9789319285469",
    "title": "Las Voces de la Justicia 9919",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando López"
    ],
    "price": 9.05,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789319285469-L.jpg"
  },
  {
    "id": 878,
    "isbn": "9781767278031",
    "title": "El Renacer de el Destino 5513",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Williams",
      "Linda Wilson"
    ],
    "price": 43.97,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781767278031-L.jpg"
  },
  {
    "id": 879,
    "isbn": "9789895456550",
    "title": "La Búsqueda de la Memoria 7371",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Moore",
      "Mary Johnson"
    ],
    "price": 69.93,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789895456550-L.jpg"
  },
  {
    "id": 880,
    "isbn": "9786459666851",
    "title": "El Canto de la Luna Roja 7843",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Pérez"
    ],
    "price": 85.25,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786459666851-L.jpg"
  },
  {
    "id": 881,
    "isbn": "9788340858680",
    "title": "El Secreto de la Justicia 2431",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Rodríguez",
      "Elena Smith"
    ],
    "price": 52.61,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788340858680-L.jpg"
  },
  {
    "id": 882,
    "isbn": "9783894093648",
    "title": "El Secreto de los Olvidados 380",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Martínez"
    ],
    "price": 76.36,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783894093648-L.jpg"
  },
  {
    "id": 883,
    "isbn": "9789400855557",
    "title": "Rastros en el Tiempo 8421",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth Smith"
    ],
    "price": 118.8,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789400855557-L.jpg"
  },
  {
    "id": 884,
    "isbn": "9784833226776",
    "title": "Vientos de los Ancestros 5564",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés González"
    ],
    "price": 65.93,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784833226776-L.jpg"
  },
  {
    "id": 885,
    "isbn": "9783587530139",
    "title": "Bajo el Cielo de las Estrellas 1540",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Thomas",
      "Isabel García"
    ],
    "price": 6.67,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783587530139-L.jpg"
  },
  {
    "id": 886,
    "isbn": "9783671716449",
    "title": "El Legado de la Luna Roja 9072",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Thomas",
      "Andrés Pérez"
    ],
    "price": 64.84,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783671716449-L.jpg"
  },
  {
    "id": 887,
    "isbn": "9789850848765",
    "title": "La Sombra de la Justicia 9348",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Hernández"
    ],
    "price": 82.91,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789850848765-L.jpg"
  },
  {
    "id": 888,
    "isbn": "9780708778494",
    "title": "El Canto de el Destino 1117",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Wilson"
    ],
    "price": 92.83,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780708778494-L.jpg"
  },
  {
    "id": 889,
    "isbn": "9789976282559",
    "title": "Lágrimas de el Destino 1362",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel López"
    ],
    "price": 113.76,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789976282559-L.jpg"
  },
  {
    "id": 890,
    "isbn": "9785218648220",
    "title": "Vientos de la Noche 441",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Sánchez",
      "Mary Rodríguez"
    ],
    "price": 72.21,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785218648220-L.jpg"
  },
  {
    "id": 891,
    "isbn": "9786288911115",
    "title": "El Legado de el Viento 7169",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Williams",
      "Robert González"
    ],
    "price": 28.79,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786288911115-L.jpg"
  },
  {
    "id": 892,
    "isbn": "9789671189573",
    "title": "La Búsqueda de los Olvidados 5084",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Johnson",
      "Mary Brown"
    ],
    "price": 5.23,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789671189573-L.jpg"
  },
  {
    "id": 893,
    "isbn": "9785868773129",
    "title": "Más allá de los Ancestros 3110",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Jones"
    ],
    "price": 35.87,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785868773129-L.jpg"
  },
  {
    "id": 894,
    "isbn": "978856243965",
    "title": "Las Voces de los Olvidados 2544",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando López",
      "Sofía Sánchez"
    ],
    "price": 49.59,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978856243965-L.jpg"
  },
  {
    "id": 895,
    "isbn": "9784741819930",
    "title": "El Eco de la Sabiduría 5466",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Moore"
    ],
    "price": 22.18,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784741819930-L.jpg"
  },
  {
    "id": 896,
    "isbn": "9788368094367",
    "title": "Lágrimas de el Horizonte 3398",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Williams",
      "Gabriel Jones"
    ],
    "price": 82.37,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788368094367-L.jpg"
  },
  {
    "id": 897,
    "isbn": "9784873172590",
    "title": "Rastros en la Noche 6259",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Jones"
    ],
    "price": 110.64,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784873172590-L.jpg"
  },
  {
    "id": 898,
    "isbn": "9780664541873",
    "title": "La Sombra de la Justicia 6261",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Davis",
      "Miguel Davis"
    ],
    "price": 89.17,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780664541873-L.jpg"
  },
  {
    "id": 899,
    "isbn": "9781556897979",
    "title": "Lágrimas de la Verdad 5092",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth García"
    ],
    "price": 41.35,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781556897979-L.jpg"
  },
  {
    "id": 900,
    "isbn": "9787214512253",
    "title": "Lágrimas de el Tiempo 2402",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Rodríguez"
    ],
    "price": 37.23,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787214512253-L.jpg"
  },
  {
    "id": 901,
    "isbn": "9783619772780",
    "title": "Bajo el Cielo de la Luna Roja 7683",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Wilson"
    ],
    "price": 106.93,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783619772780-L.jpg"
  },
  {
    "id": 902,
    "isbn": "9780663848133",
    "title": "Rastros en los Ancestros 6920",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "David Brown"
    ],
    "price": 101.67,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780663848133-L.jpg"
  },
  {
    "id": 903,
    "isbn": "978647952650",
    "title": "El Legado de la Noche 4779",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Jorge Williams",
      "Elizabeth Brown"
    ],
    "price": 49.49,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978647952650-L.jpg"
  },
  {
    "id": 904,
    "isbn": "9783795195199",
    "title": "El Secreto de el Horizonte 4182",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Wilson",
      "Gabriel Smith"
    ],
    "price": 42.93,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783795195199-L.jpg"
  },
  {
    "id": 905,
    "isbn": "9782293614638",
    "title": "El Secreto de la Ciudad Perdida 8329",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Sánchez",
      "Linda Davis"
    ],
    "price": 73.25,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782293614638-L.jpg"
  },
  {
    "id": 906,
    "isbn": "9786384284625",
    "title": "El Guardián de los Olvidados 196",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Sánchez",
      "Fernando Johnson"
    ],
    "price": 52.68,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786384284625-L.jpg"
  },
  {
    "id": 907,
    "isbn": "9788865237205",
    "title": "Rastros en la Luna Roja 595",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Anderson",
      "Mary Wilson"
    ],
    "price": 20.94,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788865237205-L.jpg"
  },
  {
    "id": 908,
    "isbn": "9781365850851",
    "title": "Crónicas de la Verdad 2602",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda García"
    ],
    "price": 106.92,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781365850851-L.jpg"
  },
  {
    "id": 909,
    "isbn": "9781762210333",
    "title": "Las Luces de la Sabiduría 512",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Moore",
      "Mary González"
    ],
    "price": 51.77,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781762210333-L.jpg"
  },
  {
    "id": 910,
    "isbn": "9782453313975",
    "title": "Bajo el Cielo de los Sueños 351",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge González",
      "Robert Brown"
    ],
    "price": 67.11,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782453313975-L.jpg"
  },
  {
    "id": 911,
    "isbn": "9784737086094",
    "title": "Más allá de los Sueños 1385",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Rodríguez",
      "Fernando Johnson"
    ],
    "price": 69.97,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784737086094-L.jpg"
  },
  {
    "id": 912,
    "isbn": "9784219282365",
    "title": "Lágrimas de la Verdad 6467",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Hernández",
      "Robert Wilson"
    ],
    "price": 19.86,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784219282365-L.jpg"
  },
  {
    "id": 913,
    "isbn": "9781660180936",
    "title": "La Búsqueda de las Estrellas 6802",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda González",
      "David Smith"
    ],
    "price": 81.04,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781660180936-L.jpg"
  },
  {
    "id": 914,
    "isbn": "9780134718347",
    "title": "Más allá de el Destino 4185",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Johnson",
      "Lucía Moore"
    ],
    "price": 13.55,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780134718347-L.jpg"
  },
  {
    "id": 915,
    "isbn": "9785339414117",
    "title": "El Camino hacia el Horizonte 4225",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Thomas",
      "Linda Williams"
    ],
    "price": 58.39,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785339414117-L.jpg"
  },
  {
    "id": 916,
    "isbn": "978136686604",
    "title": "El Camino hacia el Destino 6685",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Thomas",
      "Valeria Taylor"
    ],
    "price": 75.44,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978136686604-L.jpg"
  },
  {
    "id": 917,
    "isbn": "9788398875462",
    "title": "El Secreto de la Memoria 5516",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert García"
    ],
    "price": 111.13,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788398875462-L.jpg"
  },
  {
    "id": 918,
    "isbn": "9788232787951",
    "title": "El Camino hacia el Horizonte 6319",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Hernández",
      "Linda Anderson"
    ],
    "price": 38.99,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788232787951-L.jpg"
  },
  {
    "id": 919,
    "isbn": "9785987675663",
    "title": "El Secreto de la Verdad 7058",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Carla Williams",
      "Sofía López"
    ],
    "price": 58.16,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785987675663-L.jpg"
  },
  {
    "id": 920,
    "isbn": "9787903568226",
    "title": "Lágrimas de los Sueños 7058",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Hernández"
    ],
    "price": 43.77,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787903568226-L.jpg"
  },
  {
    "id": 921,
    "isbn": "9784394224532",
    "title": "El Guardián de la Travesía 8434",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Johnson",
      "Elizabeth Thomas"
    ],
    "price": 25.62,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784394224532-L.jpg"
  },
  {
    "id": 922,
    "isbn": "9781496640666",
    "title": "El Secreto de la Noche 2510",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Taylor",
      "Valeria García"
    ],
    "price": 100.99,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781496640666-L.jpg"
  },
  {
    "id": 923,
    "isbn": "9781100824475",
    "title": "El Secreto de las Estrellas 1725",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel López"
    ],
    "price": 40.98,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781100824475-L.jpg"
  },
  {
    "id": 924,
    "isbn": "9781125055199",
    "title": "El Guardián de la Eternidad 7742",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Johnson"
    ],
    "price": 35.87,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781125055199-L.jpg"
  },
  {
    "id": 925,
    "isbn": "9781772879223",
    "title": "El Misterio de la Verdad 8810",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Martínez",
      "Lucía Anderson"
    ],
    "price": 65.56,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781772879223-L.jpg"
  },
  {
    "id": 926,
    "isbn": "9786830918234",
    "title": "El Secreto de la Ciudad Perdida 416",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth López"
    ],
    "price": 23.88,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786830918234-L.jpg"
  },
  {
    "id": 927,
    "isbn": "9780262321877",
    "title": "El Renacer de la Travesía 3125",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Thomas",
      "Ricardo Williams"
    ],
    "price": 15.12,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780262321877-L.jpg"
  },
  {
    "id": 928,
    "isbn": "9787420385177",
    "title": "Vientos de la Justicia 1952",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Moore"
    ],
    "price": 118.22,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787420385177-L.jpg"
  },
  {
    "id": 929,
    "isbn": "9786172197090",
    "title": "La Búsqueda de el Viento 9440",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Davis",
      "Valeria Wilson"
    ],
    "price": 20.17,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786172197090-L.jpg"
  },
  {
    "id": 930,
    "isbn": "9788174294456",
    "title": "Las Voces de la Noche 8968",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Brown"
    ],
    "price": 101.62,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788174294456-L.jpg"
  },
  {
    "id": 931,
    "isbn": "978566512243",
    "title": "El Eco de la Luna Roja 4215",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Jones"
    ],
    "price": 40.86,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978566512243-L.jpg"
  },
  {
    "id": 932,
    "isbn": "9787423593852",
    "title": "El Canto de la Sabiduría 5399",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Pérez",
      "Ricardo Smith"
    ],
    "price": 44.27,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787423593852-L.jpg"
  },
  {
    "id": 933,
    "isbn": "9780209660182",
    "title": "El Renacer de los Ancestros 9759",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Thomas",
      "Ricardo Hernández"
    ],
    "price": 12.1,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780209660182-L.jpg"
  },
  {
    "id": 934,
    "isbn": "9785519669153",
    "title": "Las Voces de la Justicia 2926",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Johnson"
    ],
    "price": 111.57,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785519669153-L.jpg"
  },
  {
    "id": 935,
    "isbn": "9788477895558",
    "title": "La Sombra de los Sueños 5556",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Smith",
      "Miguel López"
    ],
    "price": 93.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788477895558-L.jpg"
  },
  {
    "id": 936,
    "isbn": "9786652414273",
    "title": "Rastros en el Tiempo 87",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Williams",
      "Carla Anderson"
    ],
    "price": 118.18,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786652414273-L.jpg"
  },
  {
    "id": 937,
    "isbn": "9781198033643",
    "title": "El Legado de la Noche 4529",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Williams"
    ],
    "price": 72.0,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781198033643-L.jpg"
  },
  {
    "id": 938,
    "isbn": "978459495297",
    "title": "La Sombra de la Noche 2847",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Rodríguez",
      "Lucía Williams"
    ],
    "price": 88.84,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978459495297-L.jpg"
  },
  {
    "id": 939,
    "isbn": "9784405516816",
    "title": "El Guardián de la Montaña 5490",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Pérez",
      "John Davis"
    ],
    "price": 93.77,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784405516816-L.jpg"
  },
  {
    "id": 940,
    "isbn": "9780426244547",
    "title": "El Legado de el Desierto 7811",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel López",
      "Mary Miller"
    ],
    "price": 88.0,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780426244547-L.jpg"
  },
  {
    "id": 941,
    "isbn": "9780405323249",
    "title": "Espejos de la Justicia 9571",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés López",
      "Isabel Pérez"
    ],
    "price": 24.16,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780405323249-L.jpg"
  },
  {
    "id": 942,
    "isbn": "9782902092642",
    "title": "Fragmentos de la Montaña 2813",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Sánchez",
      "David Brown"
    ],
    "price": 45.21,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782902092642-L.jpg"
  },
  {
    "id": 943,
    "isbn": "9781461429043",
    "title": "Crónicas de la Eternidad 971",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Anderson"
    ],
    "price": 22.14,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781461429043-L.jpg"
  },
  {
    "id": 944,
    "isbn": "9781926855639",
    "title": "Crónicas de la Justicia 9822",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla García",
      "Miguel Brown"
    ],
    "price": 15.24,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781926855639-L.jpg"
  },
  {
    "id": 945,
    "isbn": "9786924551170",
    "title": "La Búsqueda de la Justicia 2632",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel López",
      "Robert Martínez"
    ],
    "price": 36.26,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786924551170-L.jpg"
  },
  {
    "id": 946,
    "isbn": "9781123677119",
    "title": "El Guardián de el Viento 3768",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Jorge Jones"
    ],
    "price": 37.8,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781123677119-L.jpg"
  },
  {
    "id": 947,
    "isbn": "9785694845953",
    "title": "Crónicas de los Sueños 7156",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 79.99,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785694845953-L.jpg"
  },
  {
    "id": 948,
    "isbn": "9784356723080",
    "title": "El Eco de el Tiempo 2047",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Williams"
    ],
    "price": 84.47,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784356723080-L.jpg"
  },
  {
    "id": 949,
    "isbn": "9787295117828",
    "title": "Lágrimas de la Justicia 437",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Miller"
    ],
    "price": 119.67,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787295117828-L.jpg"
  },
  {
    "id": 950,
    "isbn": "9785700927765",
    "title": "El Eco de el Horizonte 524",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Martínez",
      "Mary Anderson"
    ],
    "price": 12.67,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785700927765-L.jpg"
  },
  {
    "id": 951,
    "isbn": "9783112997796",
    "title": "La Sombra de la Justicia 9313",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Smith",
      "David López"
    ],
    "price": 101.94,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783112997796-L.jpg"
  },
  {
    "id": 952,
    "isbn": "9789854753690",
    "title": "El Secreto de la Verdad 7680",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Jones",
      "Miguel Rodríguez"
    ],
    "price": 114.43,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789854753690-L.jpg"
  },
  {
    "id": 953,
    "isbn": "978147925794",
    "title": "Rastros en el Horizonte 8206",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo González",
      "Elena Pérez"
    ],
    "price": 54.67,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978147925794-L.jpg"
  },
  {
    "id": 954,
    "isbn": "9788301039844",
    "title": "Bajo el Cielo de la Noche 2120",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Anderson",
      "Robert Anderson"
    ],
    "price": 61.68,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788301039844-L.jpg"
  },
  {
    "id": 955,
    "isbn": "9783585227918",
    "title": "Vientos de la Noche 6963",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Johnson"
    ],
    "price": 15.45,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783585227918-L.jpg"
  },
  {
    "id": 956,
    "isbn": "9787888919501",
    "title": "El Secreto de la Sabiduría 8531",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés García"
    ],
    "price": 49.3,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787888919501-L.jpg"
  },
  {
    "id": 957,
    "isbn": "978683529867",
    "title": "Vientos de la Sabiduría 842",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Davis",
      "Lucía Williams"
    ],
    "price": 81.36,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978683529867-L.jpg"
  },
  {
    "id": 958,
    "isbn": "9781282060487",
    "title": "Más allá de la Verdad 5735",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Sánchez"
    ],
    "price": 49.05,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781282060487-L.jpg"
  },
  {
    "id": 959,
    "isbn": "9783953558934",
    "title": "Lágrimas de la Noche 7510",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Williams",
      "Carla Smith"
    ],
    "price": 112.8,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783953558934-L.jpg"
  },
  {
    "id": 960,
    "isbn": "9789149775291",
    "title": "El Guardián de el Horizonte 3098",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Jones",
      "Fernando Sánchez"
    ],
    "price": 18.89,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789149775291-L.jpg"
  },
  {
    "id": 961,
    "isbn": "9781118125168",
    "title": "Bajo el Cielo de la Justicia 8526",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Martínez",
      "Miguel Brown"
    ],
    "price": 71.08,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781118125168-L.jpg"
  },
  {
    "id": 962,
    "isbn": "9781138718845",
    "title": "El Guardián de la Sabiduría 2200",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael García",
      "Isabel Miller"
    ],
    "price": 21.42,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781138718845-L.jpg"
  },
  {
    "id": 963,
    "isbn": "9784545172279",
    "title": "La Sombra de la Ciudad Perdida 4485",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Davis",
      "Patricia Williams"
    ],
    "price": 88.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784545172279-L.jpg"
  },
  {
    "id": 964,
    "isbn": "9783624618653",
    "title": "La Sombra de el Destino 1759",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Martínez"
    ],
    "price": 6.95,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783624618653-L.jpg"
  },
  {
    "id": 965,
    "isbn": "9785676795856",
    "title": "El Renacer de la Esperanza 464",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Williams",
      "Andrés García"
    ],
    "price": 40.2,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785676795856-L.jpg"
  },
  {
    "id": 966,
    "isbn": "9788933878224",
    "title": "El Misterio de la Memoria 9118",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Pérez",
      "Elizabeth Thomas"
    ],
    "price": 20.46,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788933878224-L.jpg"
  },
  {
    "id": 967,
    "isbn": "9784646776833",
    "title": "El Eco de la Eternidad 6983",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Anderson"
    ],
    "price": 103.92,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784646776833-L.jpg"
  },
  {
    "id": 968,
    "isbn": "9783651749184",
    "title": "El Eco de el Destino 3459",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Miller"
    ],
    "price": 101.04,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783651749184-L.jpg"
  },
  {
    "id": 969,
    "isbn": "9789620817328",
    "title": "Las Luces de la Travesía 2879",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Wilson"
    ],
    "price": 41.87,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789620817328-L.jpg"
  },
  {
    "id": 970,
    "isbn": "9783690193337",
    "title": "Rastros en la Noche 4960",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Thomas",
      "Elizabeth Williams"
    ],
    "price": 55.71,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783690193337-L.jpg"
  },
  {
    "id": 971,
    "isbn": "9783873931374",
    "title": "Rastros en la Verdad 8804",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 69.24,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783873931374-L.jpg"
  },
  {
    "id": 972,
    "isbn": "9784689412682",
    "title": "Crónicas de el Desierto 8631",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Brown",
      "Ricardo Moore"
    ],
    "price": 57.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784689412682-L.jpg"
  },
  {
    "id": 973,
    "isbn": "9788422435426",
    "title": "El Legado de la Montaña 2246",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Pérez",
      "Lucía García"
    ],
    "price": 70.82,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788422435426-L.jpg"
  },
  {
    "id": 974,
    "isbn": "9788134187613",
    "title": "Las Luces de la Eternidad 7994",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Ricardo Taylor"
    ],
    "price": 13.62,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788134187613-L.jpg"
  },
  {
    "id": 975,
    "isbn": "9789867731586",
    "title": "Espejos de la Justicia 7098",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 97.31,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789867731586-L.jpg"
  },
  {
    "id": 976,
    "isbn": "9781507764862",
    "title": "Las Voces de los Ancestros 7736",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Williams",
      "Patricia Davis"
    ],
    "price": 51.35,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781507764862-L.jpg"
  },
  {
    "id": 977,
    "isbn": "9788781717072",
    "title": "Lágrimas de la Travesía 8726",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Taylor",
      "David Smith"
    ],
    "price": 57.86,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788781717072-L.jpg"
  },
  {
    "id": 978,
    "isbn": "9782213751337",
    "title": "Fragmentos de la Esperanza 6175",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Taylor"
    ],
    "price": 27.85,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782213751337-L.jpg"
  },
  {
    "id": 979,
    "isbn": "9785720723910",
    "title": "El Canto de el Desierto 1054",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Thomas",
      "Carla Smith"
    ],
    "price": 102.4,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785720723910-L.jpg"
  },
  {
    "id": 980,
    "isbn": "9783459262069",
    "title": "La Búsqueda de la Eternidad 3984",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary López",
      "Michael Thomas"
    ],
    "price": 72.22,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783459262069-L.jpg"
  },
  {
    "id": 981,
    "isbn": "9782785113588",
    "title": "Fragmentos de el Viento 2249",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Jones",
      "Gabriel Taylor"
    ],
    "price": 14.19,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782785113588-L.jpg"
  },
  {
    "id": 982,
    "isbn": "9785844358487",
    "title": "La Búsqueda de el Desierto 3583",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John González"
    ],
    "price": 101.27,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785844358487-L.jpg"
  },
  {
    "id": 983,
    "isbn": "9785188228774",
    "title": "Las Luces de el Destino 6660",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Smith"
    ],
    "price": 10.97,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785188228774-L.jpg"
  },
  {
    "id": 984,
    "isbn": "978213543839",
    "title": "Las Voces de el Horizonte 4598",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Davis"
    ],
    "price": 25.33,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978213543839-L.jpg"
  },
  {
    "id": 985,
    "isbn": "9781673845068",
    "title": "Bajo el Cielo de el Horizonte 2687",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Hernández"
    ],
    "price": 49.75,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781673845068-L.jpg"
  },
  {
    "id": 986,
    "isbn": "9787237639890",
    "title": "Espejos de los Olvidados 179",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Sánchez",
      "Jorge Davis"
    ],
    "price": 7.16,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787237639890-L.jpg"
  },
  {
    "id": 987,
    "isbn": "9784435991188",
    "title": "Espejos de la Noche 859",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Johnson",
      "Elena Thomas"
    ],
    "price": 96.78,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784435991188-L.jpg"
  },
  {
    "id": 988,
    "isbn": "9789659849574",
    "title": "El Legado de el Viento 4976",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 112.69,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789659849574-L.jpg"
  },
  {
    "id": 989,
    "isbn": "9782740532539",
    "title": "El Renacer de la Eternidad 3974",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Carla Jones",
      "Jorge Rodríguez"
    ],
    "price": 20.64,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782740532539-L.jpg"
  },
  {
    "id": 990,
    "isbn": "9788667815267",
    "title": "Rastros en el Desierto 2478",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Sánchez"
    ],
    "price": 88.73,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788667815267-L.jpg"
  },
  {
    "id": 991,
    "isbn": "978498530632",
    "title": "El Misterio de el Viento 3510",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Anderson",
      "Michael Wilson"
    ],
    "price": 10.3,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978498530632-L.jpg"
  },
  {
    "id": 992,
    "isbn": "9780661382851",
    "title": "El Renacer de el Destino 2340",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "John Jones"
    ],
    "price": 54.22,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780661382851-L.jpg"
  },
  {
    "id": 993,
    "isbn": "9786612019760",
    "title": "El Renacer de el Destino 7827",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Wilson"
    ],
    "price": 88.89,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786612019760-L.jpg"
  },
  {
    "id": 994,
    "isbn": "9784431066057",
    "title": "El Eco de el Viento 1746",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Davis"
    ],
    "price": 72.63,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784431066057-L.jpg"
  },
  {
    "id": 995,
    "isbn": "9786938619620",
    "title": "El Canto de el Viento 6144",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Taylor"
    ],
    "price": 16.8,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786938619620-L.jpg"
  },
  {
    "id": 996,
    "isbn": "9780120854271",
    "title": "La Sombra de la Travesía 8899",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando López",
      "Jorge Brown"
    ],
    "price": 53.2,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780120854271-L.jpg"
  },
  {
    "id": 997,
    "isbn": "9780409397956",
    "title": "El Misterio de la Montaña 5826",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel Miller",
      "Michael Sánchez"
    ],
    "price": 115.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780409397956-L.jpg"
  },
  {
    "id": 998,
    "isbn": "9784176031235",
    "title": "La Sombra de la Sabiduría 4349",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Anderson",
      "Linda Davis"
    ],
    "price": 97.32,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784176031235-L.jpg"
  },
  {
    "id": 999,
    "isbn": "9782884528870",
    "title": "La Búsqueda de la Noche 2619",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Brown"
    ],
    "price": 83.04,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782884528870-L.jpg"
  },
  {
    "id": 1000,
    "isbn": "9783944663319",
    "title": "Crónicas de la Montaña 1689",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda Martínez",
      "Fernando Sánchez"
    ],
    "price": 97.4,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783944663319-L.jpg"
  },
  {
    "id": 1001,
    "isbn": "9789378746451",
    "title": "Vientos de la Noche 9213",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Anderson"
    ],
    "price": 50.57,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789378746451-L.jpg"
  },
  {
    "id": 1002,
    "isbn": "9785668943852",
    "title": "Fragmentos de la Memoria 5082",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Rodríguez"
    ],
    "price": 45.08,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785668943852-L.jpg"
  },
  {
    "id": 1003,
    "isbn": "9789725244340",
    "title": "Más allá de la Justicia 5833",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena García",
      "Ricardo Rodríguez"
    ],
    "price": 107.32,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789725244340-L.jpg"
  },
  {
    "id": 1004,
    "isbn": "9783202369618",
    "title": "El Renacer de la Eternidad 2860",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Martínez",
      "John Johnson"
    ],
    "price": 69.01,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783202369618-L.jpg"
  },
  {
    "id": 1005,
    "isbn": "9785667159681",
    "title": "Rastros en la Esperanza 2204",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Williams"
    ],
    "price": 19.99,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785667159681-L.jpg"
  },
  {
    "id": 1006,
    "isbn": "9784411148797",
    "title": "El Camino hacia las Estrellas 3701",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert González",
      "Carla Moore"
    ],
    "price": 18.33,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784411148797-L.jpg"
  },
  {
    "id": 1007,
    "isbn": "9786730349862",
    "title": "El Eco de la Luna Roja 3717",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 97.95,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786730349862-L.jpg"
  },
  {
    "id": 1008,
    "isbn": "9788796673554",
    "title": "La Búsqueda de la Montaña 5012",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Smith",
      "Lucía Miller"
    ],
    "price": 58.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788796673554-L.jpg"
  },
  {
    "id": 1009,
    "isbn": "9789928328670",
    "title": "El Renacer de la Justicia 1173",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel García",
      "Jorge Hernández"
    ],
    "price": 52.72,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789928328670-L.jpg"
  },
  {
    "id": 1010,
    "isbn": "9783753163314",
    "title": "Fragmentos de la Eternidad 942",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda García",
      "Patricia Johnson"
    ],
    "price": 25.3,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783753163314-L.jpg"
  },
  {
    "id": 1011,
    "isbn": "9787218115580",
    "title": "Las Voces de los Olvidados 9135",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Pérez"
    ],
    "price": 99.63,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787218115580-L.jpg"
  },
  {
    "id": 1012,
    "isbn": "9783282514151",
    "title": "Bajo el Cielo de los Olvidados 6837",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Smith",
      "Miguel Rodríguez"
    ],
    "price": 94.99,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783282514151-L.jpg"
  },
  {
    "id": 1013,
    "isbn": "9788677151331",
    "title": "Espejos de el Destino 6350",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Rodríguez",
      "John Miller"
    ],
    "price": 29.93,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788677151331-L.jpg"
  },
  {
    "id": 1014,
    "isbn": "978235486387",
    "title": "Fragmentos de la Montaña 9577",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo García",
      "Patricia Brown"
    ],
    "price": 48.93,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978235486387-L.jpg"
  },
  {
    "id": 1015,
    "isbn": "9787483545945",
    "title": "El Guardián de la Verdad 4845",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary López",
      "Fernando Brown"
    ],
    "price": 111.62,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787483545945-L.jpg"
  },
  {
    "id": 1016,
    "isbn": "9780390431004",
    "title": "Bajo el Cielo de los Olvidados 9898",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Brown",
      "Gabriel Taylor"
    ],
    "price": 73.42,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780390431004-L.jpg"
  },
  {
    "id": 1017,
    "isbn": "9786504682256",
    "title": "Espejos de los Sueños 8214",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Sánchez"
    ],
    "price": 33.66,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786504682256-L.jpg"
  },
  {
    "id": 1018,
    "isbn": "9780181480853",
    "title": "Las Luces de la Ciudad Perdida 7132",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda Miller"
    ],
    "price": 94.07,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780181480853-L.jpg"
  },
  {
    "id": 1019,
    "isbn": "9780805593778",
    "title": "El Guardián de la Verdad 5882",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Taylor",
      "Jorge Wilson"
    ],
    "price": 108.86,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780805593778-L.jpg"
  },
  {
    "id": 1020,
    "isbn": "9782397931051",
    "title": "Más allá de la Esperanza 811",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Miller"
    ],
    "price": 43.49,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782397931051-L.jpg"
  },
  {
    "id": 1021,
    "isbn": "9781592162277",
    "title": "Vientos de los Sueños 4516",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert García"
    ],
    "price": 100.52,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781592162277-L.jpg"
  },
  {
    "id": 1022,
    "isbn": "9788272152405",
    "title": "Crónicas de los Ancestros 588",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Davis"
    ],
    "price": 9.28,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788272152405-L.jpg"
  },
  {
    "id": 1023,
    "isbn": "9784223081077",
    "title": "Espejos de la Memoria 9123",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Williams"
    ],
    "price": 85.2,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784223081077-L.jpg"
  },
  {
    "id": 1024,
    "isbn": "9783738744026",
    "title": "Más allá de la Ciudad Perdida 2",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Davis",
      "Sofía Sánchez"
    ],
    "price": 12.82,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783738744026-L.jpg"
  },
  {
    "id": 1025,
    "isbn": "9781111542016",
    "title": "El Secreto de el Destino 1660",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Brown",
      "Valeria Hernández"
    ],
    "price": 90.15,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781111542016-L.jpg"
  },
  {
    "id": 1026,
    "isbn": "9785253223833",
    "title": "El Legado de los Ancestros 5635",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Brown"
    ],
    "price": 31.58,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785253223833-L.jpg"
  },
  {
    "id": 1027,
    "isbn": "9784848276155",
    "title": "Vientos de los Sueños 9455",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Wilson",
      "Miguel Pérez"
    ],
    "price": 118.26,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784848276155-L.jpg"
  },
  {
    "id": 1028,
    "isbn": "978387049058",
    "title": "El Canto de el Viento 7651",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Hernández",
      "Elena Davis"
    ],
    "price": 113.84,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978387049058-L.jpg"
  },
  {
    "id": 1029,
    "isbn": "978085962648",
    "title": "El Camino hacia la Eternidad 2433",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Sofía Sánchez"
    ],
    "price": 102.4,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978085962648-L.jpg"
  },
  {
    "id": 1030,
    "isbn": "9784696748859",
    "title": "Las Voces de la Sabiduría 9975",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Williams"
    ],
    "price": 62.5,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784696748859-L.jpg"
  },
  {
    "id": 1031,
    "isbn": "9782839631754",
    "title": "El Secreto de los Olvidados 1228",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Davis"
    ],
    "price": 78.83,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782839631754-L.jpg"
  },
  {
    "id": 1032,
    "isbn": "9784350762139",
    "title": "Crónicas de la Verdad 7439",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Davis"
    ],
    "price": 84.84,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784350762139-L.jpg"
  },
  {
    "id": 1033,
    "isbn": "9786237219019",
    "title": "El Guardián de la Luna Roja 8838",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Rodríguez"
    ],
    "price": 66.58,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786237219019-L.jpg"
  },
  {
    "id": 1034,
    "isbn": "9788957729120",
    "title": "El Renacer de los Ancestros 9109",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Williams",
      "Robert Wilson"
    ],
    "price": 114.16,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788957729120-L.jpg"
  },
  {
    "id": 1035,
    "isbn": "9785736761388",
    "title": "El Renacer de la Verdad 9862",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Hernández",
      "Patricia González"
    ],
    "price": 118.09,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785736761388-L.jpg"
  },
  {
    "id": 1036,
    "isbn": "978089661880",
    "title": "La Sombra de la Montaña 7892",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Anderson"
    ],
    "price": 67.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978089661880-L.jpg"
  },
  {
    "id": 1037,
    "isbn": "9780317528374",
    "title": "Más allá de la Justicia 2992",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Johnson"
    ],
    "price": 113.35,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780317528374-L.jpg"
  },
  {
    "id": 1038,
    "isbn": "9780793844418",
    "title": "El Legado de el Horizonte 2056",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia López",
      "Gabriel López"
    ],
    "price": 71.88,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780793844418-L.jpg"
  },
  {
    "id": 1039,
    "isbn": "9786971212567",
    "title": "El Secreto de los Olvidados 8910",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Rodríguez"
    ],
    "price": 99.17,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786971212567-L.jpg"
  },
  {
    "id": 1040,
    "isbn": "9782461738005",
    "title": "El Misterio de la Travesía 6694",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Miller",
      "Elena Pérez"
    ],
    "price": 18.26,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782461738005-L.jpg"
  },
  {
    "id": 1041,
    "isbn": "9781791388560",
    "title": "Más allá de la Memoria 2631",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Miller",
      "John Williams"
    ],
    "price": 116.97,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781791388560-L.jpg"
  },
  {
    "id": 1042,
    "isbn": "9787316693218",
    "title": "Más allá de la Esperanza 951",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Martínez"
    ],
    "price": 106.6,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787316693218-L.jpg"
  },
  {
    "id": 1043,
    "isbn": "9782828814625",
    "title": "La Búsqueda de las Estrellas 7039",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía González"
    ],
    "price": 30.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782828814625-L.jpg"
  },
  {
    "id": 1044,
    "isbn": "978335976188",
    "title": "Vientos de la Esperanza 1028",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Moore"
    ],
    "price": 57.78,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978335976188-L.jpg"
  },
  {
    "id": 1045,
    "isbn": "9782391891573",
    "title": "Las Luces de la Esperanza 2593",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Wilson",
      "Carla Taylor"
    ],
    "price": 39.75,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782391891573-L.jpg"
  },
  {
    "id": 1046,
    "isbn": "9783303989760",
    "title": "La Búsqueda de la Memoria 6149",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Davis",
      "Linda Williams"
    ],
    "price": 43.2,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783303989760-L.jpg"
  },
  {
    "id": 1047,
    "isbn": "978911049578",
    "title": "El Secreto de los Ancestros 7212",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena Brown"
    ],
    "price": 100.49,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978911049578-L.jpg"
  },
  {
    "id": 1048,
    "isbn": "9780997867107",
    "title": "El Legado de la Sabiduría 6137",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Hernández"
    ],
    "price": 16.43,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780997867107-L.jpg"
  },
  {
    "id": 1049,
    "isbn": "9785746693600",
    "title": "Fragmentos de los Sueños 4423",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Moore"
    ],
    "price": 31.76,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785746693600-L.jpg"
  },
  {
    "id": 1050,
    "isbn": "9785325419942",
    "title": "El Secreto de la Verdad 8876",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel Rodríguez"
    ],
    "price": 32.83,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785325419942-L.jpg"
  },
  {
    "id": 1051,
    "isbn": "9784150654948",
    "title": "El Canto de la Sabiduría 7055",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Williams"
    ],
    "price": 45.88,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784150654948-L.jpg"
  },
  {
    "id": 1052,
    "isbn": "9789322793678",
    "title": "El Canto de el Desierto 529",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Davis"
    ],
    "price": 101.04,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789322793678-L.jpg"
  },
  {
    "id": 1053,
    "isbn": "9785732476439",
    "title": "Lágrimas de la Montaña 7069",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel García",
      "Miguel Williams"
    ],
    "price": 6.59,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785732476439-L.jpg"
  },
  {
    "id": 1054,
    "isbn": "9782309075392",
    "title": "La Búsqueda de la Noche 1707",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Rodríguez"
    ],
    "price": 109.21,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782309075392-L.jpg"
  },
  {
    "id": 1055,
    "isbn": "9785728872856",
    "title": "El Renacer de la Esperanza 2135",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel Pérez"
    ],
    "price": 50.6,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785728872856-L.jpg"
  },
  {
    "id": 1056,
    "isbn": "9783813343656",
    "title": "La Sombra de la Justicia 3918",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel López",
      "Sofía Brown"
    ],
    "price": 101.97,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783813343656-L.jpg"
  },
  {
    "id": 1057,
    "isbn": "9780167044291",
    "title": "Rastros en el Tiempo 4033",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Brown",
      "Miguel Jones"
    ],
    "price": 36.33,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780167044291-L.jpg"
  },
  {
    "id": 1058,
    "isbn": "9782771242360",
    "title": "Vientos de la Luna Roja 2789",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 72.85,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782771242360-L.jpg"
  },
  {
    "id": 1059,
    "isbn": "9782609975019",
    "title": "La Búsqueda de los Sueños 7217",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Martínez"
    ],
    "price": 27.67,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782609975019-L.jpg"
  },
  {
    "id": 1060,
    "isbn": "9789951440141",
    "title": "Las Voces de la Verdad 1530",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Brown"
    ],
    "price": 87.07,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789951440141-L.jpg"
  },
  {
    "id": 1061,
    "isbn": "9789477178870",
    "title": "La Sombra de la Noche 532",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Johnson",
      "Lucía Moore"
    ],
    "price": 76.18,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789477178870-L.jpg"
  },
  {
    "id": 1062,
    "isbn": "978646743903",
    "title": "Las Voces de la Ciudad Perdida 2953",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Williams"
    ],
    "price": 80.26,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978646743903-L.jpg"
  },
  {
    "id": 1063,
    "isbn": "9787547385005",
    "title": "El Canto de la Travesía 7790",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Thomas",
      "Fernando González"
    ],
    "price": 52.3,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787547385005-L.jpg"
  },
  {
    "id": 1064,
    "isbn": "9784597991095",
    "title": "El Secreto de la Sabiduría 1284",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Sánchez",
      "Patricia González"
    ],
    "price": 67.15,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784597991095-L.jpg"
  },
  {
    "id": 1065,
    "isbn": "9780749972929",
    "title": "El Misterio de el Viento 1598",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Thomas",
      "Miguel Miller"
    ],
    "price": 42.6,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780749972929-L.jpg"
  },
  {
    "id": 1066,
    "isbn": "9786646597227",
    "title": "Rastros en la Montaña 170",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Brown"
    ],
    "price": 48.95,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786646597227-L.jpg"
  },
  {
    "id": 1067,
    "isbn": "9782538995911",
    "title": "Crónicas de el Horizonte 649",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Martínez"
    ],
    "price": 7.09,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782538995911-L.jpg"
  },
  {
    "id": 1068,
    "isbn": "9785494918710",
    "title": "Crónicas de la Memoria 92",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Taylor"
    ],
    "price": 84.03,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785494918710-L.jpg"
  },
  {
    "id": 1069,
    "isbn": "9781708792725",
    "title": "El Secreto de la Ciudad Perdida 545",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía González"
    ],
    "price": 36.8,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781708792725-L.jpg"
  },
  {
    "id": 1070,
    "isbn": "9781725528185",
    "title": "Las Luces de el Horizonte 5125",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael García"
    ],
    "price": 45.42,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781725528185-L.jpg"
  },
  {
    "id": 1071,
    "isbn": "9781662056772",
    "title": "El Legado de la Justicia 6403",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 15.8,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781662056772-L.jpg"
  },
  {
    "id": 1072,
    "isbn": "9785745348600",
    "title": "Bajo el Cielo de la Sabiduría 3847",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael González"
    ],
    "price": 61.08,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785745348600-L.jpg"
  },
  {
    "id": 1073,
    "isbn": "9782227976290",
    "title": "El Renacer de la Noche 9808",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Brown"
    ],
    "price": 45.33,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782227976290-L.jpg"
  },
  {
    "id": 1074,
    "isbn": "978194032788",
    "title": "El Guardián de el Destino 537",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Moore",
      "Andrés Wilson"
    ],
    "price": 63.95,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978194032788-L.jpg"
  },
  {
    "id": 1075,
    "isbn": "9781983716560",
    "title": "Rastros en el Tiempo 2156",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Martínez"
    ],
    "price": 52.73,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781983716560-L.jpg"
  },
  {
    "id": 1076,
    "isbn": "9789318247628",
    "title": "Lágrimas de la Eternidad 984",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel González"
    ],
    "price": 22.19,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789318247628-L.jpg"
  },
  {
    "id": 1077,
    "isbn": "9782895147848",
    "title": "El Canto de la Ciudad Perdida 3908",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Wilson",
      "Jorge Thomas"
    ],
    "price": 73.27,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782895147848-L.jpg"
  },
  {
    "id": 1078,
    "isbn": "9789583223914",
    "title": "Bajo el Cielo de el Horizonte 7032",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "John Davis",
      "Elena Thomas"
    ],
    "price": 51.8,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789583223914-L.jpg"
  },
  {
    "id": 1079,
    "isbn": "9784630579983",
    "title": "Vientos de la Montaña 3813",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Wilson",
      "Isabel Moore"
    ],
    "price": 103.46,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784630579983-L.jpg"
  },
  {
    "id": 1080,
    "isbn": "978643156142",
    "title": "Vientos de la Noche 6589",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Rodríguez"
    ],
    "price": 58.28,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978643156142-L.jpg"
  },
  {
    "id": 1081,
    "isbn": "9787568621779",
    "title": "El Secreto de el Desierto 9094",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Sánchez"
    ],
    "price": 84.61,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787568621779-L.jpg"
  },
  {
    "id": 1082,
    "isbn": "9787963211292",
    "title": "El Guardián de la Noche 7925",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Martínez",
      "Linda Brown"
    ],
    "price": 69.83,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787963211292-L.jpg"
  },
  {
    "id": 1083,
    "isbn": "978897388854",
    "title": "Más allá de la Eternidad 4105",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Hernández",
      "Fernando Wilson"
    ],
    "price": 111.26,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978897388854-L.jpg"
  },
  {
    "id": 1084,
    "isbn": "9786833242299",
    "title": "Más allá de el Desierto 6036",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Brown",
      "John Jones"
    ],
    "price": 52.1,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786833242299-L.jpg"
  },
  {
    "id": 1085,
    "isbn": "9780122927362",
    "title": "Las Voces de los Olvidados 1128",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John Smith",
      "Sofía Williams"
    ],
    "price": 21.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780122927362-L.jpg"
  },
  {
    "id": 1086,
    "isbn": "9781417623549",
    "title": "El Secreto de la Eternidad 4088",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel López"
    ],
    "price": 91.67,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781417623549-L.jpg"
  },
  {
    "id": 1087,
    "isbn": "978714225652",
    "title": "Bajo el Cielo de los Ancestros 6888",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary López",
      "Michael González"
    ],
    "price": 34.14,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978714225652-L.jpg"
  },
  {
    "id": 1088,
    "isbn": "9785348559649",
    "title": "Las Luces de los Olvidados 4861",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Hernández",
      "Jorge Anderson"
    ],
    "price": 40.43,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785348559649-L.jpg"
  },
  {
    "id": 1089,
    "isbn": "978831345367",
    "title": "Bajo el Cielo de la Memoria 4609",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Rodríguez",
      "Carla Sánchez"
    ],
    "price": 71.18,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978831345367-L.jpg"
  },
  {
    "id": 1090,
    "isbn": "9781738363186",
    "title": "Fragmentos de la Memoria 8410",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Jones",
      "Elizabeth López"
    ],
    "price": 105.79,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781738363186-L.jpg"
  },
  {
    "id": 1091,
    "isbn": "9782478372278",
    "title": "Crónicas de la Noche 7473",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Jones"
    ],
    "price": 16.71,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782478372278-L.jpg"
  },
  {
    "id": 1092,
    "isbn": "9780519489404",
    "title": "El Guardián de el Desierto 533",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Miller",
      "Ricardo García"
    ],
    "price": 99.59,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780519489404-L.jpg"
  },
  {
    "id": 1093,
    "isbn": "9785722978943",
    "title": "Más allá de la Justicia 5866",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Martínez",
      "Valeria Johnson"
    ],
    "price": 27.38,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785722978943-L.jpg"
  },
  {
    "id": 1094,
    "isbn": "9784422552347",
    "title": "La Búsqueda de los Sueños 942",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Pérez",
      "John González"
    ],
    "price": 113.35,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784422552347-L.jpg"
  },
  {
    "id": 1095,
    "isbn": "9785137981170",
    "title": "El Misterio de los Ancestros 2855",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Pérez"
    ],
    "price": 114.45,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785137981170-L.jpg"
  },
  {
    "id": 1096,
    "isbn": "9780438733749",
    "title": "El Legado de la Eternidad 4916",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Taylor"
    ],
    "price": 65.34,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780438733749-L.jpg"
  },
  {
    "id": 1097,
    "isbn": "9782427579857",
    "title": "Fragmentos de la Justicia 851",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Johnson",
      "Mary Miller"
    ],
    "price": 103.75,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782427579857-L.jpg"
  },
  {
    "id": 1098,
    "isbn": "9782955128268",
    "title": "Espejos de la Memoria 62",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Williams",
      "Ricardo Smith"
    ],
    "price": 42.31,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782955128268-L.jpg"
  },
  {
    "id": 1099,
    "isbn": "978075078621",
    "title": "Lágrimas de la Verdad 7665",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Jones"
    ],
    "price": 102.67,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978075078621-L.jpg"
  },
  {
    "id": 1100,
    "isbn": "9785731289092",
    "title": "Vientos de la Montaña 648",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Brown"
    ],
    "price": 40.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785731289092-L.jpg"
  },
  {
    "id": 1101,
    "isbn": "9782931466278",
    "title": "Fragmentos de los Ancestros 8071",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Sánchez"
    ],
    "price": 25.74,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782931466278-L.jpg"
  },
  {
    "id": 1102,
    "isbn": "9781504299312",
    "title": "El Secreto de los Olvidados 1968",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Patricia Williams",
      "David Wilson"
    ],
    "price": 82.04,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781504299312-L.jpg"
  },
  {
    "id": 1103,
    "isbn": "9780629844353",
    "title": "El Renacer de la Travesía 4779",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 24.77,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780629844353-L.jpg"
  },
  {
    "id": 1104,
    "isbn": "9780917879807",
    "title": "Rastros en la Eternidad 2610",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Smith"
    ],
    "price": 93.01,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780917879807-L.jpg"
  },
  {
    "id": 1105,
    "isbn": "9784790412861",
    "title": "Crónicas de la Ciudad Perdida 5998",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Miller",
      "Carla Davis"
    ],
    "price": 56.51,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784790412861-L.jpg"
  },
  {
    "id": 1106,
    "isbn": "9785933016984",
    "title": "Rastros en el Desierto 5421",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel López"
    ],
    "price": 14.77,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785933016984-L.jpg"
  },
  {
    "id": 1107,
    "isbn": "9786310998305",
    "title": "Fragmentos de la Memoria 4209",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Taylor",
      "Patricia Pérez"
    ],
    "price": 119.04,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786310998305-L.jpg"
  },
  {
    "id": 1108,
    "isbn": "9781599593289",
    "title": "El Renacer de la Memoria 1898",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Williams"
    ],
    "price": 77.94,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781599593289-L.jpg"
  },
  {
    "id": 1109,
    "isbn": "9782840836698",
    "title": "Vientos de la Justicia 6634",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Miller"
    ],
    "price": 83.96,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782840836698-L.jpg"
  },
  {
    "id": 1110,
    "isbn": "9785421056300",
    "title": "La Búsqueda de la Noche 8739",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "David Moore",
      "Patricia González"
    ],
    "price": 31.59,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785421056300-L.jpg"
  },
  {
    "id": 1111,
    "isbn": "9789981371934",
    "title": "El Canto de las Estrellas 4595",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Sánchez"
    ],
    "price": 79.96,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789981371934-L.jpg"
  },
  {
    "id": 1112,
    "isbn": "9784408843261",
    "title": "Espejos de el Tiempo 2793",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Wilson",
      "Andrés Sánchez"
    ],
    "price": 31.74,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784408843261-L.jpg"
  },
  {
    "id": 1113,
    "isbn": "9783210444659",
    "title": "Vientos de el Viento 1859",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge López"
    ],
    "price": 13.52,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783210444659-L.jpg"
  },
  {
    "id": 1114,
    "isbn": "9783765013720",
    "title": "Espejos de la Montaña 514",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Linda Wilson",
      "Elizabeth García"
    ],
    "price": 15.01,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783765013720-L.jpg"
  },
  {
    "id": 1115,
    "isbn": "9783482692222",
    "title": "Lágrimas de el Desierto 1030",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Jones",
      "David Pérez"
    ],
    "price": 108.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783482692222-L.jpg"
  },
  {
    "id": 1116,
    "isbn": "9789545279348",
    "title": "Crónicas de la Eternidad 2522",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert García"
    ],
    "price": 48.76,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789545279348-L.jpg"
  },
  {
    "id": 1117,
    "isbn": "978165574983",
    "title": "Las Luces de la Luna Roja 3807",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Thomas"
    ],
    "price": 79.08,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978165574983-L.jpg"
  },
  {
    "id": 1118,
    "isbn": "9787527597404",
    "title": "Más allá de la Montaña 7161",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Thomas",
      "Andrés González"
    ],
    "price": 37.61,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787527597404-L.jpg"
  },
  {
    "id": 1119,
    "isbn": "9788888750774",
    "title": "El Guardián de la Ciudad Perdida 690",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Thomas",
      "Jorge López"
    ],
    "price": 81.38,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788888750774-L.jpg"
  },
  {
    "id": 1120,
    "isbn": "9785422798926",
    "title": "La Búsqueda de las Estrellas 2091",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía Johnson"
    ],
    "price": 102.21,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785422798926-L.jpg"
  },
  {
    "id": 1121,
    "isbn": "9780494069356",
    "title": "El Guardián de la Montaña 7585",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Hernández",
      "Valeria Johnson"
    ],
    "price": 72.94,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780494069356-L.jpg"
  },
  {
    "id": 1122,
    "isbn": "9783238253769",
    "title": "Las Voces de la Justicia 3571",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Anderson"
    ],
    "price": 118.21,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783238253769-L.jpg"
  },
  {
    "id": 1123,
    "isbn": "9785513411024",
    "title": "El Camino hacia el Tiempo 4515",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Wilson",
      "Elena Johnson"
    ],
    "price": 37.37,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785513411024-L.jpg"
  },
  {
    "id": 1124,
    "isbn": "9786729573438",
    "title": "El Legado de los Olvidados 832",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Thomas",
      "Elizabeth Thomas"
    ],
    "price": 37.65,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786729573438-L.jpg"
  },
  {
    "id": 1125,
    "isbn": "978261012349",
    "title": "El Camino hacia el Horizonte 8173",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Michael Thomas",
      "Fernando Hernández"
    ],
    "price": 21.6,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978261012349-L.jpg"
  },
  {
    "id": 1126,
    "isbn": "9781311073105",
    "title": "La Búsqueda de la Noche 6338",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Davis"
    ],
    "price": 102.52,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781311073105-L.jpg"
  },
  {
    "id": 1127,
    "isbn": "9788791716430",
    "title": "Lágrimas de la Memoria 9930",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Rodríguez"
    ],
    "price": 86.03,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788791716430-L.jpg"
  },
  {
    "id": 1128,
    "isbn": "978631297172",
    "title": "Vientos de los Sueños 5107",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge García"
    ],
    "price": 13.69,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978631297172-L.jpg"
  },
  {
    "id": 1129,
    "isbn": "9780773056084",
    "title": "El Legado de la Memoria 4234",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 7.92,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780773056084-L.jpg"
  },
  {
    "id": 1130,
    "isbn": "9788213468398",
    "title": "El Misterio de la Memoria 8868",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena Moore",
      "Elizabeth González"
    ],
    "price": 72.85,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788213468398-L.jpg"
  },
  {
    "id": 1131,
    "isbn": "9784152125897",
    "title": "Vientos de la Verdad 8479",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Hernández",
      "Robert Martínez"
    ],
    "price": 79.26,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784152125897-L.jpg"
  },
  {
    "id": 1132,
    "isbn": "9782191126936",
    "title": "Espejos de la Noche 715",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Anderson"
    ],
    "price": 47.55,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782191126936-L.jpg"
  },
  {
    "id": 1133,
    "isbn": "9784922460876",
    "title": "Las Voces de los Olvidados 6378",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Anderson"
    ],
    "price": 93.78,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784922460876-L.jpg"
  },
  {
    "id": 1134,
    "isbn": "9786343263425",
    "title": "El Legado de la Verdad 6950",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés García"
    ],
    "price": 58.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786343263425-L.jpg"
  },
  {
    "id": 1135,
    "isbn": "9788208632674",
    "title": "El Misterio de los Ancestros 1089",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Patricia García"
    ],
    "price": 25.19,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788208632674-L.jpg"
  },
  {
    "id": 1136,
    "isbn": "9785376871706",
    "title": "La Sombra de el Desierto 8978",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Smith"
    ],
    "price": 64.32,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785376871706-L.jpg"
  },
  {
    "id": 1137,
    "isbn": "9782287894374",
    "title": "El Misterio de la Memoria 7145",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Brown",
      "Gabriel Miller"
    ],
    "price": 102.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782287894374-L.jpg"
  },
  {
    "id": 1138,
    "isbn": "9783300684316",
    "title": "La Búsqueda de el Destino 9471",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Brown"
    ],
    "price": 58.1,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783300684316-L.jpg"
  },
  {
    "id": 1139,
    "isbn": "9788804067016",
    "title": "El Renacer de los Olvidados 1970",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Rodríguez",
      "Elena Rodríguez"
    ],
    "price": 12.28,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788804067016-L.jpg"
  },
  {
    "id": 1140,
    "isbn": "9788842622918",
    "title": "Espejos de el Tiempo 8699",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Wilson"
    ],
    "price": 107.49,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788842622918-L.jpg"
  },
  {
    "id": 1141,
    "isbn": "9788824151849",
    "title": "El Legado de la Ciudad Perdida 4647",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Miller"
    ],
    "price": 72.66,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788824151849-L.jpg"
  },
  {
    "id": 1142,
    "isbn": "9784833688123",
    "title": "Lágrimas de los Sueños 9810",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena González"
    ],
    "price": 23.49,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784833688123-L.jpg"
  },
  {
    "id": 1143,
    "isbn": "9781755322074",
    "title": "Bajo el Cielo de la Memoria 3703",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena García",
      "Patricia Sánchez"
    ],
    "price": 34.11,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781755322074-L.jpg"
  },
  {
    "id": 1144,
    "isbn": "9789440247909",
    "title": "Las Luces de la Luna Roja 6420",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Sánchez",
      "Elizabeth Taylor"
    ],
    "price": 109.5,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789440247909-L.jpg"
  },
  {
    "id": 1145,
    "isbn": "9789854399539",
    "title": "El Camino hacia la Esperanza 3795",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía García",
      "Andrés Brown"
    ],
    "price": 45.87,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789854399539-L.jpg"
  },
  {
    "id": 1146,
    "isbn": "9781415063163",
    "title": "Vientos de la Memoria 7190",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Carla Moore",
      "Andrés Thomas"
    ],
    "price": 35.96,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781415063163-L.jpg"
  },
  {
    "id": 1147,
    "isbn": "9785706325893",
    "title": "Espejos de la Ciudad Perdida 7212",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Brown"
    ],
    "price": 98.5,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785706325893-L.jpg"
  },
  {
    "id": 1148,
    "isbn": "9787427197353",
    "title": "El Canto de el Desierto 3695",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Pérez"
    ],
    "price": 50.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787427197353-L.jpg"
  },
  {
    "id": 1149,
    "isbn": "978182471878",
    "title": "El Guardián de la Ciudad Perdida 1999",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria García",
      "Andrés González"
    ],
    "price": 92.65,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978182471878-L.jpg"
  },
  {
    "id": 1150,
    "isbn": "9780448143644",
    "title": "Las Luces de los Olvidados 2572",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary López"
    ],
    "price": 20.31,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780448143644-L.jpg"
  },
  {
    "id": 1151,
    "isbn": "9787463891703",
    "title": "Lágrimas de la Verdad 5642",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John González"
    ],
    "price": 97.37,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787463891703-L.jpg"
  },
  {
    "id": 1152,
    "isbn": "9782234784062",
    "title": "El Guardián de la Sabiduría 9843",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Smith"
    ],
    "price": 49.04,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782234784062-L.jpg"
  },
  {
    "id": 1153,
    "isbn": "9786372811123",
    "title": "El Misterio de el Desierto 9669",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Thomas"
    ],
    "price": 41.0,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786372811123-L.jpg"
  },
  {
    "id": 1154,
    "isbn": "9787114082023",
    "title": "Las Voces de la Noche 5246",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Moore"
    ],
    "price": 49.73,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787114082023-L.jpg"
  },
  {
    "id": 1155,
    "isbn": "9781503317758",
    "title": "Rastros en el Horizonte 6628",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel Johnson",
      "Gabriel Williams"
    ],
    "price": 101.55,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781503317758-L.jpg"
  },
  {
    "id": 1156,
    "isbn": "9781234767006",
    "title": "Lágrimas de las Estrellas 6142",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Rodríguez",
      "Linda Moore"
    ],
    "price": 19.8,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781234767006-L.jpg"
  },
  {
    "id": 1157,
    "isbn": "9789714762831",
    "title": "Vientos de la Verdad 764",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Pérez"
    ],
    "price": 116.89,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789714762831-L.jpg"
  },
  {
    "id": 1158,
    "isbn": "9789560053633",
    "title": "Espejos de la Sabiduría 688",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Thomas"
    ],
    "price": 61.96,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789560053633-L.jpg"
  },
  {
    "id": 1159,
    "isbn": "9785373778558",
    "title": "Espejos de la Sabiduría 6590",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Anderson",
      "Elizabeth García"
    ],
    "price": 96.33,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785373778558-L.jpg"
  },
  {
    "id": 1160,
    "isbn": "9785855010633",
    "title": "El Misterio de la Justicia 3677",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Thomas"
    ],
    "price": 68.11,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785855010633-L.jpg"
  },
  {
    "id": 1161,
    "isbn": "9787553364995",
    "title": "La Búsqueda de la Memoria 4459",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John García"
    ],
    "price": 24.73,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787553364995-L.jpg"
  },
  {
    "id": 1162,
    "isbn": "9787224339376",
    "title": "Lágrimas de la Sabiduría 1341",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Jones",
      "Michael Wilson"
    ],
    "price": 106.2,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787224339376-L.jpg"
  },
  {
    "id": 1163,
    "isbn": "9784788935853",
    "title": "Fragmentos de la Luna Roja 2491",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "David Smith",
      "Carla Brown"
    ],
    "price": 83.47,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784788935853-L.jpg"
  },
  {
    "id": 1164,
    "isbn": "9789771837633",
    "title": "El Eco de la Noche 3596",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Pérez"
    ],
    "price": 16.35,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789771837633-L.jpg"
  },
  {
    "id": 1165,
    "isbn": "9782406347187",
    "title": "El Renacer de la Montaña 108",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando López"
    ],
    "price": 79.47,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782406347187-L.jpg"
  },
  {
    "id": 1166,
    "isbn": "9788977479814",
    "title": "La Búsqueda de los Ancestros 3271",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Williams",
      "Mary Moore"
    ],
    "price": 93.34,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788977479814-L.jpg"
  },
  {
    "id": 1167,
    "isbn": "9785630799692",
    "title": "Rastros en la Verdad 6787",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Johnson"
    ],
    "price": 11.5,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785630799692-L.jpg"
  },
  {
    "id": 1168,
    "isbn": "9786817558491",
    "title": "Las Luces de los Ancestros 9925",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert González"
    ],
    "price": 41.22,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786817558491-L.jpg"
  },
  {
    "id": 1169,
    "isbn": "9786891815374",
    "title": "El Guardián de la Noche 9654",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Wilson",
      "Fernando Miller"
    ],
    "price": 54.71,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786891815374-L.jpg"
  },
  {
    "id": 1170,
    "isbn": "978690413388",
    "title": "La Búsqueda de el Desierto 4884",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Brown"
    ],
    "price": 113.44,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978690413388-L.jpg"
  },
  {
    "id": 1171,
    "isbn": "9782525973472",
    "title": "El Canto de las Estrellas 33",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Miguel Sánchez",
      "Gabriel Davis"
    ],
    "price": 8.5,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782525973472-L.jpg"
  },
  {
    "id": 1172,
    "isbn": "9787419799695",
    "title": "Vientos de el Horizonte 3682",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Taylor"
    ],
    "price": 41.3,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787419799695-L.jpg"
  },
  {
    "id": 1173,
    "isbn": "9786517643206",
    "title": "Espejos de el Tiempo 2141",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Pérez",
      "David Wilson"
    ],
    "price": 96.75,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786517643206-L.jpg"
  },
  {
    "id": 1174,
    "isbn": "9788925850658",
    "title": "Las Luces de el Destino 4603",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Pérez",
      "Jorge Brown"
    ],
    "price": 54.09,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788925850658-L.jpg"
  },
  {
    "id": 1175,
    "isbn": "9783374474844",
    "title": "El Secreto de la Ciudad Perdida 1649",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Thomas"
    ],
    "price": 5.37,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783374474844-L.jpg"
  },
  {
    "id": 1176,
    "isbn": "9785715256836",
    "title": "El Canto de el Horizonte 9280",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Anderson"
    ],
    "price": 88.18,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785715256836-L.jpg"
  },
  {
    "id": 1177,
    "isbn": "9788458720732",
    "title": "Fragmentos de la Ciudad Perdida 8693",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Pérez"
    ],
    "price": 85.77,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788458720732-L.jpg"
  },
  {
    "id": 1178,
    "isbn": "9781556826610",
    "title": "El Renacer de la Esperanza 6519",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Miller"
    ],
    "price": 82.86,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781556826610-L.jpg"
  },
  {
    "id": 1179,
    "isbn": "9787518653294",
    "title": "Espejos de la Justicia 5491",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel González"
    ],
    "price": 15.55,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787518653294-L.jpg"
  },
  {
    "id": 1180,
    "isbn": "9789477942877",
    "title": "Más allá de la Luna Roja 5526",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Johnson"
    ],
    "price": 12.65,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789477942877-L.jpg"
  },
  {
    "id": 1181,
    "isbn": "9789898272355",
    "title": "El Canto de las Estrellas 2494",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Williams",
      "Andrés Hernández"
    ],
    "price": 35.44,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789898272355-L.jpg"
  },
  {
    "id": 1182,
    "isbn": "9782829878947",
    "title": "El Guardián de la Sabiduría 1934",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Brown",
      "Sofía Moore"
    ],
    "price": 116.3,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782829878947-L.jpg"
  },
  {
    "id": 1183,
    "isbn": "9782317430626",
    "title": "La Búsqueda de los Sueños 887",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Jorge Miller"
    ],
    "price": 7.22,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782317430626-L.jpg"
  },
  {
    "id": 1184,
    "isbn": "9789273297218",
    "title": "Más allá de la Justicia 9454",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Martínez"
    ],
    "price": 73.56,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789273297218-L.jpg"
  },
  {
    "id": 1185,
    "isbn": "978972587884",
    "title": "El Legado de la Verdad 7106",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Taylor",
      "Isabel Moore"
    ],
    "price": 78.96,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978972587884-L.jpg"
  },
  {
    "id": 1186,
    "isbn": "9787961488436",
    "title": "Las Voces de los Ancestros 4081",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel Taylor",
      "David Johnson"
    ],
    "price": 6.89,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787961488436-L.jpg"
  },
  {
    "id": 1187,
    "isbn": "9782890690851",
    "title": "El Canto de la Travesía 6844",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Jones"
    ],
    "price": 46.28,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782890690851-L.jpg"
  },
  {
    "id": 1188,
    "isbn": "9785150559943",
    "title": "El Eco de la Luna Roja 8021",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Brown"
    ],
    "price": 68.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785150559943-L.jpg"
  },
  {
    "id": 1189,
    "isbn": "9787575974608",
    "title": "Las Voces de el Horizonte 4470",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda González"
    ],
    "price": 20.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787575974608-L.jpg"
  },
  {
    "id": 1190,
    "isbn": "9780615044224",
    "title": "Fragmentos de la Ciudad Perdida 8625",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Anderson"
    ],
    "price": 86.89,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780615044224-L.jpg"
  },
  {
    "id": 1191,
    "isbn": "9781622873050",
    "title": "Lágrimas de los Sueños 8899",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Johnson",
      "Linda González"
    ],
    "price": 56.0,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781622873050-L.jpg"
  },
  {
    "id": 1192,
    "isbn": "9785455812231",
    "title": "Bajo el Cielo de la Eternidad 5393",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Taylor",
      "Jorge Davis"
    ],
    "price": 109.11,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785455812231-L.jpg"
  },
  {
    "id": 1193,
    "isbn": "9788867465750",
    "title": "Las Luces de la Sabiduría 5067",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge García"
    ],
    "price": 107.24,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788867465750-L.jpg"
  },
  {
    "id": 1194,
    "isbn": "9780595015962",
    "title": "El Legado de la Justicia 1501",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Thomas"
    ],
    "price": 28.99,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780595015962-L.jpg"
  },
  {
    "id": 1195,
    "isbn": "978450291892",
    "title": "Espejos de la Memoria 3913",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Martínez",
      "Andrés Williams"
    ],
    "price": 26.51,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978450291892-L.jpg"
  },
  {
    "id": 1196,
    "isbn": "9787136760954",
    "title": "El Camino hacia el Desierto 5157",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Miller",
      "Fernando Taylor"
    ],
    "price": 60.04,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787136760954-L.jpg"
  },
  {
    "id": 1197,
    "isbn": "9788884798725",
    "title": "El Secreto de la Travesía 1232",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Sánchez"
    ],
    "price": 65.44,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788884798725-L.jpg"
  },
  {
    "id": 1198,
    "isbn": "9788995974605",
    "title": "El Guardián de los Ancestros 1044",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Williams"
    ],
    "price": 5.5,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788995974605-L.jpg"
  },
  {
    "id": 1199,
    "isbn": "978426281234",
    "title": "La Sombra de la Ciudad Perdida 8952",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Hernández"
    ],
    "price": 105.4,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978426281234-L.jpg"
  },
  {
    "id": 1200,
    "isbn": "9782470667662",
    "title": "Crónicas de la Eternidad 9004",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Miller"
    ],
    "price": 51.36,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782470667662-L.jpg"
  },
  {
    "id": 1201,
    "isbn": "9787113220525",
    "title": "Crónicas de la Justicia 597",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Jones",
      "Michael Taylor"
    ],
    "price": 89.53,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787113220525-L.jpg"
  },
  {
    "id": 1202,
    "isbn": "9780824844080",
    "title": "La Búsqueda de la Eternidad 8848",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Wilson",
      "Michael Williams"
    ],
    "price": 110.15,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780824844080-L.jpg"
  },
  {
    "id": 1203,
    "isbn": "9783493127508",
    "title": "Las Luces de la Memoria 373",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel García",
      "Patricia Sánchez"
    ],
    "price": 8.39,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783493127508-L.jpg"
  },
  {
    "id": 1204,
    "isbn": "9788506119297",
    "title": "El Secreto de la Esperanza 6398",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Williams"
    ],
    "price": 51.94,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788506119297-L.jpg"
  },
  {
    "id": 1205,
    "isbn": "9786871459932",
    "title": "El Legado de los Olvidados 9911",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Pérez"
    ],
    "price": 115.42,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786871459932-L.jpg"
  },
  {
    "id": 1206,
    "isbn": "9787674297981",
    "title": "El Canto de la Sabiduría 1448",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Sánchez",
      "Elena Miller"
    ],
    "price": 111.04,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787674297981-L.jpg"
  },
  {
    "id": 1207,
    "isbn": "9789242925593",
    "title": "Espejos de la Sabiduría 6060",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Brown",
      "Miguel Thomas"
    ],
    "price": 118.55,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789242925593-L.jpg"
  },
  {
    "id": 1208,
    "isbn": "9786329529323",
    "title": "Rastros en la Justicia 937",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Rodríguez",
      "Robert Taylor"
    ],
    "price": 66.49,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786329529323-L.jpg"
  },
  {
    "id": 1209,
    "isbn": "9780884267430",
    "title": "El Renacer de los Sueños 6524",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 25.39,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780884267430-L.jpg"
  },
  {
    "id": 1210,
    "isbn": "9783492069106",
    "title": "Fragmentos de la Ciudad Perdida 4679",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Brown"
    ],
    "price": 71.4,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783492069106-L.jpg"
  },
  {
    "id": 1211,
    "isbn": "9782763970349",
    "title": "Crónicas de el Destino 2252",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Brown"
    ],
    "price": 90.46,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782763970349-L.jpg"
  },
  {
    "id": 1212,
    "isbn": "9781849386722",
    "title": "El Legado de el Horizonte 7223",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John González"
    ],
    "price": 72.28,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781849386722-L.jpg"
  },
  {
    "id": 1213,
    "isbn": "9783954282531",
    "title": "El Secreto de la Travesía 5003",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo García"
    ],
    "price": 69.69,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783954282531-L.jpg"
  },
  {
    "id": 1214,
    "isbn": "9787830085872",
    "title": "Rastros en la Ciudad Perdida 3086",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía Johnson"
    ],
    "price": 85.99,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787830085872-L.jpg"
  },
  {
    "id": 1215,
    "isbn": "9785826436639",
    "title": "El Secreto de la Esperanza 6735",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael González",
      "Jorge Pérez"
    ],
    "price": 71.53,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785826436639-L.jpg"
  },
  {
    "id": 1216,
    "isbn": "9788554134983",
    "title": "La Sombra de el Desierto 8191",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Jones"
    ],
    "price": 48.41,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788554134983-L.jpg"
  },
  {
    "id": 1217,
    "isbn": "9784895458085",
    "title": "Las Luces de la Montaña 2137",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Johnson"
    ],
    "price": 34.66,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784895458085-L.jpg"
  },
  {
    "id": 1218,
    "isbn": "9782316223632",
    "title": "El Renacer de los Sueños 6714",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Jones"
    ],
    "price": 83.47,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782316223632-L.jpg"
  },
  {
    "id": 1219,
    "isbn": "9783248566453",
    "title": "El Guardián de el Viento 9009",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Linda García"
    ],
    "price": 53.48,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783248566453-L.jpg"
  },
  {
    "id": 1220,
    "isbn": "9786369962302",
    "title": "Las Voces de la Verdad 1249",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Jones",
      "Robert González"
    ],
    "price": 119.16,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786369962302-L.jpg"
  },
  {
    "id": 1221,
    "isbn": "9784175675768",
    "title": "Lágrimas de el Viento 2897",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Moore"
    ],
    "price": 59.37,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784175675768-L.jpg"
  },
  {
    "id": 1222,
    "isbn": "9782348593765",
    "title": "La Búsqueda de el Tiempo 7580",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Jones",
      "Carla Anderson"
    ],
    "price": 84.48,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782348593765-L.jpg"
  },
  {
    "id": 1223,
    "isbn": "9781655961427",
    "title": "La Sombra de los Ancestros 7986",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Martínez",
      "David Martínez"
    ],
    "price": 49.11,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781655961427-L.jpg"
  },
  {
    "id": 1224,
    "isbn": "9785602148251",
    "title": "Más allá de las Estrellas 1676",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Davis",
      "Elena Sánchez"
    ],
    "price": 43.72,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785602148251-L.jpg"
  },
  {
    "id": 1225,
    "isbn": "9788819487885",
    "title": "El Guardián de la Ciudad Perdida 5248",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Pérez",
      "Isabel Sánchez"
    ],
    "price": 84.33,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788819487885-L.jpg"
  },
  {
    "id": 1226,
    "isbn": "9781779123862",
    "title": "Las Voces de la Justicia 1877",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia López"
    ],
    "price": 47.7,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781779123862-L.jpg"
  },
  {
    "id": 1227,
    "isbn": "9783731514336",
    "title": "Fragmentos de la Verdad 391",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth González",
      "Sofía López"
    ],
    "price": 52.79,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783731514336-L.jpg"
  },
  {
    "id": 1228,
    "isbn": "9781427873910",
    "title": "Las Luces de el Viento 4802",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Moore"
    ],
    "price": 47.93,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781427873910-L.jpg"
  },
  {
    "id": 1229,
    "isbn": "978659161172",
    "title": "El Legado de los Ancestros 1537",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Thomas",
      "John Pérez"
    ],
    "price": 6.02,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978659161172-L.jpg"
  },
  {
    "id": 1230,
    "isbn": "9788352717876",
    "title": "El Legado de la Ciudad Perdida 7147",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Thomas"
    ],
    "price": 68.2,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788352717876-L.jpg"
  },
  {
    "id": 1231,
    "isbn": "9783153983383",
    "title": "Las Voces de la Esperanza 3891",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Moore"
    ],
    "price": 15.26,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783153983383-L.jpg"
  },
  {
    "id": 1232,
    "isbn": "9780127740003",
    "title": "La Búsqueda de la Sabiduría 7607",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Anderson"
    ],
    "price": 22.24,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780127740003-L.jpg"
  },
  {
    "id": 1233,
    "isbn": "9781605615493",
    "title": "El Guardián de la Eternidad 5902",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Rodríguez"
    ],
    "price": 59.33,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781605615493-L.jpg"
  },
  {
    "id": 1234,
    "isbn": "9781526224347",
    "title": "La Sombra de la Montaña 8403",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Davis",
      "Miguel Johnson"
    ],
    "price": 80.92,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781526224347-L.jpg"
  },
  {
    "id": 1235,
    "isbn": "9784494298723",
    "title": "Crónicas de los Olvidados 2827",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David González",
      "Gabriel Brown"
    ],
    "price": 89.56,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784494298723-L.jpg"
  },
  {
    "id": 1236,
    "isbn": "9787497816772",
    "title": "El Misterio de la Memoria 8719",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Martínez"
    ],
    "price": 60.75,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787497816772-L.jpg"
  },
  {
    "id": 1237,
    "isbn": "9784612445213",
    "title": "Rastros en el Horizonte 1095",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena García"
    ],
    "price": 37.42,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784612445213-L.jpg"
  },
  {
    "id": 1238,
    "isbn": "9782822799256",
    "title": "Crónicas de la Noche 5738",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Wilson"
    ],
    "price": 77.72,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782822799256-L.jpg"
  },
  {
    "id": 1239,
    "isbn": "9787230067447",
    "title": "Fragmentos de la Justicia 8261",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Martínez",
      "Sofía Smith"
    ],
    "price": 46.27,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787230067447-L.jpg"
  },
  {
    "id": 1240,
    "isbn": "9784959373200",
    "title": "Lágrimas de la Eternidad 7404",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Ricardo Thomas",
      "Patricia Johnson"
    ],
    "price": 52.45,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784959373200-L.jpg"
  },
  {
    "id": 1241,
    "isbn": "9783747125205",
    "title": "Vientos de los Ancestros 7425",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Hernández",
      "Michael Sánchez"
    ],
    "price": 75.8,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783747125205-L.jpg"
  },
  {
    "id": 1242,
    "isbn": "978881841510",
    "title": "Rastros en el Destino 7246",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Jones"
    ],
    "price": 82.04,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978881841510-L.jpg"
  },
  {
    "id": 1243,
    "isbn": "9787887168917",
    "title": "La Sombra de la Montaña 5043",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía González",
      "Mary Anderson"
    ],
    "price": 92.07,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787887168917-L.jpg"
  },
  {
    "id": 1244,
    "isbn": "9788966671007",
    "title": "La Sombra de la Eternidad 4875",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Davis"
    ],
    "price": 38.78,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788966671007-L.jpg"
  },
  {
    "id": 1245,
    "isbn": "9783956480355",
    "title": "La Sombra de la Eternidad 5047",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Anderson"
    ],
    "price": 78.87,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783956480355-L.jpg"
  },
  {
    "id": 1246,
    "isbn": "9785852916808",
    "title": "El Guardián de la Eternidad 1606",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena López"
    ],
    "price": 56.29,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785852916808-L.jpg"
  },
  {
    "id": 1247,
    "isbn": "9781723464973",
    "title": "El Canto de la Memoria 8664",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 87.38,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781723464973-L.jpg"
  },
  {
    "id": 1248,
    "isbn": "9786744319509",
    "title": "Lágrimas de la Memoria 9951",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Hernández"
    ],
    "price": 81.9,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786744319509-L.jpg"
  },
  {
    "id": 1249,
    "isbn": "9789999242219",
    "title": "Bajo el Cielo de el Tiempo 6642",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Wilson"
    ],
    "price": 110.4,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789999242219-L.jpg"
  },
  {
    "id": 1250,
    "isbn": "9781536659528",
    "title": "Bajo el Cielo de la Luna Roja 6741",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Anderson"
    ],
    "price": 82.17,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781536659528-L.jpg"
  },
  {
    "id": 1251,
    "isbn": "9785301230127",
    "title": "Las Luces de la Travesía 2194",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía González"
    ],
    "price": 14.57,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785301230127-L.jpg"
  },
  {
    "id": 1252,
    "isbn": "9789839524970",
    "title": "El Renacer de la Verdad 6833",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 22.64,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789839524970-L.jpg"
  },
  {
    "id": 1253,
    "isbn": "9789821612555",
    "title": "El Legado de los Ancestros 3205",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Davis"
    ],
    "price": 119.45,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789821612555-L.jpg"
  },
  {
    "id": 1254,
    "isbn": "9789934624292",
    "title": "El Camino hacia el Destino 6837",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Davis",
      "Ricardo Davis"
    ],
    "price": 58.87,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789934624292-L.jpg"
  },
  {
    "id": 1255,
    "isbn": "9788204528582",
    "title": "El Legado de el Tiempo 9817",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Brown",
      "Gabriel Martínez"
    ],
    "price": 91.68,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788204528582-L.jpg"
  },
  {
    "id": 1256,
    "isbn": "9785521864270",
    "title": "La Búsqueda de el Destino 4698",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John García",
      "Elizabeth Anderson"
    ],
    "price": 26.64,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785521864270-L.jpg"
  },
  {
    "id": 1257,
    "isbn": "9786778812069",
    "title": "El Camino hacia la Montaña 6667",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Wilson",
      "Mary Brown"
    ],
    "price": 23.93,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786778812069-L.jpg"
  },
  {
    "id": 1258,
    "isbn": "9789346179137",
    "title": "El Guardián de la Ciudad Perdida 2863",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Hernández",
      "Andrés Pérez"
    ],
    "price": 98.37,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789346179137-L.jpg"
  },
  {
    "id": 1259,
    "isbn": "9783764365233",
    "title": "Lágrimas de la Verdad 1766",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Taylor"
    ],
    "price": 15.76,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783764365233-L.jpg"
  },
  {
    "id": 1260,
    "isbn": "9786525461922",
    "title": "Fragmentos de la Ciudad Perdida 7316",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Smith"
    ],
    "price": 116.05,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786525461922-L.jpg"
  },
  {
    "id": 1261,
    "isbn": "9782516763839",
    "title": "La Sombra de los Sueños 5751",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Pérez"
    ],
    "price": 119.07,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782516763839-L.jpg"
  },
  {
    "id": 1262,
    "isbn": "9784672051492",
    "title": "Vientos de la Travesía 8772",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Thomas",
      "Mary Pérez"
    ],
    "price": 35.69,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784672051492-L.jpg"
  },
  {
    "id": 1263,
    "isbn": "9789193128906",
    "title": "Espejos de el Horizonte 1311",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Wilson",
      "John Sánchez"
    ],
    "price": 75.07,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789193128906-L.jpg"
  },
  {
    "id": 1264,
    "isbn": "9782575834846",
    "title": "El Secreto de la Justicia 2159",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria Thomas",
      "Valeria Pérez"
    ],
    "price": 87.39,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782575834846-L.jpg"
  },
  {
    "id": 1265,
    "isbn": "9789392363672",
    "title": "Más allá de la Justicia 3599",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Anderson",
      "Lucía Sánchez"
    ],
    "price": 64.1,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789392363672-L.jpg"
  },
  {
    "id": 1266,
    "isbn": "9786449285307",
    "title": "El Secreto de el Destino 6318",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David González",
      "Isabel Anderson"
    ],
    "price": 44.66,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786449285307-L.jpg"
  },
  {
    "id": 1267,
    "isbn": "9786401786125",
    "title": "El Camino hacia el Horizonte 9693",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía González"
    ],
    "price": 71.87,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786401786125-L.jpg"
  },
  {
    "id": 1268,
    "isbn": "9786263629547",
    "title": "Bajo el Cielo de la Eternidad 6151",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Jones",
      "Linda Thomas"
    ],
    "price": 95.51,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786263629547-L.jpg"
  },
  {
    "id": 1269,
    "isbn": "9789373636900",
    "title": "Lágrimas de las Estrellas 8160",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Moore"
    ],
    "price": 16.63,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789373636900-L.jpg"
  },
  {
    "id": 1270,
    "isbn": "9784803634488",
    "title": "El Eco de el Tiempo 4600",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Johnson",
      "Fernando Sánchez"
    ],
    "price": 61.61,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784803634488-L.jpg"
  },
  {
    "id": 1271,
    "isbn": "9787874021904",
    "title": "Fragmentos de las Estrellas 2968",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Thomas"
    ],
    "price": 30.09,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787874021904-L.jpg"
  },
  {
    "id": 1272,
    "isbn": "9786321062736",
    "title": "Las Voces de la Montaña 1035",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Hernández",
      "Gabriel Sánchez"
    ],
    "price": 11.93,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786321062736-L.jpg"
  },
  {
    "id": 1273,
    "isbn": "978330723572",
    "title": "Más allá de la Ciudad Perdida 3828",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Hernández"
    ],
    "price": 44.45,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978330723572-L.jpg"
  },
  {
    "id": 1274,
    "isbn": "9784200171418",
    "title": "Bajo el Cielo de los Sueños 3864",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Miller",
      "Elena Jones"
    ],
    "price": 80.19,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784200171418-L.jpg"
  },
  {
    "id": 1275,
    "isbn": "9788962887792",
    "title": "El Misterio de el Tiempo 20",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel Wilson",
      "Patricia Johnson"
    ],
    "price": 84.03,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788962887792-L.jpg"
  },
  {
    "id": 1276,
    "isbn": "9781709221309",
    "title": "Vientos de la Esperanza 8921",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Carla Davis",
      "Miguel Thomas"
    ],
    "price": 57.98,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781709221309-L.jpg"
  },
  {
    "id": 1277,
    "isbn": "9780744695991",
    "title": "El Secreto de la Memoria 9253",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Taylor",
      "Linda Miller"
    ],
    "price": 15.07,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780744695991-L.jpg"
  },
  {
    "id": 1278,
    "isbn": "978656187009",
    "title": "El Renacer de el Destino 3883",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Rodríguez",
      "David Thomas"
    ],
    "price": 7.38,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978656187009-L.jpg"
  },
  {
    "id": 1279,
    "isbn": "9787692335177",
    "title": "El Misterio de la Ciudad Perdida 9308",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Taylor",
      "Sofía Miller"
    ],
    "price": 64.92,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787692335177-L.jpg"
  },
  {
    "id": 1280,
    "isbn": "9784261980998",
    "title": "La Sombra de la Travesía 8462",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Rodríguez"
    ],
    "price": 93.54,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784261980998-L.jpg"
  },
  {
    "id": 1281,
    "isbn": "9786971127717",
    "title": "El Legado de el Viento 5867",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Martínez",
      "Elena Thomas"
    ],
    "price": 70.96,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786971127717-L.jpg"
  },
  {
    "id": 1282,
    "isbn": "9784378795690",
    "title": "Espejos de los Sueños 8292",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Williams"
    ],
    "price": 21.01,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784378795690-L.jpg"
  },
  {
    "id": 1283,
    "isbn": "9783835430709",
    "title": "El Misterio de la Esperanza 4076",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Davis",
      "Andrés Pérez"
    ],
    "price": 57.8,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783835430709-L.jpg"
  },
  {
    "id": 1284,
    "isbn": "9781528083454",
    "title": "Espejos de la Esperanza 7437",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena Pérez"
    ],
    "price": 32.34,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781528083454-L.jpg"
  },
  {
    "id": 1285,
    "isbn": "9785837911323",
    "title": "El Misterio de la Noche 3353",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Davis",
      "Patricia Pérez"
    ],
    "price": 27.94,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785837911323-L.jpg"
  },
  {
    "id": 1286,
    "isbn": "9789720722911",
    "title": "El Misterio de el Desierto 4534",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Jones"
    ],
    "price": 30.24,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789720722911-L.jpg"
  },
  {
    "id": 1287,
    "isbn": "9784880158716",
    "title": "Crónicas de la Luna Roja 8357",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Michael Wilson"
    ],
    "price": 96.27,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784880158716-L.jpg"
  },
  {
    "id": 1288,
    "isbn": "9788163184997",
    "title": "Bajo el Cielo de el Desierto 1130",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary González",
      "Andrés Thomas"
    ],
    "price": 108.94,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788163184997-L.jpg"
  },
  {
    "id": 1289,
    "isbn": "9786253591816",
    "title": "Rastros en el Horizonte 4658",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Davis",
      "Patricia Davis"
    ],
    "price": 76.82,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786253591816-L.jpg"
  },
  {
    "id": 1290,
    "isbn": "9782456377011",
    "title": "La Sombra de la Justicia 7153",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Rodríguez"
    ],
    "price": 70.88,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782456377011-L.jpg"
  },
  {
    "id": 1291,
    "isbn": "978346895737",
    "title": "El Secreto de la Ciudad Perdida 6617",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Johnson",
      "Fernando Williams"
    ],
    "price": 61.68,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978346895737-L.jpg"
  },
  {
    "id": 1292,
    "isbn": "9783374827510",
    "title": "Bajo el Cielo de la Sabiduría 5891",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Jones"
    ],
    "price": 55.1,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783374827510-L.jpg"
  },
  {
    "id": 1293,
    "isbn": "9786782540309",
    "title": "Fragmentos de las Estrellas 7955",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Williams"
    ],
    "price": 38.41,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786782540309-L.jpg"
  },
  {
    "id": 1294,
    "isbn": "9787361382464",
    "title": "Crónicas de la Memoria 205",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía López"
    ],
    "price": 79.53,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787361382464-L.jpg"
  },
  {
    "id": 1295,
    "isbn": "978967256537",
    "title": "El Legado de la Verdad 7211",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Anderson"
    ],
    "price": 61.09,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978967256537-L.jpg"
  },
  {
    "id": 1296,
    "isbn": "9780951854570",
    "title": "La Búsqueda de la Travesía 9464",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Jones"
    ],
    "price": 58.23,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780951854570-L.jpg"
  },
  {
    "id": 1297,
    "isbn": "9781530589838",
    "title": "El Guardián de la Ciudad Perdida 3875",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Smith",
      "John Wilson"
    ],
    "price": 78.13,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781530589838-L.jpg"
  },
  {
    "id": 1298,
    "isbn": "9781124726649",
    "title": "El Renacer de la Verdad 1690",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Pérez",
      "Michael Williams"
    ],
    "price": 49.32,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781124726649-L.jpg"
  },
  {
    "id": 1299,
    "isbn": "9784604860857",
    "title": "La Búsqueda de la Memoria 5419",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Anderson",
      "Linda Williams"
    ],
    "price": 101.82,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784604860857-L.jpg"
  },
  {
    "id": 1300,
    "isbn": "9781972457320",
    "title": "Lágrimas de los Olvidados 2707",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Miller",
      "Fernando Moore"
    ],
    "price": 103.34,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781972457320-L.jpg"
  },
  {
    "id": 1301,
    "isbn": "9788169390125",
    "title": "El Legado de la Travesía 6684",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Anderson",
      "John Smith"
    ],
    "price": 95.82,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788169390125-L.jpg"
  },
  {
    "id": 1302,
    "isbn": "9784605584417",
    "title": "Más allá de la Travesía 3415",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Martínez",
      "John Hernández"
    ],
    "price": 57.31,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784605584417-L.jpg"
  },
  {
    "id": 1303,
    "isbn": "978050890826",
    "title": "Fragmentos de las Estrellas 2368",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Johnson",
      "Jorge Davis"
    ],
    "price": 24.99,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978050890826-L.jpg"
  },
  {
    "id": 1304,
    "isbn": "9787271918722",
    "title": "La Sombra de la Montaña 7881",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda López",
      "Elizabeth Brown"
    ],
    "price": 104.75,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787271918722-L.jpg"
  },
  {
    "id": 1305,
    "isbn": "9786661328301",
    "title": "La Búsqueda de la Eternidad 696",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Johnson"
    ],
    "price": 32.93,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786661328301-L.jpg"
  },
  {
    "id": 1306,
    "isbn": "978624429737",
    "title": "Más allá de los Ancestros 7512",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Johnson",
      "Valeria Rodríguez"
    ],
    "price": 93.43,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978624429737-L.jpg"
  },
  {
    "id": 1307,
    "isbn": "9789159553735",
    "title": "El Legado de el Horizonte 7272",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel López"
    ],
    "price": 27.75,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789159553735-L.jpg"
  },
  {
    "id": 1308,
    "isbn": "9784969082109",
    "title": "El Renacer de los Sueños 9961",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Hernández"
    ],
    "price": 97.5,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784969082109-L.jpg"
  },
  {
    "id": 1309,
    "isbn": "9789729940569",
    "title": "Las Voces de las Estrellas 4416",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel González"
    ],
    "price": 36.47,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789729940569-L.jpg"
  },
  {
    "id": 1310,
    "isbn": "9782294430497",
    "title": "El Canto de el Viento 6714",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Smith",
      "Andrés Brown"
    ],
    "price": 24.51,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782294430497-L.jpg"
  },
  {
    "id": 1311,
    "isbn": "978695533924",
    "title": "El Canto de la Luna Roja 1556",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Jones",
      "Gabriel García"
    ],
    "price": 35.24,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978695533924-L.jpg"
  },
  {
    "id": 1312,
    "isbn": "9781626836310",
    "title": "Bajo el Cielo de la Sabiduría 5635",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 55.73,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781626836310-L.jpg"
  },
  {
    "id": 1313,
    "isbn": "9785635165126",
    "title": "Vientos de el Tiempo 207",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Sánchez",
      "Elena González"
    ],
    "price": 46.43,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785635165126-L.jpg"
  },
  {
    "id": 1314,
    "isbn": "9780500414897",
    "title": "Las Luces de los Olvidados 8726",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Johnson"
    ],
    "price": 72.23,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780500414897-L.jpg"
  },
  {
    "id": 1315,
    "isbn": "9788629552445",
    "title": "Lágrimas de el Desierto 2515",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Anderson"
    ],
    "price": 52.19,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788629552445-L.jpg"
  },
  {
    "id": 1316,
    "isbn": "9785806526589",
    "title": "Crónicas de la Travesía 1469",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Moore",
      "Patricia López"
    ],
    "price": 71.58,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785806526589-L.jpg"
  },
  {
    "id": 1317,
    "isbn": "9789417369177",
    "title": "Crónicas de el Destino 8618",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Thomas",
      "Robert García"
    ],
    "price": 42.32,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789417369177-L.jpg"
  },
  {
    "id": 1318,
    "isbn": "9787462666241",
    "title": "El Legado de el Horizonte 4702",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Jones",
      "Elizabeth Pérez"
    ],
    "price": 62.75,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787462666241-L.jpg"
  },
  {
    "id": 1319,
    "isbn": "9787734091122",
    "title": "Espejos de los Olvidados 5094",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth García",
      "Gabriel González"
    ],
    "price": 105.85,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787734091122-L.jpg"
  },
  {
    "id": 1320,
    "isbn": "9784522123393",
    "title": "Espejos de la Montaña 5725",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Williams",
      "Carla Sánchez"
    ],
    "price": 98.21,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784522123393-L.jpg"
  },
  {
    "id": 1321,
    "isbn": "9785219414435",
    "title": "El Canto de los Olvidados 2984",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Davis"
    ],
    "price": 11.76,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785219414435-L.jpg"
  },
  {
    "id": 1322,
    "isbn": "9788376128955",
    "title": "La Búsqueda de la Ciudad Perdida 9406",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Thomas"
    ],
    "price": 40.1,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788376128955-L.jpg"
  },
  {
    "id": 1323,
    "isbn": "9784614657546",
    "title": "El Guardián de los Sueños 8047",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Williams"
    ],
    "price": 77.65,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784614657546-L.jpg"
  },
  {
    "id": 1324,
    "isbn": "9782774852955",
    "title": "La Sombra de los Ancestros 5944",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena Rodríguez"
    ],
    "price": 45.73,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782774852955-L.jpg"
  },
  {
    "id": 1325,
    "isbn": "9785722878199",
    "title": "Las Luces de la Sabiduría 7610",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Rodríguez",
      "Mary Smith"
    ],
    "price": 72.15,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785722878199-L.jpg"
  },
  {
    "id": 1326,
    "isbn": "9787135278856",
    "title": "La Búsqueda de los Sueños 2957",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Martínez",
      "Michael González"
    ],
    "price": 87.05,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787135278856-L.jpg"
  },
  {
    "id": 1327,
    "isbn": "9781418494353",
    "title": "El Canto de el Tiempo 3560",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Hernández",
      "Elizabeth Brown"
    ],
    "price": 72.13,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781418494353-L.jpg"
  },
  {
    "id": 1328,
    "isbn": "9788354839118",
    "title": "Las Luces de la Verdad 6846",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Miller",
      "John Moore"
    ],
    "price": 10.55,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788354839118-L.jpg"
  },
  {
    "id": 1329,
    "isbn": "9785380524681",
    "title": "El Canto de la Luna Roja 7519",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda González"
    ],
    "price": 71.84,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785380524681-L.jpg"
  },
  {
    "id": 1330,
    "isbn": "9787111153597",
    "title": "La Búsqueda de la Verdad 3533",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Anderson",
      "Sofía Pérez"
    ],
    "price": 77.26,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787111153597-L.jpg"
  },
  {
    "id": 1331,
    "isbn": "9783353580368",
    "title": "La Búsqueda de la Travesía 7491",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 96.87,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783353580368-L.jpg"
  },
  {
    "id": 1332,
    "isbn": "9781496647160",
    "title": "El Renacer de la Travesía 8217",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Miller"
    ],
    "price": 87.73,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781496647160-L.jpg"
  },
  {
    "id": 1333,
    "isbn": "9787882185810",
    "title": "Lágrimas de la Ciudad Perdida 2986",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Williams"
    ],
    "price": 5.83,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787882185810-L.jpg"
  },
  {
    "id": 1334,
    "isbn": "9782292374052",
    "title": "Rastros en los Sueños 652",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert García"
    ],
    "price": 68.55,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782292374052-L.jpg"
  },
  {
    "id": 1335,
    "isbn": "9788889382981",
    "title": "El Eco de las Estrellas 7310",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Anderson"
    ],
    "price": 92.22,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788889382981-L.jpg"
  },
  {
    "id": 1336,
    "isbn": "9786178630119",
    "title": "Espejos de la Travesía 1063",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Sánchez",
      "Michael Wilson"
    ],
    "price": 83.17,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786178630119-L.jpg"
  },
  {
    "id": 1337,
    "isbn": "9780296777237",
    "title": "La Búsqueda de la Travesía 4950",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía García"
    ],
    "price": 105.16,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780296777237-L.jpg"
  },
  {
    "id": 1338,
    "isbn": "9781583026496",
    "title": "Bajo el Cielo de la Memoria 388",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Martínez"
    ],
    "price": 35.9,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781583026496-L.jpg"
  },
  {
    "id": 1339,
    "isbn": "9788697410371",
    "title": "Las Luces de los Olvidados 1331",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Martínez",
      "Ricardo Rodríguez"
    ],
    "price": 5.66,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788697410371-L.jpg"
  },
  {
    "id": 1340,
    "isbn": "978099741680",
    "title": "El Renacer de el Desierto 597",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Rodríguez",
      "Miguel Wilson"
    ],
    "price": 83.74,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978099741680-L.jpg"
  },
  {
    "id": 1341,
    "isbn": "9781258380663",
    "title": "Vientos de la Ciudad Perdida 1247",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Davis"
    ],
    "price": 53.21,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781258380663-L.jpg"
  },
  {
    "id": 1342,
    "isbn": "9785347871124",
    "title": "Fragmentos de la Memoria 2207",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Davis"
    ],
    "price": 92.35,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785347871124-L.jpg"
  },
  {
    "id": 1343,
    "isbn": "9783202631043",
    "title": "Vientos de las Estrellas 9452",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Davis"
    ],
    "price": 106.09,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783202631043-L.jpg"
  },
  {
    "id": 1344,
    "isbn": "9787657716171",
    "title": "El Legado de la Eternidad 3460",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Brown"
    ],
    "price": 81.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787657716171-L.jpg"
  },
  {
    "id": 1345,
    "isbn": "9786545860668",
    "title": "Crónicas de la Memoria 6083",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Anderson"
    ],
    "price": 18.01,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786545860668-L.jpg"
  },
  {
    "id": 1346,
    "isbn": "9782306796382",
    "title": "El Eco de los Ancestros 171",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "John Thomas",
      "Jorge Rodríguez"
    ],
    "price": 10.74,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782306796382-L.jpg"
  },
  {
    "id": 1347,
    "isbn": "9788148197547",
    "title": "La Sombra de la Travesía 4573",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel Rodríguez"
    ],
    "price": 69.07,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788148197547-L.jpg"
  },
  {
    "id": 1348,
    "isbn": "9783432249384",
    "title": "El Eco de los Ancestros 952",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Sánchez",
      "Mary López"
    ],
    "price": 79.69,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783432249384-L.jpg"
  },
  {
    "id": 1349,
    "isbn": "9787277334229",
    "title": "El Eco de la Noche 8188",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Johnson"
    ],
    "price": 74.94,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787277334229-L.jpg"
  },
  {
    "id": 1350,
    "isbn": "9783133147354",
    "title": "Lágrimas de la Esperanza 2127",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Davis",
      "Lucía Taylor"
    ],
    "price": 32.14,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783133147354-L.jpg"
  },
  {
    "id": 1351,
    "isbn": "9787307083714",
    "title": "El Camino hacia las Estrellas 7006",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Wilson"
    ],
    "price": 88.61,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787307083714-L.jpg"
  },
  {
    "id": 1352,
    "isbn": "9781718389182",
    "title": "Bajo el Cielo de el Destino 8146",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Anderson",
      "Andrés Wilson"
    ],
    "price": 47.95,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781718389182-L.jpg"
  },
  {
    "id": 1353,
    "isbn": "9787898573601",
    "title": "Más allá de la Montaña 6763",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Jones",
      "David Martínez"
    ],
    "price": 14.5,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787898573601-L.jpg"
  },
  {
    "id": 1354,
    "isbn": "9783351733711",
    "title": "Las Luces de el Viento 6528",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel López",
      "Miguel Miller"
    ],
    "price": 7.99,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783351733711-L.jpg"
  },
  {
    "id": 1355,
    "isbn": "9785453940103",
    "title": "Espejos de la Sabiduría 3858",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Thomas",
      "Patricia Moore"
    ],
    "price": 115.22,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785453940103-L.jpg"
  },
  {
    "id": 1356,
    "isbn": "9785368940618",
    "title": "Las Luces de la Justicia 6427",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Hernández",
      "Andrés Rodríguez"
    ],
    "price": 94.21,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785368940618-L.jpg"
  },
  {
    "id": 1357,
    "isbn": "9786873821973",
    "title": "Rastros en la Ciudad Perdida 3598",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Wilson",
      "Fernando Smith"
    ],
    "price": 87.23,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786873821973-L.jpg"
  },
  {
    "id": 1358,
    "isbn": "9788170828440",
    "title": "El Camino hacia los Sueños 9391",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo González"
    ],
    "price": 31.99,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788170828440-L.jpg"
  },
  {
    "id": 1359,
    "isbn": "9789571381534",
    "title": "El Secreto de la Ciudad Perdida 8111",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Williams"
    ],
    "price": 83.5,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789571381534-L.jpg"
  },
  {
    "id": 1360,
    "isbn": "9787688066061",
    "title": "El Renacer de el Tiempo 2067",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Hernández",
      "Isabel Taylor"
    ],
    "price": 36.08,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787688066061-L.jpg"
  },
  {
    "id": 1361,
    "isbn": "9788499384900",
    "title": "El Camino hacia los Olvidados 8309",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Miller",
      "Elena Taylor"
    ],
    "price": 15.8,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788499384900-L.jpg"
  },
  {
    "id": 1362,
    "isbn": "9789468185474",
    "title": "El Guardián de la Montaña 6240",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Johnson",
      "John Moore"
    ],
    "price": 13.2,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789468185474-L.jpg"
  },
  {
    "id": 1363,
    "isbn": "9788522349784",
    "title": "La Búsqueda de la Noche 6961",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés Wilson"
    ],
    "price": 55.74,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788522349784-L.jpg"
  },
  {
    "id": 1364,
    "isbn": "9787428941382",
    "title": "Vientos de el Tiempo 841",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Rodríguez",
      "Lucía Martínez"
    ],
    "price": 34.13,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787428941382-L.jpg"
  },
  {
    "id": 1365,
    "isbn": "9783981777932",
    "title": "El Guardián de la Justicia 7047",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando García"
    ],
    "price": 92.75,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783981777932-L.jpg"
  },
  {
    "id": 1366,
    "isbn": "9782669570742",
    "title": "El Secreto de el Destino 6946",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Rodríguez",
      "Mary Wilson"
    ],
    "price": 114.72,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782669570742-L.jpg"
  },
  {
    "id": 1367,
    "isbn": "9782300682513",
    "title": "La Sombra de la Memoria 6454",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Davis"
    ],
    "price": 46.96,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782300682513-L.jpg"
  },
  {
    "id": 1368,
    "isbn": "9782660392985",
    "title": "El Secreto de la Travesía 2605",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Rodríguez"
    ],
    "price": 69.72,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782660392985-L.jpg"
  },
  {
    "id": 1369,
    "isbn": "9784113126840",
    "title": "Vientos de la Travesía 303",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Miller"
    ],
    "price": 16.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784113126840-L.jpg"
  },
  {
    "id": 1370,
    "isbn": "9789306496946",
    "title": "Lágrimas de el Tiempo 1587",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David González",
      "Michael García"
    ],
    "price": 5.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789306496946-L.jpg"
  },
  {
    "id": 1371,
    "isbn": "9789244194072",
    "title": "Rastros en el Destino 700",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía González"
    ],
    "price": 37.5,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789244194072-L.jpg"
  },
  {
    "id": 1372,
    "isbn": "9781637815397",
    "title": "El Misterio de la Sabiduría 7145",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Brown",
      "Elena García"
    ],
    "price": 12.77,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781637815397-L.jpg"
  },
  {
    "id": 1373,
    "isbn": "9783534650101",
    "title": "El Renacer de el Horizonte 3986",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Smith"
    ],
    "price": 54.3,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783534650101-L.jpg"
  },
  {
    "id": 1374,
    "isbn": "9780179749504",
    "title": "El Canto de el Tiempo 6182",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Davis",
      "John Wilson"
    ],
    "price": 13.65,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780179749504-L.jpg"
  },
  {
    "id": 1375,
    "isbn": "978643852981",
    "title": "Bajo el Cielo de la Esperanza 8700",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Sánchez"
    ],
    "price": 62.2,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978643852981-L.jpg"
  },
  {
    "id": 1376,
    "isbn": "9787993535030",
    "title": "La Sombra de la Ciudad Perdida 9053",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Rodríguez",
      "Fernando Pérez"
    ],
    "price": 39.46,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787993535030-L.jpg"
  },
  {
    "id": 1377,
    "isbn": "9788295486501",
    "title": "Crónicas de el Destino 3626",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Wilson"
    ],
    "price": 30.28,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788295486501-L.jpg"
  },
  {
    "id": 1378,
    "isbn": "9787834898898",
    "title": "Crónicas de la Ciudad Perdida 2978",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés García"
    ],
    "price": 21.57,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787834898898-L.jpg"
  },
  {
    "id": 1379,
    "isbn": "9780404476847",
    "title": "Rastros en el Tiempo 7578",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Wilson"
    ],
    "price": 20.11,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780404476847-L.jpg"
  },
  {
    "id": 1380,
    "isbn": "9780901291349",
    "title": "Más allá de la Luna Roja 7938",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda González"
    ],
    "price": 68.14,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780901291349-L.jpg"
  },
  {
    "id": 1381,
    "isbn": "978521177933",
    "title": "La Sombra de la Montaña 5237",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Sánchez"
    ],
    "price": 69.27,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978521177933-L.jpg"
  },
  {
    "id": 1382,
    "isbn": "9784772064408",
    "title": "El Eco de el Destino 8434",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Moore"
    ],
    "price": 57.24,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784772064408-L.jpg"
  },
  {
    "id": 1383,
    "isbn": "978828181219",
    "title": "Espejos de el Destino 288",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Martínez"
    ],
    "price": 85.21,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978828181219-L.jpg"
  },
  {
    "id": 1384,
    "isbn": "9787150936489",
    "title": "El Misterio de la Noche 8980",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía García",
      "John Brown"
    ],
    "price": 74.81,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787150936489-L.jpg"
  },
  {
    "id": 1385,
    "isbn": "9786299194712",
    "title": "El Eco de la Montaña 8370",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Moore"
    ],
    "price": 26.05,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786299194712-L.jpg"
  },
  {
    "id": 1386,
    "isbn": "9784360214130",
    "title": "El Renacer de los Sueños 8047",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Davis"
    ],
    "price": 68.05,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784360214130-L.jpg"
  },
  {
    "id": 1387,
    "isbn": "9785337368221",
    "title": "Más allá de la Ciudad Perdida 9670",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Brown"
    ],
    "price": 76.07,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785337368221-L.jpg"
  },
  {
    "id": 1388,
    "isbn": "9780366696710",
    "title": "El Canto de la Luna Roja 7047",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Thomas",
      "Ricardo Taylor"
    ],
    "price": 21.25,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780366696710-L.jpg"
  },
  {
    "id": 1389,
    "isbn": "9785147865064",
    "title": "Las Luces de los Ancestros 1367",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Williams",
      "Robert Martínez"
    ],
    "price": 17.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785147865064-L.jpg"
  },
  {
    "id": 1390,
    "isbn": "9787805669823",
    "title": "El Misterio de la Sabiduría 4648",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Williams"
    ],
    "price": 65.61,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787805669823-L.jpg"
  },
  {
    "id": 1391,
    "isbn": "9780622816623",
    "title": "Rastros en los Olvidados 9431",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Martínez",
      "Fernando Johnson"
    ],
    "price": 84.76,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780622816623-L.jpg"
  },
  {
    "id": 1392,
    "isbn": "9782862560090",
    "title": "El Guardián de la Luna Roja 2319",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Smith",
      "Mary Williams"
    ],
    "price": 8.05,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782862560090-L.jpg"
  },
  {
    "id": 1393,
    "isbn": "9781886844339",
    "title": "El Eco de la Justicia 903",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Brown"
    ],
    "price": 98.36,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781886844339-L.jpg"
  },
  {
    "id": 1394,
    "isbn": "9782386926372",
    "title": "El Legado de la Verdad 6924",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Hernández"
    ],
    "price": 73.97,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782386926372-L.jpg"
  },
  {
    "id": 1395,
    "isbn": "9788861241435",
    "title": "El Eco de la Justicia 7897",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael González",
      "Michael Wilson"
    ],
    "price": 46.37,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788861241435-L.jpg"
  },
  {
    "id": 1396,
    "isbn": "9780402974710",
    "title": "Fragmentos de el Tiempo 5010",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Wilson",
      "Fernando López"
    ],
    "price": 57.35,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780402974710-L.jpg"
  },
  {
    "id": 1397,
    "isbn": "9782394531186",
    "title": "Las Luces de la Justicia 8036",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Jones"
    ],
    "price": 27.95,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782394531186-L.jpg"
  },
  {
    "id": 1398,
    "isbn": "9784245460379",
    "title": "Rastros en la Ciudad Perdida 8107",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda Thomas"
    ],
    "price": 84.85,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784245460379-L.jpg"
  },
  {
    "id": 1399,
    "isbn": "9787285549042",
    "title": "El Canto de la Noche 3767",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés González",
      "Linda Thomas"
    ],
    "price": 10.94,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787285549042-L.jpg"
  },
  {
    "id": 1400,
    "isbn": "9789693278811",
    "title": "Vientos de las Estrellas 2832",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Pérez",
      "Isabel Moore"
    ],
    "price": 17.19,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789693278811-L.jpg"
  },
  {
    "id": 1401,
    "isbn": "9782114166384",
    "title": "Lágrimas de los Olvidados 1241",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Anderson"
    ],
    "price": 78.4,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782114166384-L.jpg"
  },
  {
    "id": 1402,
    "isbn": "9786770039778",
    "title": "El Legado de los Olvidados 6874",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Jones",
      "Linda Sánchez"
    ],
    "price": 18.5,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786770039778-L.jpg"
  },
  {
    "id": 1403,
    "isbn": "9782164781797",
    "title": "Lágrimas de la Verdad 7279",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Taylor",
      "Lucía Wilson"
    ],
    "price": 83.56,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782164781797-L.jpg"
  },
  {
    "id": 1404,
    "isbn": "9789674473419",
    "title": "Vientos de el Tiempo 8125",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Sánchez",
      "Robert López"
    ],
    "price": 59.14,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789674473419-L.jpg"
  },
  {
    "id": 1405,
    "isbn": "9789330239847",
    "title": "Lágrimas de el Horizonte 9292",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Rodríguez",
      "Ricardo González"
    ],
    "price": 22.64,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789330239847-L.jpg"
  },
  {
    "id": 1406,
    "isbn": "9781450587785",
    "title": "Fragmentos de el Viento 1515",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Pérez",
      "Isabel Brown"
    ],
    "price": 94.91,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781450587785-L.jpg"
  },
  {
    "id": 1407,
    "isbn": "9786806057585",
    "title": "Lágrimas de la Verdad 3087",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Williams"
    ],
    "price": 98.38,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786806057585-L.jpg"
  },
  {
    "id": 1408,
    "isbn": "978813799591",
    "title": "Más allá de la Travesía 4789",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Pérez"
    ],
    "price": 95.68,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978813799591-L.jpg"
  },
  {
    "id": 1409,
    "isbn": "9789458052397",
    "title": "El Secreto de la Ciudad Perdida 4225",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Pérez",
      "Robert Taylor"
    ],
    "price": 80.12,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789458052397-L.jpg"
  },
  {
    "id": 1410,
    "isbn": "9786931254408",
    "title": "El Guardián de el Viento 7492",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Miller",
      "Ricardo Smith"
    ],
    "price": 33.84,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786931254408-L.jpg"
  },
  {
    "id": 1411,
    "isbn": "9788603441017",
    "title": "Bajo el Cielo de la Esperanza 5502",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Wilson"
    ],
    "price": 118.03,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788603441017-L.jpg"
  },
  {
    "id": 1412,
    "isbn": "9782710421740",
    "title": "Más allá de el Tiempo 3008",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert López",
      "Patricia Miller"
    ],
    "price": 64.66,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782710421740-L.jpg"
  },
  {
    "id": 1413,
    "isbn": "9787661851752",
    "title": "El Canto de la Montaña 8024",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Patricia González",
      "Patricia Martínez"
    ],
    "price": 98.25,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787661851752-L.jpg"
  },
  {
    "id": 1414,
    "isbn": "9780412791659",
    "title": "El Legado de la Verdad 6495",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia Anderson",
      "Lucía Brown"
    ],
    "price": 60.37,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780412791659-L.jpg"
  },
  {
    "id": 1415,
    "isbn": "9782760974043",
    "title": "El Canto de el Viento 3244",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Miller",
      "Miguel López"
    ],
    "price": 107.79,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782760974043-L.jpg"
  },
  {
    "id": 1416,
    "isbn": "9785265389527",
    "title": "La Búsqueda de el Tiempo 2188",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Rodríguez"
    ],
    "price": 51.51,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785265389527-L.jpg"
  },
  {
    "id": 1417,
    "isbn": "9787919152099",
    "title": "El Guardián de la Montaña 7264",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Davis"
    ],
    "price": 53.63,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787919152099-L.jpg"
  },
  {
    "id": 1418,
    "isbn": "978329389929",
    "title": "El Misterio de la Sabiduría 815",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Miller"
    ],
    "price": 6.72,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978329389929-L.jpg"
  },
  {
    "id": 1419,
    "isbn": "978390729136",
    "title": "Bajo el Cielo de la Sabiduría 1809",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Hernández",
      "David Taylor"
    ],
    "price": 59.06,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978390729136-L.jpg"
  },
  {
    "id": 1420,
    "isbn": "9784461061596",
    "title": "Las Luces de la Ciudad Perdida 1716",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Johnson",
      "Mary Thomas"
    ],
    "price": 29.99,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784461061596-L.jpg"
  },
  {
    "id": 1421,
    "isbn": "9780565650285",
    "title": "La Sombra de la Ciudad Perdida 2731",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Taylor",
      "Mary Johnson"
    ],
    "price": 63.62,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780565650285-L.jpg"
  },
  {
    "id": 1422,
    "isbn": "9782720048791",
    "title": "Las Luces de los Sueños 9829",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Taylor",
      "Jorge Brown"
    ],
    "price": 44.74,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782720048791-L.jpg"
  },
  {
    "id": 1423,
    "isbn": "9787973775579",
    "title": "Bajo el Cielo de la Montaña 5622",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés García",
      "John Smith"
    ],
    "price": 45.47,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787973775579-L.jpg"
  },
  {
    "id": 1424,
    "isbn": "9786514616425",
    "title": "El Secreto de la Montaña 3853",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Taylor",
      "David Davis"
    ],
    "price": 21.34,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786514616425-L.jpg"
  },
  {
    "id": 1425,
    "isbn": "9787287643649",
    "title": "Crónicas de la Esperanza 8929",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia García"
    ],
    "price": 59.46,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787287643649-L.jpg"
  },
  {
    "id": 1426,
    "isbn": "9783381082186",
    "title": "El Renacer de la Travesía 1389",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Davis",
      "Jorge Anderson"
    ],
    "price": 50.83,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783381082186-L.jpg"
  },
  {
    "id": 1427,
    "isbn": "9789216271817",
    "title": "La Sombra de la Travesía 9965",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Davis",
      "John Brown"
    ],
    "price": 59.26,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789216271817-L.jpg"
  },
  {
    "id": 1428,
    "isbn": "978773269033",
    "title": "Las Luces de la Sabiduría 6885",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Wilson"
    ],
    "price": 63.57,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978773269033-L.jpg"
  },
  {
    "id": 1429,
    "isbn": "9780869247570",
    "title": "El Camino hacia la Verdad 1361",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Mary Brown",
      "Jorge Wilson"
    ],
    "price": 101.4,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780869247570-L.jpg"
  },
  {
    "id": 1430,
    "isbn": "9780744333503",
    "title": "El Canto de el Horizonte 7424",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Hernández",
      "Gabriel Brown"
    ],
    "price": 119.64,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780744333503-L.jpg"
  },
  {
    "id": 1431,
    "isbn": "9783706761161",
    "title": "El Misterio de el Destino 9633",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth González"
    ],
    "price": 74.33,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783706761161-L.jpg"
  },
  {
    "id": 1432,
    "isbn": "9782243773408",
    "title": "Espejos de la Memoria 3542",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Anderson"
    ],
    "price": 39.52,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782243773408-L.jpg"
  },
  {
    "id": 1433,
    "isbn": "9787618468200",
    "title": "Espejos de la Justicia 6566",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Sofía López"
    ],
    "price": 38.49,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787618468200-L.jpg"
  },
  {
    "id": 1434,
    "isbn": "9788451345406",
    "title": "Lágrimas de la Travesía 3197",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "David García",
      "Carla Sánchez"
    ],
    "price": 59.09,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788451345406-L.jpg"
  },
  {
    "id": 1435,
    "isbn": "9782889875740",
    "title": "El Camino hacia la Memoria 849",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Johnson"
    ],
    "price": 13.58,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782889875740-L.jpg"
  },
  {
    "id": 1436,
    "isbn": "9782331452741",
    "title": "Fragmentos de los Olvidados 7899",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena López",
      "Isabel Taylor"
    ],
    "price": 113.76,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782331452741-L.jpg"
  },
  {
    "id": 1437,
    "isbn": "9781694015044",
    "title": "El Guardián de los Sueños 1271",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Rodríguez",
      "Miguel López"
    ],
    "price": 68.82,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781694015044-L.jpg"
  },
  {
    "id": 1438,
    "isbn": "9781413761429",
    "title": "El Legado de la Travesía 9177",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Williams"
    ],
    "price": 5.54,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781413761429-L.jpg"
  },
  {
    "id": 1439,
    "isbn": "9780490295131",
    "title": "Fragmentos de la Memoria 3222",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Lucía Anderson"
    ],
    "price": 70.05,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780490295131-L.jpg"
  },
  {
    "id": 1440,
    "isbn": "9783300310352",
    "title": "El Secreto de la Luna Roja 6674",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 116.27,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783300310352-L.jpg"
  },
  {
    "id": 1441,
    "isbn": "9785794860252",
    "title": "El Camino hacia la Eternidad 7596",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Brown"
    ],
    "price": 94.35,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785794860252-L.jpg"
  },
  {
    "id": 1442,
    "isbn": "9786295850223",
    "title": "Más allá de el Destino 4439",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Wilson",
      "Andrés Thomas"
    ],
    "price": 62.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786295850223-L.jpg"
  },
  {
    "id": 1443,
    "isbn": "9789552457692",
    "title": "Lágrimas de los Sueños 7414",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 83.07,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789552457692-L.jpg"
  },
  {
    "id": 1444,
    "isbn": "978693430359",
    "title": "Fragmentos de el Desierto 7853",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Fernando Sánchez",
      "Carla Hernández"
    ],
    "price": 45.18,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978693430359-L.jpg"
  },
  {
    "id": 1445,
    "isbn": "9781286992326",
    "title": "La Sombra de la Eternidad 5492",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Hernández",
      "Ricardo García"
    ],
    "price": 78.65,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781286992326-L.jpg"
  },
  {
    "id": 1446,
    "isbn": "9788166513060",
    "title": "Rastros en la Verdad 7277",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Moore"
    ],
    "price": 87.0,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788166513060-L.jpg"
  },
  {
    "id": 1447,
    "isbn": "9789714424647",
    "title": "El Legado de el Desierto 738",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 8.86,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789714424647-L.jpg"
  },
  {
    "id": 1448,
    "isbn": "9781313321228",
    "title": "El Secreto de la Memoria 826",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel García"
    ],
    "price": 54.73,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781313321228-L.jpg"
  },
  {
    "id": 1449,
    "isbn": "9788838830853",
    "title": "Espejos de la Justicia 428",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Robert Hernández",
      "Robert Taylor"
    ],
    "price": 72.37,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788838830853-L.jpg"
  },
  {
    "id": 1450,
    "isbn": "9787277477025",
    "title": "El Renacer de el Horizonte 5174",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Williams"
    ],
    "price": 66.09,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787277477025-L.jpg"
  },
  {
    "id": 1451,
    "isbn": "9785391118718",
    "title": "Más allá de la Verdad 5324",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda López"
    ],
    "price": 31.05,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785391118718-L.jpg"
  },
  {
    "id": 1452,
    "isbn": "9781668435687",
    "title": "Espejos de la Esperanza 7233",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary García"
    ],
    "price": 92.15,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781668435687-L.jpg"
  },
  {
    "id": 1453,
    "isbn": "9783875225471",
    "title": "La Búsqueda de la Justicia 7549",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Williams",
      "Carla Miller"
    ],
    "price": 105.92,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783875225471-L.jpg"
  },
  {
    "id": 1454,
    "isbn": "9782133874130",
    "title": "El Camino hacia la Esperanza 7783",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert Davis"
    ],
    "price": 58.64,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782133874130-L.jpg"
  },
  {
    "id": 1455,
    "isbn": "9787336265457",
    "title": "Las Voces de la Travesía 3782",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel Taylor",
      "Elena Rodríguez"
    ],
    "price": 107.62,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787336265457-L.jpg"
  },
  {
    "id": 1456,
    "isbn": "9788572924382",
    "title": "Lágrimas de la Noche 348",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Thomas",
      "David Wilson"
    ],
    "price": 18.88,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788572924382-L.jpg"
  },
  {
    "id": 1457,
    "isbn": "9782638920820",
    "title": "El Canto de la Eternidad 5846",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Rodríguez",
      "Gabriel Jones"
    ],
    "price": 6.86,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782638920820-L.jpg"
  },
  {
    "id": 1458,
    "isbn": "9785935341022",
    "title": "Crónicas de el Viento 9776",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel Brown",
      "Miguel Davis"
    ],
    "price": 71.41,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785935341022-L.jpg"
  },
  {
    "id": 1459,
    "isbn": "9789718275634",
    "title": "Las Voces de la Memoria 5265",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Williams",
      "Sofía Jones"
    ],
    "price": 106.23,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789718275634-L.jpg"
  },
  {
    "id": 1460,
    "isbn": "9781670250315",
    "title": "El Secreto de la Memoria 3054",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth López"
    ],
    "price": 97.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781670250315-L.jpg"
  },
  {
    "id": 1461,
    "isbn": "9781705888308",
    "title": "El Legado de los Ancestros 8771",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Pérez"
    ],
    "price": 11.08,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781705888308-L.jpg"
  },
  {
    "id": 1462,
    "isbn": "9785300034610",
    "title": "Bajo el Cielo de el Desierto 872",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Anderson",
      "Jorge Pérez"
    ],
    "price": 6.85,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785300034610-L.jpg"
  },
  {
    "id": 1463,
    "isbn": "978468013086",
    "title": "El Misterio de la Luna Roja 9017",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Martínez",
      "Mary Moore"
    ],
    "price": 91.3,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978468013086-L.jpg"
  },
  {
    "id": 1464,
    "isbn": "9789746458528",
    "title": "Fragmentos de la Justicia 6420",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Davis"
    ],
    "price": 103.91,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789746458528-L.jpg"
  },
  {
    "id": 1465,
    "isbn": "9788252747348",
    "title": "La Búsqueda de las Estrellas 4685",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía García",
      "John Thomas"
    ],
    "price": 67.59,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788252747348-L.jpg"
  },
  {
    "id": 1466,
    "isbn": "9786404528593",
    "title": "Crónicas de la Montaña 4523",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Taylor"
    ],
    "price": 26.53,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786404528593-L.jpg"
  },
  {
    "id": 1467,
    "isbn": "9787338290358",
    "title": "Las Voces de la Justicia 2928",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elizabeth Smith",
      "Robert Brown"
    ],
    "price": 117.23,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787338290358-L.jpg"
  },
  {
    "id": 1468,
    "isbn": "9785123587577",
    "title": "Lágrimas de la Noche 7989",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Johnson",
      "Fernando Brown"
    ],
    "price": 108.1,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785123587577-L.jpg"
  },
  {
    "id": 1469,
    "isbn": "9780271370095",
    "title": "Bajo el Cielo de la Esperanza 9733",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel García",
      "Patricia Brown"
    ],
    "price": 14.05,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780271370095-L.jpg"
  },
  {
    "id": 1470,
    "isbn": "9785643865582",
    "title": "Lágrimas de la Verdad 8117",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Sánchez",
      "David Johnson"
    ],
    "price": 6.45,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785643865582-L.jpg"
  },
  {
    "id": 1471,
    "isbn": "9782241042490",
    "title": "Lágrimas de el Viento 866",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel González",
      "Ricardo Taylor"
    ],
    "price": 49.16,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782241042490-L.jpg"
  },
  {
    "id": 1472,
    "isbn": "9781303911743",
    "title": "Más allá de la Justicia 1963",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Anderson"
    ],
    "price": 23.29,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9781303911743-L.jpg"
  },
  {
    "id": 1473,
    "isbn": "9780527540142",
    "title": "Fragmentos de las Estrellas 4069",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Lucía García",
      "Linda Jones"
    ],
    "price": 13.96,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780527540142-L.jpg"
  },
  {
    "id": 1474,
    "isbn": "9783799077071",
    "title": "Vientos de el Desierto 5437",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Moore",
      "Carla Davis"
    ],
    "price": 34.4,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783799077071-L.jpg"
  },
  {
    "id": 1475,
    "isbn": "9781525448119",
    "title": "El Eco de la Sabiduría 1575",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Jones",
      "Robert Wilson"
    ],
    "price": 78.63,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781525448119-L.jpg"
  },
  {
    "id": 1476,
    "isbn": "9786774332714",
    "title": "El Guardián de el Desierto 5906",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Hernández"
    ],
    "price": 21.28,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786774332714-L.jpg"
  },
  {
    "id": 1477,
    "isbn": "9788772355597",
    "title": "El Canto de la Memoria 6544",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Smith"
    ],
    "price": 36.16,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788772355597-L.jpg"
  },
  {
    "id": 1478,
    "isbn": "9783287477970",
    "title": "Las Luces de la Luna Roja 209",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge Miller"
    ],
    "price": 101.81,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783287477970-L.jpg"
  },
  {
    "id": 1479,
    "isbn": "9789645333100",
    "title": "El Secreto de el Desierto 4966",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Rodríguez"
    ],
    "price": 118.0,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789645333100-L.jpg"
  },
  {
    "id": 1480,
    "isbn": "9780409444247",
    "title": "Las Voces de el Horizonte 1290",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Johnson"
    ],
    "price": 80.08,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780409444247-L.jpg"
  },
  {
    "id": 1481,
    "isbn": "9789878139333",
    "title": "El Guardián de el Desierto 7310",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Fernando Smith",
      "Elizabeth Wilson"
    ],
    "price": 94.86,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789878139333-L.jpg"
  },
  {
    "id": 1482,
    "isbn": "9787889417464",
    "title": "El Legado de los Ancestros 520",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Jones"
    ],
    "price": 84.87,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787889417464-L.jpg"
  },
  {
    "id": 1483,
    "isbn": "9787416136110",
    "title": "El Canto de los Sueños 9440",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía González",
      "Gabriel Pérez"
    ],
    "price": 31.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787416136110-L.jpg"
  },
  {
    "id": 1484,
    "isbn": "9784846555566",
    "title": "Más allá de el Desierto 8846",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Hernández",
      "Isabel Miller"
    ],
    "price": 43.41,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784846555566-L.jpg"
  },
  {
    "id": 1485,
    "isbn": "9786291842000",
    "title": "Las Luces de la Luna Roja 4485",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Miller"
    ],
    "price": 107.22,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786291842000-L.jpg"
  },
  {
    "id": 1486,
    "isbn": "9784340173983",
    "title": "Vientos de las Estrellas 347",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 51.85,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784340173983-L.jpg"
  },
  {
    "id": 1487,
    "isbn": "9788349394226",
    "title": "El Eco de el Tiempo 2501",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Miller"
    ],
    "price": 11.21,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788349394226-L.jpg"
  },
  {
    "id": 1488,
    "isbn": "9780523250465",
    "title": "El Camino hacia la Ciudad Perdida 4677",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria López"
    ],
    "price": 10.73,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780523250465-L.jpg"
  },
  {
    "id": 1489,
    "isbn": "9789468650279",
    "title": "El Canto de la Eternidad 6244",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Taylor"
    ],
    "price": 25.17,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789468650279-L.jpg"
  },
  {
    "id": 1490,
    "isbn": "9784715321896",
    "title": "Las Voces de la Montaña 4869",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Davis",
      "Andrés Thomas"
    ],
    "price": 62.28,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784715321896-L.jpg"
  },
  {
    "id": 1491,
    "isbn": "9786563440354",
    "title": "El Guardián de la Esperanza 240",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Johnson",
      "Robert Miller"
    ],
    "price": 63.57,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786563440354-L.jpg"
  },
  {
    "id": 1492,
    "isbn": "9786983442020",
    "title": "Las Luces de el Destino 75",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Thomas"
    ],
    "price": 20.49,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786983442020-L.jpg"
  },
  {
    "id": 1493,
    "isbn": "9780635150875",
    "title": "El Guardián de los Ancestros 5454",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Sofía Hernández",
      "Miguel Pérez"
    ],
    "price": 13.79,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780635150875-L.jpg"
  },
  {
    "id": 1494,
    "isbn": "9784996646800",
    "title": "El Secreto de la Luna Roja 1912",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Smith",
      "Miguel Hernández"
    ],
    "price": 5.17,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784996646800-L.jpg"
  },
  {
    "id": 1495,
    "isbn": "9784100327120",
    "title": "El Renacer de la Verdad 9894",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Gabriel Johnson"
    ],
    "price": 37.19,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784100327120-L.jpg"
  },
  {
    "id": 1496,
    "isbn": "9782198193740",
    "title": "El Secreto de el Horizonte 3787",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Johnson"
    ],
    "price": 76.05,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782198193740-L.jpg"
  },
  {
    "id": 1497,
    "isbn": "9786775996199",
    "title": "La Búsqueda de la Montaña 102",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Anderson",
      "Patricia Taylor"
    ],
    "price": 115.1,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786775996199-L.jpg"
  },
  {
    "id": 1498,
    "isbn": "9789233643789",
    "title": "Fragmentos de la Travesía 6442",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Carla Anderson",
      "Carla Miller"
    ],
    "price": 84.51,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789233643789-L.jpg"
  },
  {
    "id": 1499,
    "isbn": "9785588278362",
    "title": "Crónicas de la Luna Roja 5908",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Anderson",
      "John Wilson"
    ],
    "price": 119.71,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785588278362-L.jpg"
  },
  {
    "id": 1500,
    "isbn": "9780924980770",
    "title": "Más allá de la Montaña 9406",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Sánchez"
    ],
    "price": 60.59,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780924980770-L.jpg"
  },
  {
    "id": 1501,
    "isbn": "9782745241016",
    "title": "El Secreto de la Sabiduría 1298",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Miller",
      "John Pérez"
    ],
    "price": 63.59,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782745241016-L.jpg"
  },
  {
    "id": 1502,
    "isbn": "9786343540236",
    "title": "Fragmentos de la Luna Roja 9467",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Martínez",
      "Valeria Rodríguez"
    ],
    "price": 96.61,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786343540236-L.jpg"
  },
  {
    "id": 1503,
    "isbn": "9780128811542",
    "title": "La Búsqueda de el Horizonte 7017",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Isabel Miller"
    ],
    "price": 40.19,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780128811542-L.jpg"
  },
  {
    "id": 1504,
    "isbn": "9789977512204",
    "title": "Bajo el Cielo de el Viento 293",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Taylor"
    ],
    "price": 99.74,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789977512204-L.jpg"
  },
  {
    "id": 1505,
    "isbn": "9785253785218",
    "title": "La Sombra de los Ancestros 6954",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Thomas"
    ],
    "price": 83.15,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785253785218-L.jpg"
  },
  {
    "id": 1506,
    "isbn": "9784505718950",
    "title": "El Misterio de el Desierto 8348",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia García",
      "Sofía Taylor"
    ],
    "price": 21.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784505718950-L.jpg"
  },
  {
    "id": 1507,
    "isbn": "9787593145431",
    "title": "Vientos de el Viento 2053",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Smith",
      "Andrés Hernández"
    ],
    "price": 17.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9787593145431-L.jpg"
  },
  {
    "id": 1508,
    "isbn": "9785185584767",
    "title": "Bajo el Cielo de la Sabiduría 2413",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Wilson",
      "Fernando López"
    ],
    "price": 46.33,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785185584767-L.jpg"
  },
  {
    "id": 1509,
    "isbn": "9782374729824",
    "title": "Vientos de los Olvidados 6034",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel González",
      "Carla Pérez"
    ],
    "price": 46.89,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782374729824-L.jpg"
  },
  {
    "id": 1510,
    "isbn": "9785211023055",
    "title": "Rastros en la Sabiduría 5371",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Davis"
    ],
    "price": 80.93,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785211023055-L.jpg"
  },
  {
    "id": 1511,
    "isbn": "978053465986",
    "title": "Bajo el Cielo de los Olvidados 2056",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Jones"
    ],
    "price": 40.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978053465986-L.jpg"
  },
  {
    "id": 1512,
    "isbn": "9781286489314",
    "title": "El Secreto de la Sabiduría 7326",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Martínez"
    ],
    "price": 95.19,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781286489314-L.jpg"
  },
  {
    "id": 1513,
    "isbn": "9788561374426",
    "title": "El Legado de la Ciudad Perdida 8640",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Jones",
      "Gabriel Jones"
    ],
    "price": 28.82,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788561374426-L.jpg"
  },
  {
    "id": 1514,
    "isbn": "9784290841253",
    "title": "El Renacer de el Tiempo 8230",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Miguel Smith"
    ],
    "price": 22.61,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784290841253-L.jpg"
  },
  {
    "id": 1515,
    "isbn": "9784882235965",
    "title": "El Legado de el Horizonte 9128",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Moore",
      "Jorge Moore"
    ],
    "price": 89.82,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784882235965-L.jpg"
  },
  {
    "id": 1516,
    "isbn": "9787470678557",
    "title": "Más allá de la Justicia 308",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 38.66,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787470678557-L.jpg"
  },
  {
    "id": 1517,
    "isbn": "9784176361301",
    "title": "El Eco de el Horizonte 1532",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Wilson"
    ],
    "price": 79.74,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784176361301-L.jpg"
  },
  {
    "id": 1518,
    "isbn": "9781847568267",
    "title": "Bajo el Cielo de la Verdad 1952",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Miller"
    ],
    "price": 91.44,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781847568267-L.jpg"
  },
  {
    "id": 1519,
    "isbn": "9786568726750",
    "title": "El Legado de el Viento 9151",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Davis"
    ],
    "price": 55.44,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786568726750-L.jpg"
  },
  {
    "id": 1520,
    "isbn": "9789606528866",
    "title": "Más allá de el Desierto 6715",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Ricardo Brown",
      "Elena López"
    ],
    "price": 58.64,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789606528866-L.jpg"
  },
  {
    "id": 1521,
    "isbn": "9786243212400",
    "title": "Más allá de los Ancestros 180",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Thomas",
      "Elizabeth García"
    ],
    "price": 20.43,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786243212400-L.jpg"
  },
  {
    "id": 1522,
    "isbn": "9788759695852",
    "title": "El Guardián de la Esperanza 3340",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Martínez"
    ],
    "price": 42.41,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788759695852-L.jpg"
  },
  {
    "id": 1523,
    "isbn": "9786381030362",
    "title": "El Camino hacia la Sabiduría 6420",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Anderson"
    ],
    "price": 84.49,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786381030362-L.jpg"
  },
  {
    "id": 1524,
    "isbn": "9789422597190",
    "title": "Las Luces de el Destino 514",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Pérez",
      "Linda Martínez"
    ],
    "price": 17.42,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789422597190-L.jpg"
  },
  {
    "id": 1525,
    "isbn": "9789439014482",
    "title": "La Búsqueda de la Ciudad Perdida 193",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Brown",
      "David Moore"
    ],
    "price": 69.38,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789439014482-L.jpg"
  },
  {
    "id": 1526,
    "isbn": "9784989112442",
    "title": "Crónicas de la Verdad 8055",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Miller",
      "John Davis"
    ],
    "price": 58.33,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784989112442-L.jpg"
  },
  {
    "id": 1527,
    "isbn": "9781107385917",
    "title": "Espejos de la Montaña 4104",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía González",
      "Michael Martínez"
    ],
    "price": 5.84,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781107385917-L.jpg"
  },
  {
    "id": 1528,
    "isbn": "9787171689395",
    "title": "Lágrimas de la Verdad 2765",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria Smith",
      "Ricardo Miller"
    ],
    "price": 70.12,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787171689395-L.jpg"
  },
  {
    "id": 1529,
    "isbn": "9787296438007",
    "title": "El Misterio de el Destino 5089",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 34.19,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787296438007-L.jpg"
  },
  {
    "id": 1530,
    "isbn": "9788835676249",
    "title": "La Sombra de la Verdad 3120",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Wilson"
    ],
    "price": 89.26,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788835676249-L.jpg"
  },
  {
    "id": 1531,
    "isbn": "9783605052766",
    "title": "Más allá de los Olvidados 3439",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Anderson",
      "Lucía Pérez"
    ],
    "price": 6.84,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783605052766-L.jpg"
  },
  {
    "id": 1532,
    "isbn": "9781669823728",
    "title": "Más allá de el Destino 7093",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Sánchez"
    ],
    "price": 105.26,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781669823728-L.jpg"
  },
  {
    "id": 1533,
    "isbn": "9783511454654",
    "title": "El Legado de el Desierto 1020",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena García"
    ],
    "price": 39.38,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783511454654-L.jpg"
  },
  {
    "id": 1534,
    "isbn": "978848172705",
    "title": "Más allá de la Verdad 2383",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Hernández",
      "David Anderson"
    ],
    "price": 11.97,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978848172705-L.jpg"
  },
  {
    "id": 1535,
    "isbn": "9786145811787",
    "title": "El Eco de la Luna Roja 986",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Hernández",
      "Elizabeth Smith"
    ],
    "price": 13.53,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786145811787-L.jpg"
  },
  {
    "id": 1536,
    "isbn": "9786296952797",
    "title": "Fragmentos de la Montaña 8179",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Anderson"
    ],
    "price": 106.21,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786296952797-L.jpg"
  },
  {
    "id": 1537,
    "isbn": "9786103747189",
    "title": "Espejos de la Eternidad 4765",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Martínez",
      "Michael Smith"
    ],
    "price": 60.32,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786103747189-L.jpg"
  },
  {
    "id": 1538,
    "isbn": "9781421859491",
    "title": "Espejos de la Sabiduría 3659",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Wilson"
    ],
    "price": 111.88,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781421859491-L.jpg"
  },
  {
    "id": 1539,
    "isbn": "9789573266136",
    "title": "El Legado de el Viento 4273",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Wilson"
    ],
    "price": 17.61,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789573266136-L.jpg"
  },
  {
    "id": 1540,
    "isbn": "9781432340032",
    "title": "Espejos de los Ancestros 9019",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Davis",
      "Robert Pérez"
    ],
    "price": 103.58,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781432340032-L.jpg"
  },
  {
    "id": 1541,
    "isbn": "9789871622382",
    "title": "El Misterio de la Justicia 8731",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Miller",
      "Gabriel Johnson"
    ],
    "price": 114.23,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789871622382-L.jpg"
  },
  {
    "id": 1542,
    "isbn": "9783475040801",
    "title": "Lágrimas de los Ancestros 2214",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Taylor",
      "John Pérez"
    ],
    "price": 52.56,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783475040801-L.jpg"
  },
  {
    "id": 1543,
    "isbn": "9787854239299",
    "title": "Crónicas de la Montaña 8744",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Jones"
    ],
    "price": 57.51,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787854239299-L.jpg"
  },
  {
    "id": 1544,
    "isbn": "9788326378690",
    "title": "El Renacer de los Sueños 1442",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Andrés Rodríguez"
    ],
    "price": 25.23,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788326378690-L.jpg"
  },
  {
    "id": 1545,
    "isbn": "9785687454148",
    "title": "El Legado de los Sueños 5221",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo García"
    ],
    "price": 38.55,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785687454148-L.jpg"
  },
  {
    "id": 1546,
    "isbn": "978494413665",
    "title": "La Sombra de la Montaña 557",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Gabriel Johnson",
      "Elena Hernández"
    ],
    "price": 100.66,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978494413665-L.jpg"
  },
  {
    "id": 1547,
    "isbn": "9789863159278",
    "title": "Lágrimas de el Destino 5045",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Pérez"
    ],
    "price": 26.49,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789863159278-L.jpg"
  },
  {
    "id": 1548,
    "isbn": "978261051490",
    "title": "El Legado de la Sabiduría 8702",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda González",
      "Mary Rodríguez"
    ],
    "price": 94.49,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978261051490-L.jpg"
  },
  {
    "id": 1549,
    "isbn": "9781778796593",
    "title": "El Renacer de la Montaña 4524",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Hernández"
    ],
    "price": 75.54,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781778796593-L.jpg"
  },
  {
    "id": 1550,
    "isbn": "9788179729779",
    "title": "Vientos de la Esperanza 214",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Martínez",
      "Valeria López"
    ],
    "price": 70.15,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788179729779-L.jpg"
  },
  {
    "id": 1551,
    "isbn": "9782772590057",
    "title": "Rastros en la Luna Roja 8111",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel Anderson"
    ],
    "price": 90.76,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782772590057-L.jpg"
  },
  {
    "id": 1552,
    "isbn": "9780260598783",
    "title": "El Camino hacia el Destino 2613",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John Pérez",
      "Valeria Williams"
    ],
    "price": 26.16,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780260598783-L.jpg"
  },
  {
    "id": 1553,
    "isbn": "9782423411281",
    "title": "Espejos de el Viento 8775",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Wilson",
      "Linda Hernández"
    ],
    "price": 92.28,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782423411281-L.jpg"
  },
  {
    "id": 1554,
    "isbn": "9788417951450",
    "title": "Crónicas de la Eternidad 7472",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Miller"
    ],
    "price": 11.07,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788417951450-L.jpg"
  },
  {
    "id": 1555,
    "isbn": "9787875040256",
    "title": "El Renacer de la Esperanza 8633",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Hernández",
      "Elizabeth Hernández"
    ],
    "price": 62.38,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787875040256-L.jpg"
  },
  {
    "id": 1556,
    "isbn": "9780811188906",
    "title": "El Renacer de el Tiempo 456",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía González",
      "Patricia Brown"
    ],
    "price": 91.43,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780811188906-L.jpg"
  },
  {
    "id": 1557,
    "isbn": "9786508737150",
    "title": "Vientos de el Desierto 8145",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel Thomas",
      "Miguel Martínez"
    ],
    "price": 93.22,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786508737150-L.jpg"
  },
  {
    "id": 1558,
    "isbn": "9785733862446",
    "title": "El Camino hacia la Montaña 2467",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Pérez",
      "Sofía Hernández"
    ],
    "price": 41.81,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785733862446-L.jpg"
  },
  {
    "id": 1559,
    "isbn": "9788786978379",
    "title": "Fragmentos de el Horizonte 8566",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Jones",
      "David Wilson"
    ],
    "price": 119.43,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788786978379-L.jpg"
  },
  {
    "id": 1560,
    "isbn": "9781861338679",
    "title": "Bajo el Cielo de la Montaña 337",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 88.13,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781861338679-L.jpg"
  },
  {
    "id": 1561,
    "isbn": "9789164732972",
    "title": "Lágrimas de el Viento 9597",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Davis",
      "Elena Williams"
    ],
    "price": 53.82,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789164732972-L.jpg"
  },
  {
    "id": 1562,
    "isbn": "9782576511319",
    "title": "La Sombra de la Verdad 1130",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Moore"
    ],
    "price": 19.05,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782576511319-L.jpg"
  },
  {
    "id": 1563,
    "isbn": "9789636423193",
    "title": "Espejos de la Noche 6787",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Taylor"
    ],
    "price": 33.3,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789636423193-L.jpg"
  },
  {
    "id": 1564,
    "isbn": "9782955730324",
    "title": "El Legado de la Sabiduría 9605",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Hernández"
    ],
    "price": 58.3,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782955730324-L.jpg"
  },
  {
    "id": 1565,
    "isbn": "9788142647062",
    "title": "Las Luces de el Viento 4626",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Anderson"
    ],
    "price": 24.18,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788142647062-L.jpg"
  },
  {
    "id": 1566,
    "isbn": "9784935287255",
    "title": "El Secreto de el Tiempo 5771",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Sánchez"
    ],
    "price": 101.61,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784935287255-L.jpg"
  },
  {
    "id": 1567,
    "isbn": "9780644025485",
    "title": "El Canto de los Sueños 4878",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla Thomas",
      "Sofía Thomas"
    ],
    "price": 23.14,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780644025485-L.jpg"
  },
  {
    "id": 1568,
    "isbn": "9789243851563",
    "title": "El Secreto de los Ancestros 7145",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Thomas"
    ],
    "price": 8.95,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789243851563-L.jpg"
  },
  {
    "id": 1569,
    "isbn": "9782903477363",
    "title": "La Sombra de la Noche 9079",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Hernández",
      "Mary Thomas"
    ],
    "price": 97.9,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782903477363-L.jpg"
  },
  {
    "id": 1570,
    "isbn": "9786959770577",
    "title": "Espejos de la Eternidad 6398",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Smith"
    ],
    "price": 94.95,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786959770577-L.jpg"
  },
  {
    "id": 1571,
    "isbn": "9787885163587",
    "title": "Fragmentos de la Ciudad Perdida 9560",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 37.08,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787885163587-L.jpg"
  },
  {
    "id": 1572,
    "isbn": "978075368056",
    "title": "El Guardián de el Desierto 3368",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Jones"
    ],
    "price": 73.02,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978075368056-L.jpg"
  },
  {
    "id": 1573,
    "isbn": "9783225710985",
    "title": "Bajo el Cielo de las Estrellas 2840",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Pérez",
      "Carla Martínez"
    ],
    "price": 23.98,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783225710985-L.jpg"
  },
  {
    "id": 1574,
    "isbn": "9785476773627",
    "title": "Rastros en la Noche 6117",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert García"
    ],
    "price": 116.3,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785476773627-L.jpg"
  },
  {
    "id": 1575,
    "isbn": "9788519270282",
    "title": "El Legado de la Noche 4382",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo González"
    ],
    "price": 99.4,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788519270282-L.jpg"
  },
  {
    "id": 1576,
    "isbn": "9786966549692",
    "title": "Lágrimas de la Justicia 4105",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Anderson",
      "Miguel Wilson"
    ],
    "price": 87.66,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9786966549692-L.jpg"
  },
  {
    "id": 1577,
    "isbn": "9784511723351",
    "title": "Espejos de el Tiempo 9741",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Miller",
      "Andrés Jones"
    ],
    "price": 38.24,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9784511723351-L.jpg"
  },
  {
    "id": 1578,
    "isbn": "9787810852234",
    "title": "Las Voces de el Destino 5332",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Smith"
    ],
    "price": 70.29,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787810852234-L.jpg"
  },
  {
    "id": 1579,
    "isbn": "9788960218376",
    "title": "Las Voces de la Ciudad Perdida 7148",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Jones",
      "Patricia Pérez"
    ],
    "price": 79.61,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788960218376-L.jpg"
  },
  {
    "id": 1580,
    "isbn": "9782594443531",
    "title": "Más allá de la Ciudad Perdida 9189",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Hernández"
    ],
    "price": 88.56,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782594443531-L.jpg"
  },
  {
    "id": 1581,
    "isbn": "9781291492644",
    "title": "Las Voces de la Sabiduría 2148",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Davis",
      "Ricardo Anderson"
    ],
    "price": 45.61,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781291492644-L.jpg"
  },
  {
    "id": 1582,
    "isbn": "9782469948307",
    "title": "El Eco de el Destino 2957",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Taylor",
      "Jorge Williams"
    ],
    "price": 109.02,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782469948307-L.jpg"
  },
  {
    "id": 1583,
    "isbn": "9788142637766",
    "title": "Más allá de la Luna Roja 8430",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Johnson",
      "Elizabeth Davis"
    ],
    "price": 6.6,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788142637766-L.jpg"
  },
  {
    "id": 1584,
    "isbn": "9782544757886",
    "title": "El Guardián de las Estrellas 6312",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge Hernández"
    ],
    "price": 107.76,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782544757886-L.jpg"
  },
  {
    "id": 1585,
    "isbn": "9781486634811",
    "title": "La Sombra de el Viento 805",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Pérez",
      "Jorge Davis"
    ],
    "price": 83.89,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781486634811-L.jpg"
  },
  {
    "id": 1586,
    "isbn": "9789625324807",
    "title": "Las Luces de el Horizonte 3297",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Moore"
    ],
    "price": 65.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789625324807-L.jpg"
  },
  {
    "id": 1587,
    "isbn": "9785843618810",
    "title": "Rastros en los Olvidados 9484",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Jones",
      "Valeria Miller"
    ],
    "price": 78.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785843618810-L.jpg"
  },
  {
    "id": 1588,
    "isbn": "9781225818632",
    "title": "El Legado de la Luna Roja 2968",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Elena Moore",
      "Ricardo López"
    ],
    "price": 27.92,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781225818632-L.jpg"
  },
  {
    "id": 1589,
    "isbn": "978251789479",
    "title": "Más allá de la Justicia 8663",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía Moore",
      "Valeria Wilson"
    ],
    "price": 85.47,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978251789479-L.jpg"
  },
  {
    "id": 1590,
    "isbn": "9787197117551",
    "title": "El Guardián de la Memoria 9454",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Brown"
    ],
    "price": 104.94,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787197117551-L.jpg"
  },
  {
    "id": 1591,
    "isbn": "9783335319115",
    "title": "Más allá de la Luna Roja 3909",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Taylor"
    ],
    "price": 118.6,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783335319115-L.jpg"
  },
  {
    "id": 1592,
    "isbn": "9781782387374",
    "title": "El Renacer de el Viento 4019",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Brown",
      "Robert Smith"
    ],
    "price": 88.95,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781782387374-L.jpg"
  },
  {
    "id": 1593,
    "isbn": "9786604913489",
    "title": "Crónicas de los Ancestros 6262",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Smith"
    ],
    "price": 101.14,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786604913489-L.jpg"
  },
  {
    "id": 1594,
    "isbn": "9781644396834",
    "title": "Lágrimas de el Viento 9655",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Pérez",
      "Mary Wilson"
    ],
    "price": 103.78,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781644396834-L.jpg"
  },
  {
    "id": 1595,
    "isbn": "9782257922205",
    "title": "La Búsqueda de los Olvidados 282",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Anderson",
      "Elena González"
    ],
    "price": 57.11,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782257922205-L.jpg"
  },
  {
    "id": 1596,
    "isbn": "9784374437280",
    "title": "Más allá de los Sueños 8657",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Sánchez"
    ],
    "price": 38.58,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784374437280-L.jpg"
  },
  {
    "id": 1597,
    "isbn": "9788438282311",
    "title": "El Legado de las Estrellas 7844",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Johnson"
    ],
    "price": 98.87,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788438282311-L.jpg"
  },
  {
    "id": 1598,
    "isbn": "9789169876046",
    "title": "Crónicas de las Estrellas 7157",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel Moore",
      "Carla García"
    ],
    "price": 16.95,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789169876046-L.jpg"
  },
  {
    "id": 1599,
    "isbn": "9781174215414",
    "title": "El Canto de el Desierto 800",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John García",
      "Miguel Rodríguez"
    ],
    "price": 95.13,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781174215414-L.jpg"
  },
  {
    "id": 1600,
    "isbn": "9784322285024",
    "title": "Rastros en los Ancestros 3955",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Rodríguez",
      "Carla Taylor"
    ],
    "price": 101.49,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784322285024-L.jpg"
  },
  {
    "id": 1601,
    "isbn": "978947828497",
    "title": "Vientos de la Memoria 4064",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Miller"
    ],
    "price": 23.88,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978947828497-L.jpg"
  },
  {
    "id": 1602,
    "isbn": "9785955483771",
    "title": "Lágrimas de la Verdad 4575",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Sánchez"
    ],
    "price": 19.25,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785955483771-L.jpg"
  },
  {
    "id": 1603,
    "isbn": "9785845979605",
    "title": "Bajo el Cielo de las Estrellas 4043",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Isabel Miller"
    ],
    "price": 19.19,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785845979605-L.jpg"
  },
  {
    "id": 1604,
    "isbn": "9783822939857",
    "title": "Fragmentos de la Esperanza 6135",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Williams",
      "Valeria Jones"
    ],
    "price": 7.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783822939857-L.jpg"
  },
  {
    "id": 1605,
    "isbn": "9781974349609",
    "title": "Las Voces de los Olvidados 3825",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Pérez"
    ],
    "price": 19.62,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781974349609-L.jpg"
  },
  {
    "id": 1606,
    "isbn": "9787469635967",
    "title": "Rastros en la Eternidad 1742",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 71.87,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787469635967-L.jpg"
  },
  {
    "id": 1607,
    "isbn": "9788813447700",
    "title": "El Misterio de los Sueños 9055",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elena Wilson"
    ],
    "price": 93.34,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788813447700-L.jpg"
  },
  {
    "id": 1608,
    "isbn": "9787365210374",
    "title": "Fragmentos de la Esperanza 4099",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 13.71,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787365210374-L.jpg"
  },
  {
    "id": 1609,
    "isbn": "9780459066475",
    "title": "La Búsqueda de la Eternidad 8167",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Thomas",
      "Carla Pérez"
    ],
    "price": 5.74,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780459066475-L.jpg"
  },
  {
    "id": 1610,
    "isbn": "9785798613304",
    "title": "El Canto de los Olvidados 4714",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Wilson",
      "Gabriel Rodríguez"
    ],
    "price": 71.48,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785798613304-L.jpg"
  },
  {
    "id": 1611,
    "isbn": "9784483951158",
    "title": "Crónicas de los Olvidados 72",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Lucía Anderson",
      "Fernando Pérez"
    ],
    "price": 70.58,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784483951158-L.jpg"
  },
  {
    "id": 1612,
    "isbn": "9784162882018",
    "title": "El Secreto de las Estrellas 3017",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Brown"
    ],
    "price": 25.8,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784162882018-L.jpg"
  },
  {
    "id": 1613,
    "isbn": "9786424522151",
    "title": "Las Luces de la Travesía 7852",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Rodríguez",
      "Isabel Taylor"
    ],
    "price": 118.02,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786424522151-L.jpg"
  },
  {
    "id": 1614,
    "isbn": "9783123416033",
    "title": "Lágrimas de los Ancestros 8557",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda Johnson",
      "Jorge Sánchez"
    ],
    "price": 38.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783123416033-L.jpg"
  },
  {
    "id": 1615,
    "isbn": "9784230340389",
    "title": "La Búsqueda de los Olvidados 7858",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Miller",
      "Patricia Miller"
    ],
    "price": 14.08,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784230340389-L.jpg"
  },
  {
    "id": 1616,
    "isbn": "9782360055067",
    "title": "Bajo el Cielo de el Destino 851",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo García"
    ],
    "price": 51.97,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782360055067-L.jpg"
  },
  {
    "id": 1617,
    "isbn": "9785713928681",
    "title": "El Misterio de la Ciudad Perdida 980",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Taylor"
    ],
    "price": 61.0,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785713928681-L.jpg"
  },
  {
    "id": 1618,
    "isbn": "9785488888883",
    "title": "La Búsqueda de el Destino 4361",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Jorge Thomas"
    ],
    "price": 100.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785488888883-L.jpg"
  },
  {
    "id": 1619,
    "isbn": "9785539810177",
    "title": "Bajo el Cielo de el Horizonte 7151",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Rodríguez",
      "Jorge Johnson"
    ],
    "price": 112.55,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785539810177-L.jpg"
  },
  {
    "id": 1620,
    "isbn": "9786393355941",
    "title": "El Guardián de la Esperanza 6030",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Moore"
    ],
    "price": 11.83,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786393355941-L.jpg"
  },
  {
    "id": 1621,
    "isbn": "9783122913496",
    "title": "Rastros en la Montaña 1476",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Lucía Wilson",
      "Carla Miller"
    ],
    "price": 27.92,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783122913496-L.jpg"
  },
  {
    "id": 1622,
    "isbn": "9786455997201",
    "title": "Crónicas de el Horizonte 8594",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Martínez",
      "Sofía Rodríguez"
    ],
    "price": 93.23,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786455997201-L.jpg"
  },
  {
    "id": 1623,
    "isbn": "9782157391095",
    "title": "Las Luces de la Memoria 6419",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Martínez",
      "Fernando Moore"
    ],
    "price": 79.49,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782157391095-L.jpg"
  },
  {
    "id": 1624,
    "isbn": "9787136555208",
    "title": "La Búsqueda de la Justicia 5858",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Wilson",
      "Gabriel Miller"
    ],
    "price": 47.45,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787136555208-L.jpg"
  },
  {
    "id": 1625,
    "isbn": "9788406782195",
    "title": "El Guardián de el Destino 8537",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Pérez"
    ],
    "price": 7.74,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788406782195-L.jpg"
  },
  {
    "id": 1626,
    "isbn": "9788713660667",
    "title": "El Canto de los Olvidados 3166",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena Jones",
      "Jorge Rodríguez"
    ],
    "price": 5.87,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788713660667-L.jpg"
  },
  {
    "id": 1627,
    "isbn": "978196687032",
    "title": "Las Voces de la Ciudad Perdida 4155",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert González"
    ],
    "price": 66.33,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978196687032-L.jpg"
  },
  {
    "id": 1628,
    "isbn": "9785198586611",
    "title": "El Canto de el Viento 1508",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Carla Sánchez",
      "Valeria García"
    ],
    "price": 97.82,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785198586611-L.jpg"
  },
  {
    "id": 1629,
    "isbn": "9786957814891",
    "title": "Espejos de la Ciudad Perdida 6405",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elena Hernández"
    ],
    "price": 89.68,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786957814891-L.jpg"
  },
  {
    "id": 1630,
    "isbn": "9780517356623",
    "title": "Fragmentos de la Verdad 1656",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel Smith"
    ],
    "price": 100.73,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780517356623-L.jpg"
  },
  {
    "id": 1631,
    "isbn": "9788700593794",
    "title": "Rastros en la Verdad 3863",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Wilson",
      "Ricardo Rodríguez"
    ],
    "price": 16.85,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788700593794-L.jpg"
  },
  {
    "id": 1632,
    "isbn": "9786959523555",
    "title": "La Sombra de el Viento 1797",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Jones",
      "Elena Brown"
    ],
    "price": 104.37,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786959523555-L.jpg"
  },
  {
    "id": 1633,
    "isbn": "9788580498561",
    "title": "Las Luces de la Travesía 8172",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Thomas",
      "Carla Davis"
    ],
    "price": 105.47,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788580498561-L.jpg"
  },
  {
    "id": 1634,
    "isbn": "9789328746401",
    "title": "Lágrimas de los Ancestros 8074",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena Jones",
      "David López"
    ],
    "price": 59.78,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789328746401-L.jpg"
  },
  {
    "id": 1635,
    "isbn": "9787347823318",
    "title": "Más allá de los Ancestros 5842",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Smith"
    ],
    "price": 61.08,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787347823318-L.jpg"
  },
  {
    "id": 1636,
    "isbn": "9783365555385",
    "title": "El Misterio de la Verdad 8053",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Miller",
      "Robert Jones"
    ],
    "price": 31.33,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783365555385-L.jpg"
  },
  {
    "id": 1637,
    "isbn": "9786153846733",
    "title": "La Sombra de la Sabiduría 7645",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Moore"
    ],
    "price": 18.52,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786153846733-L.jpg"
  },
  {
    "id": 1638,
    "isbn": "9786678237504",
    "title": "Rastros en la Montaña 2206",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Davis",
      "Elizabeth Smith"
    ],
    "price": 24.32,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786678237504-L.jpg"
  },
  {
    "id": 1639,
    "isbn": "9783770733576",
    "title": "Lágrimas de el Horizonte 2412",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Isabel Martínez"
    ],
    "price": 61.81,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783770733576-L.jpg"
  },
  {
    "id": 1640,
    "isbn": "9789742757168",
    "title": "El Guardián de la Sabiduría 7556",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Miller",
      "Patricia Sánchez"
    ],
    "price": 64.35,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789742757168-L.jpg"
  },
  {
    "id": 1641,
    "isbn": "9781395812003",
    "title": "La Sombra de la Esperanza 733",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Williams",
      "Elena Martínez"
    ],
    "price": 113.54,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781395812003-L.jpg"
  },
  {
    "id": 1642,
    "isbn": "978467195860",
    "title": "Fragmentos de el Horizonte 2471",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 53.73,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978467195860-L.jpg"
  },
  {
    "id": 1643,
    "isbn": "978158825205",
    "title": "El Misterio de la Justicia 8393",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Sánchez",
      "Miguel Taylor"
    ],
    "price": 88.23,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978158825205-L.jpg"
  },
  {
    "id": 1644,
    "isbn": "9785758459966",
    "title": "El Guardián de la Eternidad 1302",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Wilson"
    ],
    "price": 28.27,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785758459966-L.jpg"
  },
  {
    "id": 1645,
    "isbn": "9788148088920",
    "title": "Rastros en la Sabiduría 1739",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Jones"
    ],
    "price": 111.39,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788148088920-L.jpg"
  },
  {
    "id": 1646,
    "isbn": "9786745429009",
    "title": "Crónicas de los Ancestros 6139",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Wilson",
      "Michael García"
    ],
    "price": 10.65,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786745429009-L.jpg"
  },
  {
    "id": 1647,
    "isbn": "9787387226223",
    "title": "Rastros en las Estrellas 51",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Moore"
    ],
    "price": 41.11,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787387226223-L.jpg"
  },
  {
    "id": 1648,
    "isbn": "9782791567023",
    "title": "El Eco de la Esperanza 8295",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando López",
      "John García"
    ],
    "price": 11.19,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782791567023-L.jpg"
  },
  {
    "id": 1649,
    "isbn": "9787254671712",
    "title": "El Misterio de la Justicia 8385",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Wilson"
    ],
    "price": 37.49,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787254671712-L.jpg"
  },
  {
    "id": 1650,
    "isbn": "9780336621247",
    "title": "El Legado de el Viento 785",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Martínez",
      "Andrés Moore"
    ],
    "price": 31.1,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780336621247-L.jpg"
  },
  {
    "id": 1651,
    "isbn": "9781140536581",
    "title": "El Canto de la Eternidad 7606",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Taylor",
      "Mary Thomas"
    ],
    "price": 16.96,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781140536581-L.jpg"
  },
  {
    "id": 1652,
    "isbn": "9784690590003",
    "title": "Fragmentos de el Desierto 528",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John López"
    ],
    "price": 37.61,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784690590003-L.jpg"
  },
  {
    "id": 1653,
    "isbn": "9780757746307",
    "title": "Las Voces de la Verdad 5992",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth López",
      "Valeria Taylor"
    ],
    "price": 21.37,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780757746307-L.jpg"
  },
  {
    "id": 1654,
    "isbn": "9785974420498",
    "title": "Fragmentos de los Olvidados 9829",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 107.84,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785974420498-L.jpg"
  },
  {
    "id": 1655,
    "isbn": "9786977630631",
    "title": "El Eco de la Luna Roja 8835",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Moore"
    ],
    "price": 34.84,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786977630631-L.jpg"
  },
  {
    "id": 1656,
    "isbn": "9783544463975",
    "title": "El Eco de los Olvidados 3160",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Rodríguez",
      "Miguel Davis"
    ],
    "price": 74.31,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783544463975-L.jpg"
  },
  {
    "id": 1657,
    "isbn": "978931090923",
    "title": "Crónicas de los Olvidados 7571",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Jones",
      "Ricardo Wilson"
    ],
    "price": 35.44,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978931090923-L.jpg"
  },
  {
    "id": 1658,
    "isbn": "9787280495818",
    "title": "El Secreto de el Horizonte 2619",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Jorge Thomas",
      "Isabel Smith"
    ],
    "price": 30.62,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787280495818-L.jpg"
  },
  {
    "id": 1659,
    "isbn": "9781575214108",
    "title": "El Legado de los Sueños 200",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Brown",
      "Lucía López"
    ],
    "price": 29.65,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781575214108-L.jpg"
  },
  {
    "id": 1660,
    "isbn": "9788409334339",
    "title": "Vientos de los Olvidados 8486",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Miller"
    ],
    "price": 77.52,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788409334339-L.jpg"
  },
  {
    "id": 1661,
    "isbn": "9784812343494",
    "title": "Fragmentos de los Sueños 9682",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Anderson"
    ],
    "price": 42.22,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784812343494-L.jpg"
  },
  {
    "id": 1662,
    "isbn": "9789458428789",
    "title": "Vientos de las Estrellas 9436",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Brown"
    ],
    "price": 47.16,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789458428789-L.jpg"
  },
  {
    "id": 1663,
    "isbn": "9782195493461",
    "title": "Fragmentos de la Esperanza 3610",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Miller",
      "Sofía Miller"
    ],
    "price": 87.17,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782195493461-L.jpg"
  },
  {
    "id": 1664,
    "isbn": "9788200727514",
    "title": "La Búsqueda de la Montaña 8720",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés Davis"
    ],
    "price": 50.49,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788200727514-L.jpg"
  },
  {
    "id": 1665,
    "isbn": "9780817260941",
    "title": "Más allá de la Justicia 6704",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla López",
      "Patricia Miller"
    ],
    "price": 43.94,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780817260941-L.jpg"
  },
  {
    "id": 1666,
    "isbn": "9780146719066",
    "title": "El Camino hacia la Luna Roja 375",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Rodríguez",
      "Ricardo Moore"
    ],
    "price": 66.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780146719066-L.jpg"
  },
  {
    "id": 1667,
    "isbn": "9788605851777",
    "title": "Lágrimas de la Verdad 4386",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Williams",
      "Miguel Thomas"
    ],
    "price": 19.59,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788605851777-L.jpg"
  },
  {
    "id": 1668,
    "isbn": "9789471749014",
    "title": "La Búsqueda de la Travesía 584",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria González",
      "Andrés García"
    ],
    "price": 21.21,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789471749014-L.jpg"
  },
  {
    "id": 1669,
    "isbn": "9788532551566",
    "title": "El Canto de la Ciudad Perdida 1198",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Brown"
    ],
    "price": 37.03,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788532551566-L.jpg"
  },
  {
    "id": 1670,
    "isbn": "978769355670",
    "title": "Las Voces de la Luna Roja 9361",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "John Rodríguez",
      "Linda Pérez"
    ],
    "price": 8.79,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978769355670-L.jpg"
  },
  {
    "id": 1671,
    "isbn": "9785453110872",
    "title": "Las Voces de el Viento 967",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Johnson"
    ],
    "price": 11.56,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785453110872-L.jpg"
  },
  {
    "id": 1672,
    "isbn": "9783572966332",
    "title": "Lágrimas de la Memoria 9892",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Michael Williams",
      "Jorge Taylor"
    ],
    "price": 99.3,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783572966332-L.jpg"
  },
  {
    "id": 1673,
    "isbn": "9788659350271",
    "title": "El Camino hacia el Destino 5192",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Wilson",
      "Sofía Wilson"
    ],
    "price": 39.84,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788659350271-L.jpg"
  },
  {
    "id": 1674,
    "isbn": "9788698928745",
    "title": "El Renacer de la Travesía 4974",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Johnson",
      "Jorge Martínez"
    ],
    "price": 35.87,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788698928745-L.jpg"
  },
  {
    "id": 1675,
    "isbn": "9782206467641",
    "title": "Crónicas de el Tiempo 2094",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Williams"
    ],
    "price": 55.28,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782206467641-L.jpg"
  },
  {
    "id": 1676,
    "isbn": "9780128192450",
    "title": "Fragmentos de las Estrellas 2277",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Linda Thomas",
      "Michael Jones"
    ],
    "price": 83.0,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780128192450-L.jpg"
  },
  {
    "id": 1677,
    "isbn": "9789965912832",
    "title": "El Renacer de el Desierto 5645",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "John Smith"
    ],
    "price": 55.42,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789965912832-L.jpg"
  },
  {
    "id": 1678,
    "isbn": "9783911885959",
    "title": "Rastros en la Travesía 3622",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Carla Pérez",
      "Lucía García"
    ],
    "price": 69.23,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783911885959-L.jpg"
  },
  {
    "id": 1679,
    "isbn": "9784568020274",
    "title": "La Búsqueda de la Travesía 3510",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Miller"
    ],
    "price": 106.19,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784568020274-L.jpg"
  },
  {
    "id": 1680,
    "isbn": "9780669432862",
    "title": "El Eco de la Esperanza 6280",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Johnson"
    ],
    "price": 37.21,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9780669432862-L.jpg"
  },
  {
    "id": 1681,
    "isbn": "978599960226",
    "title": "Vientos de la Verdad 9528",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Smith",
      "Jorge Davis"
    ],
    "price": 62.71,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978599960226-L.jpg"
  },
  {
    "id": 1682,
    "isbn": "9783353283986",
    "title": "El Misterio de los Olvidados 3969",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert García"
    ],
    "price": 9.91,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783353283986-L.jpg"
  },
  {
    "id": 1683,
    "isbn": "9787720655550",
    "title": "La Búsqueda de el Desierto 2150",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Sánchez"
    ],
    "price": 71.04,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787720655550-L.jpg"
  },
  {
    "id": 1684,
    "isbn": "9787424690369",
    "title": "El Secreto de la Montaña 2856",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Miller",
      "Mary Taylor"
    ],
    "price": 58.1,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787424690369-L.jpg"
  },
  {
    "id": 1685,
    "isbn": "9786212656815",
    "title": "El Legado de el Horizonte 5671",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria González",
      "David Moore"
    ],
    "price": 89.81,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786212656815-L.jpg"
  },
  {
    "id": 1686,
    "isbn": "9787999437109",
    "title": "El Secreto de el Viento 9511",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Pérez"
    ],
    "price": 78.95,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787999437109-L.jpg"
  },
  {
    "id": 1687,
    "isbn": "9785823386777",
    "title": "Lágrimas de el Viento 2936",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Hernández",
      "David Brown"
    ],
    "price": 32.0,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785823386777-L.jpg"
  },
  {
    "id": 1688,
    "isbn": "9782810218783",
    "title": "El Guardián de el Viento 7251",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Sofía Brown",
      "Mary García"
    ],
    "price": 115.63,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782810218783-L.jpg"
  },
  {
    "id": 1689,
    "isbn": "9785982373168",
    "title": "Espejos de el Desierto 1319",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Miller"
    ],
    "price": 54.6,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785982373168-L.jpg"
  },
  {
    "id": 1690,
    "isbn": "9788686439444",
    "title": "El Misterio de la Ciudad Perdida 203",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert García",
      "Fernando González"
    ],
    "price": 78.59,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788686439444-L.jpg"
  },
  {
    "id": 1691,
    "isbn": "9789765735730",
    "title": "Bajo el Cielo de la Travesía 3908",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John Moore"
    ],
    "price": 10.74,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789765735730-L.jpg"
  },
  {
    "id": 1692,
    "isbn": "9780795565182",
    "title": "El Eco de los Ancestros 4484",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Moore",
      "Andrés Davis"
    ],
    "price": 47.49,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780795565182-L.jpg"
  },
  {
    "id": 1693,
    "isbn": "9784331541807",
    "title": "Fragmentos de el Horizonte 7262",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando García"
    ],
    "price": 29.2,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784331541807-L.jpg"
  },
  {
    "id": 1694,
    "isbn": "9783617710722",
    "title": "El Misterio de la Memoria 8299",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Taylor",
      "Isabel Williams"
    ],
    "price": 63.05,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783617710722-L.jpg"
  },
  {
    "id": 1695,
    "isbn": "9787920730408",
    "title": "Lágrimas de las Estrellas 6346",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Hernández"
    ],
    "price": 13.75,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787920730408-L.jpg"
  },
  {
    "id": 1696,
    "isbn": "978115090264",
    "title": "Espejos de el Horizonte 6959",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Elizabeth Davis"
    ],
    "price": 52.82,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978115090264-L.jpg"
  },
  {
    "id": 1697,
    "isbn": "9785877685048",
    "title": "Las Luces de la Verdad 2839",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Miller"
    ],
    "price": 105.26,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785877685048-L.jpg"
  },
  {
    "id": 1698,
    "isbn": "9789327193411",
    "title": "El Camino hacia la Verdad 6227",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Taylor",
      "Michael Moore"
    ],
    "price": 86.08,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789327193411-L.jpg"
  },
  {
    "id": 1699,
    "isbn": "9783439459021",
    "title": "El Secreto de la Verdad 4229",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Jones"
    ],
    "price": 73.97,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783439459021-L.jpg"
  },
  {
    "id": 1700,
    "isbn": "9789888664351",
    "title": "El Guardián de la Luna Roja 6069",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge López"
    ],
    "price": 45.69,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789888664351-L.jpg"
  },
  {
    "id": 1701,
    "isbn": "9788941736745",
    "title": "Fragmentos de la Memoria 3188",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo González",
      "Patricia Sánchez"
    ],
    "price": 22.02,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788941736745-L.jpg"
  },
  {
    "id": 1702,
    "isbn": "9786142045871",
    "title": "Espejos de las Estrellas 6453",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel García"
    ],
    "price": 31.44,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786142045871-L.jpg"
  },
  {
    "id": 1703,
    "isbn": "9781655981128",
    "title": "El Misterio de los Sueños 7298",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Miller",
      "Miguel Miller"
    ],
    "price": 10.63,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781655981128-L.jpg"
  },
  {
    "id": 1704,
    "isbn": "9785304461849",
    "title": "Lágrimas de los Ancestros 2604",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 116.69,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785304461849-L.jpg"
  },
  {
    "id": 1705,
    "isbn": "9787709381197",
    "title": "El Misterio de el Tiempo 8699",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Linda Martínez",
      "Linda Jones"
    ],
    "price": 94.46,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787709381197-L.jpg"
  },
  {
    "id": 1706,
    "isbn": "9782754869744",
    "title": "El Secreto de la Eternidad 7237",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth Brown"
    ],
    "price": 89.47,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782754869744-L.jpg"
  },
  {
    "id": 1707,
    "isbn": "9780289076163",
    "title": "El Misterio de las Estrellas 9110",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "John Rodríguez",
      "Sofía Thomas"
    ],
    "price": 17.46,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780289076163-L.jpg"
  },
  {
    "id": 1708,
    "isbn": "9788265978401",
    "title": "Las Luces de la Eternidad 7748",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Williams",
      "Elizabeth Jones"
    ],
    "price": 90.13,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788265978401-L.jpg"
  },
  {
    "id": 1709,
    "isbn": "9786796198169",
    "title": "El Canto de el Horizonte 3782",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 92.99,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786796198169-L.jpg"
  },
  {
    "id": 1710,
    "isbn": "9788594492173",
    "title": "Vientos de la Sabiduría 8050",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Michael Brown",
      "Michael Martínez"
    ],
    "price": 32.48,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788594492173-L.jpg"
  },
  {
    "id": 1711,
    "isbn": "9780790141794",
    "title": "El Eco de la Noche 5450",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Ricardo Smith"
    ],
    "price": 68.58,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780790141794-L.jpg"
  },
  {
    "id": 1712,
    "isbn": "9783688230792",
    "title": "Lágrimas de los Sueños 6237",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John Hernández",
      "Lucía Miller"
    ],
    "price": 107.33,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783688230792-L.jpg"
  },
  {
    "id": 1713,
    "isbn": "9784325067023",
    "title": "El Canto de la Verdad 1507",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Jones"
    ],
    "price": 16.08,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784325067023-L.jpg"
  },
  {
    "id": 1714,
    "isbn": "9788705692096",
    "title": "El Eco de las Estrellas 160",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Moore",
      "Miguel Jones"
    ],
    "price": 36.49,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788705692096-L.jpg"
  },
  {
    "id": 1715,
    "isbn": "978925872867",
    "title": "La Búsqueda de las Estrellas 2563",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Jones"
    ],
    "price": 71.57,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978925872867-L.jpg"
  },
  {
    "id": 1716,
    "isbn": "9784744387955",
    "title": "Las Luces de la Verdad 4626",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Carla Anderson"
    ],
    "price": 64.75,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784744387955-L.jpg"
  },
  {
    "id": 1717,
    "isbn": "9780332186849",
    "title": "El Eco de el Viento 4974",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John López",
      "Gabriel Taylor"
    ],
    "price": 26.02,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780332186849-L.jpg"
  },
  {
    "id": 1718,
    "isbn": "9783911886390",
    "title": "Espejos de la Travesía 7067",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Moore",
      "Valeria Brown"
    ],
    "price": 7.84,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783911886390-L.jpg"
  },
  {
    "id": 1719,
    "isbn": "9783306186302",
    "title": "El Misterio de la Sabiduría 3820",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía Sánchez",
      "Patricia Rodríguez"
    ],
    "price": 56.21,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783306186302-L.jpg"
  },
  {
    "id": 1720,
    "isbn": "9788511972641",
    "title": "El Renacer de la Sabiduría 8138",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "David Brown"
    ],
    "price": 86.13,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788511972641-L.jpg"
  },
  {
    "id": 1721,
    "isbn": "9787366123864",
    "title": "El Guardián de el Viento 5032",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Williams",
      "Lucía García"
    ],
    "price": 56.01,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787366123864-L.jpg"
  },
  {
    "id": 1722,
    "isbn": "9781296274832",
    "title": "El Camino hacia el Desierto 2756",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Wilson",
      "Linda Anderson"
    ],
    "price": 62.19,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781296274832-L.jpg"
  },
  {
    "id": 1723,
    "isbn": "9784575155334",
    "title": "Más allá de el Horizonte 5008",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Rodríguez",
      "Gabriel Wilson"
    ],
    "price": 102.02,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784575155334-L.jpg"
  },
  {
    "id": 1724,
    "isbn": "9786667034503",
    "title": "Lágrimas de el Horizonte 8191",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Brown"
    ],
    "price": 51.14,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786667034503-L.jpg"
  },
  {
    "id": 1725,
    "isbn": "978465746369",
    "title": "Rastros en la Eternidad 2519",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Isabel Hernández"
    ],
    "price": 17.13,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978465746369-L.jpg"
  },
  {
    "id": 1726,
    "isbn": "9788405758979",
    "title": "Las Voces de la Memoria 6652",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Michael Jones"
    ],
    "price": 74.7,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788405758979-L.jpg"
  },
  {
    "id": 1727,
    "isbn": "9788247288030",
    "title": "Las Voces de la Esperanza 9257",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Taylor",
      "Linda Williams"
    ],
    "price": 105.63,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788247288030-L.jpg"
  },
  {
    "id": 1728,
    "isbn": "9789368856511",
    "title": "Bajo el Cielo de los Olvidados 7889",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Davis"
    ],
    "price": 50.56,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789368856511-L.jpg"
  },
  {
    "id": 1729,
    "isbn": "9789593890342",
    "title": "El Renacer de el Tiempo 3213",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel González",
      "David Smith"
    ],
    "price": 54.5,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789593890342-L.jpg"
  },
  {
    "id": 1730,
    "isbn": "9782312145204",
    "title": "La Sombra de el Viento 4424",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Thomas",
      "Elizabeth Williams"
    ],
    "price": 24.38,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782312145204-L.jpg"
  },
  {
    "id": 1731,
    "isbn": "9784994933148",
    "title": "El Misterio de el Destino 1413",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Martínez"
    ],
    "price": 62.0,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784994933148-L.jpg"
  },
  {
    "id": 1732,
    "isbn": "9784292970494",
    "title": "Espejos de el Horizonte 5898",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Pérez",
      "David González"
    ],
    "price": 24.33,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784292970494-L.jpg"
  },
  {
    "id": 1733,
    "isbn": "9788493067823",
    "title": "Rastros en la Memoria 3802",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Rodríguez",
      "Michael Taylor"
    ],
    "price": 59.56,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9788493067823-L.jpg"
  },
  {
    "id": 1734,
    "isbn": "9785335630788",
    "title": "El Misterio de el Desierto 5372",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Brown",
      "Sofía Thomas"
    ],
    "price": 19.72,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785335630788-L.jpg"
  },
  {
    "id": 1735,
    "isbn": "9789162457174",
    "title": "El Secreto de la Ciudad Perdida 9128",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Johnson",
      "Patricia Rodríguez"
    ],
    "price": 61.91,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789162457174-L.jpg"
  },
  {
    "id": 1736,
    "isbn": "9780435939762",
    "title": "El Guardián de la Memoria 1144",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel Hernández",
      "Sofía Smith"
    ],
    "price": 32.47,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9780435939762-L.jpg"
  },
  {
    "id": 1737,
    "isbn": "9786543467951",
    "title": "El Legado de los Olvidados 7265",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Miller"
    ],
    "price": 39.57,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786543467951-L.jpg"
  },
  {
    "id": 1738,
    "isbn": "978768889806",
    "title": "El Camino hacia las Estrellas 8363",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Brown"
    ],
    "price": 34.55,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978768889806-L.jpg"
  },
  {
    "id": 1739,
    "isbn": "9782761179478",
    "title": "El Misterio de la Verdad 7821",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Martínez",
      "Gabriel Brown"
    ],
    "price": 58.1,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782761179478-L.jpg"
  },
  {
    "id": 1740,
    "isbn": "9781118651827",
    "title": "El Guardián de la Ciudad Perdida 2348",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Fernando Williams",
      "Fernando Davis"
    ],
    "price": 8.61,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781118651827-L.jpg"
  },
  {
    "id": 1741,
    "isbn": "9787770291883",
    "title": "El Secreto de la Eternidad 9566",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Miller",
      "John Wilson"
    ],
    "price": 72.52,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787770291883-L.jpg"
  },
  {
    "id": 1742,
    "isbn": "978656267873",
    "title": "Bajo el Cielo de los Olvidados 5208",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Gabriel Taylor",
      "Michael García"
    ],
    "price": 85.72,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/978656267873-L.jpg"
  },
  {
    "id": 1743,
    "isbn": "9783903280427",
    "title": "Las Luces de la Ciudad Perdida 2641",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Smith",
      "Linda Smith"
    ],
    "price": 54.95,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783903280427-L.jpg"
  },
  {
    "id": 1744,
    "isbn": "9786992762638",
    "title": "El Misterio de el Desierto 583",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "John López"
    ],
    "price": 98.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786992762638-L.jpg"
  },
  {
    "id": 1745,
    "isbn": "9789249014078",
    "title": "Espejos de la Esperanza 3352",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Johnson",
      "Patricia Davis"
    ],
    "price": 40.4,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789249014078-L.jpg"
  },
  {
    "id": 1746,
    "isbn": "9789410610870",
    "title": "El Secreto de la Memoria 2767",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Brown"
    ],
    "price": 10.1,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789410610870-L.jpg"
  },
  {
    "id": 1747,
    "isbn": "9787995724494",
    "title": "El Legado de las Estrellas 4785",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo Sánchez"
    ],
    "price": 115.4,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787995724494-L.jpg"
  },
  {
    "id": 1748,
    "isbn": "9785992142044",
    "title": "El Legado de el Viento 4186",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Davis",
      "Andrés Williams"
    ],
    "price": 67.66,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785992142044-L.jpg"
  },
  {
    "id": 1749,
    "isbn": "9780308818507",
    "title": "Lágrimas de la Travesía 6876",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert Moore",
      "Mary Brown"
    ],
    "price": 100.21,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780308818507-L.jpg"
  },
  {
    "id": 1750,
    "isbn": "9787703928930",
    "title": "Vientos de el Horizonte 6114",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Wilson",
      "Patricia Davis"
    ],
    "price": 100.2,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9787703928930-L.jpg"
  },
  {
    "id": 1751,
    "isbn": "9789151048376",
    "title": "Rastros en la Esperanza 4136",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Davis",
      "John Rodríguez"
    ],
    "price": 102.16,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789151048376-L.jpg"
  },
  {
    "id": 1752,
    "isbn": "978053029580",
    "title": "Fragmentos de las Estrellas 5680",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Jones",
      "Fernando Miller"
    ],
    "price": 75.52,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978053029580-L.jpg"
  },
  {
    "id": 1753,
    "isbn": "9783987252099",
    "title": "Rastros en la Eternidad 268",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Valeria García",
      "David Smith"
    ],
    "price": 28.37,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783987252099-L.jpg"
  },
  {
    "id": 1754,
    "isbn": "9786720537583",
    "title": "Espejos de la Justicia 420",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John Davis"
    ],
    "price": 43.23,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786720537583-L.jpg"
  },
  {
    "id": 1755,
    "isbn": "9784419540876",
    "title": "Las Luces de los Olvidados 2005",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Andrés Johnson",
      "Elizabeth Hernández"
    ],
    "price": 23.27,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784419540876-L.jpg"
  },
  {
    "id": 1756,
    "isbn": "9784386714980",
    "title": "El Camino hacia el Viento 9474",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary Hernández",
      "Carla Thomas"
    ],
    "price": 52.42,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784386714980-L.jpg"
  },
  {
    "id": 1757,
    "isbn": "9784298618543",
    "title": "La Búsqueda de los Olvidados 7899",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Hernández"
    ],
    "price": 106.86,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784298618543-L.jpg"
  },
  {
    "id": 1758,
    "isbn": "9782956189220",
    "title": "El Canto de la Luna Roja 338",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel Davis",
      "Jorge Davis"
    ],
    "price": 17.97,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782956189220-L.jpg"
  },
  {
    "id": 1759,
    "isbn": "9784312043207",
    "title": "Crónicas de la Eternidad 4634",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Williams",
      "Ricardo Pérez"
    ],
    "price": 52.78,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784312043207-L.jpg"
  },
  {
    "id": 1760,
    "isbn": "9780580294150",
    "title": "El Renacer de la Montaña 5283",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Wilson"
    ],
    "price": 28.29,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780580294150-L.jpg"
  },
  {
    "id": 1761,
    "isbn": "9786148628719",
    "title": "Espejos de la Luna Roja 6908",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria Thomas",
      "Linda Anderson"
    ],
    "price": 28.33,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786148628719-L.jpg"
  },
  {
    "id": 1762,
    "isbn": "9783385437623",
    "title": "La Sombra de la Esperanza 5710",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Williams"
    ],
    "price": 48.8,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783385437623-L.jpg"
  },
  {
    "id": 1763,
    "isbn": "9780115892981",
    "title": "El Legado de la Eternidad 5385",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elizabeth Rodríguez",
      "Carla Davis"
    ],
    "price": 112.77,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780115892981-L.jpg"
  },
  {
    "id": 1764,
    "isbn": "9789965347009",
    "title": "Rastros en la Memoria 4086",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Jones",
      "David Thomas"
    ],
    "price": 31.77,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789965347009-L.jpg"
  },
  {
    "id": 1765,
    "isbn": "9784190953377",
    "title": "Lágrimas de el Viento 9979",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John González"
    ],
    "price": 48.37,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784190953377-L.jpg"
  },
  {
    "id": 1766,
    "isbn": "9786479598606",
    "title": "El Secreto de el Desierto 1935",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Martínez"
    ],
    "price": 36.86,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786479598606-L.jpg"
  },
  {
    "id": 1767,
    "isbn": "9781817532212",
    "title": "El Secreto de la Sabiduría 9089",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Moore"
    ],
    "price": 93.78,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781817532212-L.jpg"
  },
  {
    "id": 1768,
    "isbn": "9788956030951",
    "title": "El Secreto de la Montaña 9204",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "David Rodríguez",
      "Elena López"
    ],
    "price": 99.55,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788956030951-L.jpg"
  },
  {
    "id": 1769,
    "isbn": "9788539427093",
    "title": "La Sombra de la Montaña 7198",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel Martínez"
    ],
    "price": 28.62,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788539427093-L.jpg"
  },
  {
    "id": 1770,
    "isbn": "9788542450804",
    "title": "El Guardián de el Horizonte 6231",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert López"
    ],
    "price": 19.4,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788542450804-L.jpg"
  },
  {
    "id": 1771,
    "isbn": "9785530873911",
    "title": "La Sombra de el Destino 6929",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Anderson",
      "Mary Sánchez"
    ],
    "price": 27.65,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785530873911-L.jpg"
  },
  {
    "id": 1772,
    "isbn": "9785318984921",
    "title": "Más allá de la Travesía 2324",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Hernández",
      "Miguel Johnson"
    ],
    "price": 25.35,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785318984921-L.jpg"
  },
  {
    "id": 1773,
    "isbn": "9787809197261",
    "title": "El Canto de el Horizonte 6040",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía López"
    ],
    "price": 23.69,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787809197261-L.jpg"
  },
  {
    "id": 1774,
    "isbn": "9783655835715",
    "title": "El Renacer de los Sueños 6158",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge Pérez",
      "Robert González"
    ],
    "price": 22.63,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783655835715-L.jpg"
  },
  {
    "id": 1775,
    "isbn": "9785776748226",
    "title": "El Secreto de el Viento 415",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Pérez",
      "Gabriel Brown"
    ],
    "price": 30.92,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785776748226-L.jpg"
  },
  {
    "id": 1776,
    "isbn": "9784877584696",
    "title": "La Sombra de los Sueños 1197",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Jorge Thomas",
      "Gabriel Miller"
    ],
    "price": 70.06,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784877584696-L.jpg"
  },
  {
    "id": 1777,
    "isbn": "9789403687964",
    "title": "El Secreto de la Esperanza 9862",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 12.34,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789403687964-L.jpg"
  },
  {
    "id": 1778,
    "isbn": "9783551754103",
    "title": "Fragmentos de el Desierto 8814",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Jorge González"
    ],
    "price": 63.8,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783551754103-L.jpg"
  },
  {
    "id": 1779,
    "isbn": "9784111546886",
    "title": "El Misterio de los Sueños 5334",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria Martínez"
    ],
    "price": 51.36,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784111546886-L.jpg"
  },
  {
    "id": 1780,
    "isbn": "9785463878380",
    "title": "La Búsqueda de la Noche 534",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Fernando Thomas",
      "Elizabeth Wilson"
    ],
    "price": 65.49,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785463878380-L.jpg"
  },
  {
    "id": 1781,
    "isbn": "9785953274883",
    "title": "El Renacer de la Noche 2893",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Brown",
      "Gabriel Miller"
    ],
    "price": 89.54,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785953274883-L.jpg"
  },
  {
    "id": 1782,
    "isbn": "9788207825442",
    "title": "El Secreto de el Tiempo 46",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo Martínez"
    ],
    "price": 13.44,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788207825442-L.jpg"
  },
  {
    "id": 1783,
    "isbn": "9781486840533",
    "title": "Más allá de la Memoria 9080",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Rodríguez"
    ],
    "price": 17.19,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781486840533-L.jpg"
  },
  {
    "id": 1784,
    "isbn": "978830553172",
    "title": "Espejos de el Tiempo 4390",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Mary López"
    ],
    "price": 40.98,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978830553172-L.jpg"
  },
  {
    "id": 1785,
    "isbn": "9784586340385",
    "title": "El Guardián de la Ciudad Perdida 834",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Jorge Davis",
      "Elena Anderson"
    ],
    "price": 6.09,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784586340385-L.jpg"
  },
  {
    "id": 1786,
    "isbn": "9788513272954",
    "title": "La Sombra de la Ciudad Perdida 6466",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Miller",
      "Michael Rodríguez"
    ],
    "price": 54.7,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788513272954-L.jpg"
  },
  {
    "id": 1787,
    "isbn": "9785818460031",
    "title": "Rastros en la Verdad 7680",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elena Williams",
      "Gabriel Smith"
    ],
    "price": 43.46,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785818460031-L.jpg"
  },
  {
    "id": 1788,
    "isbn": "9782786375978",
    "title": "El Guardián de el Viento 2856",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael García",
      "Valeria Smith"
    ],
    "price": 22.27,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782786375978-L.jpg"
  },
  {
    "id": 1789,
    "isbn": "9780856162275",
    "title": "Las Luces de la Montaña 2678",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Valeria Moore",
      "Elizabeth Moore"
    ],
    "price": 79.16,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780856162275-L.jpg"
  },
  {
    "id": 1790,
    "isbn": "9783398488698",
    "title": "El Misterio de la Esperanza 5127",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda González"
    ],
    "price": 23.34,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783398488698-L.jpg"
  },
  {
    "id": 1791,
    "isbn": "978760178838",
    "title": "El Legado de la Memoria 7219",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel García"
    ],
    "price": 75.1,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978760178838-L.jpg"
  },
  {
    "id": 1792,
    "isbn": "9783870139353",
    "title": "Rastros en la Ciudad Perdida 2823",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David González"
    ],
    "price": 76.34,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783870139353-L.jpg"
  },
  {
    "id": 1793,
    "isbn": "9785508416768",
    "title": "El Misterio de el Tiempo 4948",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Sánchez"
    ],
    "price": 42.59,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785508416768-L.jpg"
  },
  {
    "id": 1794,
    "isbn": "9783491749139",
    "title": "Crónicas de la Travesía 8072",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Anderson",
      "Lucía Jones"
    ],
    "price": 24.61,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783491749139-L.jpg"
  },
  {
    "id": 1795,
    "isbn": "9781150486043",
    "title": "La Sombra de la Esperanza 641",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Williams",
      "David Davis"
    ],
    "price": 16.14,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781150486043-L.jpg"
  },
  {
    "id": 1796,
    "isbn": "9788558916738",
    "title": "Las Luces de la Ciudad Perdida 7319",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Gabriel Thomas",
      "Mary Moore"
    ],
    "price": 108.44,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788558916738-L.jpg"
  },
  {
    "id": 1797,
    "isbn": "978099786081",
    "title": "El Legado de la Luna Roja 4775",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia López",
      "Carla Rodríguez"
    ],
    "price": 46.18,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978099786081-L.jpg"
  },
  {
    "id": 1798,
    "isbn": "978440013037",
    "title": "La Sombra de los Olvidados 8805",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Brown"
    ],
    "price": 82.91,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978440013037-L.jpg"
  },
  {
    "id": 1799,
    "isbn": "9780701171889",
    "title": "El Camino hacia los Sueños 1633",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "John Thomas",
      "Carla Smith"
    ],
    "price": 81.32,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780701171889-L.jpg"
  },
  {
    "id": 1800,
    "isbn": "9786856142002",
    "title": "El Camino hacia los Sueños 5389",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "John López"
    ],
    "price": 62.03,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9786856142002-L.jpg"
  },
  {
    "id": 1801,
    "isbn": "978951754913",
    "title": "Rastros en la Ciudad Perdida 1407",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Williams",
      "Isabel Rodríguez"
    ],
    "price": 25.68,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978951754913-L.jpg"
  },
  {
    "id": 1802,
    "isbn": "9782321227175",
    "title": "El Canto de la Luna Roja 3637",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Miguel Williams"
    ],
    "price": 64.21,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782321227175-L.jpg"
  },
  {
    "id": 1803,
    "isbn": "9780146473289",
    "title": "Bajo el Cielo de el Desierto 5794",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Sofía Wilson"
    ],
    "price": 71.43,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780146473289-L.jpg"
  },
  {
    "id": 1804,
    "isbn": "9787749721212",
    "title": "Lágrimas de la Luna Roja 3631",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Martínez"
    ],
    "price": 114.55,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787749721212-L.jpg"
  },
  {
    "id": 1805,
    "isbn": "9786811910202",
    "title": "Más allá de la Eternidad 7308",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia Taylor",
      "Lucía García"
    ],
    "price": 93.73,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786811910202-L.jpg"
  },
  {
    "id": 1806,
    "isbn": "9781930839397",
    "title": "Las Luces de la Verdad 700",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Patricia Miller"
    ],
    "price": 53.89,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781930839397-L.jpg"
  },
  {
    "id": 1807,
    "isbn": "9782873847487",
    "title": "El Secreto de el Desierto 9654",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo Miller",
      "Elizabeth Rodríguez"
    ],
    "price": 58.3,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782873847487-L.jpg"
  },
  {
    "id": 1808,
    "isbn": "9787121925627",
    "title": "El Legado de la Ciudad Perdida 9167",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Sofía Taylor",
      "Mary Rodríguez"
    ],
    "price": 45.95,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787121925627-L.jpg"
  },
  {
    "id": 1809,
    "isbn": "9782850615375",
    "title": "La Búsqueda de los Olvidados 5114",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Davis"
    ],
    "price": 75.99,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782850615375-L.jpg"
  },
  {
    "id": 1810,
    "isbn": "9789999721950",
    "title": "Crónicas de la Verdad 753",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Rodríguez",
      "Valeria Pérez"
    ],
    "price": 76.58,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789999721950-L.jpg"
  },
  {
    "id": 1811,
    "isbn": "9783926089847",
    "title": "La Sombra de la Eternidad 8990",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Pérez"
    ],
    "price": 100.45,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783926089847-L.jpg"
  },
  {
    "id": 1812,
    "isbn": "9789425718790",
    "title": "El Legado de los Sueños 1644",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Mary Jones",
      "Patricia González"
    ],
    "price": 111.39,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789425718790-L.jpg"
  },
  {
    "id": 1813,
    "isbn": "9786857346102",
    "title": "El Legado de las Estrellas 1954",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David González",
      "Michael Smith"
    ],
    "price": 5.44,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786857346102-L.jpg"
  },
  {
    "id": 1814,
    "isbn": "9782957720804",
    "title": "El Renacer de la Verdad 46",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Miguel Sánchez"
    ],
    "price": 6.06,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782957720804-L.jpg"
  },
  {
    "id": 1815,
    "isbn": "9787856846440",
    "title": "Vientos de el Viento 3454",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Wilson",
      "Fernando Johnson"
    ],
    "price": 10.57,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787856846440-L.jpg"
  },
  {
    "id": 1816,
    "isbn": "9782833990925",
    "title": "Las Luces de la Memoria 7225",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Brown"
    ],
    "price": 106.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782833990925-L.jpg"
  },
  {
    "id": 1817,
    "isbn": "9783341667682",
    "title": "Rastros en la Esperanza 2775",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Linda García"
    ],
    "price": 57.92,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783341667682-L.jpg"
  },
  {
    "id": 1818,
    "isbn": "9786973571624",
    "title": "Más allá de la Justicia 1514",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 104.91,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786973571624-L.jpg"
  },
  {
    "id": 1819,
    "isbn": "9789524215091",
    "title": "Crónicas de la Esperanza 7274",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Miller",
      "Isabel Anderson"
    ],
    "price": 102.81,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789524215091-L.jpg"
  },
  {
    "id": 1820,
    "isbn": "978795477485",
    "title": "El Legado de la Justicia 9711",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Valeria Taylor",
      "Ricardo Johnson"
    ],
    "price": 56.88,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978795477485-L.jpg"
  },
  {
    "id": 1821,
    "isbn": "9785302877031",
    "title": "El Secreto de el Horizonte 2475",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Valeria Pérez"
    ],
    "price": 100.51,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785302877031-L.jpg"
  },
  {
    "id": 1822,
    "isbn": "9787540086466",
    "title": "La Búsqueda de el Horizonte 423",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Hernández",
      "Sofía Anderson"
    ],
    "price": 116.77,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787540086466-L.jpg"
  },
  {
    "id": 1823,
    "isbn": "9788285622940",
    "title": "Bajo el Cielo de la Verdad 2282",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Sánchez"
    ],
    "price": 17.44,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788285622940-L.jpg"
  },
  {
    "id": 1824,
    "isbn": "9783851048285",
    "title": "El Misterio de la Montaña 7196",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Taylor",
      "Gabriel González"
    ],
    "price": 32.94,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783851048285-L.jpg"
  },
  {
    "id": 1825,
    "isbn": "9784755243196",
    "title": "El Legado de el Desierto 9073",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Robert Miller"
    ],
    "price": 114.92,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784755243196-L.jpg"
  },
  {
    "id": 1826,
    "isbn": "9788167088604",
    "title": "Lágrimas de la Verdad 4752",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Anderson",
      "Gabriel García"
    ],
    "price": 61.92,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9788167088604-L.jpg"
  },
  {
    "id": 1827,
    "isbn": "9785553864118",
    "title": "El Secreto de la Esperanza 27",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Gabriel Smith"
    ],
    "price": 30.76,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785553864118-L.jpg"
  },
  {
    "id": 1828,
    "isbn": "9785108257006",
    "title": "El Legado de la Ciudad Perdida 7428",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Elena Thomas"
    ],
    "price": 36.86,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785108257006-L.jpg"
  },
  {
    "id": 1829,
    "isbn": "9780529188779",
    "title": "El Legado de el Horizonte 6812",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Elizabeth Williams",
      "Robert Johnson"
    ],
    "price": 88.77,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780529188779-L.jpg"
  },
  {
    "id": 1830,
    "isbn": "9785407459972",
    "title": "El Guardián de la Luna Roja 4210",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Pérez"
    ],
    "price": 61.4,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785407459972-L.jpg"
  },
  {
    "id": 1831,
    "isbn": "9786124794797",
    "title": "Lágrimas de la Justicia 8392",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Lucía Jones"
    ],
    "price": 14.4,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9786124794797-L.jpg"
  },
  {
    "id": 1832,
    "isbn": "9784232086124",
    "title": "Bajo el Cielo de la Justicia 2431",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel López",
      "Elena Brown"
    ],
    "price": 20.43,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784232086124-L.jpg"
  },
  {
    "id": 1833,
    "isbn": "9780174518082",
    "title": "Las Luces de la Eternidad 2267",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Sánchez"
    ],
    "price": 18.97,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780174518082-L.jpg"
  },
  {
    "id": 1834,
    "isbn": "978927581756",
    "title": "Las Luces de el Desierto 2986",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Carla González"
    ],
    "price": 55.92,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978927581756-L.jpg"
  },
  {
    "id": 1835,
    "isbn": "9780222216878",
    "title": "Bajo el Cielo de la Luna Roja 5480",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Jones",
      "Carla Rodríguez"
    ],
    "price": 62.91,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780222216878-L.jpg"
  },
  {
    "id": 1836,
    "isbn": "9782143822565",
    "title": "El Guardián de las Estrellas 1189",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Isabel González",
      "Michael Davis"
    ],
    "price": 74.52,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782143822565-L.jpg"
  },
  {
    "id": 1837,
    "isbn": "9788855128827",
    "title": "Más allá de la Montaña 708",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Johnson"
    ],
    "price": 14.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788855128827-L.jpg"
  },
  {
    "id": 1838,
    "isbn": "9783227127040",
    "title": "Más allá de el Horizonte 1933",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Fernando Williams"
    ],
    "price": 36.07,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783227127040-L.jpg"
  },
  {
    "id": 1839,
    "isbn": "9788939072145",
    "title": "El Legado de el Tiempo 552",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía Wilson"
    ],
    "price": 6.94,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788939072145-L.jpg"
  },
  {
    "id": 1840,
    "isbn": "9782237638737",
    "title": "Más allá de la Montaña 7520",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Mary Rodríguez",
      "Mary Moore"
    ],
    "price": 62.19,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782237638737-L.jpg"
  },
  {
    "id": 1841,
    "isbn": "9781642719475",
    "title": "El Legado de la Eternidad 120",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Jones"
    ],
    "price": 86.18,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781642719475-L.jpg"
  },
  {
    "id": 1842,
    "isbn": "978633180478",
    "title": "Rastros en la Montaña 7046",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Valeria Sánchez",
      "Carla Smith"
    ],
    "price": 32.7,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978633180478-L.jpg"
  },
  {
    "id": 1843,
    "isbn": "9781804249772",
    "title": "Más allá de la Noche 498",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Carla Taylor"
    ],
    "price": 78.97,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781804249772-L.jpg"
  },
  {
    "id": 1844,
    "isbn": "9787687319120",
    "title": "Fragmentos de el Desierto 737",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Jones"
    ],
    "price": 25.25,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787687319120-L.jpg"
  },
  {
    "id": 1845,
    "isbn": "978014886375",
    "title": "Fragmentos de los Sueños 8494",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Moore",
      "Miguel Anderson"
    ],
    "price": 34.19,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978014886375-L.jpg"
  },
  {
    "id": 1846,
    "isbn": "9785430998004",
    "title": "El Renacer de la Eternidad 8224",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Anderson"
    ],
    "price": 62.71,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785430998004-L.jpg"
  },
  {
    "id": 1847,
    "isbn": "9782323636791",
    "title": "El Misterio de la Sabiduría 8397",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés Martínez"
    ],
    "price": 31.61,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9782323636791-L.jpg"
  },
  {
    "id": 1848,
    "isbn": "9784433350161",
    "title": "El Renacer de la Montaña 6739",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Hernández",
      "Linda Davis"
    ],
    "price": 95.94,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784433350161-L.jpg"
  },
  {
    "id": 1849,
    "isbn": "9780920098394",
    "title": "Espejos de el Tiempo 9355",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Sofía González",
      "Miguel González"
    ],
    "price": 59.27,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780920098394-L.jpg"
  },
  {
    "id": 1850,
    "isbn": "9786613366597",
    "title": "Bajo el Cielo de la Verdad 6342",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary González"
    ],
    "price": 108.84,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786613366597-L.jpg"
  },
  {
    "id": 1851,
    "isbn": "9787150587483",
    "title": "El Legado de los Olvidados 3453",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Anderson",
      "David Smith"
    ],
    "price": 88.14,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787150587483-L.jpg"
  },
  {
    "id": 1852,
    "isbn": "9788643649015",
    "title": "El Renacer de el Viento 3950",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Moore",
      "Andrés Davis"
    ],
    "price": 68.79,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788643649015-L.jpg"
  },
  {
    "id": 1853,
    "isbn": "9784988091694",
    "title": "Las Voces de el Destino 4963",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Davis"
    ],
    "price": 102.5,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784988091694-L.jpg"
  },
  {
    "id": 1854,
    "isbn": "9782480514437",
    "title": "Fragmentos de los Ancestros 856",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Andrés González",
      "Elena González"
    ],
    "price": 70.34,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782480514437-L.jpg"
  },
  {
    "id": 1855,
    "isbn": "9789678534383",
    "title": "El Legado de la Ciudad Perdida 3398",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Jorge García",
      "David López"
    ],
    "price": 98.06,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789678534383-L.jpg"
  },
  {
    "id": 1856,
    "isbn": "9786872957314",
    "title": "La Búsqueda de la Memoria 6713",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Wilson",
      "Jorge Jones"
    ],
    "price": 13.35,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9786872957314-L.jpg"
  },
  {
    "id": 1857,
    "isbn": "9783346770271",
    "title": "Lágrimas de el Viento 2116",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Jones"
    ],
    "price": 73.97,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783346770271-L.jpg"
  },
  {
    "id": 1858,
    "isbn": "9781811092507",
    "title": "Fragmentos de los Ancestros 4122",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elena López",
      "Lucía Jones"
    ],
    "price": 39.64,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781811092507-L.jpg"
  },
  {
    "id": 1859,
    "isbn": "9783567621222",
    "title": "La Búsqueda de la Justicia 2543",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Brown"
    ],
    "price": 22.22,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783567621222-L.jpg"
  },
  {
    "id": 1860,
    "isbn": "9785824418255",
    "title": "El Legado de la Esperanza 3312",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Hernández"
    ],
    "price": 86.81,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9785824418255-L.jpg"
  },
  {
    "id": 1861,
    "isbn": "9780801835773",
    "title": "El Renacer de los Ancestros 2657",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Pérez"
    ],
    "price": 115.04,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780801835773-L.jpg"
  },
  {
    "id": 1862,
    "isbn": "9786946074657",
    "title": "Las Luces de la Eternidad 1154",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Davis",
      "Lucía Smith"
    ],
    "price": 116.25,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786946074657-L.jpg"
  },
  {
    "id": 1863,
    "isbn": "9789161542468",
    "title": "Las Luces de los Ancestros 5566",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Linda Taylor",
      "Elizabeth Moore"
    ],
    "price": 113.27,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789161542468-L.jpg"
  },
  {
    "id": 1864,
    "isbn": "9783563527399",
    "title": "El Renacer de el Horizonte 2387",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Robert Johnson"
    ],
    "price": 86.14,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9783563527399-L.jpg"
  },
  {
    "id": 1865,
    "isbn": "9789699227486",
    "title": "Crónicas de el Horizonte 7608",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Valeria Smith",
      "Michael Davis"
    ],
    "price": 56.77,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789699227486-L.jpg"
  },
  {
    "id": 1866,
    "isbn": "9786542162611",
    "title": "Crónicas de la Memoria 5533",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "John Smith"
    ],
    "price": 17.85,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786542162611-L.jpg"
  },
  {
    "id": 1867,
    "isbn": "9786931240197",
    "title": "Las Luces de la Ciudad Perdida 7585",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Robert Williams"
    ],
    "price": 7.05,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786931240197-L.jpg"
  },
  {
    "id": 1868,
    "isbn": "978929110729",
    "title": "El Misterio de el Horizonte 8004",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Williams"
    ],
    "price": 108.16,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/978929110729-L.jpg"
  },
  {
    "id": 1869,
    "isbn": "9783370285345",
    "title": "El Renacer de el Tiempo 7420",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo López"
    ],
    "price": 37.28,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783370285345-L.jpg"
  },
  {
    "id": 1870,
    "isbn": "9780155243835",
    "title": "Las Voces de el Tiempo 2104",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Gabriel Hernández",
      "Lucía Brown"
    ],
    "price": 37.54,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780155243835-L.jpg"
  },
  {
    "id": 1871,
    "isbn": "9787447415987",
    "title": "La Búsqueda de el Horizonte 9610",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Mary Thomas",
      "Lucía Jones"
    ],
    "price": 35.77,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9787447415987-L.jpg"
  },
  {
    "id": 1872,
    "isbn": "9782966620690",
    "title": "El Camino hacia la Memoria 399",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Mary Sánchez"
    ],
    "price": 88.18,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782966620690-L.jpg"
  },
  {
    "id": 1873,
    "isbn": "9787560526102",
    "title": "Crónicas de las Estrellas 8090",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Miguel Johnson"
    ],
    "price": 15.59,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787560526102-L.jpg"
  },
  {
    "id": 1874,
    "isbn": "9789411840276",
    "title": "El Legado de el Destino 5871",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés López",
      "Ricardo González"
    ],
    "price": 16.05,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789411840276-L.jpg"
  },
  {
    "id": 1875,
    "isbn": "9782150020503",
    "title": "Las Voces de el Horizonte 8882",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Brown"
    ],
    "price": 13.02,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782150020503-L.jpg"
  },
  {
    "id": 1876,
    "isbn": "9786218783867",
    "title": "Vientos de la Ciudad Perdida 1890",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Taylor",
      "Fernando Taylor"
    ],
    "price": 106.96,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786218783867-L.jpg"
  },
  {
    "id": 1877,
    "isbn": "978413545433",
    "title": "Las Voces de la Esperanza 1429",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Patricia Taylor"
    ],
    "price": 76.43,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978413545433-L.jpg"
  },
  {
    "id": 1878,
    "isbn": "9789939848242",
    "title": "El Canto de las Estrellas 1517",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria López"
    ],
    "price": 45.41,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789939848242-L.jpg"
  },
  {
    "id": 1879,
    "isbn": "9788222386942",
    "title": "El Eco de el Desierto 8580",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Isabel Taylor"
    ],
    "price": 68.47,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9788222386942-L.jpg"
  },
  {
    "id": 1880,
    "isbn": "9780303223856",
    "title": "Lágrimas de la Eternidad 5301",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elizabeth Miller"
    ],
    "price": 106.01,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780303223856-L.jpg"
  },
  {
    "id": 1881,
    "isbn": "9789738554535",
    "title": "Rastros en la Eternidad 1544",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Isabel Hernández",
      "Mary Miller"
    ],
    "price": 109.02,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789738554535-L.jpg"
  },
  {
    "id": 1882,
    "isbn": "978526428735",
    "title": "El Legado de los Olvidados 5917",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Moore",
      "Andrés Davis"
    ],
    "price": 15.89,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978526428735-L.jpg"
  },
  {
    "id": 1883,
    "isbn": "9788888689531",
    "title": "Espejos de la Memoria 4886",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Taylor"
    ],
    "price": 104.19,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788888689531-L.jpg"
  },
  {
    "id": 1884,
    "isbn": "9785736673216",
    "title": "Las Voces de la Ciudad Perdida 2932",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Sánchez",
      "Mary Anderson"
    ],
    "price": 101.15,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785736673216-L.jpg"
  },
  {
    "id": 1885,
    "isbn": "9789588251721",
    "title": "El Secreto de el Viento 6353",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Martínez"
    ],
    "price": 119.93,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789588251721-L.jpg"
  },
  {
    "id": 1886,
    "isbn": "9787974587737",
    "title": "El Camino hacia los Ancestros 5904",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Brown",
      "Sofía Hernández"
    ],
    "price": 50.72,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787974587737-L.jpg"
  },
  {
    "id": 1887,
    "isbn": "9782370297334",
    "title": "La Búsqueda de las Estrellas 3769",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Thomas"
    ],
    "price": 119.69,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782370297334-L.jpg"
  },
  {
    "id": 1888,
    "isbn": "9789762342511",
    "title": "La Búsqueda de la Travesía 6188",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Miguel Davis",
      "Mary Smith"
    ],
    "price": 26.78,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9789762342511-L.jpg"
  },
  {
    "id": 1889,
    "isbn": "9781370858750",
    "title": "Vientos de el Viento 3637",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Williams"
    ],
    "price": 24.98,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9781370858750-L.jpg"
  },
  {
    "id": 1890,
    "isbn": "9784101539539",
    "title": "Más allá de la Esperanza 522",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés Johnson"
    ],
    "price": 112.59,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784101539539-L.jpg"
  },
  {
    "id": 1891,
    "isbn": "9780287585988",
    "title": "La Búsqueda de la Noche 8208",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Pérez",
      "Jorge González"
    ],
    "price": 91.88,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780287585988-L.jpg"
  },
  {
    "id": 1892,
    "isbn": "9783323584495",
    "title": "Más allá de el Desierto 1445",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Thomas",
      "Michael Pérez"
    ],
    "price": 53.13,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783323584495-L.jpg"
  },
  {
    "id": 1893,
    "isbn": "9781722152154",
    "title": "El Legado de el Tiempo 7050",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Linda Johnson"
    ],
    "price": 15.39,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781722152154-L.jpg"
  },
  {
    "id": 1894,
    "isbn": "9781593958213",
    "title": "Espejos de los Sueños 4426",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Michael Hernández"
    ],
    "price": 88.41,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781593958213-L.jpg"
  },
  {
    "id": 1895,
    "isbn": "9787144570613",
    "title": "El Canto de la Eternidad 65",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Robert Thomas",
      "Michael Rodríguez"
    ],
    "price": 87.62,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787144570613-L.jpg"
  },
  {
    "id": 1896,
    "isbn": "9783472951834",
    "title": "El Canto de la Esperanza 5199",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Linda Johnson",
      "Patricia García"
    ],
    "price": 77.72,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9783472951834-L.jpg"
  },
  {
    "id": 1897,
    "isbn": "9789793136318",
    "title": "Más allá de la Memoria 3454",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "David Smith"
    ],
    "price": 117.13,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789793136318-L.jpg"
  },
  {
    "id": 1898,
    "isbn": "978289590036",
    "title": "Más allá de la Memoria 4488",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David Thomas"
    ],
    "price": 91.18,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978289590036-L.jpg"
  },
  {
    "id": 1899,
    "isbn": "9789907070750",
    "title": "El Guardián de la Justicia 6481",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia Williams",
      "Miguel Williams"
    ],
    "price": 19.18,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9789907070750-L.jpg"
  },
  {
    "id": 1900,
    "isbn": "9789194556524",
    "title": "El Camino hacia el Tiempo 4097",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Thomas",
      "Fernando Taylor"
    ],
    "price": 77.02,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9789194556524-L.jpg"
  },
  {
    "id": 1901,
    "isbn": "9785957688921",
    "title": "Lágrimas de la Noche 9772",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Anderson"
    ],
    "price": 50.47,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9785957688921-L.jpg"
  },
  {
    "id": 1902,
    "isbn": "978212327775",
    "title": "Crónicas de la Montaña 8996",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Jones"
    ],
    "price": 101.96,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978212327775-L.jpg"
  },
  {
    "id": 1903,
    "isbn": "9787502931858",
    "title": "El Secreto de la Travesía 4368",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "John Pérez"
    ],
    "price": 47.41,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787502931858-L.jpg"
  },
  {
    "id": 1904,
    "isbn": "9783682242524",
    "title": "El Guardián de la Esperanza 4638",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Jorge Miller",
      "Gabriel Brown"
    ],
    "price": 76.86,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783682242524-L.jpg"
  },
  {
    "id": 1905,
    "isbn": "9788437774947",
    "title": "El Misterio de la Memoria 7469",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Miller"
    ],
    "price": 22.27,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788437774947-L.jpg"
  },
  {
    "id": 1906,
    "isbn": "9783591629256",
    "title": "El Canto de la Travesía 2692",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Thomas"
    ],
    "price": 81.07,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783591629256-L.jpg"
  },
  {
    "id": 1907,
    "isbn": "9784292257519",
    "title": "El Renacer de la Luna Roja 9130",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "John Martínez",
      "Mary Williams"
    ],
    "price": 73.15,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9784292257519-L.jpg"
  },
  {
    "id": 1908,
    "isbn": "9785432052070",
    "title": "El Secreto de la Memoria 3857",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Miguel Taylor",
      "Patricia Williams"
    ],
    "price": 116.05,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9785432052070-L.jpg"
  },
  {
    "id": 1909,
    "isbn": "9780878666058",
    "title": "Espejos de los Olvidados 3643",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 78.8,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780878666058-L.jpg"
  },
  {
    "id": 1910,
    "isbn": "9782147026754",
    "title": "El Guardián de la Montaña 9112",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Johnson"
    ],
    "price": 33.7,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782147026754-L.jpg"
  },
  {
    "id": 1911,
    "isbn": "9780548880555",
    "title": "Fragmentos de la Travesía 5258",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Thomas"
    ],
    "price": 24.04,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9780548880555-L.jpg"
  },
  {
    "id": 1912,
    "isbn": "978532140449",
    "title": "Más allá de la Noche 3772",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Linda Williams"
    ],
    "price": 94.19,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/978532140449-L.jpg"
  },
  {
    "id": 1913,
    "isbn": "9788353676622",
    "title": "La Sombra de el Tiempo 1713",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando González"
    ],
    "price": 78.88,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9788353676622-L.jpg"
  },
  {
    "id": 1914,
    "isbn": "9789344079408",
    "title": "Más allá de los Olvidados 6931",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Lucía Rodríguez",
      "Miguel Jones"
    ],
    "price": 27.64,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789344079408-L.jpg"
  },
  {
    "id": 1915,
    "isbn": "9782514694418",
    "title": "Crónicas de la Sabiduría 1867",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Anderson"
    ],
    "price": 57.68,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782514694418-L.jpg"
  },
  {
    "id": 1916,
    "isbn": "9783148797711",
    "title": "La Sombra de los Ancestros 1848",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Carla Brown",
      "John Davis"
    ],
    "price": 14.86,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9783148797711-L.jpg"
  },
  {
    "id": 1917,
    "isbn": "9781885842381",
    "title": "Las Luces de el Viento 9616",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David Taylor"
    ],
    "price": 22.16,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781885842381-L.jpg"
  },
  {
    "id": 1918,
    "isbn": "9787311850760",
    "title": "El Camino hacia la Justicia 9746",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Ricardo Taylor",
      "Mary Williams"
    ],
    "price": 29.16,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9787311850760-L.jpg"
  },
  {
    "id": 1919,
    "isbn": "9785239867716",
    "title": "Lágrimas de el Tiempo 5654",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Sánchez"
    ],
    "price": 22.11,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9785239867716-L.jpg"
  },
  {
    "id": 1920,
    "isbn": "9786539961470",
    "title": "Bajo el Cielo de los Sueños 2940",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Mary Davis"
    ],
    "price": 22.87,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786539961470-L.jpg"
  },
  {
    "id": 1921,
    "isbn": "9784658243897",
    "title": "Lágrimas de las Estrellas 7888",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Lucía Taylor",
      "Fernando Martínez"
    ],
    "price": 42.4,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9784658243897-L.jpg"
  },
  {
    "id": 1922,
    "isbn": "9787320832023",
    "title": "La Sombra de el Desierto 4724",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Miguel González",
      "Fernando González"
    ],
    "price": 94.07,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9787320832023-L.jpg"
  },
  {
    "id": 1923,
    "isbn": "9789202422094",
    "title": "Lágrimas de la Verdad 9181",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Ricardo López",
      "Ricardo Moore"
    ],
    "price": 30.4,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9789202422094-L.jpg"
  },
  {
    "id": 1924,
    "isbn": "9787657060250",
    "title": "Vientos de la Esperanza 9920",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Andrés Taylor",
      "Elizabeth Pérez"
    ],
    "price": 46.71,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787657060250-L.jpg"
  },
  {
    "id": 1925,
    "isbn": "978311378283",
    "title": "Las Luces de la Noche 7906",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Michael Williams",
      "Elizabeth Taylor"
    ],
    "price": 45.02,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/978311378283-L.jpg"
  },
  {
    "id": 1926,
    "isbn": "9782406589266",
    "title": "Lágrimas de la Ciudad Perdida 8833",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael González"
    ],
    "price": 39.28,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9782406589266-L.jpg"
  },
  {
    "id": 1927,
    "isbn": "9782840185529",
    "title": "La Sombra de la Ciudad Perdida 5010",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Andrés Johnson",
      "Fernando Sánchez"
    ],
    "price": 28.56,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782840185529-L.jpg"
  },
  {
    "id": 1928,
    "isbn": "9788880987796",
    "title": "El Eco de la Eternidad 238",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Davis"
    ],
    "price": 71.93,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788880987796-L.jpg"
  },
  {
    "id": 1929,
    "isbn": "9789283854487",
    "title": "El Misterio de los Olvidados 3869",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Lucía Davis",
      "Robert García"
    ],
    "price": 99.07,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789283854487-L.jpg"
  },
  {
    "id": 1930,
    "isbn": "9786699493750",
    "title": "El Secreto de la Memoria 3942",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Sofía Brown",
      "Elena Williams"
    ],
    "price": 91.71,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786699493750-L.jpg"
  },
  {
    "id": 1931,
    "isbn": "9784714772873",
    "title": "Las Luces de el Destino 7700",
    "format": "e-book",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "David Anderson",
      "Valeria Smith"
    ],
    "price": 43.63,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784714772873-L.jpg"
  },
  {
    "id": 1932,
    "isbn": "9786737482234",
    "title": "Las Voces de la Ciudad Perdida 9032",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Lucía Martínez",
      "Ricardo Rodríguez"
    ],
    "price": 52.95,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786737482234-L.jpg"
  },
  {
    "id": 1933,
    "isbn": "9786157427907",
    "title": "Fragmentos de la Esperanza 1735",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Valeria Brown",
      "John Brown"
    ],
    "price": 24.02,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9786157427907-L.jpg"
  },
  {
    "id": 1934,
    "isbn": "978872775604",
    "title": "El Canto de el Horizonte 8294",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Robert García",
      "Gabriel Sánchez"
    ],
    "price": 16.52,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/978872775604-L.jpg"
  },
  {
    "id": 1935,
    "isbn": "978549295996",
    "title": "La Búsqueda de la Montaña 3467",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda López"
    ],
    "price": 14.52,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978549295996-L.jpg"
  },
  {
    "id": 1936,
    "isbn": "9780642552631",
    "title": "El Canto de los Ancestros 5682",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge García"
    ],
    "price": 7.43,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9780642552631-L.jpg"
  },
  {
    "id": 1937,
    "isbn": "9786672616633",
    "title": "La Sombra de la Eternidad 9143",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Valeria Martínez"
    ],
    "price": 39.98,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9786672616633-L.jpg"
  },
  {
    "id": 1938,
    "isbn": "9783677194500",
    "title": "Lágrimas de el Destino 8391",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo García",
      "Ricardo Anderson"
    ],
    "price": 90.91,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783677194500-L.jpg"
  },
  {
    "id": 1939,
    "isbn": "9781548220556",
    "title": "Fragmentos de el Tiempo 281",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Ricardo Wilson"
    ],
    "price": 105.37,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9781548220556-L.jpg"
  },
  {
    "id": 1940,
    "isbn": "978970530068",
    "title": "La Sombra de los Olvidados 6829",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Fernando Pérez",
      "Elena Davis"
    ],
    "price": 56.91,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978970530068-L.jpg"
  },
  {
    "id": 1941,
    "isbn": "9782296970960",
    "title": "Rastros en la Luna Roja 5114",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Fernando Martínez"
    ],
    "price": 29.36,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9782296970960-L.jpg"
  },
  {
    "id": 1942,
    "isbn": "9784860240981",
    "title": "El Camino hacia la Justicia 1552",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Patricia Williams",
      "Linda Pérez"
    ],
    "price": 67.41,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9784860240981-L.jpg"
  },
  {
    "id": 1943,
    "isbn": "9786341563398",
    "title": "Fragmentos de los Sueños 291",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Andrés López",
      "Jorge Johnson"
    ],
    "price": 118.22,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786341563398-L.jpg"
  },
  {
    "id": 1944,
    "isbn": "9787285291095",
    "title": "El Camino hacia la Travesía 5281",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Gabriel García"
    ],
    "price": 69.92,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9787285291095-L.jpg"
  },
  {
    "id": 1945,
    "isbn": "9789765651160",
    "title": "Crónicas de la Ciudad Perdida 6384",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elizabeth González",
      "Ricardo Davis"
    ],
    "price": 104.54,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789765651160-L.jpg"
  },
  {
    "id": 1946,
    "isbn": "9789125085505",
    "title": "Crónicas de la Verdad 4353",
    "format": "e-book",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Elena Johnson",
      "Andrés Pérez"
    ],
    "price": 76.34,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9789125085505-L.jpg"
  },
  {
    "id": 1947,
    "isbn": "9789437391363",
    "title": "Vientos de el Viento 713",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Andrés García",
      "Isabel López"
    ],
    "price": 33.29,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789437391363-L.jpg"
  },
  {
    "id": 1948,
    "isbn": "9784596539670",
    "title": "Las Luces de el Tiempo 7007",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Anderson"
    ],
    "price": 37.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784596539670-L.jpg"
  },
  {
    "id": 1949,
    "isbn": "9782401464193",
    "title": "Espejos de la Verdad 8059",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Gabriel Davis",
      "Robert Miller"
    ],
    "price": 57.45,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782401464193-L.jpg"
  },
  {
    "id": 1950,
    "isbn": "9781300718321",
    "title": "Crónicas de la Ciudad Perdida 268",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elena Brown",
      "Robert Miller"
    ],
    "price": 76.19,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781300718321-L.jpg"
  },
  {
    "id": 1951,
    "isbn": "9789280089578",
    "title": "Rastros en el Viento 8749",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth Martínez"
    ],
    "price": 68.14,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9789280089578-L.jpg"
  },
  {
    "id": 1952,
    "isbn": "9780557033560",
    "title": "Más allá de la Montaña 7246",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "David Jones"
    ],
    "price": 93.04,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9780557033560-L.jpg"
  },
  {
    "id": 1953,
    "isbn": "9788843842544",
    "title": "El Renacer de la Noche 8678",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Miller"
    ],
    "price": 118.17,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788843842544-L.jpg"
  },
  {
    "id": 1954,
    "isbn": "978761468109",
    "title": "Fragmentos de la Justicia 6067",
    "format": "paperback",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Patricia García"
    ],
    "price": 96.73,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/978761468109-L.jpg"
  },
  {
    "id": 1955,
    "isbn": "9784711280920",
    "title": "El Guardián de la Sabiduría 3755",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Elizabeth Jones",
      "Miguel Rodríguez"
    ],
    "price": 97.41,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784711280920-L.jpg"
  },
  {
    "id": 1956,
    "isbn": "9787175147716",
    "title": "El Camino hacia la Esperanza 7969",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Robert Hernández",
      "Jorge García"
    ],
    "price": 73.62,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9787175147716-L.jpg"
  },
  {
    "id": 1957,
    "isbn": "9785236775489",
    "title": "Más allá de el Desierto 7032",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Martínez"
    ],
    "price": 85.8,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9785236775489-L.jpg"
  },
  {
    "id": 1958,
    "isbn": "9783918677816",
    "title": "Crónicas de el Horizonte 2256",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Miguel Johnson",
      "Elena Rodríguez"
    ],
    "price": 97.03,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783918677816-L.jpg"
  },
  {
    "id": 1959,
    "isbn": "9786685712964",
    "title": "Las Voces de la Montaña 1932",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Isabel González"
    ],
    "price": 6.56,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9786685712964-L.jpg"
  },
  {
    "id": 1960,
    "isbn": "9788682836056",
    "title": "Las Voces de los Ancestros 8033",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Linda Taylor",
      "David Thomas"
    ],
    "price": 21.46,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9788682836056-L.jpg"
  },
  {
    "id": 1961,
    "isbn": "9781387489206",
    "title": "Más allá de la Verdad 8780",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth García"
    ],
    "price": 93.03,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781387489206-L.jpg"
  },
  {
    "id": 1962,
    "isbn": "9780942563177",
    "title": "El Misterio de los Sueños 7832",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Mary Smith"
    ],
    "price": 12.57,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9780942563177-L.jpg"
  },
  {
    "id": 1963,
    "isbn": "9788717740389",
    "title": "Crónicas de la Luna Roja 1399",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Thomas"
    ],
    "price": 66.56,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9788717740389-L.jpg"
  },
  {
    "id": 1964,
    "isbn": "9785898972028",
    "title": "Fragmentos de el Destino 5093",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Isabel Sánchez"
    ],
    "price": 58.49,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785898972028-L.jpg"
  },
  {
    "id": 1965,
    "isbn": "9783888394546",
    "title": "Las Luces de el Viento 8626",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Michael Pérez",
      "Linda Pérez"
    ],
    "price": 69.02,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783888394546-L.jpg"
  },
  {
    "id": 1966,
    "isbn": "9789126610799",
    "title": "La Sombra de el Tiempo 1607",
    "format": "paperback",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Mary Anderson"
    ],
    "price": 100.12,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789126610799-L.jpg"
  },
  {
    "id": 1967,
    "isbn": "9782324248832",
    "title": "La Sombra de la Montaña 8060",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Andrés Anderson"
    ],
    "price": 32.5,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9782324248832-L.jpg"
  },
  {
    "id": 1968,
    "isbn": "9787296598923",
    "title": "Las Luces de los Olvidados 9472",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Elizabeth Davis"
    ],
    "price": 87.11,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9787296598923-L.jpg"
  },
  {
    "id": 1969,
    "isbn": "9783420450426",
    "title": "El Secreto de el Horizonte 9671",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia Moore",
      "David Moore"
    ],
    "price": 117.55,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783420450426-L.jpg"
  },
  {
    "id": 1970,
    "isbn": "9784563926847",
    "title": "Bajo el Cielo de la Noche 1444",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth González"
    ],
    "price": 13.96,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784563926847-L.jpg"
  },
  {
    "id": 1971,
    "isbn": "9788304241565",
    "title": "Fragmentos de el Tiempo 3520",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Rodríguez"
    ],
    "price": 82.26,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9788304241565-L.jpg"
  },
  {
    "id": 1972,
    "isbn": "9788101789802",
    "title": "El Misterio de los Olvidados 1627",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Patricia Brown"
    ],
    "price": 17.74,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9788101789802-L.jpg"
  },
  {
    "id": 1973,
    "isbn": "9784584241684",
    "title": "Más allá de el Tiempo 2356",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Valeria Hernández"
    ],
    "price": 63.35,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9784584241684-L.jpg"
  },
  {
    "id": 1974,
    "isbn": "978932049944",
    "title": "El Legado de los Ancestros 5081",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Carla García"
    ],
    "price": 59.36,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978932049944-L.jpg"
  },
  {
    "id": 1975,
    "isbn": "9785813539855",
    "title": "La Búsqueda de los Sueños 9804",
    "format": "e-book",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Miguel González",
      "Gabriel Wilson"
    ],
    "price": 44.2,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785813539855-L.jpg"
  },
  {
    "id": 1976,
    "isbn": "9783471044032",
    "title": "Crónicas de el Desierto 323",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Davis",
      "Ricardo Moore"
    ],
    "price": 107.02,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783471044032-L.jpg"
  },
  {
    "id": 1977,
    "isbn": "9782298655032",
    "title": "Las Voces de los Olvidados 8167",
    "format": "paperback",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "David González",
      "Linda Martínez"
    ],
    "price": 107.52,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9782298655032-L.jpg"
  },
  {
    "id": 1978,
    "isbn": "9782288134547",
    "title": "Las Voces de la Montaña 4600",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía Thomas"
    ],
    "price": 88.1,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9782288134547-L.jpg"
  },
  {
    "id": 1979,
    "isbn": "9787793146030",
    "title": "El Canto de la Eternidad 3110",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel López"
    ],
    "price": 35.84,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787793146030-L.jpg"
  },
  {
    "id": 1980,
    "isbn": "9781809888662",
    "title": "Bajo el Cielo de la Noche 4462",
    "format": "hardcover",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Moore",
      "Mary Jones"
    ],
    "price": 34.64,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781809888662-L.jpg"
  },
  {
    "id": 1981,
    "isbn": "9782417069498",
    "title": "Las Luces de los Olvidados 1141",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Moore"
    ],
    "price": 74.65,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782417069498-L.jpg"
  },
  {
    "id": 1982,
    "isbn": "9781647281113",
    "title": "Vientos de el Destino 3805",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Isabel López",
      "Elizabeth López"
    ],
    "price": 35.52,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781647281113-L.jpg"
  },
  {
    "id": 1983,
    "isbn": "9781952439681",
    "title": "Lágrimas de los Sueños 2742",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Davis"
    ],
    "price": 7.33,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781952439681-L.jpg"
  },
  {
    "id": 1984,
    "isbn": "9789395410731",
    "title": "El Guardián de la Ciudad Perdida 2694",
    "format": "hardcover",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Carla Williams",
      "Carla López"
    ],
    "price": 92.35,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9789395410731-L.jpg"
  },
  {
    "id": 1985,
    "isbn": "9783657791606",
    "title": "Las Voces de la Esperanza 87",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Gabriel Miller"
    ],
    "price": 97.73,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783657791606-L.jpg"
  },
  {
    "id": 1986,
    "isbn": "9783772676680",
    "title": "Las Luces de el Desierto 7115",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Sofía González",
      "Andrés Johnson"
    ],
    "price": 8.67,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783772676680-L.jpg"
  },
  {
    "id": 1987,
    "isbn": "9786211699615",
    "title": "Las Luces de la Travesía 4234",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Robert González"
    ],
    "price": 57.26,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786211699615-L.jpg"
  },
  {
    "id": 1988,
    "isbn": "9782443143551",
    "title": "El Canto de los Sueños 7192",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Elizabeth Pérez"
    ],
    "price": 113.38,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9782443143551-L.jpg"
  },
  {
    "id": 1989,
    "isbn": "9785212196444",
    "title": "Vientos de los Ancestros 3956",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "John García",
      "Fernando López"
    ],
    "price": 113.02,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9785212196444-L.jpg"
  },
  {
    "id": 1990,
    "isbn": "9783129215746",
    "title": "El Eco de la Noche 8560",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Patricia Pérez",
      "Lucía Martínez"
    ],
    "price": 7.63,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783129215746-L.jpg"
  },
  {
    "id": 1991,
    "isbn": "9786295262903",
    "title": "El Eco de la Memoria 6031",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando Pérez",
      "Andrés Thomas"
    ],
    "price": 18.85,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9786295262903-L.jpg"
  },
  {
    "id": 1992,
    "isbn": "9782740259054",
    "title": "Crónicas de los Olvidados 757",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Elizabeth Williams"
    ],
    "price": 44.05,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9782740259054-L.jpg"
  },
  {
    "id": 1993,
    "isbn": "9788108345414",
    "title": "El Secreto de el Horizonte 7040",
    "format": "paperback",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Michael Thomas"
    ],
    "price": 90.6,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9788108345414-L.jpg"
  },
  {
    "id": 1994,
    "isbn": "9784136762957",
    "title": "Vientos de la Montaña 392",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Gabriel Taylor",
      "Fernando Davis"
    ],
    "price": 49.2,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9784136762957-L.jpg"
  },
  {
    "id": 1995,
    "isbn": "9785818345147",
    "title": "La Búsqueda de el Horizonte 4351",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "David López"
    ],
    "price": 111.66,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785818345147-L.jpg"
  },
  {
    "id": 1996,
    "isbn": "9783623739953",
    "title": "El Canto de la Luna Roja 5418",
    "format": "hardcover",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía Thomas"
    ],
    "price": 21.6,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9783623739953-L.jpg"
  },
  {
    "id": 1997,
    "isbn": "9789327828764",
    "title": "El Secreto de la Ciudad Perdida 2321",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Ricardo López"
    ],
    "price": 18.56,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9789327828764-L.jpg"
  },
  {
    "id": 1998,
    "isbn": "9781685949587",
    "title": "Rastros en la Ciudad Perdida 8111",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Lucía Wilson"
    ],
    "price": 66.47,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9781685949587-L.jpg"
  },
  {
    "id": 1999,
    "isbn": "9783200248748",
    "title": "Bajo el Cielo de el Viento 8717",
    "format": "paperback",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Smith"
    ],
    "price": 102.38,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9783200248748-L.jpg"
  },
  {
    "id": 2000,
    "isbn": "9783427530237",
    "title": "El Camino hacia el Viento 4379",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Patricia López",
      "Elena García"
    ],
    "price": 34.75,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9783427530237-L.jpg"
  },
  {
    "id": 2001,
    "isbn": "9781732550025",
    "title": "Las Luces de la Luna Roja 6638",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Robert Pérez",
      "Patricia Williams"
    ],
    "price": 71.65,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9781732550025-L.jpg"
  },
  {
    "id": 2002,
    "isbn": "9785713289362",
    "title": "Rastros en la Memoria 401",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Thomas",
      "Fernando Davis"
    ],
    "price": 33.64,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9785713289362-L.jpg"
  },
  {
    "id": 2003,
    "isbn": "9784802287104",
    "title": "Fragmentos de la Justicia 262",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena García",
      "Sofía Miller"
    ],
    "price": 48.8,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9784802287104-L.jpg"
  },
  {
    "id": 2004,
    "isbn": "9785884575363",
    "title": "Lágrimas de la Esperanza 2048",
    "format": "e-book",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Sánchez",
      "Miguel Smith"
    ],
    "price": 65.36,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9785884575363-L.jpg"
  },
  {
    "id": 2005,
    "isbn": "9783191710439",
    "title": "El Renacer de la Ciudad Perdida 6888",
    "format": "paperback",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Mary Jones"
    ],
    "price": 108.66,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783191710439-L.jpg"
  },
  {
    "id": 2006,
    "isbn": "9783759321169",
    "title": "Lágrimas de la Luna Roja 1627",
    "format": "hardcover",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Mary Pérez",
      "Gabriel Taylor"
    ],
    "price": 6.06,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9783759321169-L.jpg"
  },
  {
    "id": 2007,
    "isbn": "9784973654309",
    "title": "La Búsqueda de los Ancestros 68",
    "format": "hardcover",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Martínez"
    ],
    "price": 22.79,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9784973654309-L.jpg"
  },
  {
    "id": 2008,
    "isbn": "9784899248903",
    "title": "El Misterio de el Horizonte 2735",
    "format": "hardcover",
    "shortDescription": "Un viaje fantástico a través de reinos inexplorados.",
    "authors": [
      "Valeria Wilson"
    ],
    "price": 79.36,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784899248903-L.jpg"
  },
  {
    "id": 2009,
    "isbn": "9781227454807",
    "title": "Rastros en los Olvidados 5015",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Carla Wilson"
    ],
    "price": 66.08,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781227454807-L.jpg"
  },
  {
    "id": 2010,
    "isbn": "9780385391993",
    "title": "Crónicas de el Destino 7650",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Patricia García",
      "Carla Sánchez"
    ],
    "price": 56.82,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9780385391993-L.jpg"
  },
  {
    "id": 2011,
    "isbn": "9784606210209",
    "title": "El Renacer de el Tiempo 2704",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Fernando Sánchez"
    ],
    "price": 9.03,
    "publisher": "O'Reilly Media",
    "cover": "https://covers.openlibrary.org/b/isbn/9784606210209-L.jpg"
  },
  {
    "id": 2012,
    "isbn": "9789323679810",
    "title": "El Guardián de los Olvidados 996",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "David Taylor",
      "Sofía Hernández"
    ],
    "price": 72.83,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9789323679810-L.jpg"
  },
  {
    "id": 2013,
    "isbn": "9786759592713",
    "title": "Las Voces de la Eternidad 5264",
    "format": "hardcover",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "John García",
      "Elena López"
    ],
    "price": 80.26,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9786759592713-L.jpg"
  },
  {
    "id": 2014,
    "isbn": "9781407219332",
    "title": "La Sombra de la Verdad 8661",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Patricia Rodríguez",
      "Gabriel Pérez"
    ],
    "price": 31.9,
    "publisher": "Penguin Random House",
    "cover": "https://covers.openlibrary.org/b/isbn/9781407219332-L.jpg"
  },
  {
    "id": 2015,
    "isbn": "9787581486119",
    "title": "Fragmentos de la Noche 5149",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Michael Anderson"
    ],
    "price": 84.05,
    "publisher": "HarperCollins",
    "cover": "https://covers.openlibrary.org/b/isbn/9787581486119-L.jpg"
  },
  {
    "id": 2016,
    "isbn": "9781981662289",
    "title": "Bajo el Cielo de los Ancestros 9859",
    "format": "e-book",
    "shortDescription": "Una investigación fascinante sobre los secretos del universo.",
    "authors": [
      "Linda Thomas",
      "Gabriel Martínez"
    ],
    "price": 32.17,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781981662289-L.jpg"
  },
  {
    "id": 2017,
    "isbn": "978459198251",
    "title": "Las Luces de la Verdad 5116",
    "format": "paperback",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Michael Thomas"
    ],
    "price": 63.7,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978459198251-L.jpg"
  },
  {
    "id": 2018,
    "isbn": "9781821660895",
    "title": "Vientos de la Memoria 6453",
    "format": "e-book",
    "shortDescription": "Una épica aventura sobre el descubrimiento personal.",
    "authors": [
      "Elena Hernández"
    ],
    "price": 25.12,
    "publisher": "Macmillan Publishers",
    "cover": "https://covers.openlibrary.org/b/isbn/9781821660895-L.jpg"
  },
  {
    "id": 2019,
    "isbn": "978381722131",
    "title": "El Renacer de la Montaña 9610",
    "format": "e-book",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Ricardo Pérez",
      "David Thomas"
    ],
    "price": 40.99,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/978381722131-L.jpg"
  },
  {
    "id": 2020,
    "isbn": "9783931922399",
    "title": "El Guardián de los Olvidados 3027",
    "format": "paperback",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Jorge Johnson",
      "Valeria Martínez"
    ],
    "price": 24.04,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783931922399-L.jpg"
  },
  {
    "id": 2021,
    "isbn": "9781170317723",
    "title": "Espejos de los Olvidados 2388",
    "format": "hardcover",
    "shortDescription": "Una guía completa para entender los fundamentos de la materia.",
    "authors": [
      "Jorge González",
      "Andrés López"
    ],
    "price": 92.58,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9781170317723-L.jpg"
  },
  {
    "id": 2022,
    "isbn": "9780684032757",
    "title": "El Misterio de las Estrellas 6827",
    "format": "hardcover",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Sofía Johnson"
    ],
    "price": 46.81,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/9780684032757-L.jpg"
  },
  {
    "id": 2023,
    "isbn": "9780259593478",
    "title": "El Canto de los Ancestros 8970",
    "format": "paperback",
    "shortDescription": "Relatos cortos que exploran la condición humana.",
    "authors": [
      "Lucía Smith"
    ],
    "price": 53.98,
    "publisher": "Simon & Schuster",
    "cover": "https://covers.openlibrary.org/b/isbn/9780259593478-L.jpg"
  },
  {
    "id": 2024,
    "isbn": "978867910337",
    "title": "El Eco de las Estrellas 5442",
    "format": "hardcover",
    "shortDescription": "Un análisis profundo sobre la evolución de la tecnología moderna.",
    "authors": [
      "Linda Johnson",
      "Miguel Taylor"
    ],
    "price": 64.05,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/978867910337-L.jpg"
  },
  {
    "id": 2025,
    "isbn": "9781343938137",
    "title": "Lágrimas de la Ciudad Perdida 6917",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Andrés López"
    ],
    "price": 32.27,
    "publisher": "Cambridge University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9781343938137-L.jpg"
  },
  {
    "id": 2026,
    "isbn": "9785400566998",
    "title": "Lágrimas de la Travesía 4398",
    "format": "paperback",
    "shortDescription": "La biografía definitiva de uno de los líderes más influyentes.",
    "authors": [
      "Robert Miller",
      "Sofía García"
    ],
    "price": 56.14,
    "publisher": "Hachette Livre",
    "cover": "https://covers.openlibrary.org/b/isbn/9785400566998-L.jpg"
  },
  {
    "id": 2027,
    "isbn": "9783725052820",
    "title": "El Legado de las Estrellas 8405",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Lucía Taylor"
    ],
    "price": 84.78,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9783725052820-L.jpg"
  },
  {
    "id": 2028,
    "isbn": "9782853850407",
    "title": "Rastros en el Desierto 2378",
    "format": "e-book",
    "shortDescription": "Consejos prácticos para mejorar la productividad diaria.",
    "authors": [
      "Sofía López"
    ],
    "price": 81.02,
    "publisher": "Oxford University Press",
    "cover": "https://covers.openlibrary.org/b/isbn/9782853850407-L.jpg"
  },
  {
    "id": 2029,
    "isbn": "9783232285469",
    "title": "Lágrimas de los Sueños 6082",
    "format": "e-book",
    "shortDescription": "Un thriller psicológico que te mantendrá en vilo.",
    "authors": [
      "Fernando García",
      "David Pérez"
    ],
    "price": 41.08,
    "publisher": "Springer",
    "cover": "https://covers.openlibrary.org/b/isbn/9783232285469-L.jpg"
  },
  {
    "id": 2030,
    "isbn": "978317248850",
    "title": "Las Voces de la Ciudad Perdida 4816",
    "format": "e-book",
    "shortDescription": "Una historia de amor prohibido en tiempos de guerra.",
    "authors": [
      "Ricardo Davis"
    ],
    "price": 58.93,
    "publisher": "Pearson",
    "cover": "https://covers.openlibrary.org/b/isbn/978317248850-L.jpg"
  }
   
];
