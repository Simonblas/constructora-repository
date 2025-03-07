import React from 'react'

export const HeroServicios = () => {
    return (
        <div className='container-hero-servicios'>
            <div className='container-info-hero-servicios container-izquierda' id='container-servicios-1'>
                <h3>Construcción</h3>
                <div className='container-p-servicios'>
                    <p>Viviendas, departamentos, comercios, industrias</p>
                </div>
            </div>
            <div className='container-info-hero-servicios container-derecha' id='container-servicios-2'>
                <h3>Topografía</h3>
                <div className='container-p-servicios'>
                    <p style={{ marginTop: "5px" }}>Replanteos, verticalizacion de edificios, asistencia de movimiento de suelos, nivelación</p>
                </div>
            </div>
            <div className='container-info-hero-servicios container-izquierda' id='container-servicios-3'>
                <h3>Hormigón</h3>
                <div className='container-p-servicios'>
                    <p>Losas, columnas, plateas, pisos alisados, vigas</p>
                </div>
            </div>
            <div className='container-info-hero-servicios container-derecha' id='container-servicios-4'>
                <h3>Estructuras metálicas</h3>
                <div className='container-p-servicios' >
                    <p>Tinglados, naves industriales, galpones</p>
                </div>
            </div>
        </div>
    )
}
