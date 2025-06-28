import './style.css'

import axios from 'axios'
import { displayAstronauts } from './displayAstronauts.js'

const API_URL = 'http://api.open-notify.org/astros.json'

const fetchButton = document.getElementById('fetch-button')
const listContainer = document.getElementById('astronaut-list-container')

const getAstronauts = async () => {
    try {
        const response = await axios.get(API_URL)
        const astronauts = response.data.people

        // Imprimimos todos los nombres de los astronautas
        displayAstronauts(astronauts, listContainer)

    } catch (error) {
        console.error('Houston, tenemos un problema. ❌', error.message)
        listContainer.innerHTML = '<p>Houston, tenemos un problema</p>'
    }
}

fetchButton.addEventListener('click', getAstronauts)