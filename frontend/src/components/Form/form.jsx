import { useForm } from "react-hook-form";

export const Form = ({ fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

   return (
    // <form onSubmit={handleSubmit(onSubmit)} className="shadow text-black p-4 space-y-4">
    //   {fields.map((field) => (
    //     <div key={field.name} className="mb-4">
    //       <label className="block mb-2 font-semibold">{field.label}</label>
    //       {field.type === "radio" ? (
    //         <div className="flex flex-col gap-2">
    //           {field.options?.map((option) => (
    //             <label key={option.value} className="flex items-center gap-2">
    //               <input {...register(field.name, field.validation)} type="radio" value={option.value} className="accent-blue-600" />
    //               {option.label}
    //             </label>
    //           ))}
    //         </div>
    //       ) : (
    //         <input
    //           {...register(field.name, field.validation)}
    //           type={field.type}
    //           placeholder={field.placeholder}
    //           min={field.min}
    //           max={field.max}
    //           className="border p-2 rounded w-full"
    //         />
    //       )}
    //       {errors[field.name] && (
    //         <span className="text-red-500 text-sm">{errors[field.name].message}</span>
    //       )}
    //     </div>
    //   ))}

    //   <div className="flex items-center gap-2">
    //   <button type="submit" className="bg-gray-800 text-white mx-auto px-4 py-2 rounded hover:bg-orange-500">
    //     Enviar
    //   </button>
    //   </div>
    // </form>
    <form onSubmit={handleSubmit(onSubmit)} className="shadow text-black p-4 space-y-4">
            {fields.map((field) => {

                // --- Lógica Condicional ---
                let isVisible = true; // Por padrão, o campo é visível
                if (field.conditionalOn) {
                    const watchedValue = watch(field.conditionalOn); // Observa o campo pai
                    isVisible = watchedValue === field.conditionalValue; // Verifica se a condição é atendida
                }
                // --- Fim Lógica Condicional ---

                // Ajusta a validação para ser obrigatória apenas se visível
                const fieldValidation = {
                    ...field.validation,
                    required: isVisible ? field.validation?.required : false,
                };

                return (
                    // Adiciona a classe 'hidden' se não for visível
                    <div key={field.name} className={`mb-4 ${!isVisible ? 'hidden' : ''}`}>
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
                        // --- NOVO: Renderização do Select ---
                        ) : field.type === "select" ? (
                            <select
                                {...register(field.name, field.validation)} // Usa a validação original
                                className="border p-2 rounded w-full bg-white" // Adiciona bg-white
                            >
                                {field.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        // --- FIM NOVO ---
                        ) : (
                            <input
                                {...register(field.name, fieldValidation)} // Usa a validação ajustada
                                type={field.type || 'text'}
                                placeholder={field.placeholder}
                                min={field.min}
                                // Opcional: Desabilita o input se não estiver visível
                                // disabled={!isVisible} 
                                className="border p-2 rounded w-full"
                            />
                        )}

                        {errors[field.name] && (
                            <span className="text-red-500 text-sm">{errors[field.name].message}</span>
                        )}
                    </div>
                );
            })}

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
