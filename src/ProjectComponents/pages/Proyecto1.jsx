import fotoprincipal from "../../assets/fotoprincipalproyecto1.jpeg";
import foto1proyecto1 from "../../assets/foto1proyecto1.jpg";
import foto2proyecto1 from "../../assets/foto2proyecto1.jpg";
import foto3proyecto1 from "../../assets/foto3proyecto1.jpg";
import foto4proyecto1 from "../../assets/foto4proyecto1.jpg";
import backArrow from "../../assets/png-menu-hamburguesa/arrow-back.png";
import flechaizquierda from "../../assets/flechaizquierda.png";
import flechaderecha from "../../assets/flechaderecha.png";
import "./proyecto1.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Slider from "react-slick/lib/slider";

export const Proyecto1 = () => {
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
    <section className="container-proyecto-1">
      <Link to="/proyectos" className="boton-back-mobile">
        <img src={backArrow} alt="" />
      </Link>

      <h2>
        <span className="spanBold">Distribuidora</span> "El Milagro"
      </h2>

      <div className="container-1-proyecto-1">
        <div className="container-text-proyecto-1">
          <h3 className="spanBold">Nave Industrial 725 m²</h3>

          <p>
            En esta obra, nos encargamos de la planificación integral del
            proyecto, abarcando desde la elaboración del diseño hasta la
            ejecución final. Se llevó a cabo el cálculo estructural de la nave,
            asegurando una estructura metálica resistente y funcional.
          </p>

          <p>
            Este proyecto destaca por su solidez estructural, adaptabilidad a
            las necesidades del cliente y calidad en cada detalle.
          </p>
        </div>

        <img src={fotoprincipal} alt="imagen" />
      </div>

      <div className="container-2-proyecto-1">
        <div className="container-text-2-proyecto-1">
          <h4>
            <span className="spanBold">Tareas realizadas:</span>
          </h4>

          <ul>
            <li>
              Dirección y supervisión de obra, garantizando el cumplimiento de
              plazos y calidad.
            </li>
            <li>
              Supervisión de movimientos de suelo, asegurando una base sólida y
              estable.
            </li>
            <li>
              Construcción de veredas exteriores, mejorando la accesibilidad y
              el entorno de la nave.
            </li>
            <li>
              Diseño y construcción de oficinas internas, integradas a la
              operatividad de la distribuidora.
            </li>
            <li>
              Ejecución de losa de 80 m², brindando mayor resistencia y
              aprovechamiento del espacio.
            </li>
            <li>
              Ejecución de piso de hormigón alisado, diseñado para soportar
              cargas pesadas y optimizar la operatividad del espacio.
            </li>
          </ul>
        </div>

        <div className="container-fotos-proyecto-1">
          <img src={foto1proyecto1} alt="" />
          <img src={foto2proyecto1} alt="" />
          <img src={foto3proyecto1} alt="" />
          <img src={foto4proyecto1} alt="" />
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
          <img src={fotoprincipal} alt="" />
          <img src={foto1proyecto1} alt="" />
          <img src={foto2proyecto1} alt="" />
          <img src={foto3proyecto1} alt="" />
          <img src={foto4proyecto1} alt="" />
        </Slider>
        <button className="boton-slider-mobile-derecha" onClick={goToNext}>
          <img src={flechaderecha} alt="" />
        </button>
      </div>
    </section>
  );
};
