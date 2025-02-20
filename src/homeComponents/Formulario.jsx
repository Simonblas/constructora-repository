import React, { useState } from 'react'




export const Formulario = () => {

  // logica sobre el manejo del formulario aqui

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Email enviado con exito!')


    //aqui podria hacerse el llamado a la api de gmail
    console.log({ nombre, correo, asunto, mensaje });



    //luego de enviar el formulario, lo reseteamos
    setNombre('')
    setCorreo('')
    setAsunto('')
    setMensaje('')
  }

  //creamos los hooks para el manejo de inputs
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')



  return (
    <div id='containerForm'>
      <form id='Form' action="enviarMail" onSubmit={handleSubmit}>
        <h4 className='TitleForm'>¿Necesitás un galpón o tinglado a medida?</h4>

        <label htmlFor="nombre">Nombre y apellido:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} id='nombre' name='nombre' minLength="3" required autoComplete='on' />
        <div className="error" id="errorNombre"></div>

        <label htmlFor="correo">Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} id='correo' name='correo' minLength="3" required autoComplete='on' />
        <div className="error" id="errorCorreo"></div>

        <label htmlFor="asunto">Asunto:</label>
        <input type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)} id='asunto' name='asunto' minLength="3" required autoComplete='off' />
        <div className="error" id="errorAsunto"></div>

        <label htmlFor="mensaje">Escribe tu mensaje:</label>
        <textarea style={{ resize: 'none' }} value={mensaje} onChange={(e) => setMensaje(e.target.value)} name="mensaje" id='mensaje' minLength="3" required autoComplete='off'></textarea>
        <div className="error" id="errorMensaje"></div>

        <button type="submit" id='submit'>Enviar</button>
      </form >
    </div>
  )
}
