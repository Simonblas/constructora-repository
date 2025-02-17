import React from 'react'


// logica sobre el manejo del formulario aqui




export const Formulario = () => {
  return (
    <div id='containerForm'>
      <form id='Form' action="enviarMail">
        <h4 className='TitleForm'>¿Necesitás un galpón o tinglado a medida?</h4>

        <label htmlFor="nombre">Nombre y apellido:</label>
        <input type="text" id='nombre' name='nombre' minlength="3" required autoComplete='on' />
        <div class="error" id="errorNombre"></div>

        <label htmlFor="correo">Correo:</label>
        <input type="text" id='correo' name='correo' minlength="3" required autoComplete='on' />
        <div class="error" id="errorCorreo"></div>

        <label htmlFor="asunto">Asunto:</label>
        <input type="textArea" id='asunto' name='asunto' minlength="3" required autoComplete='off' />
        <div class="error" id="errorAsunto"></div>

        <label htmlFor="mensaje">Escribe tu mensaje:</label>
        <textarea style={{ resize: 'none' }} name="mensaje" id='mensaje' minlength="3" required autoComplete='off'></textarea>
        <div class="error" id="errorMensaje"></div>

        <button type="submit" id='submit'>Enviar</button>
      </form >
    </div>
  )
}
