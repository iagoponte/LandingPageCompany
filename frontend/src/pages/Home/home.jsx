import React from "react";
import "./home.css";
import { Carousel } from "../../components/Carousel/carousel";
import { HeroSection } from "../../layout/HeroSection/heroSection";

export const Home = () => {
  return (
    <>
        <HeroSection />
        <div>
          <Carousel />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            error totam aspernatur dolores tenetur, repudiandae nemo
            reprehenderit reiciendis fuga minus delectus harum nesciunt velit
            debitis dicta ex expedita alias facere!
          </h2>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quia
            quam repellendus, itaque sapiente quas nostrum ducimus eligendi
            quisquam doloribus illum modi corporis autem ipsa reprehenderit
            assumenda voluptatum dolor dolorum.
          </h3>
        </div>
    </>
  );
};
