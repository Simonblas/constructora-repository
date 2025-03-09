import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';



export const Formulario = () => {

  //creamos los hooks para el manejo de inputs
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_telefono: "",
    user_subject: "",
    user_message: ""
  })
  // logica sobre el manejo del formulario aqui



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipirzwh', 'template_nt7xxhe', form.current, {
      publicKey: '9thh4YyZG1-19ZwCm',
    })
      .then(
        (result) => {
          console.log('SUCCESS! ' + result.text);
          alert('Email enviado con exito!')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Hubo un error al enviar el Email. Por favor, comunícate a nuestro Whatsapp!')
        },
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }



  return (
    <div id='containerForm'>
      <form ref={form} id='Form' onSubmit={sendEmail}>
        <h4 className='TitleForm'>¿Necesitás un galpón o tinglado a medida?</h4>

        <label htmlFor="nombre">Nombre y apellido:</label>
        <input type="text" value={formData.name} onChange={handleChange} id='nombre' name="user_name" minLength="3" required autoComplete='on' />
        <div className="error" id="errorNombre"></div>

        <label htmlFor="correo">Correo:</label>
        <input type="email" value={formData.email} onChange={handleChange} id='correo' name="user_email" minLength="3" required autoComplete='on' />
        <div className="error" id="errorCorreo"></div>

        <label htmlFor="telefono">Teléfono:</label>
        <input type="number" value={formData.telefono} onChange={handleChange} id='telefono' name="user_telefono" minLength="7" required autoComplete='on' />
        <div className="error" id="errorTelefono"></div>

        <label htmlFor="asunto">Asunto:</label>
        <input type="text" value={formData.subject} onChange={handleChange} id='asunto' name="user_subject" minLength="3" required autoComplete='off' />
        <div className="error" id="errorAsunto"></div>

        <label htmlFor="mensaje">Escribe tu mensaje:</label>
        <textarea style={{ resize: 'none' }} value={formData.message} onChange={handleChange} name="user_message" id='mensaje' minLength="3" required autoComplete='off'></textarea>
        <div className="error" id="errorMensaje"></div>

        <button type="submit" id='submit' value={"Send"}>Enviar</button>
      </form >
    </div>
  )
}