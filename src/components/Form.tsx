"use client";
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/utils/validations";
import { createMessage } from "@/actions";
import { IContact } from "@/models/contact.model";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const ref = useRef<HTMLFormElement>(null); 
    const {
        control,
        handleSubmit,
        formState: { isValid, errors },
        reset
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "",
            message: "",
        },
        criteriaMode: "all",
        mode : "onChange"
    });
    const onSubmit = async (data:IContact) => {
        if(!isValid){
            return; 
        }
        try{
            await createMessage({email : data?.email, message : data?.message}); 
            toast.success("Message Sent to Sunny!");
            reset(); 
        }
        catch(err){
           return toast.error("Failed to Send Message. Please try again!");
        }
    }
    return (
        <form
            ref={ref}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[80%] flex flex-col gap-1 md:p-2 lg:p-5"
        >
            <ToastContainer 
                 autoClose={2000}
                 toastStyle={{backgroundColor : '#0B2027', color : '#fff'}}
                 theme="dark"
            />
            <div>
                <p className="text-red-700 text-sm mb-1 min-h-[20px]">{errors.email?.message ?? ""}</p>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <input
                            className="py-3 px-4 rounded-md focus:outline-none w-full"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
            </div>
           <div className="">
           <p className="text-red-700 text-sm mb-1 min-h-[20px]">{errors.message?.message ?? ""}</p>
            <Controller
                    name="message"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <textarea
                            className="py-3 px-4 rounded-md focus:outline-none w-full"
                            id="message"
                            name="message"
                            cols={30}
                            rows={8}
                            placeholder="Message..."
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                        ></textarea>
                    )}
                />
           </div>

            <button
                type="submit"
                className={`bg-gradient-to-r from-cerulean to-verdigirls font-medium w-32 py-2 rounded-sm mt-2 ${!isValid ? 'opacity-50' : 'cursor-pointer'}`}
                disabled={!isValid}
            >
                Send
            </button>
        </form>
    );
};

export default Form;
