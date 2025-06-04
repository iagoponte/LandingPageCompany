import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";
import { HomePageForm } from "../../components/HomePageForm/homePageForm";

export const Home = ({ formData, setFormData }) => {
  return (
    <>
      <HeroSection />
      <div className="max-x-7xl mx-auto flex p-10">
        <div className=" p-10 w-full flex flex-col items-center py-4 box-border">
          <Carousel />
        </div>
      </div>
      <div className="px-10">
        <hr className="border-t border-gray-400 my-4" />
      </div>
      <div className="p-4 max-w-md mx-auto py-2 mb-10">
        <h1 className="text-blue-600 font-semibold text-lg text-center">CTA form HomePage</h1>
        <HomePageForm setFormData={setFormData} formData={formData} />
      </div>
    </>
  );
};
