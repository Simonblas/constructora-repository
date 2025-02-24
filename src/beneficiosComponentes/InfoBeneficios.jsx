import React from 'react'

export const InfoBeneficios = ({ titulo, info }) => {
    return (
        <div className='container-info-beneficios'>
            <div className='img-info-beneficio'></div>
            <h3 className='titulo-info-beneficios'>{titulo}</h3>
            <div className='container-texto-beneficios'>
                <p className='info-beneficios'>{info}</p>
            </div>
        </div>

    )
}
