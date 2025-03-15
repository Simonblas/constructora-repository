import React from 'react'
import fotoprincipal from "../../assets/fotoprincipalproyecto1.jpeg";
import foto1proyecto1 from "../../assets/foto1proyecto1.jpg";
import foto2proyecto1 from "../../assets/foto2proyecto1.jpg";
import foto3proyecto1 from "../../assets/foto3proyecto1.jpg";
import foto4proyecto1 from "../../assets/foto4proyecto1.jpg";
import './proyecto1.css'

export const Proyecto1 = () => {
  return (
    <section className='container-proyecto-1'>

      <h2><span className='spanBold'>Distribuidora</span> "El Milagro"</h2>

      <div className='container-1-proyecto-1'>

        <div className='container-text-proyecto-1'>

          <h3 className='spanBold'>Nave Industrial 725 m²</h3>

          <p>En esta obra, nos encargamos de la planificación integral
            del proyecto, abarcando desde la elaboración del diseño
            hasta la ejecución final. Se llevó a cabo el cálculo
            estructural de la nave, asegurando una estructura
            metálica resistente y funcional.</p>

          <p>Este proyecto destaca por su solidez estructural, adaptabilidad
            a las necesidades del cliente y calidad en cada detalle.</p>

        </div>

        <img src={fotoprincipal} alt="imagen" />

      </div>


      <div className='container-2-proyecto-1'>

        <div className='container-text-2-proyecto-1'>

          <h4><span className='spanBold'>Tareas realizadas:</span></h4>

          <ul>
            <li>Dirección y supervisión de obra, garantizando el cumplimiento de plazos y calidad.</li>
            <li>Supervisión de movimientos de suelo, asegurando una base sólida y estable.</li>
            <li>Construcción de veredas exteriores, mejorando la accesibilidad y el entorno de la nave.</li>
            <li>Diseño y construcción de oficinas internas, integradas a la operatividad de la distribuidora.</li>
            <li>Ejecución de losa de 80 m², brindando mayor resistencia y aprovechamiento del espacio.</li>
            <li>Ejecución de piso de hormigón alisado, diseñado para soportar cargas pesadas y optimizar la operatividad del espacio.</li>
          </ul>

        </div>

        <div className='container-fotos-proyecto-1'>
          <img src={foto1proyecto1} alt="" />
          <img src={foto2proyecto1} alt="" />
          <img src={foto3proyecto1} alt="" />
          <img src={foto4proyecto1} alt="" />
        </div>

      </div>
    </section>
  )
}
