// RESOLVER PROMESAS 1: THEN Y CATCH - Pokéapi

function getPokemonThen(name = 'ditto') {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json()
        .then(pokemon => {
            console.log('Nombre:', pokemon.name);
            console.log('Altura:', pokemon.height);
            console.log('Peso:', pokemon.weight);
            console.log('Habilidades:', pokemon.abilities.map(ability => ability.ability.name).join(', '));
            return pokemon;
        })
        .catch(error => {
            console.error('Error al obtener el Pokémon:', error);
            throw error;
        })
    })
}

getPokemonThen()