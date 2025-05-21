import { Form } from "../../components/Form/form";
import { enviroment } from "../../enviroments/enviroment";

export const ContactUs = () => {
    const apiUrl = `${enviroment.apiUrl}/contact`;
    // const apiUrl = "http://juazeiro-solares.onrender.com"; // erro de CORS, bloqueio.
    const contactFields = [
        {
            name: "name",
            label: "Nome",
            placeholder: "Insira o seu nome",
            validation: {required: "Nome é requerido"},
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
        },
        {
            name: "phone",
            label: "telefone",
            placeholder: "Insira seu telefone para contato",
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
            name: "position",
            label: "Cargo",
            placeholder: "Insira o seu cargo atual",
            validation: {required: "Cargo é requerido"}
        },
        //talvez aqui adicionar um campo de input, para adicinar a quantidade de torres... pois o bd recebe um int.
        {
            name: "windTurbineCount",
            label: "Quantitativo de Torres Eólicas",
            type: "number",
            validation: {
              required: "Por favor, insira a quantidade de torres",
            },
        },
        {
            name: "technicalVisitAvailability",
            label: "Podemos marcar uma visita técnica para a próxima semana?",
            type: "radio",
            options: [
              { value: "NEXT_WEEK", label: "Sim" },
              { value: "NEXT_15_DAYS", label: "Não, podemos marcar para os próximos 15 dias" },
            ],
            validation: {
              required: "Por favor, selecione uma opção",
            },
        },
    ];

    const handleFormSubmit = async (data) => {
        data.windTurbineCount = parseInt(data.windTurbineCount); //converter o valor para int, pois o back espera um int.
        console.log("form data:", data);

        //estruturar a requisição do back.
        try {
            const response = await fetch(apiUrl, {
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
        <>
        <div className="relative z-10 flex items-center justify-center flex-col h-full py-10">
            <h1 className="text-orange-500 text-4xl md:text-6xl font-bold text-center"> Pulsares </h1>
            <h3 className="text-orange-400 text-xl md:text-2xl text-center">Ideações Eólicas</h3>
        </div>
        <div className="p-4 max-w-md mx-auto py-2 mb-10">
            <h1 className="text-2x1 font-bold mb-4 text-center">Suas informações para contato</h1>
            <Form fields={contactFields} onSubmit={handleFormSubmit}/>
        </div>
        </> 
    )
}