import { ContactUsForm } from "../../components/ContactUsForm/contactUsForm";

export const ContactUs = ({ formData }) => {
 

  return (
    <>
      <div className="relative z-10 flex items-center justify-center flex-col h-full py-10">
        <h1 className="text-orange-500 text-4xl md:text-6xl font-bold text-center">
          {" "}
          Empresa{" "}
        </h1>
        <h3 className="text-orange-400 text-xl md:text-2xl text-center">
          Ideações Eólicas
        </h3>
      </div>
      <div className="p-4 max-w-md mx-auto py-2 mb-10">
        <h1 className="text-2x1 font-bold mb-4 text-center" style={{color:"oklch(0.33 0.17 262.3)"}}>
          Suas informações para contato
        </h1>
        <ContactUsForm formData={formData} />
      </div>
    </>
  );
};
