import { postContactForm } from "../../services/ContactPageFormService";
import { useState } from "react";
import { Form } from "../Form/form";
import { LgpdModal } from "../LgpdModal/lgpdModal";

export const ContactUsForm = ({ formData }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState(null);

  const initialFormData = {
    name: "", // Corresponde a contactFields[0].name
    email: "", // Corresponde a contactFields[1].name
    phone: "",
    position: "",
    businessType: "",
    businessTypeOther: "",
    technicalVisitAvailability: "",
    lgpdConsent: false,
  };

  const openModal = (type) => {
    if (type === "privacy") {
      setModalTitle("Política de Privacidade");
      setModalMessage(
        <div class="text-sm text-gray-700 space-y-4">
          <p>
            <strong>Última atualização:</strong> 11 de junho de 2025
          </p>

          <p>
            Esta Política de Privacidade explica como seus dados pessoais são
            coletados, usados e protegidos de acordo com a Lei Geral de Proteção
            de Dados Pessoais (LGPD - Lei nº 13.709/2018).
          </p>

          <p>
            <strong>1. Dados Coletados:</strong>
            <br />
            Nome completo, e-mail, número de telefone, cargo na empresa e tipo
            de empresa.
          </p>

          <p>
            <strong>2. Finalidade:</strong>
            <br />
            Utilizamos esses dados exclusivamente para fins de contato futuro,
            com base no interesse demonstrado através do formulário da página.
          </p>

          <p>
            <strong>3. Compartilhamento:</strong>
            <br />
            Seus dados não são compartilhados com terceiros. O uso é
            exclusivamente interno.
          </p>

          <p>
            <strong>4. Armazenamento:</strong>
            <br />
            Os dados são armazenados de forma segura por até{" "}
            <strong>12 meses</strong>, salvo se o titular solicitar exclusão
            antes deste prazo.
          </p>

          <p>
            <strong>5. Seus Direitos:</strong>
            <br />A qualquer momento, você pode solicitar acesso, correção ou
            exclusão dos seus dados.
          </p>

          <p>
            <strong>6. Exclusão:</strong>
            <br />
            Solicitações devem ser feitas via e-mail diretamente ao nosso COO:{" "}
            <a
              href="mailto:email@empresa.com"
              class="text-blue-600 hover:underline"
            >
              email@empresa.com
            </a>
            .
          </p>
        </div>
      );
    } else if (type === "terms") {
      setModalTitle("Termos de Uso");
      setModalMessage(
        <div class="text-sm text-gray-700 space-y-4">
          <p>
            <strong>Última atualização:</strong> 11 de junho de 2025
          </p>

          <p>
            Ao utilizar este site e preencher o formulário de contato, você
            concorda com os seguintes termos:
          </p>

          <p>
            <strong>1. Uso das Informações:</strong>
            <br />
            Os dados informados (nome, e-mail, telefone, cargo e tipo de
            empresa) serão utilizados exclusivamente para fins de contato
            comercial futuro.
          </p>

          <p>
            <strong>2. Consentimento:</strong>
            <br />
            Ao enviar o formulário, você consente com o tratamento dos dados
            conforme descrito nesta política.
          </p>

          <p>
            <strong>3. Responsabilidade:</strong>
            <br />
            Comprometemo-nos a utilizar os dados de forma segura, confidencial e
            dentro dos limites legais.
          </p>

          <p>
            <strong>4. Exclusão:</strong>
            <br />
            Você pode solicitar a exclusão de seus dados a qualquer momento via
            contato com o COO, pelo e-mail:{" "}
            <a
              href="mailto:email@empresa.com"
              class="text-blue-600 hover:underline"
            >
              email@empresa.com
            </a>
            .
          </p>

          <p>
            <strong>5. Alterações:</strong>
            <br />
            Reservamo-nos o direito de atualizar estes termos a qualquer
            momento. Recomendamos consulta periódica.
          </p>
        </div>
      );
    }
    setIsModalOpen(true);
  };

  const contactFields = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Insira o seu nome",
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
          message: "Formato de email inválido",
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
          message: "Número de telefone inválido",
        },
      },
    },
    {
      name: "position",
      label: "Cargo",
      placeholder: "Insira o seu cargo atual",
      validation: { required: "Cargo é requerido" },
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
        validate: (value) => value !== "" || "Selecione uma categoria válida",
      },
    },
    {
      name: "businessTypeOther",
      label: "Especifique a Categoria da sua Empresa:", // Label do campo de texto
      type: "text",
      placeholder: "Digite a categoria aqui",
      conditionalOn: "businessType", // Depende do campo 'businessType'
      conditionalValue: "OTHER", // Quando o valor for 'OTHER'
      validation: {
        required: "Por favor, especifique a categoria", // Será obrigatório APENAS quando visível
      },
    },
    {
      name: "technicalVisitAvailability",
      label: "Podemos marcar uma visita técnica para a próxima semana?",
      type: "date",
      min: (() => {
        const dateToday = new Date();
        const nextWeek = new Date(dateToday); //evita alterar a data atual diretamente
        nextWeek.setDate(dateToday.getDate() + 10);
        return nextWeek.toISOString().split("T")[0]; //divide o resultado da string data a partir do T e retorna a primeira parte [0], antes do T.
      })(),
      validation: {
        validate: (value) => {
          const minDate = new Date();
          minDate.setDate(minDate.getDate() + 9);
          return (
            new Date(value) > minDate ||
            "A data deve ser pelo menos 10 dias a partir de hoje"
          );
        },
      },
    },
    {
      name: "lgpdConsent",
      label: "", // O label principal virá do texto customizado
      type: "checkbox", // Novo tipo
      options: [
        // Usamos options para o texto ao lado do checkbox
        {
          value: "true",
          // Usamos uma função para renderizar JSX com link
          label: (
            <span>
              Eu li e concordo com a{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  openModal("privacy");
                }}
              >
                Política de Privacidade
              </a>{" "}
              e os{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  openModal("terms");
                }}
              >
                Termos de uso
              </a>{" "}
              e autorizo o uso dos meus dados para contato comercial.
            </span>
          ),
        },
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
    if (data.businessType === "OTHER") {
      finalBusinessType = data.businessTypeOther;
    }
    const submissionData = {
      ...data,
      businessType: finalBusinessType,
      lgpdConsent: data.lgpdConsent === "true" ? true : false, // Garantindo que lgpdConsent seja booleano
      lgpdConsentTimestamp:
        data.lgpdConsent ? new Date().toISOString() : null,
      isFormComplete: true, //verificação da flag do formulário completo
    };
    //talvez seja necessário remover o envio para o back do lgpdConsent (pois somente será aceito o form que está com o checkbox marcado).
    delete submissionData.businessTypeOther; //remover o campo de texto adicional, pois não é necessário no back.
    console.log("form data:", submissionData);

    //estruturando requisição para o back end ↓
    await postContactForm(submissionData)
      .then((response) => {
        if (response.ok) {
          alert("Formulário enviado com sucesso!");
        } else {
          alert("Erro ao enviar o formulário, tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao enviar o formulário, tente novamente.");
      });
  };

  return (
    <>
      <Form
        fields={contactFields}
        initialValues={{ ...initialFormData, ...formData }}
        onSubmit={handleFormSubmit}
      />
      <LgpdModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
        title={modalTitle}
      />
    </>
  );
};
