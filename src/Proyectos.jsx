import React, { useRef } from 'react'
import { HeroProjects } from './ProjectComponents/HeroProjects';
import Slider from 'react-slick/lib/slider';
import flechaizquierda from './assets/flechaizquierda.png';
import flechaderecha from './assets/flechaderecha.png';
import { Link } from 'react-router-dom';
import { Proyecto1 } from "./ProjectComponents/pages/Proyecto1";
import { Proyecto2 } from "./ProjectComponents/pages/Proyecto2";
import { Proyecto3 } from "./ProjectComponents/pages/Proyecto3";
import { SliderProyecto1 } from './ProjectComponents/slider-pages/SliderProyecto1';
import { SliderProyecto2 } from './ProjectComponents/slider-pages/SliderProyecto2';
import { SliderProyecto3 } from './ProjectComponents/slider-pages/SliderProyecto3';
import { SliderProyecto4 } from './ProjectComponents/slider-pages/SliderProyecto4';

export const Proyectos = () => {

    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Carrusel infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Número de slides visibles
        slidesToScroll: 1, // Número de slides a mover
        arrows: false,
    };

    const sliderRef = useRef()

    const goToNext = () => sliderRef.current.slickNext();
    const goToPrev = () => sliderRef.current.slickPrev();


    return (

        < div className='container-proyectos' >
            {/* <Link to='proyecto1' className='link-card'>
                <img className='imgProjectCard' src="./src/assets/fondoproyecto.jpeg" alt="" />
                <h4 className='titulo-proyecto'>Titulo Proyecto</h4>
            </Link> */}

            <HeroProjects />

            <div className='container-proyectos-components' >

                <button className='boton-slider boton-slider-izquierda' id='boton-slider-proyecto-izquierda' onClick={goToPrev} ><img src={flechaizquierda} alt="" /></button>
                <Slider className='slider slider-proyectos' ref={sliderRef} {...settings} >
                    <SliderProyecto1 />
                    <SliderProyecto2 />
                    <SliderProyecto3 />
                    {/* <SliderProyecto4 /> */}
                </Slider>
                <button className='boton-slider boton-slider-derecha' id='boton-slider-proyecto-derecha' onClick={goToNext}><img src={flechaderecha} alt="" /></button>

            </div>
        </div >
    )
}
