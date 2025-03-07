import React from 'react'
import imagentip2 from "../../assets/imagentip2.jpg";

export const Tip2 = () => {
  return (
    <div className='container-tips' id='container-tip2'>

      <div id='div-1-tip2'>
        <p id='p1-tip2'>El <b>espacio</b> debe ajustarse a tus necesidades <b>actuales</b> y <b>futuras</b></p>
        <p id='num-tip2'>02.</p>
      </div>
      <h3 className='title-tip2'><span className='spanBold'>Tamaño</span> adecuado</h3>
      <div id='div-2-tip2'>
        <img src={imagentip2} alt="" />
        <p>Pensá en las <b>dimensiones</b> necesarias para <b>almacenamiento</b>, <b>maquinaria</b> y <b>movimiento</b> interno sin saturar el <b>área.</b></p>
      </div>
    </div>
  )
}
