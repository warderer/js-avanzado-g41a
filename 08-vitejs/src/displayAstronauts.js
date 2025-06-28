export const displayAstronauts = (astronauts, htmlContainer) => {
    if (astronauts.length === 0) {
        htmlContainer.innerHTML = '<p>No hay astronautas en el espacio.</p>'
        return
    }

    const astronautList = document.createElement('ul')
    astronauts.forEach(astronaut => {
        const listItem = document.createElement('li')
        listItem.textContent = `🧑‍🚀 ${astronaut.name} (${astronaut.craft})`
        astronautList.appendChild(listItem)
    })

    htmlContainer.innerHTML = '' // Limpiar el contenedor
    htmlContainer.appendChild(astronautList)
}