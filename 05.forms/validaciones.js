// Función que valida los inputs del formulario

function validarCampo(input, funcionValidacion) {
    const errorSpan = input.nextElementSibling; //retorna el siguiente elemento hermano del input, que es el span de error
    const { valido, mensaje } = funcionValidacion(input.value)
    if (valido) {
        input.classList.remove('error');
        input.classList.add('success');
        errorSpan.textContent = ''; // Limpia el mensaje de error
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        errorSpan.textContent = mensaje; // Muestra el mensaje de error
    }
    return valido; // Retorna true si el campo es válido, false si no lo es
}

function validarNombre(nombre) {
    return nombre.lenght === 0
        ? { valido: false, mensaje: 'El nombre es obligatorio' }
        : nombre.lenght < 3
            ? { valido: false, mensaje: 'El nombre debe tener al menos 3 caracteres' }
            : { valido: true };
}