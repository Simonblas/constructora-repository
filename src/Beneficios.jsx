import React from 'react'
import { InfoBeneficios } from './beneficiosComponentes/infoBeneficios';

const titulo1 = 'Personalización total:';
const titulo2 = 'Durabilidad asegurada:';
const titulo3 = 'Atención personalizada:';

const info1 = 'Diseñamos cada proyecto desde cero, según tus necesidades específicas. Nada de medidas estándar que no se ajusten a vos.';
const info2 = 'Utilizamos materiales de alta calidad para garantizar estructuras resistentes al paso del tiempo y las condiciones climáticas.';
const info3 = 'Trabajamos codo a codo con vos para que obtengas exactamente lo que necesitas.';

export const Beneficios = () => {
    return (
        <div className='container-beneficios'>
            <h1 className='titulo-beneficios'>Beneficios <span id='spanBold'>Clave</span></h1>
            <InfoBeneficios titulo={titulo1} info={info1} />
            <InfoBeneficios titulo={titulo2} info={info2} />
            <InfoBeneficios titulo={titulo3} info={info3} />
        </div>
    )
}
