"use client";
import React, { useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/utils/validations";
import { createMessage } from "@/actions";

const Form = () => {
    const ref = useRef<HTMLFormElement>(null); 
    const {
        control,
        formState: { isValid, errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "",
            message: "",
        },
        criteriaMode: "all",
    });
    return (
        <form
            ref={ref}
            action={async (formData) => {
                await createMessage(formData); 
                ref.current?.reset(); 
            }}
            className="w-full lg:w-[80%] flex flex-col gap-1 md:p-2 lg:p-5"
        >
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
                className="bg-gradient-to-r from-cerulean to-verdigirls font-medium w-32 py-2 rounded-sm"
            >
                Send
            </button>
        </form>
    );
};

export default Form;
