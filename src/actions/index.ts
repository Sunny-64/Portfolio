'use server';

import { connectToMongoDB } from '@/lib/db';
import { Contact, IContact } from '@/models/contact.model';
import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer'; 

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

export const createMessage = async ({ email, message }: IContact) => {
    await connectToMongoDB();
    try {
        const newMessage = new Contact({
            email,
            message,
        });
        const isSaved = await newMessage.save();
        await transporter.sendMail({
            to: process.env.SEND_TO, 
            from: process.env.GMAIL_USER, 
            subject: 'Message Received from Portfolio', 
            html: `<h4>${isSaved.email}</h4> </br>
                    <p>${isSaved.message}</p>`
        }); 
        revalidatePath('/');
        return { message: 'Message Sent' };
    } catch (err) {
        return { message: 'Error sending message' };
    }
};