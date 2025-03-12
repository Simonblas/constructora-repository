import React from 'react'
import imgcomohacemos from '../assets/imgcomohacemos.jpeg'
import { ReactSlider } from './tipsComponents/reactSlider';

export const ComoLoHacemos = () => {


    return (
        <section className='container-como-hacemos'>
            <div className='contenedor-imagen-como-hacemos'>
                <img className='img-como-hacemos' src={imgcomohacemos} alt="" />
            </div>
            <div className='linea-medio'></div>
            <div className='container-section-info-como-hacemos'>
                <div className='container-text'>
                    <h3 className='como-hacemos-title'>¿Como lo  <span className='spanBold'>hacemos</span>?</h3>
                    <p className='como-hacemos-text'>Trabajamos con hormigón de alta calidad y maquinaria
                        especializada para garantizar resultados duraderos y
                        resistentes. Con técnicas modernas, logramos
                        superficies uniformes y listas para soportar el paso del
                        tiempo. Cada obra que entregamos está diseñada para
                        cumplir con tus expectativas y superar los
                        estándares de calidad.</p>
                    <div className='linea-como-hacemos'></div>
                </div>
                <ReactSlider />
            </div>
        </section>
    )
}