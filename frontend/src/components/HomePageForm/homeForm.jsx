import { useState } from "react";
import { enviroment } from "../../enviroments/enviroment";
import { Modal } from "../Modal/modal";
import { Form } from "../Form/form";
import { useNavigate } from "react-router-dom";


export const HomePageForm = ({ formData, setFormData }) => {
const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiUrl = `${enviroment.apiUrl}/contact`;

  const homePageFormFields = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Insira o seu nome completo",
      validation: { required: "Nome é requerido" },
    },
    {
      name: "email",
      label: "Email",
      placeholder: "seumelhoremail@gmail.com",
      type: "email",
      validation: {
        required: "Email é requerido",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Formato de email inválido"
          },
      },
    }
  ];

  const handleSubmit = async (data) => {
    setFormData(data);
    setIsModalOpen(true);
    //inserir, aqui, a lógica de envio do formulário para o backend
    console.log("Form data submitted:", data);
    try {
      //trocar a URL abaixo por uma rota específica para captação de leads.
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) {
        throw new Error("Falha ao submeter formulário"); //← toastr aqui
      }
      const result = await response.json();
      console.log("form submetido:", result);
      alert("form submetido com sucesso!"); //← toastr aqui
    } catch (error) {
      console.error("Erro ao submeter formulário:", error);
      alert("Erro ao submeter formulário, tente novamente"); //← toastr aqui
    };
  };

  const handleProceed = () => {
    setIsModalOpen(false);
    navigate('/contact_us');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
   return (
    <>
        <div className="p-4 max-w-md mx-auto py-2 mb-10">
            <Form 
            fields={homePageFormFields}
            initialValues={formData}
            onSubmit={handleSubmit} />
          </div>
          <Modal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            onProceed={handleProceed} 
            message="Você está prestes a ser redirecionado para a página de contato. Deseja continuar?" 
            proceedText="Continuar" />
        </>
   );
};