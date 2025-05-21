import React from "react";
import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";

export const Home = () => {
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
    </>
  );
};
