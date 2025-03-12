import React from 'react'
import flechaderecha from '../../assets/flechaderechapalo.png';
import { Link } from 'react-router-dom';

export const SliderProyecto2 = () => {
    return (
        <div className='container-proyecto' id='slider-proyecto-2'>
            <h2 className='nombre-ciudad'>Azul</h2>
            <h3 className='titulo-proyecto'>Estudio de Arquitectura Montero-Scalesa</h3>
            <p className='clase-proyecto'>Nave Industrial 860 m²</p>
            <Link to='proyecto2' className='conoce-mas'>Conocé Más <img src={flechaderecha} alt="" /></Link>
        </div>
    )
}
