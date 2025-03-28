import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Formulario = () => {
  //creamos los hooks para el manejo de inputs
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_telefono: "",
    user_subject: "",
    user_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    user_telefono: "",
    user_subject: "",
    user_message: "",
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_ipirzwh", "template_nt7xxhe", form.current, {
        publicKey: "9thh4YyZG1-19ZwCm",
      })
      .then(
        (result) => {
          console.log("SUCCESS! " + result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Hubo un error al enviar el Email. Por favor, comunícate a nuestro Whatsapp!"
          );
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitFunction = (event) => {
    const validacionCorrecta = validarFormulario();

    if (validacionCorrecta) {
      event.preventDefault();
      sendEmail();
      alert(
        `Los datos enviados fueron:
        Nombre y apellido: ${formData.user_name}
        Correo: ${formData.user_email}
        Teléfono: ${formData.user_telefono}
        Asunto: ${formData.user_subject}
        Mensaje: ${formData.user_message}`
      );
    } else {
      event.preventDefault();
    }
  };

  function validarFormulario() {
    let validacionCorrecta = true;
    const errors = {};

    // Validación de texto
    if (formData.user_name.length === 0) {
      errors.user_name = "¡Este campo es requerido!";
      validacionCorrecta = false;
      document.getElementById("nombre").style.marginBottom = "0px";
    } else if (formData.user_name.length < 3) {
      errors.user_name = "¡Este campo debe tener al menos 3 caracteres!";
      validacionCorrecta = false;
      document.getElementById("nombre").style.marginBottom = "0px";
    } else {
      document.getElementById("nombre").style.marginBottom = "15px";
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      errors.user_email = "¡Ingrese un correo electrónico válido!";
      validacionCorrecta = false;
      document.getElementById("correo").style.marginBottom = "0px";
    } else {
      document.getElementById("correo").style.marginBottom = "15px";
    }

    // Validación de teléfono
    if (formData.user_telefono.length < 8) {
      errors.user_telefono =
        "¡El número de teléfono debe tener al menos 8 dígitos, incluyendo el código de área!";
      validacionCorrecta = false;
      document.getElementById("telefono").style.marginBottom = "0px";
    } else {
      document.getElementById("telefono").style.marginBottom = "15px";
    }

    // Validación de mensaje
    if (formData.user_message.length === 0) {
      errors.user_message = "¡Este campo es requerido!";
      validacionCorrecta = false;
      document.getElementById("mensaje").style.marginBottom = "0px";
    } else if (formData.user_message.length < 3) {
      errors.user_message = "¡Este campo debe tener al menos 3 caracteres!";
      validacionCorrecta = false;
      document.getElementById("mensaje").style.marginBottom = "0px";
    } else {
      document.getElementById("mensaje").style.marginBottom = "15px";
    }

    setFormErrors(errors);

    return validacionCorrecta; //esto dira si el formulario completo es o no valido
  }

  return (
    <div id="containerForm">
      <form ref={form} id="Form" onSubmit={submitFunction}>
        <h4 className="TitleForm">¿Necesitás un galpón o tinglado a medida?</h4>

        <label htmlFor="nombre">Nombre y apellido:</label>
        <input
          type="text"
          value={formData.user_name}
          onChange={handleChange}
          id="nombre"
          name="user_name"
          autoComplete="on"
        />
        {formErrors.user_name && (
          <div className="error" style={{ marginBottom: "5px" }}>
            {formErrors.user_name}
          </div>
        )}

        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          id="correo"
          name="user_email"
          autoComplete="on"
        />
        {formErrors.user_email && (
          <div className="error" style={{ marginBottom: "5px" }}>
            {formErrors.user_email}
          </div>
        )}

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="number"
          value={formData.user_telefono}
          onChange={handleChange}
          id="telefono"
          name="user_telefono"
          autoComplete="on"
        />
        {formErrors.user_telefono && (
          <div className="error" style={{ marginBottom: "5px" }}>
            {formErrors.user_telefono}
          </div>
        )}

        <label htmlFor="asunto">Asunto:</label>
        <input
          type="text"
          value={formData.user_subject}
          onChange={handleChange}
          id="asunto"
          name="user_subject"
          autoComplete="off"
        />
        {formErrors.user_subject && (
          <div className="error" style={{ marginBottom: "5px" }}>
            {formErrors.user_subject}
          </div>
        )}

        <label htmlFor="mensaje">Escribe tu mensaje:</label>
        <textarea
          value={formData.user_message}
          onChange={handleChange}
          name="user_message"
          id="mensaje"
          autoComplete="off"
        ></textarea>
        {formErrors.user_message && (
          <div
            className="error"
            style={{ marginBottom: "5px", fontWeight: "650" }}
          >
            {formErrors.user_message}
          </div>
        )}

        <button type="submit" id="submit" value={"Send"}>
          Enviar
        </button>
      </form>
    </div>
  );
};
