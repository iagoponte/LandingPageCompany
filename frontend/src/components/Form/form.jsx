import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const Form = ({ fields, onSubmit, initialValues }) => {
  let darkBlue = {
    background: "#060058",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,    
    formState: { errors },
  } = useForm({
    defaultValues: initialValues || {}, 
  });

  useEffect(() => {
    if (initialValues) {
        reset(initialValues);
    }
  }, [initialValues, reset])

   return (
    <form onSubmit={handleSubmit(onSubmit)} className="shadow text-black p-4 space-y-4 rounded-lg">
            {fields.map((field) => {
                // --- Lógica Condicional ---
                let isVisible = true; // Por padrão, o campo é visível
                if (field.conditionalOn) {
                    const watchedValue = watch(field.conditionalOn); // Observa o campo pai
                    isVisible = watchedValue === field.conditionalValue; // Verifica se a condição é atendida
                }
                // Ajusta a validação para ser obrigatória apenas se visível
                const fieldValidation = {
                    ...field.validation,
                    required: isVisible ? field.validation?.required : false,
                };
                return (
                    // Adiciona a classe 'hidden' se não for visível
                    <div key={field.name} className={`mb-4 ${!isVisible ? 'hidden' : ''}`}>
                        <label className="block mb-2 font-semibold" style={{color:"oklch(0.21 0.1 261.67)"}}>{field.label}</label>

                        {field.type === "radio" ? (
                            <div className="flex flex-col gap-2">
                                {field.options?.map((option) => (
                                    <label key={option.value} className="flex items-center gap-2">
                                        <input {...register(field.name, field.validation)} type="radio" value={option.value} className="accent-blue-600" />
                                        {option.label}
                                    </label>
                                ))}
                            </div>
                        ) : field.type === "select" ? (
                            <select
                                {...register(field.name, field.validation)}
                                className="border p-2 rounded w-full bg-white"
                            >
                                {field.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            ) : field.type === "checkbox" ? (
                            <div className="flex flex-col gap-2">
                                {field.options?.map((option) => (
                                    <label key={option.value} className="flex items-start gap-3">
                                        <input 
                                            {...register(field.name, fieldValidation)} // Use fieldValidation
                                            type="checkbox" 
                                            value={option.value} 
                                            className="accent-blue-600 mt-1 h-4 w-4" // Ajustes de estilo
                                        />
                                        {/* Renderiza o label (que pode ser JSX) */}
                                        <span className="text-sm text-gray-700">{option.label}</span> 
                                    </label>
                                ))}
                            </div>
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
                <button type="submit" className="bg-[darkBlue] text-white mx-auto px-4 py-2 rounded-full transition-background duration-200 ease-in-out hover:bg-orange-500">
                    Enviar
                </button>
            </div>
        </form>
  );
};
