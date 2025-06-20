import * as z from 'https://esm.sh/zod@3.23.8';

export const schema = z.object({
    nombreCompleto: z.string()
        .min(3, { message: 'El nombre completo debe tener al menos 3 caracteres'})
        .max(100, { message: 'El nombre completo no puede exceder los 100 caracteres'}),

    email: z.string()
        .email({ message: 'El correo electrónico debe ser válido'}),

    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres'})
        .max(20, { message: 'La contraseña no puede exceder los 20 caracteres'})
        .regex(/[a-zA-Z]/, { message: 'La contraseña debe contener al menos una letra'})
        .regex(/\d/, { message: 'La contraseña debe contener al menos un número'}),

    pais: z.string()
        .nonempty({ message: 'El país es obligatorio' }),

    terminos: z.preprocess((val) => val === 'on', z.boolean())
        .refine(val => val === true, { message: 'Debes aceptar los términos y condiciones' })
})