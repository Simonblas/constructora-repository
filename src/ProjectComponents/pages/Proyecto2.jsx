import "./proyecto2.css";
import imagen1proyecto2 from "../../assets/imagen1proyecto2.jpg";
import imagen2proyecto2 from "../../assets/imagen2proyecto2.jpg";
import imagen3proyecto2 from "../../assets/imagen3proyecto2.jpeg";
import imagen2slider from "../../assets/imagen-hero-proyectos.jpeg";
import imagen3slider from "../../assets/fondohacemos2.jpg";
import backArrow from "../../assets/png-menu-hamburguesa/arrow-back.png";
import flechaizquierda from "../../assets/flechaizquierda.png";
import flechaderecha from "../../assets/flechaderecha.png";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { useRef } from "react";

export const Proyecto2 = () => {
  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();

  const sliderRef = useRef();

  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 300, // Velocidad de transición
    slidesToShow: 1, // Número de slides visibles
    slidesToScroll: 1, // Número de slides a mover
    arrows: false,
  };

  return (
    <section className="container-proyecto2">
      <Link to="/proyectos" className="boton-back-mobile">
        <img id="back-arrow" src={backArrow} alt="" />
      </Link>
      <h2>
        Estudio de Arquitectura{" "}
        <span className="spanBold">Montero-Scalesa</span>
      </h2>

      <div className="container-1-proyecto-2">
        <div className="container-text-proyecto-2">
          <h3 className="spanBold">Nave Industrial 860 m²</h3>
          <p className="texto1-proyecto2">
            En esta obra, trabajamos en conjunto con el estudio de arquitectura
            Montero-Scalesa, desarrollando una nave industrial moderna y
            eficiente, con materiales de primera calidad para garantizar su
            durabilidad y funcionalidad.
          </p>
          <p className="texto1-proyecto2">
            Esta nave industrial se diseñó para responder a las necesidades del
            desarrollo inmobiliario, asegurando una infraestructura óptima para
            su propósito comercial o productivo.
          </p>
        </div>

        <img src={imagen1proyecto2} alt="" />
      </div>

      <div className="container-2-proyecto-2">
        <img src={imagen2proyecto2} alt="" />

        <div className="container-text-2-proyecto-2">
          <h3 className="spanBold">Replanteo con Estación Total Trimble M3:</h3>
          <p className="texto2-proyecto2">
            Para garantizar la precisión en la ejecución de la nave industrial,
            se utilizó la estación total Trimble M3, una tecnología avanzada que
            permite realizar mediciones exactas y asegurar un replanteo óptimo
            de la estructura, evitando desajustes y optimizando el proceso
            constructivo.
          </p>
        </div>
      </div>

      <div className="container-slider-proyecto-interno">
        <button className="boton-slider-mobile-izquierda" onClick={goToPrev}>
          <img src={flechaizquierda} alt="" />
        </button>
        <Slider
          className="slider-interno-proyectos"
          ref={sliderRef}
          {...settings}
        >
          <img src={imagen3proyecto2} alt="" />
          <img src={imagen2slider} alt="" />
          <img src={imagen3slider} alt="" />
          <img src={imagen1proyecto2} alt="" />
          <img src={imagen2proyecto2} alt="" />
        </Slider>
        <button className="boton-slider-mobile-derecha" onClick={goToNext}>
          <img src={flechaderecha} alt="" />
        </button>
      </div>

      <div className="container-3-proyecto-2">
        <div className="container-text-3-proyecto-2">
          <h4 className="spanBold">Tareas realizadas:</h4>

          <ul>
            <li>
              Construcción de 370 m² de mampostería en ladrillo de hormigón a la
              vista, brindando una estética industrial y resistencia
              estructural.
            </li>
            <li>
              Ejecución de nave de 860 m², utilizando una estructura reticulada
              que optimiza la distribución de cargas y la estabilidad.
            </li>
            <li>
              Instalación de chapas CLASSWALL con aislante incorporado,
              garantizando eficiencia térmica y acústica dentro del espacio.
            </li>
          </ul>
        </div>

        <img src={imagen3proyecto2} alt="" />
      </div>
    </section>
  );
};
