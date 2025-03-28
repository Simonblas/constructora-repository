import React from 'react'
import checkvioleta from '../assets/checkvioleta.png';

export const InfoBeneficios = ({ titulo, info }) => {
    return (
        <div className='container-info-beneficios'>
            <img src={checkvioleta} alt="" />
            <h3 className='titulo-info-beneficios'>{titulo}</h3>
            <div className='container-texto-beneficios'>
                <p className='info-beneficios'>{info}</p>
            </div>
        </div>

    )
}
