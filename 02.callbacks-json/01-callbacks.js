/* -- CALLBACKS -- */
// Un callback es una función que se pasa como argumento a otra función y se espera que la función contenedora ejecuta el callback en algún momento.

// Ejemplo de 2 funciones a usar en un callback
function miCallbackDeExito(resultado) {
    console.log(`✅ ¡Operación exitosa! Resultado: ${resultado}`);
}

function miCallbackDeError(mensajeError) {
    console.error(`❌ ¡Error! Mensaje: ${mensajeError}`);
}

function procesarDatos(dato, callbackExito, callbackError) {
    console.log(`Procesando dato: ${dato}`);
    if (dato !== null && dato !== undefined && dato !== '') {
        setTimeout(() => {
            const datoProcesado = dato.toUpperCase();
            callbackExito(datoProcesado);
        }, 1000)
    } else {
        // Simulamos un error si el dato es inválido
        setTimeout(() => {
            callbackError('Error: El dato es inválido o no existe.');
        }, 500);
    }
}

// Ejemplo #1: Callback de éxito
procesarDatos('Hola, mundo!', miCallbackDeExito, miCallbackDeError);

// Ejemplo #2: Callback de error
procesarDatos('', miCallbackDeExito, miCallbackDeError);