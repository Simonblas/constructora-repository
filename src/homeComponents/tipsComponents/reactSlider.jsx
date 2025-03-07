import React, { useRef } from 'react';
import Slider from "react-slick";

// Importar los estilos de Slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Importación de componentes
import { PortadaTips } from './portadaTips';
import { Tip1 } from './tip1';
import { Tip2 } from './tip2';
import { Tip3 } from './Tip3';
import flechaderecha from '../../assets/flechaderecha.png';
import flechaizquierda from '../../assets/flechaizquierda.png';

export const ReactSlider = React.forwardRef((props, ref) => {
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
        <div className='container-deslizante' >
            <button className='boton-slider boton-slider-izquierda' onClick={goToPrev} ><img src={flechaizquierda} alt="" /></button>
            <Slider className='slider' ref={sliderRef} {...settings} >
                <PortadaTips ref={ref}/>
                <Tip1 />
                <Tip2 />
                <Tip3 />
            </Slider>
            <button className='boton-slider boton-slider-derecha' onClick={goToNext}><img src={flechaderecha} alt="" /></button>
        </div>
    );
});
