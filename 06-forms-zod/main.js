import { schema } from './schema.js';
import { limpiarErrores, mostrarErrores } from './errors-display.js';

document.addEventListener ('DOMContentLoaded', () => {
    /* VARIABLES PARA SELECCIONAR ELEMENTOS DEL DOM */
    const form = document.getElementById('registroForm');
    const mensajeExito = document.getElementById('mensajeExito');

    /* MANEJAR EL ENVIO DEL FORMULARIO */
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir que por defecto, el formulario recargue la página.
        limpiarErrores(); // Limpiar errores previos

        // 1. Recolectamos los datos del formulario
        const formData = new FormData(form);
        const datosFormulario = {
            nombreCompleto: formData.get('nombre'),
            email: formData.get('email'),
            password: formData.get('password'),
            pais: formData.get('pais'),
            terminos: formData.get('terminos')
        }

        // 2. Validamos los datos con Zod
        const resultadoValidacion = schema.safeParse(datosFormulario);

        // 3. Verificamos el resultado de la validación
        if (!resultadoValidacion.success) {
            // Si la validación falla, mostramos los errores
            console.error('Errores de validación:', resultadoValidacion.error.issues);
            mostrarErrores(resultadoValidacion.error.issues);
            return; // Detenemos el envío del formulario
        }

        // Si la validación es exitosa, los datos estan en resultadoValidacion.data
        const datosValidos = resultadoValidacion.data;
        console.log('Validación exitosa:', datosValidos);

        // Marcamos todos los campos como exitosos en la UI
        document.querySelectorAll('.form-group input, .form-group select').forEach(input => {
            if(input.type !== 'checkbox') {
                input.classList.add('success');
            }
        });

        try {
        // Llamada a la API de reqres.in
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify(datosValidos),
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
        limpiarErrores();

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        // Mostrar mensaje de error en la UI
        mensajeExito.textContent = 'No se pudo completar el registro. Por favor, inténtelo de nuevo más tarde.';
        mensajeExito.style.color = 'red';
        mensajeExito.style.display = 'block';
    }

    })

})
