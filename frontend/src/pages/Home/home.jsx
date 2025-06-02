import React from "react";
import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";
import { initialFormData } from "../../constants/formConstant";
import { useForm } from "react-hook-form";

export const Home = ({onStepSubmit}) => {
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
  const homeInitialValues = {
    name: initialFormData.name,
    email: initialFormData.email,
  };

  const handleSubmit = (data) => {
    console.log("Form data submitted:", data);
    onStepSubmit(data);
  };

  return (
    <>
      <HeroSection />
      <div className="flex flex-row items-start justify-start gap-4 px-4">
        <div className="w-1/2 py-4" >
          <Carousel/>
        </div>
        <div className="w-1/2 ml-0 py-4">
          <h2 className="text-md font-bold">Informaçõe dos serviços</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            error totam aspernatur dolores tenetur, repudiandae nemo
            reprehenderit reiciendis fuga minus delectus harum nesciunt velit
            debitis dicta ex expedita alias facere!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima error totam aspernatur dolores
            tenetur, repudiandae nemo reprehenderit reiciendis fuga minus
            delectus harum nesciunt velit debitis dicta ex expedita alias
            facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima error totam aspernatur dolores tenetur, repudiandae nemo
            reprehenderit reiciendis fuga minus delectus harum nesciunt velit
            debitis dicta ex expedita alias facere!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima error totam aspernatur dolores
            tenetur, repudiandae nemo reprehenderit reiciendis fuga minus
            delectus harum nesciunt velit debitis dicta ex expedita alias
            facere!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima error totam aspernatur dolores tenetur, repudiandae nemo
            reprehenderit reiciendis fuga minus delectus harum nesciunt velit
            debitis dicta ex expedita alias facere!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. 
          </h3>
        </div>
      </div>
      <div>
        <h1>CTA form HomePage</h1>
        <Form 
        fields={homePageFormFields}
        initialValues={homeInitialValues}
        onSubmit={handleSubmit} />
      </div>
    </>
  );
};
