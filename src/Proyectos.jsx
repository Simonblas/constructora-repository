import React, { useRef } from "react";
import { HeroProjects } from "./ProjectComponents/HeroProjects";
import Slider from "react-slick/lib/slider";
import flechaizquierda from "./assets/flechaizquierda.png";
import flechaderecha from "./assets/flechaderecha.png";
import { SliderProyecto1 } from "./ProjectComponents/slider-pages/SliderProyecto1";
import { SliderProyecto2 } from "./ProjectComponents/slider-pages/SliderProyecto2";
import { SliderProyecto3 } from "./ProjectComponents/slider-pages/SliderProyecto3";
import { SliderProyecto4 } from "./ProjectComponents/slider-pages/SliderProyecto4";

export const Proyectos = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 300, // Velocidad de transición
    slidesToShow: 1, // Número de slides visibles
    slidesToScroll: 1, // Número de slides a mover
    arrows: false,
  };

  const sliderRef = useRef();

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();

  return (
    <div className="container-proyectos">
      <HeroProjects />

      <div className="container-proyectos-components">
        <button
          className="boton-slider boton-slider-izquierda"
          id="boton-slider-proyecto-izquierda"
          onClick={goToPrev}
        >
          <img src={flechaizquierda} alt="" />
        </button>
        <Slider
          className="slider slider-proyectos"
          ref={sliderRef}
          {...settings}
        >
          <SliderProyecto1 />
          <SliderProyecto2 />
          <SliderProyecto3 />
          {/* <SliderProyecto4 /> */}
        </Slider>
        <button
          className="boton-slider boton-slider-derecha"
          id="boton-slider-proyecto-derecha"
          onClick={goToNext}
        >
          <img src={flechaderecha} alt="" />
        </button>
      </div>
    </div>
  );
};
