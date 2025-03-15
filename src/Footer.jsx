import React, { useEffect, useRef } from 'react'
import flechaderechapalo from "./assets/flechaderechapalo.png";
export const Footer = () => {

    const telefono = useRef()


    return (
        <footer className="footer">
            <h2>¿Tenés dudas o querés saber más?</h2>
            <a href="https://wa.link/sq5tiv" target='_blank'>
                <button > Necesito asesoramiento<img src={flechaderechapalo} />
                </button>
            </a>
            <div className='footer-info'>
                <h5>Scalcini Construcciones</h5>
                <p >
                    2281-584936 <br />
                    Azul <br />
                    Buenos Aires <br />
                    Argentina</p>
            </div>
        </footer >
    );
};