import React from 'react'
import './proyecto3.css'
import imagen1proyecto3 from "../../assets/imagen1proyecto3.jpg";
import imagen2proyecto3 from "../../assets/imagen2proyecto3.jpg";
import imagen3proyecto3 from "../../assets/imagen3proyecto3.jpg";
import imagen4proyecto3 from "../../assets/imagen4proyecto3.jpg";
import imagen5proyecto3 from "../../assets/imagen5proyecto3.jpg";
import imagen6proyecto3 from "../../assets/imagen6proyecto3.jpg";

export const Proyecto3 = () => {
  return (
    <section className='container-proyecto3'>

      <h2>Frigorífico <span className='spanBold'>DEVESA</span></h2>

      <div className='container-1-proyecto3'>

        <div className='container-text-1-proyecto3'>
          <h4 className='spanBold'>150 m de Veredas Peatonales</h4>
          <p>Se llevó a cabo la construcción de 150 metros lineales de veredas peatonales,
            utilizando materiales de alta resistencia para garantizar su durabilidad ante
            el tránsito constante y las condiciones climáticas.</p>
        </div>

        <img src={imagen1proyecto3} alt="" />

      </div>


      <div className='container-2-proyecto3'>

        <div className='container-fotos-proyecto3'>

          <img src={imagen2proyecto3} alt="" />
          <img src={imagen3proyecto3} alt="" />
          <p>Antes</p>
          <p>Después</p>
          <img src={imagen4proyecto3} alt="" />
          <img src={imagen5proyecto3} alt="" />

        </div>

        <div className='container-text2-proyecto3'>


          <h4 className='spanBold'>Remodelación en Oficinas</h4>
          <p>Se realizaron trabajos de reacondicionamiento y modernización de las oficinas
            dentro del frigorífico, optimizando la distribución del espacio y mejorando
            su funcionalidad.</p>

          <h4 className='spanBold'>Intervenciones realizadas :</h4>
          <ul>
            <li className='li-arriba'>Colocación de piso vinílico sistema CLICK, proporcionando un acabado moderno,
              resistente y de fácil mantenimiento.</li>
            <li className='li-medio'>Divisiones en Durlock, permitiendo una configuración flexible y
              eficiente del espacio.</li>
            <li>Aplicación de pintura en interiores, renovando la estética y generando
              un ambiente más profesional.</li>
          </ul>


        </div>

      </div>


      <div className='container-3-proyecto3'>
        <div className='container-text3-proyecto3'>
          <h4 className='spanBold'>Tareas realizadas :</h4>
          <ul>
            <li>Cambio de cielorraso desmontable, mejorando la iluminación y la acústica del espacio.</li>
            <li>Pintura integral, renovando el aspecto general de las oficinas y otorgando una mayor sensación de amplitud y modernidad.</li>
          </ul>
        </div>
        <img src={imagen6proyecto3} alt="" />
      </div>

    </section>
  )
}
