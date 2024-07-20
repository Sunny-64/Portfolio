import * as z from 'zod';

export const contactSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .regex(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, {
            message: 'Please Enter a Valid Email !',
        }),
    message: z
        .string({
            required_error: 'Message is required',
        })
        .min(50, {
            message: 'Message should contain atleast 50 characters.',
        }),
});
