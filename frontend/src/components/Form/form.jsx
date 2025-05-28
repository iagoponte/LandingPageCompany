import { useForm } from "react-hook-form";

export const Form = ({ fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   return (
    <form onSubmit={handleSubmit(onSubmit)} className="shadow text-black p-4 space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-2 font-semibold">{field.label}</label>
          {field.type === "radio" ? (
            <div className="flex flex-col gap-2">
              {field.options?.map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input {...register(field.name, field.validation)} type="radio" value={option.value} className="accent-blue-600" />
                  {option.label}
                </label>
              ))}
            </div>
          ) : (
            <input
              {...register(field.name, field.validation)}
              type={field.type}
              placeholder={field.placeholder}
              className="border p-2 rounded w-full"
            />
          )}
          {errors[field.name] && (
            <span className="text-red-500 text-sm">{errors[field.name].message}</span>
          )}
        </div>
      ))}

      <div className="flex items-center gap-2">
      <button type="submit" className="bg-gray-800 text-white mx-auto px-4 py-2 rounded hover:bg-orange-500">
        Enviar
      </button>
      </div>
    </form>
  );

//   return (
//         <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 text-black">
//             {fields.map((field) => (
//                 <div key={field.name}>
//                     <label className="block mb-2 mt-3">{field.label}</label>
//                     <input {...register(field.name, field.validation)}
//                     type={field.type}
//                     placeholder={field.placeholder}
//                     className="border p-2 rounded w-90"
//                     />
//                     {field.options?.map((option) => (
//                         <label key={option.value} className="flex items-center">
//                             {option.label}
//                         </label>
//                     ))}
//                     {errors[field.name] && (
//                         <span className="text-red-500 text-sm">
//                             {errors[field.name].message || "This field is required"}
//                         </span>
//                     )}            
//                 </div>
//             ))}
//             <button type="submit" className="bg-gray-500 text-white px-4 rounded hover:bg-gray-900">
//                 Submit
//             </button>
//         </form>
//     )
};
