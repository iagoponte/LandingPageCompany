import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const Form = ({ fields, onSubmit, initialValues }) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="shadow text-black p-4 space-y-4">
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
                <button type="submit" className="bg-gray-800 text-white mx-auto px-4 py-2 rounded hover:bg-orange-500">
                    Enviar
                </button>
            </div>
        </form>
  );
};

// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

// // Tailwind CSS (Certifique-se de que está configurado no seu projeto Vite)
// // Adicione ao seu index.html: <script src="https://cdn.tailwindcss.com"></script>

// const initialFormData = {
//   nome: '',
//   email: '',
//   telefone: '',
//   cargo: '',
//   empresa: '',
//   necessidade: '',
// };

// // Componente Modal
// function Modal({ isOpen, onClose, onProceed, message, proceedText }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md text-center">
//         <p className="text-lg text-gray-700 mb-6">{message}</p>
//         <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
//           <button
//             onClick={onProceed}
//             className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//           >
//             {proceedText}
//           </button>
//           <button
//             onClick={onClose}
//             className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
//           >
//             Cancelar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Formulário da Homepage
// function HomePageForm({ onFormSubmit }) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       nome: initialFormData.nome,
//       email: initialFormData.email,
//     }
//   });

//   const onSubmit = (data) => {
//     console.log("Dados do formulário da Homepage:", data);
//     onFormSubmit(data); // Passa os dados para o componente pai
//   };

//   return (
//     <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex flex-col items-center justify-center p-4 text-white font-sans">
//       <div className="w-full max-w-lg bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-8">
//           Bem-vindo!
//         </h2>
//         <p className="text-slate-300 text-center mb-8">
//           Insira seu nome e email para começarmos.
//         </p>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label htmlFor="nome" className="block text-sm font-medium text-sky-300 mb-1">
//               Nome Completo
//             </label>
//             <input
//               id="nome"
//               type="text"
//               {...register("nome", { required: "Nome é obrigatório" })}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-150"
//               placeholder="Seu nome completo"
//             />
//             {errors.nome && <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-sky-300 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email", { 
//                 required: "Email é obrigatório",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Endereço de email inválido"
//                 }
//               })}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-150"
//               placeholder="seu.email@exemplo.com"
//             />
//             {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
//           >
//             Enviar
//           </button>
//         </form>
//       </div>
//       <footer className="text-center text-slate-500 mt-10 text-sm">
//         © 2024 Sua Empresa. Todos os direitos reservados.
//       </footer>
//     </div>
//   );
// }

// // Formulário da Página de Detalhes
// function DetailsPageForm({ initialData, onBack }) {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     defaultValues: {
//       ...initialFormData, // Garante que todos os campos tenham um valor padrão
//       ...initialData // Sobrescreve com os dados passados
//     }
//   });

//   // Efeito para resetar o formulário se os dados iniciais mudarem
//   // Isso é útil se o usuário puder voltar e alterar os dados do primeiro formulário
//   useEffect(() => {
//     reset({
//         ...initialFormData,
//         ...initialData
//     });
//   }, [initialData, reset]);


//   const onSubmit = (data) => {
//     console.log("Dados do formulário de Detalhes:", data);
//     alert("Formulário de detalhes enviado com sucesso! Verifique o console.");
//     // Aqui você faria a submissão final dos dados
//   };

//   return (
//     <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex flex-col items-center justify-center p-4 text-white font-sans">
//       <div className="w-full max-w-lg bg-slate-800 p-8 md:p-10 rounded-xl shadow-2xl">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-8">
//           Mais Informações
//         </h2>
//         <p className="text-slate-300 text-center mb-8">
//           Por favor, complete os detalhes abaixo.
//         </p>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label htmlFor="nomeDetalhes" className="block text-sm font-medium text-emerald-300 mb-1">
//               Nome Completo
//             </label>
//             <input
//               id="nomeDetalhes"
//               type="text"
//               {...register("nome", { required: "Nome é obrigatório" })}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="Seu nome completo"
//               readOnly // Pode ser readOnly se não quiser que editem aqui
//             />
//             {errors.nome && <p className="mt-1 text-xs text-red-400">{errors.nome.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="emailDetalhes" className="block text-sm font-medium text-emerald-300 mb-1">
//               Email
//             </label>
//             <input
//               id="emailDetalhes"
//               type="email"
//               {...register("email", { 
//                 required: "Email é obrigatório",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Endereço de email inválido"
//                 }
//               })}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="seu.email@exemplo.com"
//               readOnly // Pode ser readOnly se não quiser que editem aqui
//             />
//             {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="telefone" className="block text-sm font-medium text-emerald-300 mb-1">
//               Telefone
//             </label>
//             <input
//               id="telefone"
//               type="tel"
//               {...register("telefone", { required: "Telefone é obrigatório" })}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="(XX) XXXXX-XXXX"
//             />
//             {errors.telefone && <p className="mt-1 text-xs text-red-400">{errors.telefone.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="cargo" className="block text-sm font-medium text-emerald-300 mb-1">
//               Cargo
//             </label>
//             <input
//               id="cargo"
//               type="text"
//               {...register("cargo")}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="Seu cargo na empresa"
//             />
//           </div>
          
//           <div>
//             <label htmlFor="empresa" className="block text-sm font-medium text-emerald-300 mb-1">
//               Empresa (Opcional)
//             </label>
//             <input
//               id="empresa"
//               type="text"
//               {...register("empresa")}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="Nome da sua empresa"
//             />
//           </div>

//           <div>
//             <label htmlFor="necessidade" className="block text-sm font-medium text-emerald-300 mb-1">
//               Descreva sua necessidade (Visita Técnica, etc.)
//             </label>
//             <textarea
//               id="necessidade"
//               rows="3"
//               {...register("necessidade")}
//               className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-150"
//               placeholder="Ex: Preciso de uma cotação para..."
//             ></textarea>
//           </div>

//           <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
//             <button
//               type="button"
//               onClick={onBack}
//               className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//             >
//               Voltar
//             </button>
//             <button
//               type="submit"
//               className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
//             >
//               Enviar Detalhes
//             </button>
//           </div>
//         </form>
//       </div>
//        <footer className="text-center text-slate-500 mt-10 text-sm">
//         © 2024 Sua Empresa. Todos os direitos reservados.
//       </footer>
//     </div>
//   );
// }

// // Componente principal da aplicação
// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home'); // 'home' ou 'details'
//   const [homePageData, setHomePageData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleHomePageSubmit = (data) => {
//     setHomePageData(data); // Armazena os dados do primeiro formulário
//     setIsModalOpen(true); // Abre o modal
//   };

//   const handleProceedToDetails = () => {
//     setIsModalOpen(false);
//     setCurrentPage('details'); // Muda para a página de detalhes
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
  
//   const handleBackToHome = () => {
//     setCurrentPage('home');
//     // Opcional: limpar homePageData se quiser que o usuário preencha novamente
//     // setHomePageData(null); 
//   };

//   if (currentPage === 'home') {
//     return (
//       <>
//         <HomePageForm onFormSubmit={handleHomePageSubmit} />
//         <Modal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           onProceed={handleProceedToDetails}
//           message="Obrigado! Gostaria de fornecer mais algumas informações para um contato mais completo ou agendar uma visita técnica?"
//           proceedText="Continuar"
//         />
//       </>
//     );
//   }

//   if (currentPage === 'details') {
//     return <DetailsPageForm initialData={homePageData} onBack={handleBackToHome} />;
//   }

//   return null; // Caso base, não deve acontecer
// }
