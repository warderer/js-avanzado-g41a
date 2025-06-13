// PIZZERIA para ejemplificar promesas

// Declaración de la Promesa
function ordenarPizza(sabor) {
    // 1. Crear y retornar una promesa con dos parámetros: resolve y reject
    return new Promise((resolve, reject) => {
        console.log(`Ordenando una pizza de ${sabor}...`);

        // 2. Simular un retraso de 2 segundos para simular el tiempo de preparación (para hacerla asincrona)
        setTimeout(() => {
            // 3. Lógica de nuestro negocio para resolver o rechazar la promesa
            if (sabor === 'pepperoni' || sabor === 'hawaiana') {
                resolve(`Aquí está tu pizza de ${sabor}, ¡Buen provecho!`);
            } else {
                reject(`Lo siento, no tenemos pizza de ${sabor} en el menú.`);
            }
        }, 2000);
    })
}

// Consumo/Ejecuto la Promesa

// Caso 1: Ordernar una pizza que sí tenemos en el menú: pepperoni
console.log("Cliente 1: Quiero una pizza de pepperoni");
const promesaPepperoni = ordenarPizza("pepperoni");

promesaPepperoni
    .then(mensajeDeExito => {
        console.log("Cliente 1 Feliz: " + mensajeDeExito);
    })
    .catch(mensajeDeError => {
        console.error("Cliente 1 Triste: " + mensajeDeError);
    })

console.log("------------------------------")

// Caso 2: Ordernar una pizza que NO tenemos en el menú: suprema
console.log("Cliente 2: Quiero una pizza Suprema");
const promesaSuprema = ordenarPizza("suprema");

promesaSuprema
    .then(mensajeDeExito => {
        console.log("Cliente 2 Feliz: " + mensajeDeExito);
    })
    .catch(mensajeDeError => {
        console.error("Cliente 2 Triste: " + mensajeDeError);
    })