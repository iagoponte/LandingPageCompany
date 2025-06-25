import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";
import { HomePageForm } from "../../components/HomePageForm/homePageForm";

export const Home = ({ formData, setFormData }) => {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto flex p-5">
        <div className=" w-full flex flex-col items-center py-4 box-border">
          <h3 className="text-2xl text-center md:text-3xl pb-10" style={{color:"oklch(0.33 0.17 262.3)"}}>Manutenção <strong>inteligente</strong> e planejada</h3>
          <Carousel />
        </div>
      </div>
      <div className="px-10">
        <hr className="border-t border-gray-400 my-4" />
      </div>
      <div className="p-4 max-w-md mx-auto py-2 mb-10">
        <h3 className="text-blue-600 font-semibold text-lg text-center" style={{color:"oklch(0.33 0.17 262.3)"}}>CTA form HomePage</h3>
        <HomePageForm setFormData={setFormData} formData={formData} />
      </div>
    </>
  );
};
