'use server';

import { connectToMongoDB } from '@/lib/db';
import { Contact, IContact } from '@/models/contact.model';
import { revalidatePath } from 'next/cache';

export const createMessage = async ({ email, message }: IContact) => {
    await connectToMongoDB();
    try {
        const newMessage = new Contact({
            email,
            message,
        });
        const isSaved = await newMessage.save();
        revalidatePath('/');
        return { message: 'Message Sent' };
    } catch (err) {
        return { message: 'Error sending message' };
    }
};
