import React from 'react';
import { InfoBeneficios } from './BeneficiosComponentes/InfoBeneficios';
import flechaderecha from "./assets/flechaderechahome.svg";

const beneficios = [
    {
        titulo: 'Personalización total :',
        info: 'Diseñamos cada proyecto desde cero, según tus necesidades específicas. Nada de medidas estándar que no se ajusten a vos.',
    },
    {
        titulo: 'Durabilidad asegurada :',
        info: 'Utilizamos materiales de alta calidad para garantizar estructuras resistentes al paso del tiempo y las condiciones climáticas.',
    },
    {
        titulo: 'Atención personalizada :',
        info: 'Trabajamos codo a codo con vos para que obtengas exactamente lo que necesitas.',
    },
];

export const Beneficios = () => {
    return (
        <div className='container-beneficios'>
            <h1 className='titulo-beneficios'>Beneficios <span className='spanBold'>clave</span></h1>

            {/* Contenedor para los beneficios alineados */}
            <div className='beneficios-grid'>
                {beneficios.map((item, index) => (
                    <InfoBeneficios key={index} titulo={item.titulo} info={item.info} />
                ))}
            </div>

            {/* Botón con enlace */}
            <a href="https://wa.link/sq5tiv" target='_blank' rel='noopener noreferrer'>
                <button className='boton-presupuesto'>
                    Quiero mi presupuesto especializado <img src={flechaderecha} alt="" />
                </button>
            </a>


            {/* Beneficios adicionales */}
            <div className="extra-beneficios">
                <div className="extra-item">
                    <h3>Proyectos a Medida</h3>
                    <p>Galpones y tinglados llave en mano, diseñados sin limitaciones de tamaño.</p>
                </div>
                <div className="extra-item" id='borde-vertical-medio'>
                    <h3>Flexibilidad y Compromiso</h3>
                    <div id='linea-horizontal-beneficios'></div>
                    <p>Nos adaptamos a las necesidades de cada cliente, ofreciendo soluciones personalizadas.</p>
                </div>
                <div className="extra-item">
                    <h3>Procesos Eficientes</h3>
                    <p>Nos encargamos de todo, desde la fabricación hasta el montaje, con obras rápidas y limpias.</p>
                </div>
            </div>
        </div>
    );
};
