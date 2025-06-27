// Paso #1: Importar el módulo que acabamos de instalar: Axios
const axios = require('axios')

// Paso #2: Definir una URL de API para hacer una solicitud
const API_URL = 'http://api.open-notify.org/astros.json'

// Paso #3: Crear una función para obtener los datos de la API
const getAstronauts = async () => {
    try {
        console.log('Buscando astronautas en el espacio...')

        const response = await axios.get(API_URL)
        const astronauts = response.data.people
        const numberOfAstronauts = response.data.number

        console.log('¡Éxito! ✅')
        console.log(`Actualmente hay ${numberOfAstronauts} astronautas en el espacio.`)
        console.log('Sus nombres son:')

        // Imprimimos todos los nombres de los astronautas
        astronauts.forEach(astronaut => {
            console.log(`- ${astronaut.name} (Nave: ${astronaut.craft})`)
        })
    } catch (error) {
        console.error('Houston, tenemos un problema. ❌', error.message)
    }
}

// Paso #4: Ejecutar la función
getAstronauts()