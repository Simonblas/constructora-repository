import React from 'react'
import imagentemporal from "../assets/imagentemporal.jpeg";
export const QuienesSomos = () => {
    return (
        <section className='container-quienes-somos'>
            <img src={imagentemporal} alt="" />
            <div className='container-quienes-text'>
                <h3 className='quienes-title'><span className='spanBold'>¿Quiénes </span>somos?</h3>
                <p className='quienes-text'>Somos Constructora Scalcini, una empresa que
                    construye más que estructuras: creamos soluciones
                    duraderas adaptadas a las necesidades de nuestros
                    clientes. Cada miembro de Scalcini aporta dedicación y
                    experiencia. Desde los cimientos hasta los detalles
                    finales, nuestro compromiso es entregar proyectos que
                    combinen calidad y funcionalidad.</p>
            </div>
            <div className='linea abajo-derecha'></div>
        </section>
    )
}
