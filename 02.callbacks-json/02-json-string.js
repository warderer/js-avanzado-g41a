const miJsonString = `{
  "nombre": "Curso de JavaScript",
  "instructor": "César Guerra",
  "duracionHoras": 40,
  "temas": [
    "Variables y Tipos de Datos",
    "Funciones",
    "Objetos",
    "Arrays",
    "Callbacks",
    "JSON"
  ],
  "esOnline": true,
  "metadata": {
    "version": "1.0.0",
    "fechaLanzamiento": "2024-06-03"
  },
  "precio": null
}`

console.log('Tipo de dato de miJsonString:', typeof miJsonString);
console.log(miJsonString);

console.log('----------------------------------');
/* Convierto JSON a Objeto de JS */
// JSON.parse() convierte un string JSON a un objeto de JavaScript.
const miObjetoJs = JSON.parse(miJsonString);
console.log('Tipo de dato de miObjetoJs:', typeof miObjetoJs);
console.log(miObjetoJs);

console.log('----------------------------------');
console.log('Instructor', miObjetoJs.instructor);