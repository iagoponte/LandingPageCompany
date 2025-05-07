import React from "react";
import { useForm } from "react-hook-form"


export const Form = ({fields, onSubmit}) => {
    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900">
            {fields.map((field) => (
                <div key={field.name}>
                    <label className="block mb-1">{field.label}</label>
                    <input {...register(field.name, field.validation)}
                    type={field.type || "undefined"}
                    placeholder={field.placeholder || "undefined"}
                    className="border p-2 rounded w-90"
                    />
                    <br/>
                    {errors[field.name] && (
                        <span className="text-red-500 text-sm">
                            {errors[field.name].message || "This field is required"}
                        </span>
                    )}            
                </div>
            ))}
            <button type="submit" className="bg-gray-500 text-white px-4 rounded hover:bg-gray-900">
                Submit
            </button>
        </form>
    )

}
