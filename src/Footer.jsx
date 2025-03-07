import React, { useEffect, useRef } from 'react'
import flechaderechapalo from "./assets/flechaderechapalo.png";
export const Footer = () => {

    const telefono = useRef()


    return (
        <footer className="footer">
            <h2>¿Tenés dudas o querés saber más?</h2>
            <div id='container-footer-info'>
                <div className="footer-info">
                    <p className='titulo-info'>Scalcini Construcciones</p>
                    <p className='text-info' >2281-584936</p>
                    <p className='text-info'>Azul</p>
                    <p className='text-info'>Buenos Aires</p>
                    <p className='text-info'>Argentina</p>
                </div>
                <a href="https://wa.link/sq5tiv" target='_blank'>
                    <button > Necesito asesoramiento<img src={flechaderechapalo} />
                    </button>
                </a>
            </div>
        </footer >
    );
};