export const mockBookDetails = {
    1: {
        id: 1,
        isbn: "978-0-13-235088-4",
        title: "Clean Code",
        subtitle: "A Handbook of Agile Software Craftsmanship",
        description: "Libro sobre buenas prácticas de programación, diseño limpio y mantenimiento de software.",
        shortDescription: "Guía práctica para escribir código limpio y mantenible.",
        authors: [
            {
                id: "author_001",
                name: "Robert C. Martin",
                biography: "Autor y consultor especializado en desarrollo de software."
            }
        ],
        publisher: {
            id: "publisher_001",
            name: "Prentice Hall"
        },
        publicationDate: "2008-08-01",
        edition: "1st Edition",
        language: "English",
        format: "paperback",
        pages: 464,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_002", name: "Software Engineering" }
        ],
        price: 45.99,
        stock: 14,
        images: {
            cover: "https://example.com/images/books/clean-code-cover.jpg",
            gallery: [
                "https://example.com/images/books/clean-code-back.jpg",
                "https://example.com/images/books/clean-code-inside.jpg"
            ]
        }
    },

    2: {
        id: 2,
        isbn: "978-0-201-61622-4",
        title: "The Pragmatic Programmer",
        subtitle: "Your Journey to Mastery",
        description: "Libro orientado al desarrollo profesional de programadores mediante buenas prácticas, pensamiento crítico y mejora continua.",
        shortDescription: "Consejos prácticos para programadores profesionales.",
        authors: [
            {
                id: "author_002",
                name: "Andrew Hunt",
                biography: "Programador y autor especializado en prácticas pragmáticas de desarrollo."
            },
            {
                id: "author_003",
                name: "David Thomas",
                biography: "Autor y consultor en ingeniería de software."
            }
        ],
        publisher: {
            id: "publisher_002",
            name: "Addison-Wesley"
        },
        publicationDate: "2019-09-13",
        edition: "20th Anniversary Edition",
        language: "English",
        format: "paperback",
        pages: 352,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_003", name: "Professional Development" }
        ],
        price: 49.99,
        stock: 3,
        images: {
            cover: "https://example.com/images/books/the-pragmatic-programmer-cover.jpg",
            gallery: [
                "https://example.com/images/books/the-pragmatic-programmer-back.jpg",
                "https://example.com/images/books/the-pragmatic-programmer-inside.jpg"
            ]
        }
    },

    3: {
        id: 3,
        isbn: "978-0-201-63361-0",
        title: "Design Patterns",
        subtitle: "Elements of Reusable Object-Oriented Software",
        description: "Obra clásica sobre patrones de diseño orientados a objetos y soluciones reutilizables para problemas comunes de software.",
        shortDescription: "Referencia esencial sobre patrones de diseño.",
        authors: [
            {
                id: "author_004",
                name: "Erich Gamma",
                biography: "Ingeniero de software reconocido por sus aportes a los patrones de diseño."
            },
            {
                id: "author_005",
                name: "Richard Helm",
                biography: "Especialista en diseño de software orientado a objetos."
            },
            {
                id: "author_006",
                name: "Ralph Johnson",
                biography: "Académico e investigador en programación orientada a objetos."
            },
            {
                id: "author_007",
                name: "John Vlissides",
                biography: "Investigador y autor especializado en arquitectura de software."
            }
        ],
        publisher: {
            id: "publisher_002",
            name: "Addison-Wesley"
        },
        publicationDate: "1994-10-31",
        edition: "1st Edition",
        language: "English",
        format: "hardcover",
        pages: 395,
        categories: [
            { id: "cat_002", name: "Software Engineering" },
            { id: "cat_004", name: "Software Architecture" }
        ],
        price: 54.99,
        stock: 10,
        images: {
            cover: "https://example.com/images/books/design-patterns-cover.jpg",
            gallery: [
                "https://example.com/images/books/design-patterns-back.jpg",
                "https://example.com/images/books/design-patterns-inside.jpg"
            ]
        }
    },

    4: {
        id: 4,
        isbn: "978-0-321-12742-6",
        title: "Domain-Driven Design",
        subtitle: "Tackling Complexity in the Heart of Software",
        description: "Libro sobre diseño dirigido por el dominio, modelado estratégico y control de complejidad en sistemas empresariales.",
        shortDescription: "Guía sobre modelado de dominios complejos.",
        authors: [
            {
                id: "author_008",
                name: "Eric Evans",
                biography: "Consultor y autor especializado en diseño dirigido por el dominio."
            }
        ],
        publisher: {
            id: "publisher_002",
            name: "Addison-Wesley"
        },
        publicationDate: "2003-08-30",
        edition: "1st Edition",
        language: "English",
        format: "hardcover",
        pages: 560,
        categories: [
            { id: "cat_002", name: "Software Engineering" },
            { id: "cat_004", name: "Software Architecture" }
        ],
        price: 62.99,
        stock: 0,
        images: {
            cover: "https://example.com/images/books/domain-driven-design-cover.jpg",
            gallery: [
                "https://example.com/images/books/domain-driven-design-back.jpg",
                "https://example.com/images/books/domain-driven-design-inside.jpg"
            ]
        }
    },

    5: {
        id: 5,
        isbn: "978-0-13-475759-9",
        title: "Refactoring",
        subtitle: "Improving the Design of Existing Code",
        description: "Libro centrado en técnicas para mejorar la estructura interna del código sin alterar su comportamiento observable.",
        shortDescription: "Técnicas para mejorar código existente.",
        authors: [
            {
                id: "author_009",
                name: "Martin Fowler",
                biography: "Autor y consultor reconocido en arquitectura, refactorización y desarrollo ágil."
            }
        ],
        publisher: {
            id: "publisher_002",
            name: "Addison-Wesley"
        },
        publicationDate: "2018-11-20",
        edition: "2nd Edition",
        language: "English",
        format: "hardcover",
        pages: 448,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_002", name: "Software Engineering" }
        ],
        price: 58.5,
        stock: 20,
        images: {
            cover: "https://example.com/images/books/refactoring-cover.jpg",
            gallery: [
                "https://example.com/images/books/refactoring-back.jpg",
                "https://example.com/images/books/refactoring-inside.jpg"
            ]
        }
    },

    6: {
        id: 6,
        isbn: "978-1-491-94765-9",
        title: "Designing Data-Intensive Applications",
        subtitle: "The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
        description: "Obra sobre almacenamiento, procesamiento, replicación, consistencia y escalabilidad en aplicaciones modernas basadas en datos.",
        shortDescription: "Diseño de sistemas de datos escalables.",
        authors: [
            {
                id: "author_010",
                name: "Martin Kleppmann",
                biography: "Investigador e ingeniero especializado en sistemas distribuidos y datos."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2017-03-16",
        edition: "1st Edition",
        language: "English",
        format: "paperback",
        pages: 616,
        categories: [
            { id: "cat_005", name: "Databases" },
            { id: "cat_006", name: "Distributed Systems" }
        ],
        price: 64.99,
        stock: 15,
        images: {
            cover: "https://example.com/images/books/designing-data-intensive-applications-cover.jpg",
            gallery: [
                "https://example.com/images/books/designing-data-intensive-applications-back.jpg",
                "https://example.com/images/books/designing-data-intensive-applications-inside.jpg"
            ]
        }
    },

    7: {
        id: 7,
        isbn: "978-1-449-37332-0",
        title: "Learning Python",
        subtitle: "Powerful Object-Oriented Programming",
        description: "Manual extenso para aprender Python desde conceptos básicos hasta programación orientada a objetos y módulos avanzados.",
        shortDescription: "Guía completa para aprender Python.",
        authors: [
            {
                id: "author_011",
                name: "Mark Lutz",
                biography: "Autor técnico especializado en Python y programación."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2013-06-12",
        edition: "5th Edition",
        language: "English",
        format: "paperback",
        pages: 1648,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_007", name: "Python" }
        ],
        price: 79.99,
        stock: 4,
        images: {
            cover: "https://example.com/images/books/learning-python-cover.jpg",
            gallery: [
                "https://example.com/images/books/learning-python-back.jpg",
                "https://example.com/images/books/learning-python-inside.jpg"
            ]
        }
    },

    8: {
        id: 8,
        isbn: "978-1-59327-928-8",
        title: "Python Crash Course",
        subtitle: "A Hands-On, Project-Based Introduction to Programming",
        description: "Introducción práctica a Python mediante ejercicios, fundamentos del lenguaje y proyectos aplicados.",
        shortDescription: "Curso práctico de Python basado en proyectos.",
        authors: [
            {
                id: "author_012",
                name: "Eric Matthes",
                biography: "Autor y docente especializado en enseñanza de programación con Python."
            }
        ],
        publisher: {
            id: "publisher_004",
            name: "No Starch Press"
        },
        publicationDate: "2019-05-03",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 544,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_007", name: "Python" }
        ],
        price: 39.95,
        stock: 5,
        images: {
            cover: "https://example.com/images/books/python-crash-course-cover.jpg",
            gallery: [
                "https://example.com/images/books/python-crash-course-back.jpg",
                "https://example.com/images/books/python-crash-course-inside.jpg"
            ]
        }
    },

    9: {
        id: 9,
        isbn: "978-1-491-91646-6",
        title: "Fluent Python",
        subtitle: "Clear, Concise, and Effective Programming",
        description: "Libro avanzado sobre Python, estructuras de datos, funciones, objetos, concurrencia y características idiomáticas del lenguaje.",
        shortDescription: "Python avanzado con enfoque idiomático.",
        authors: [
            {
                id: "author_013",
                name: "Luciano Ramalho",
                biography: "Desarrollador y autor especializado en Python avanzado."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-03-31",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 1012,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_007", name: "Python" }
        ],
        price: 69.99,
        stock: 0,
        images: {
            cover: "https://example.com/images/books/fluent-python-cover.jpg",
            gallery: [
                "https://example.com/images/books/fluent-python-back.jpg",
                "https://example.com/images/books/fluent-python-inside.jpg"
            ]
        }
    },

    10: {
        id: 10,
        isbn: "978-1-491-94600-8",
        title: "JavaScript: The Definitive Guide",
        subtitle: "Master the World's Most-Used Programming Language",
        description: "Referencia amplia sobre JavaScript, incluyendo fundamentos del lenguaje, APIs web y programación moderna.",
        shortDescription: "Referencia completa de JavaScript.",
        authors: [
            {
                id: "author_014",
                name: "David Flanagan",
                biography: "Autor técnico especializado en JavaScript, Java y tecnologías web."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2020-06-09",
        edition: "7th Edition",
        language: "English",
        format: "paperback",
        pages: 704,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_008", name: "Web Development" }
        ],
        price: 59.99,
        stock: 0,
        images: {
            cover: "https://example.com/images/books/javascript-definitive-guide-cover.jpg",
            gallery: [
                "https://example.com/images/books/javascript-definitive-guide-back.jpg",
                "https://example.com/images/books/javascript-definitive-guide-inside.jpg"
            ]
        }
    },

    11: {
        id: 11,
        isbn: "978-1-61729-586-7",
        title: "Node.js Design Patterns",
        subtitle: "Design and Implement Production-Grade Node.js Applications",
        description: "Libro sobre patrones, arquitectura y buenas prácticas para construir aplicaciones Node.js robustas y escalables.",
        shortDescription: "Patrones de diseño para aplicaciones Node.js.",
        authors: [
            {
                id: "author_015",
                name: "Mario Casciaro",
                biography: "Ingeniero de software especializado en Node.js y arquitectura backend."
            },
            {
                id: "author_016",
                name: "Luciano Mammino",
                biography: "Desarrollador y autor enfocado en JavaScript, Node.js y sistemas cloud."
            }
        ],
        publisher: {
            id: "publisher_005",
            name: "Manning Publications"
        },
        publicationDate: "2020-07-29",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 520,
        categories: [
            { id: "cat_008", name: "Web Development" },
            { id: "cat_009", name: "Backend Development" }
        ],
        price: 52.99,
        stock: 14,
        images: {
            cover: "https://example.com/images/books/nodejs-design-patterns-cover.jpg",
            gallery: [
                "https://example.com/images/books/nodejs-design-patterns-back.jpg",
                "https://example.com/images/books/nodejs-design-patterns-inside.jpg"
            ]
        }
    },

    12: {
        id: 12,
        isbn: "978-1-4842-8149-3",
        title: "Beginning React",
        subtitle: "Simplify Your Front-End Development Workflow",
        description: "Texto introductorio para crear interfaces web modernas con React, componentes, estado y manejo de eventos.",
        shortDescription: "Introducción práctica al desarrollo con React.",
        authors: [
            {
                id: "author_017",
                name: "Greg Lim",
                biography: "Autor técnico especializado en desarrollo web y tecnologías frontend."
            }
        ],
        publisher: {
            id: "publisher_006",
            name: "Apress"
        },
        publicationDate: "2022-04-15",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 180,
        categories: [
            { id: "cat_008", name: "Web Development" },
            { id: "cat_010", name: "Frontend Development" }
        ],
        price: 34.99,
        stock: 1,
        images: {
            cover: "https://example.com/images/books/beginning-react-cover.jpg",
            gallery: [
                "https://example.com/images/books/beginning-react-back.jpg",
                "https://example.com/images/books/beginning-react-inside.jpg"
            ]
        }
    },

    13: {
        id: 13,
        isbn: "978-1-4842-8144-8",
        title: "Full Stack Development with Spring Boot and React",
        subtitle: "Build Modern and Scalable Web Applications",
        description: "Libro práctico para desarrollar aplicaciones completas usando Spring Boot en el backend y React en el frontend.",
        shortDescription: "Desarrollo full stack con Spring Boot y React.",
        authors: [
            {
                id: "author_018",
                name: "Juha Hinkula",
                biography: "Autor y desarrollador especializado en Java, Spring Boot y aplicaciones web."
            }
        ],
        publisher: {
            id: "publisher_006",
            name: "Apress"
        },
        publicationDate: "2022-05-23",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 378,
        categories: [
            { id: "cat_008", name: "Web Development" },
            { id: "cat_011", name: "Full Stack Development" }
        ],
        price: 44.99,
        stock: 5,
        images: {
            cover: "https://example.com/images/books/full-stack-spring-boot-react-cover.jpg",
            gallery: [
                "https://example.com/images/books/full-stack-spring-boot-react-back.jpg",
                "https://example.com/images/books/full-stack-spring-boot-react-inside.jpg"
            ]
        }
    },

    14: {
        id: 14,
        isbn: "978-1-4842-8791-4",
        title: "Pro ASP.NET Core 6",
        subtitle: "Develop Cloud-Ready Web Applications Using MVC, Blazor, and Razor Pages",
        description: "Guía avanzada para construir aplicaciones web modernas con ASP.NET Core, MVC, Razor Pages y Blazor.",
        shortDescription: "Desarrollo web profesional con ASP.NET Core.",
        authors: [
            {
                id: "author_019",
                name: "Adam Freeman",
                biography: "Autor técnico especializado en desarrollo web, .NET y frameworks modernos."
            }
        ],
        publisher: {
            id: "publisher_006",
            name: "Apress"
        },
        publicationDate: "2022-06-01",
        edition: "9th Edition",
        language: "English",
        format: "paperback",
        pages: 1256,
        categories: [
            { id: "cat_008", name: "Web Development" },
            { id: "cat_009", name: "Backend Development" }
        ],
        price: 74.99,
        stock: 8,
        images: {
            cover: "https://example.com/images/books/pro-aspnet-core-6-cover.jpg",
            gallery: [
                "https://example.com/images/books/pro-aspnet-core-6-back.jpg",
                "https://example.com/images/books/pro-aspnet-core-6-inside.jpg"
            ]
        }
    },

    15: {
        id: 15,
        isbn: "978-1-4920-3843-9",
        title: "Kubernetes: Up and Running",
        subtitle: "Dive into the Future of Infrastructure",
        description: "Introducción práctica a Kubernetes, despliegue de contenedores, servicios, configuración y operación de aplicaciones.",
        shortDescription: "Guía práctica para iniciar con Kubernetes.",
        authors: [
            {
                id: "author_020",
                name: "Brendan Burns",
                biography: "Ingeniero especializado en sistemas distribuidos y contenedores."
            },
            {
                id: "author_021",
                name: "Joe Beda",
                biography: "Ingeniero con experiencia en infraestructura cloud y Kubernetes."
            },
            {
                id: "author_022",
                name: "Kelsey Hightower",
                biography: "Especialista en cloud computing, contenedores y automatización."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-08-30",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 280,
        categories: [
            { id: "cat_012", name: "DevOps" },
            { id: "cat_013", name: "Cloud Computing" }
        ],
        price: 47.99,
        stock: 46,
        images: {
            cover: "https://example.com/images/books/kubernetes-up-and-running-cover.jpg",
            gallery: [
                "https://example.com/images/books/kubernetes-up-and-running-back.jpg",
                "https://example.com/images/books/kubernetes-up-and-running-inside.jpg"
            ]
        }
    },

    16: {
        id: 16,
        isbn: "978-1-4920-0673-9",
        title: "Terraform: Up and Running",
        subtitle: "Writing Infrastructure as Code",
        description: "Libro sobre infraestructura como código utilizando Terraform para crear, administrar y automatizar recursos cloud.",
        shortDescription: "Infraestructura como código con Terraform.",
        authors: [
            {
                id: "author_023",
                name: "Yevgeniy Brikman",
                biography: "Ingeniero y autor especializado en DevOps, cloud e infraestructura como código."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-09-06",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 500,
        categories: [
            { id: "cat_012", name: "DevOps" },
            { id: "cat_013", name: "Cloud Computing" }
        ],
        price: 55.99,
        stock: 7,
        images: {
            cover: "https://example.com/images/books/terraform-up-and-running-cover.jpg",
            gallery: [
                "https://example.com/images/books/terraform-up-and-running-back.jpg",
                "https://example.com/images/books/terraform-up-and-running-inside.jpg"
            ]
        }
    },

    17: {
        id: 17,
        isbn: "978-1-59327-950-9",
        title: "Automate the Boring Stuff with Python",
        subtitle: "Practical Programming for Total Beginners",
        description: "Libro práctico para automatizar tareas cotidianas mediante scripts de Python, manejo de archivos, web scraping y hojas de cálculo.",
        shortDescription: "Automatización práctica con Python.",
        authors: [
            {
                id: "author_024",
                name: "Al Sweigart",
                biography: "Autor y desarrollador especializado en enseñanza de programación para principiantes."
            }
        ],
        publisher: {
            id: "publisher_004",
            name: "No Starch Press"
        },
        publicationDate: "2019-11-12",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 592,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_007", name: "Python" }
        ],
        price: 36.99,
        stock: 0,
        images: {
            cover: "https://example.com/images/books/automate-boring-stuff-python-cover.jpg",
            gallery: [
                "https://example.com/images/books/automate-boring-stuff-python-back.jpg",
                "https://example.com/images/books/automate-boring-stuff-python-inside.jpg"
            ]
        }
    },

    18: {
        id: 18,
        isbn: "978-1-4920-7619-7",
        title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        subtitle: "Concepts, Tools, and Techniques to Build Intelligent Systems",
        description: "Libro aplicado sobre aprendizaje automático, redes neuronales y construcción de sistemas inteligentes con Python.",
        shortDescription: "Machine learning práctico con Python.",
        authors: [
            {
                id: "author_025",
                name: "Aurélien Géron",
                biography: "Autor e ingeniero especializado en aprendizaje automático e inteligencia artificial."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-10-04",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 856,
        categories: [
            { id: "cat_014", name: "Artificial Intelligence" },
            { id: "cat_015", name: "Machine Learning" }
        ],
        price: 72.99,
        stock: 4,
        images: {
            cover: "https://example.com/images/books/hands-on-machine-learning-cover.jpg",
            gallery: [
                "https://example.com/images/books/hands-on-machine-learning-back.jpg",
                "https://example.com/images/books/hands-on-machine-learning-inside.jpg"
            ]
        }
    },

    19: {
        id: 19,
        isbn: "978-1-4842-7366-9",
        title: "Practical Deep Learning",
        subtitle: "A Python-Based Introduction",
        description: "Texto introductorio sobre aprendizaje profundo con Python, redes neuronales, entrenamiento de modelos y aplicaciones.",
        shortDescription: "Introducción práctica al deep learning.",
        authors: [
            {
                id: "author_026",
                name: "Ronald T. Kneusel",
                biography: "Autor especializado en inteligencia artificial, programación y aprendizaje profundo."
            }
        ],
        publisher: {
            id: "publisher_004",
            name: "No Starch Press"
        },
        publicationDate: "2021-02-23",
        edition: "1st Edition",
        language: "English",
        format: "paperback",
        pages: 464,
        categories: [
            { id: "cat_014", name: "Artificial Intelligence" },
            { id: "cat_016", name: "Deep Learning" }
        ],
        price: 48.99,
        stock: 19,
        images: {
            cover: "https://example.com/images/books/practical-deep-learning-cover.jpg",
            gallery: [
                "https://example.com/images/books/practical-deep-learning-back.jpg",
                "https://example.com/images/books/practical-deep-learning-inside.jpg"
            ]
        }
    },

    20: {
        id: 20,
        isbn: "978-1-4919-1425-0",
        title: "Data Science from Scratch",
        subtitle: "First Principles with Python",
        description: "Introducción a ciencia de datos desde fundamentos matemáticos y programación en Python.",
        shortDescription: "Ciencia de datos desde cero con Python.",
        authors: [
            {
                id: "author_027",
                name: "Joel Grus",
                biography: "Científico de datos y autor técnico especializado en Python y análisis de datos."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2019-05-16",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 406,
        categories: [
            { id: "cat_017", name: "Data Science" },
            { id: "cat_007", name: "Python" }
        ],
        price: 46.99,
        stock: 15,
        images: {
            cover: "https://example.com/images/books/data-science-from-scratch-cover.jpg",
            gallery: [
                "https://example.com/images/books/data-science-from-scratch-back.jpg",
                "https://example.com/images/books/data-science-from-scratch-inside.jpg"
            ]
        }
    },

    21: {
        id: 21,
        isbn: "978-1-4919-5766-0",
        title: "Python for Data Analysis",
        subtitle: "Data Wrangling with pandas, NumPy, and Jupyter",
        description: "Libro sobre análisis y manipulación de datos en Python utilizando pandas, NumPy y entornos interactivos.",
        shortDescription: "Análisis de datos con pandas y NumPy.",
        authors: [
            {
                id: "author_028",
                name: "Wes McKinney",
                biography: "Creador de pandas y especialista en análisis de datos con Python."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-09-20",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 579,
        categories: [
            { id: "cat_017", name: "Data Science" },
            { id: "cat_007", name: "Python" }
        ],
        price: 59.99,
        stock: 3,
        images: {
            cover: "https://example.com/images/books/python-for-data-analysis-cover.jpg",
            gallery: [
                "https://example.com/images/books/python-for-data-analysis-back.jpg",
                "https://example.com/images/books/python-for-data-analysis-inside.jpg"
            ]
        }
    },

    22: {
        id: 22,
        isbn: "978-0-13-461099-3",
        title: "Artificial Intelligence",
        subtitle: "A Modern Approach",
        description: "Texto académico amplio sobre fundamentos, métodos y aplicaciones de la inteligencia artificial.",
        shortDescription: "Referencia académica de inteligencia artificial.",
        authors: [
            {
                id: "author_029",
                name: "Stuart Russell",
                biography: "Profesor e investigador reconocido en inteligencia artificial."
            },
            {
                id: "author_030",
                name: "Peter Norvig",
                biography: "Investigador y autor especializado en inteligencia artificial y ciencias de la computación."
            }
        ],
        publisher: {
            id: "publisher_007",
            name: "Pearson"
        },
        publicationDate: "2020-04-28",
        edition: "4th Edition",
        language: "English",
        format: "hardcover",
        pages: 1136,
        categories: [
            { id: "cat_014", name: "Artificial Intelligence" },
            { id: "cat_018", name: "Computer Science" }
        ],
        price: 89.99,
        stock: 6,
        images: {
            cover: "https://example.com/images/books/artificial-intelligence-modern-approach-cover.jpg",
            gallery: [
                "https://example.com/images/books/artificial-intelligence-modern-approach-back.jpg",
                "https://example.com/images/books/artificial-intelligence-modern-approach-inside.jpg"
            ]
        }
    },

    23: {
        id: 23,
        isbn: "978-0-262-04630-5",
        title: "Introduction to Algorithms",
        subtitle: "A Comprehensive Guide to Algorithms",
        description: "Texto académico sobre diseño, análisis y aplicación de algoritmos fundamentales en ciencias de la computación.",
        shortDescription: "Referencia completa sobre algoritmos.",
        authors: [
            {
                id: "author_031",
                name: "Thomas H. Cormen",
                biography: "Académico y autor especializado en algoritmos."
            },
            {
                id: "author_032",
                name: "Charles E. Leiserson",
                biography: "Investigador en ciencias de la computación y algoritmos."
            },
            {
                id: "author_033",
                name: "Ronald L. Rivest",
                biography: "Investigador reconocido en algoritmos, criptografía y seguridad."
            },
            {
                id: "author_034",
                name: "Clifford Stein",
                biography: "Académico especializado en algoritmos y optimización."
            }
        ],
        publisher: {
            id: "publisher_008",
            name: "MIT Press"
        },
        publicationDate: "2022-04-05",
        edition: "4th Edition",
        language: "English",
        format: "hardcover",
        pages: 1312,
        categories: [
            { id: "cat_018", name: "Computer Science" },
            { id: "cat_019", name: "Algorithms" }
        ],
        price: 94.99,
        stock: 56,
        images: {
            cover: "https://example.com/images/books/introduction-to-algorithms-cover.jpg",
            gallery: [
                "https://example.com/images/books/introduction-to-algorithms-back.jpg",
                "https://example.com/images/books/introduction-to-algorithms-inside.jpg"
            ]
        }
    },

    24: {
        id: 24,
        isbn: "978-0-13-110362-7",
        title: "The C Programming Language",
        subtitle: "ANSI C",
        description: "Libro clásico sobre el lenguaje C, sus fundamentos, sintaxis, estructuras y uso eficiente.",
        shortDescription: "Referencia clásica del lenguaje C.",
        authors: [
            {
                id: "author_035",
                name: "Brian W. Kernighan",
                biography: "Científico de la computación y autor técnico reconocido."
            },
            {
                id: "author_036",
                name: "Dennis M. Ritchie",
                biography: "Creador del lenguaje C y cocreador del sistema operativo Unix."
            }
        ],
        publisher: {
            id: "publisher_001",
            name: "Prentice Hall"
        },
        publicationDate: "1988-03-22",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 272,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_020", name: "C Programming" }
        ],
        price: 42.99,
        stock: 0,
        images: {
            cover: "https://example.com/images/books/the-c-programming-language-cover.jpg",
            gallery: [
                "https://example.com/images/books/the-c-programming-language-back.jpg",
                "https://example.com/images/books/the-c-programming-language-inside.jpg"
            ]
        }
    },

    25: {
        id: 25,
        isbn: "978-0-321-35668-0",
        title: "Effective Java",
        subtitle: "Best Practices for the Java Platform",
        description: "Libro sobre buenas prácticas, patrones de uso y recomendaciones para escribir código Java robusto y mantenible.",
        shortDescription: "Buenas prácticas avanzadas para Java.",
        authors: [
            {
                id: "author_037",
                name: "Joshua Bloch",
                biography: "Ingeniero de software y autor especializado en Java y diseño de APIs."
            }
        ],
        publisher: {
            id: "publisher_002",
            name: "Addison-Wesley"
        },
        publicationDate: "2018-01-06",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 416,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_021", name: "Java" }
        ],
        price: 51.99,
        stock: 1,
        images: {
            cover: "https://example.com/images/books/effective-java-cover.jpg",
            gallery: [
                "https://example.com/images/books/effective-java-back.jpg",
                "https://example.com/images/books/effective-java-inside.jpg"
            ]
        }
    },

    26: {
        id: 26,
        isbn: "978-1-4919-5326-2",
        title: "Head First Java",
        subtitle: "A Brain-Friendly Guide",
        description: "Libro introductorio de Java con enfoque visual y práctico para comprender programación orientada a objetos.",
        shortDescription: "Introducción visual y práctica a Java.",
        authors: [
            {
                id: "author_038",
                name: "Kathy Sierra",
                biography: "Autora y formadora especializada en enseñanza de programación."
            },
            {
                id: "author_039",
                name: "Bert Bates",
                biography: "Autor técnico y especialista en educación de desarrolladores."
            },
            {
                id: "author_040",
                name: "Trisha Gee",
                biography: "Desarrolladora y autora especializada en Java y comunidades técnicas."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2022-12-27",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 752,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_021", name: "Java" }
        ],
        price: 59.99,
        stock: 5,
        images: {
            cover: "https://example.com/images/books/head-first-java-cover.jpg",
            gallery: [
                "https://example.com/images/books/head-first-java-back.jpg",
                "https://example.com/images/books/head-first-java-inside.jpg"
            ]
        }
    },

    27: {
        id: 27,
        isbn: "978-1-59327-584-6",
        title: "Eloquent JavaScript",
        subtitle: "A Modern Introduction to Programming",
        description: "Libro introductorio y práctico sobre JavaScript moderno, programación funcional, estructuras de datos y desarrollo web.",
        shortDescription: "Introducción moderna a JavaScript.",
        authors: [
            {
                id: "author_041",
                name: "Marijn Haverbeke",
                biography: "Desarrollador y autor especializado en JavaScript y herramientas web."
            }
        ],
        publisher: {
            id: "publisher_004",
            name: "No Starch Press"
        },
        publicationDate: "2018-12-04",
        edition: "3rd Edition",
        language: "English",
        format: "paperback",
        pages: 472,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_008", name: "Web Development" }
        ],
        price: 38.99,
        stock: 8,
        images: {
            cover: "https://example.com/images/books/eloquent-javascript-cover.jpg",
            gallery: [
                "https://example.com/images/books/eloquent-javascript-back.jpg",
                "https://example.com/images/books/eloquent-javascript-inside.jpg"
            ]
        }
    },

    28: {
        id: 28,
        isbn: "978-1-59327-828-1",
        title: "The Rust Programming Language",
        subtitle: "A Practical Guide to Safe Systems Programming",
        description: "Libro introductorio sobre Rust, propiedad, préstamos, concurrencia segura y programación de sistemas.",
        shortDescription: "Guía práctica para aprender Rust.",
        authors: [
            {
                id: "author_042",
                name: "Steve Klabnik",
                biography: "Desarrollador y autor vinculado a la comunidad Rust."
            },
            {
                id: "author_043",
                name: "Carol Nichols",
                biography: "Desarrolladora y autora especializada en Rust y software seguro."
            }
        ],
        publisher: {
            id: "publisher_004",
            name: "No Starch Press"
        },
        publicationDate: "2023-02-28",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 560,
        categories: [
            { id: "cat_001", name: "Programming" },
            { id: "cat_022", name: "Systems Programming" }
        ],
        price: 44.99,
        stock: 20,
        images: {
            cover: "https://example.com/images/books/rust-programming-language-cover.jpg",
            gallery: [
                "https://example.com/images/books/rust-programming-language-back.jpg",
                "https://example.com/images/books/rust-programming-language-inside.jpg"
            ]
        }
    },

    29: {
        id: 29,
        isbn: "978-1-4920-7853-3",
        title: "Software Architecture: The Hard Parts",
        subtitle: "Modern Trade-Off Analyses for Distributed Architectures",
        description: "Libro sobre decisiones complejas de arquitectura de software, trade-offs, sistemas distribuidos y modularidad.",
        shortDescription: "Análisis de decisiones difíciles en arquitectura.",
        authors: [
            {
                id: "author_044",
                name: "Neal Ford",
                biography: "Arquitecto de software y autor especializado en diseño de sistemas."
            },
            {
                id: "author_045",
                name: "Mark Richards",
                biography: "Arquitecto de software y consultor en sistemas empresariales."
            },
            {
                id: "author_046",
                name: "Pramod Sadalage",
                biography: "Consultor especializado en bases de datos, arquitectura y desarrollo ágil."
            },
            {
                id: "author_047",
                name: "Zhamak Dehghani",
                biography: "Especialista en arquitectura de datos y sistemas distribuidos."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2021-10-01",
        edition: "1st Edition",
        language: "English",
        format: "paperback",
        pages: 462,
        categories: [
            { id: "cat_004", name: "Software Architecture" },
            { id: "cat_006", name: "Distributed Systems" }
        ],
        price: 61.99,
        stock: 10,
        images: {
            cover: "https://example.com/images/books/software-architecture-hard-parts-cover.jpg",
            gallery: [
                "https://example.com/images/books/software-architecture-hard-parts-back.jpg",
                "https://example.com/images/books/software-architecture-hard-parts-inside.jpg"
            ]
        }
    },

    30: {
        id: 30,
        isbn: "978-1-4919-3969-0",
        title: "Building Microservices",
        subtitle: "Designing Fine-Grained Systems",
        description: "Libro sobre diseño, implementación, despliegue y operación de arquitecturas basadas en microservicios.",
        shortDescription: "Diseño e implementación de microservicios.",
        authors: [
            {
                id: "author_048",
                name: "Sam Newman",
                biography: "Consultor y autor especializado en microservicios, arquitectura y entrega continua."
            }
        ],
        publisher: {
            id: "publisher_003",
            name: "O'Reilly Media"
        },
        publicationDate: "2021-08-24",
        edition: "2nd Edition",
        language: "English",
        format: "paperback",
        pages: 616,
        categories: [
            { id: "cat_004", name: "Software Architecture" },
            { id: "cat_009", name: "Backend Development" }
        ],
        price: 63.99,
        stock: 16,
        images: {
            cover: "https://example.com/images/books/building-microservices-cover.jpg",
            gallery: [
                "https://example.com/images/books/building-microservices-back.jpg",
                "https://example.com/images/books/building-microservices-inside.jpg"
            ]
        }
    }
};