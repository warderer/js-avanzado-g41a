document.addEventListener ('DOMContentLoaded', () => {
    /* VARIABLES PARA SELECCIONAR ELEMENTOS DEL DOM */
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombreCompleto');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const paisSelect = document.getElementById('pais');
    const terminosInput = document.getElementById('terminos');
    const mensajeExito = document.getElementById('mensajeExito');

    /* AÑADIR EVENT LISTENERS PARA VALIDACIÓN EN TIEMPO REAL */
    nombreInput.addEventListener('input', () => validarCampo(nombreInput, validarNombre));
    emailInput.addEventListener('input', () => validarCampo(emailInput, validarEmail));
    passwordInput.addEventListener('input', () => validarCampo(passwordInput, validarPassword));
    paisSelect.addEventListener('change', () => validarCampo(paisSelect, validarPais));
    terminosInput.addEventListener('change', () => validarTerminos(terminosInput));

    /* MANEJAR EL ENVIO DEL FORMULARIO */
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir que por defecto, el formulario recargue la página.

        // Validar todos los campos una última vez antes de enviar
        const esNombreValido = validarCampo(nombreInput, validarNombre);
        const esEmailValido = validarCampo(emailInput, validarEmail);
        const esPasswordValido = validarCampo(passwordInput, validarPassword);
        const esPaisValido = validarCampo(paisSelect, validarPais);
        const sonTerminosValidos = validarTerminos(terminosInput);

        // Si alguna validación falla, detenemos el envío del formulario
        if (!esNombreValido || !esEmailValido || !esPasswordValido || !esPaisValido || !sonTerminosValidos) {
            console.log('Formulario no válido. Por favor, corrige los errores.');
            return;
        }

        // Si todas las validaciones son correctas, creamos el objetos de datos, previo a su envio.
        const datosUsuario = {
            name: nombreInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim(),
            country: paisSelect.value,
        }

        console.log('Datos del usuario:', datosUsuario);

        try {
        // Llamada a la API de reqres.in
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify(datosUsuario),
        });

        if (!response.ok) {
            throw new Error('Error al enviar los datos del formulario');
        }

        const data = await response.json();
        console.log('Usuario Registrado Exitosamente:', data);

        // Mostrar mensaje de éxito en la UI
        mensajeExito.textContent = '¡Registro exitoso! Usuario creado con ID: ' + data.id;
        mensajeExito.style.display = 'block';

        // Limpiamos el formulario y las clases de validación
        form.reset();
        document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
            input.classList.remove('success', 'error');
        })

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        // Mostrar mensaje de error en la UI
        mensajeExito.textContent = 'No se pudo completar el registro. Por favor, inténtelo de nuevo más tarde.';
        mensajeExito.style.color = 'red';
        mensajeExito.style.display = 'block';
    }

    })

})
