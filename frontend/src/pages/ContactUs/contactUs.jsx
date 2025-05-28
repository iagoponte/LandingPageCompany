import { Form } from "../../components/Form/form";
import { enviroment } from "../../enviroments/enviroment";

export const ContactUs = () => {
    const apiUrl = `${enviroment.apiUrl}/contact`;
    // const apiUrl = "http://juazeiro-solares.onrender.com"; // erro de CORS, bloqueio.
    const dateToday = new Date();
    const nextWeek = new Date(dateToday);
    nextWeek.setDate(dateToday.getDate() + 10); // adiciona 10 dias à data atual

    const year = nextWeek.getFullYear();
    const month = String(nextWeek.getMonth() + 1).padStart(2, '0'); // meses começam do zero
    const day = String(nextWeek.getDate()).padStart(2, '0'); // garante que o dia tenha dois dígitos
    const minDateValue = `${year}-${month}-${day}`; // formata a data no padrão YYYY-MM-DD

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
            label: "Telefone",
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
        {
            name: "businessType",
            label: "Categoria da sua Empresa",
            type: "select", 
            placeholder: "Selecione uma categoria",
            options: [ 
                { value: "", label: "Selecione uma categoria" },
                { value: "O&M", label: "Operação e Manutenção" },
                { value: "Mantenedora de parque eólico", label: "Mantenedora" },
                { value: "Proprietária de parque eólico", label: "Proprietária" },
                { value: "OTHER", label: "Outros" },
            ],
            validation: { 
                required: "Selecione uma categoria",
                validate: (value) => value !== "" || "Selecione uma categoria válida"
            },
        },
        {
            name: "businessTypeOther",
            label: "Especifique a Categoria da sua Empresa:", // Label do campo de texto
            type: "text",
            placeholder: "Digite a categoria aqui",
            conditionalOn: "businessType", // Depende do campo 'businessType'
            conditionalValue: "OTHER",     // Quando o valor for 'OTHER'
            validation: {
                required: "Por favor, especifique a categoria", // Será obrigatório APENAS quando visível
            },
        },
        {
            name: "technicalVisitAvailability",
            label: "Podemos marcar uma visita técnica para a próxima semana?",
            type: "date",
            min: minDateValue,
            validation:{
                validate: (value) => {return value >= minDateValue || "A data deve ser pelo menos uma semana a partir de hoje"},
            } 
        },
        {
            name: "lgpdConsent",
            label: "", // O label principal virá do texto customizado
            type: "checkbox", // Novo tipo
            options: [ // Usamos options para o texto ao lado do checkbox
                { 
                    value: "true", 
                    label: ( // Usamos uma função para renderizar JSX com link
                        <span>
                            Eu li e concordo com a{" "}
                            <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Política de Privacidade
                            </a>{" "}
                            e autorizo o uso dos meus dados para contato comercial.
                        </span>
                    )
                }
            ],
            validation: {
                required: "Você deve aceitar os termos para continuar.",
            },
        },
    ];

    const handleFormSubmit = async (data) => {
        //lógica para tratar o campo de texto OUTROS do businessType.
        let finalBusinessType = data.businessType;
        if (!data.lgpdConsent) {
            alert("É necessário aceitar a Política de Privacidade.");
            return; // Interrompe o envio se não houver consentimento
        }
        if (data.businessType === 'OTHER'){
            finalBusinessType = data.businessTypeOther
        };
        const submissionData = {
            ...data, 
            businessType: finalBusinessType,
            lgpdConsentTimestamp: new Date().toISOString(),//deletar sado delete tudo do lgdp.
        };
        //talvez seja necessário remover o envio para o back do lgpdConsent (pois somente será aceito o form que está com o checkbox marcado).
        // delete submissionData.lgpdConsent;

        delete submissionData.businessTypeOther; //remover o campo de texto adicional, pois não é necessário no back.
        console.log("form data:", submissionData);

        //estruturar a requisição do back.
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(submissionData),
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