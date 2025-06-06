/* Importamos el JSON */
const cursos = require('./cursos.json');

console.log(cursos)

// Accedemos a los datos del curso
console.log(cursos[0].nombre);
console.log(cursos[0].instructor);
console.log(cursos[0].duracionHoras);
console.log(cursos[0].temas.join(', '));

// Actualizar un valor
cursos[0].precio = 49.99;
console.log(`Nuevo precio del curso ${cursos[0].nombre}: $${cursos[0].precio}`);

// Agregar un nuevo curso
cursos.push({
    "nombre": "Curso de Node.js Avanzado",
    "instructor": "Ana López",
    "duracionHoras": 20,
    "temas": ["Express", "MongoDB", "JWT"],
    "precio": 59.99
});

console.log(cursos[3])