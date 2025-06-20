/* Funciones Auxiliares para la UI */

// Limpiar todos los mensajes de errore y los estilos de los campos
export function limpiarErrores() {
    const errorSpans = document.querySelectorAll('.error-text, .error-text-inline')
    errorSpans.forEach(span => span.textContent = '')

    const inputs = document.querySelectorAll('.form-group input, .form-group select')
    inputs.forEach(input => input.classList.remove('error', 'success'))
}

// Mostar los mensajes de validación de ZOD en los campos correspondientes.

export function mostrarErrores(issues) {
    issues.forEach(issue => {
        // issue.path[0] nos devuelve el nombre del campo con error
        const inputId = issue.path[0]
        const input = document.getElementById(inputId)

        if (input) {
            input.classList.add('error')
            input.classList.remove('success')

            const errorSpan = input.parentElement.querySelector('.error-text-inline') || input.nextElementSibling
            if (errorSpan) {
                errorSpan.textContent = issue.message
            }
        }
    })
}