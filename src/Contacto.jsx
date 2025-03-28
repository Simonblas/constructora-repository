import instagramcontacto from "./assets/instagramcontacto.png";
import facebookcontacto from "./assets/facebookcontacto.png";
import linkedincontacto from "./assets/linkedincontacto.png";
import { Formulario } from "./homeComponents/Formulario";
import { MapaGoogle } from "./contactoComponentes/MapaGoogle";

export const Contacto = () => {
  return (
    <div className="container-contacto">
      <h1>
        <span style={{ WebkitTextStroke: "2px #00CEFF" }}>C</span>ontacto
      </h1>
      <section className="container-hero-contacto">
        <div className="container-mapa">
          <MapaGoogle />
        </div>
        <Formulario />
      </section>
      <div className="container-redes">
        <div className="linea-redes-izquierda"></div>
        <a
          href="https://www.instagram.com/scalcini.constructora?igsh=MnU0a285c3RqanZ1&utm_source=qr"
          target="_blank"
        >
          <img src={instagramcontacto} alt="" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61571912578351&locale=es_LA"
          target="_blank"
        >
          <img src={facebookcontacto} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/luciano-scalcini-b73a7ab0/?originalSubdomain=ar"
          target="_blank"
        >
          <img src={linkedincontacto} alt="" />
        </a>
        <div className="linea-redes-derecha"></div>
      </div>
    </div>
  );
};
