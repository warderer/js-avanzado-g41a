//1. Obtener las referencias a los elementos del DOM
const boton = document.getElementById('btn-cargar');
const contenedorResultado = document.getElementById('resultado');

//2. Agrear un evento al botón.
boton.addEventListener('click', obtenerDatosConAxios);

function obtenerDatosConAxios() {
    console.log('Cargando datos con Axios...');
    contenedorResultado.innerHTML = '<p>Cargando...</p>';
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    //3. Realizar la petición a la API con Axios
    axios.get(URL)
      .then(response => {
        mostrarDatos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error.message);
        contenedorResultado.innerHTML = `<p style="color: red;">Error al cargar los datos: ${error.message}</p>`;
      })
}

function mostrarDatos(datos) {
  contenedorResultado.innerHTML = ''; // Limpiar el contenedor
  datos.forEach(post => {
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    contenedorResultado.appendChild(postElement);
  })
}