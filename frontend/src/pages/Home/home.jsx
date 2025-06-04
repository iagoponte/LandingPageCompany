import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";
import { HomePageForm } from "../../components/HomePageForm/homeForm";

export const Home = ({formData, setFormData}) => {
 
  return (
    <>
      <HeroSection />
      <div className="max-x-7xl mx-auto flex flex-wrap items-start justify-start gap-4 p-10">
        <div className="w-full md:w-2/3 flex flex-col py-4 box-border" >
          <Carousel/>
        </div>
        <div className="w-full md:w-1/3 flex flex-col py-4 box-border">
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
      <div className="p-4 max-w-md mx-auto py-2 mb-10">
        <h1>CTA form HomePage</h1>
        <HomePageForm setFormData={setFormData} formData={formData}/>
        </div>
    </>
  );
};
