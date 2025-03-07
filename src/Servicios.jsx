import React from 'react'
import { InfoServicio } from './servicioComponents/InfoServicio'
import { HeroServicios } from './servicioComponents/HeroServicios'

export const Servicios = () => {

    const titulo1 = 'Topografía y Construcción :'
    const punto1 = '• Control de suelos y supervisión de obras de hormigón (>1000 m³).'
    const punto2 = '• Supervisión de terraplenes (4 km) y pavimentos rígidos (1 km).'
    const punto3 = '• Verificación de emplazamientos y armaduras estructurales.'

    const titulo2 = 'Manejo de Tecnología Avanzada :'
    const punto21 = '• GPS de precisión.'
    const punto22 = '• Estaciones totales, niveles ópticos y digitales.'
    const punto23 = ''

    const titulo3 = 'Experiencia en Diversos Sectores :'
    const punto31 = '• Vialidad.'
    const punto32 = '• Minería a cielo abierto.'
    const punto33 = '• Mecánica industrial: Montajes y reparaciones de maquinaria.'

    const titulo4 = 'Habilidades Complementarias :'
    const punto41 = '• Cálculo y análisis de datos para proyectos.'
    const punto42 = '• Relevamientos y replanteos topográficos.'
    const punto43 = '• Dirección de obra y logística en construcciones edilicias.'

    return (
        <div className='container-servicio'>

            <h1 className='title-servicio' id='titulo-servicios'>Servicios</h1>

            <HeroServicios />

            <h1 className='title-servicio'>Luciano</h1>

            <h2 className='subtitle-servicio'>Topógrafo, Ingeniero <br /> Analista de Datos y Proyector</h2>
            <div className='container-components-servicio'>
                <InfoServicio titulo={titulo1} punto1={punto1} punto2={punto2} punto3={punto3} />
                <InfoServicio titulo={titulo2} punto1={punto21} punto2={punto22} punto3={punto23} />
                <InfoServicio titulo={titulo3} punto1={punto31} punto2={punto32} punto3={punto33} />
                <InfoServicio titulo={titulo4} punto1={punto41} punto2={punto42} punto3={punto43} />
            </div>
        </div>
    )
}
