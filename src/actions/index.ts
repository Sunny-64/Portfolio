'use server'

import { connectToMongoDB } from "@/lib/db"
import { Contact } from "@/models/contact.model";
import { revalidatePath } from "next/cache";

export const createMessage = async (formData : FormData) => {
    await connectToMongoDB(); 
    try{
        const email = formData.get('email'); 
        const message = formData.get('message'); 
        const newMessage = new Contact({
            email : email, 
            message : message
        }); 
        await newMessage.save(); 
        revalidatePath('/')
        return {message : 'Message Sent'}
    }
    catch(err){
        console.log(err);
        return {message : 'Error sending message'};  
    }
}