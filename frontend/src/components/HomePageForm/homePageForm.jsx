import { useState } from "react";
import { Modal } from "../Modal/modal";
import { Form } from "../Form/form";
import { useNavigate } from "react-router-dom";
import { postHomeForm } from "../../services/HomePageFormService";


export const HomePageForm = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);


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
    const submissionData = {...data, 
      isFormComplete: false
    };
    setFormData(submissionData);
    // console.log("Form data submitted:", data);
    console.log("Dados enviados à API:", JSON.stringify(submissionData));
    await postHomeForm(submissionData)
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted succesfully");
          alert("Formulário enviado com sucesso!");
          setIsModalOpen(true);
        } else {
          console.error("Error submitting form:", response.statusText);
          alert("Erro ao enviar o formulário. Por favor, tente novamente.");
        }
      }).catch((error) => {
        console.error("Error submitting form:", error);
        alert("Erro ao enviar o formulário. Por favor, tente novamente.");
      }
    );
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