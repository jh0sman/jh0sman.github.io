// Función para generar un array de productos
function generateProducts() {
    const products = [
        {
            id: 1,
            name: "Guitarra Acústica",
            description: "Guitarra acústica de alta calidad, ideal para principiantes.",
            amount: 10
        },
        {
            id: 2,
            name: "Amplificador Marshall",
            description: "Amplificador compacto con excelente potencia y calidad de sonido.",
            amount: 5
        },
        {
            id: 3,
            name: "Pedal de Reverb",
            description: "Pedal de efectos para agregar profundidad al sonido.",
            amount: 7
        },
        {
            id: 4,
            name: "Guitarra Eléctrica",
            description: "Guitarra eléctrica profesional con diseño ergonómico.",
            amount: 8
        },
        {
            id: 5,
            name: "Cable Jack",
            description: "Cable de alta resistencia para instrumentos musicales.",
            amount: 20
        }
    ];
    
    // Mostrar el array de productos en la consola
    console.log("Lista de productos:", products);
    
    // Retornar el array por si necesitas usarlo en otras partes del código
    return products;
}

// Llamar a la función al cargar el script
generateProducts();
