import React from "react";
import { Form } from "../../components/Form/form";

export const ContactUs = () => {
    const contactFields = [
        {
            name: "Nome",
            label: "Nome",
            placeHolder: "Insira o seu nome",
            validation: {required: "Nome é requerido"},
        },
        {
            name: "E-mail",
            label: "Email",
            placeHolder: "seumelhoremail@gmail.com",
            type: "email",
            validation: {
                required: "Email é requerido",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Formato de email inválido"
                },
            },
        },
        {
            name: "Telefone",
            label: "telefone",
            placeHolder: "Insira seu telefone para contato",
            type: "tel",
            validation: {
                required: "Número de telefone é requerido",
                pattern: {
                    value: /^\+?\d{1,3}?\s?\(?\d{2}\)?[\s-]?\d{4,5}[-]?\d{4}$/, //aceita números internacionais
                    message: "Número de telefone inválido"
                },
            },
        },
        {
            name: "cargo",
            label: "Cargo",
            placeHolder: "Insira o seu cargo atual",
            validation: {required: "Cargo é requerido"}
        },
        {
            name: "tower_quantity",
            label: "Quantitativo de Torres Eólicas",
            type: "select",
            options: [
              { value: "Até 5", label: "Até 5" },
              { value: "Entre 5 e 30", label: "Entre 5 e 30" },
              { value: "Mais de 30", label: "Mais de 30" },
            ],
            validation: {
              required: "Por favor, selecione a quantidade de torres",
            },
        },
        {
            name: "visit_permission",
            label: "Podemos marcar uma visita técnica para a próxima semana?",
            type: "radio",
            options: [
              { value: "yes", label: "Sim" },
              { value: "no", label: "Não, podemos marcar para os próximos 15 dias" },
            ],
            validation: {
              required: "Por favor, selecione uma opção",
            },
        },
    ];

    const handleFormSubmit = async (data) => {
        //estruturar a requisição do back.
        try {
            const response = await fetch('URL API BACK', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("Falha ao submeter formulário"); //toastr aqui tbm
            }
            const result = await response.json();
            console.log("form submetido:", result);
            alert('form submetido com sucesso!'); //toastr aqui
        } catch (error) {
            console.error('Erro ao submeter formulário:', error)
            alert('Erro ao submeter formulário, tente novamente')//toastr aqui
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2x1 font-bold mb-4">Contate-nos</h1>
            <Form fields={contactFields} onSubmit={handleFormSubmit}/>
        </div>
    )
}