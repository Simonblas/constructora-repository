import React from 'react'
import flechaderecha from '../../assets/flechaderechapalo.png';
import { Link } from 'react-router-dom';

export const SliderProyecto1 = () => {
    return (
        <div className='container-proyecto' id='slider-proyecto-1' >
            <h2 className='nombre-ciudad'>Azul</h2>
            <h3 className='titulo-proyecto'>Distribuidora “El Milagro”</h3>
            <p className='clase-proyecto'>Nave Industrial 725 m²</p>
            <Link to='proyecto1' className='conoce-mas' >Conocé Más <img src={flechaderecha} alt="" /></Link>
        </div>
    )
}