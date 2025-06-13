// RESOLVER PROMESAS 1: THEN Y CATCH - Pokéapi

function getPokemonThen(name = 'ditto') {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json()
        })
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
}

getPokemonThen()

// RESOLVER PROMESAS 2: ASYNC AWAIT - Pokéapi
async function getPokemonAsync(name = 'ditto') {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const pokemon = await response.json();
        console.log('Nombre:', pokemon.name);
        console.log('Altura:', pokemon.height);
        console.log('Peso:', pokemon.weight);
        console.log('Habilidades:', pokemon.abilities.map(ability => ability.ability.name).join(', '));
        return pokemon;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        throw error;
    }
}

getPokemonAsync('pikachu')