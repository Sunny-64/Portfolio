import mongoose, { Model, Document } from "mongoose";

export interface IContact {
    email : string; 
    message : string; 
}

export interface IContactDocument extends IContact, Document {
    createdAt : Date; 
    updatedAt : Date; 
}

const ContactSchema = new mongoose.Schema<IContactDocument>({
    email : {
        type : String, 
        required : true
    }, 
    message : {
        type : String, 
        required : true
    }
}, {timestamps : true}); 

export const Contact:Model<IContactDocument> =  mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);