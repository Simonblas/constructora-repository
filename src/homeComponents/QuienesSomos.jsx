import imagentemporal from "../assets/imagentemporal.jpeg";
import quehacemos from "../assets/quehacemos.jpg";

export const QuienesSomos = () => {
  return (
    <section className="container-quienes-somos">
      <h3 className="quienes-title-mobile">
        <span className="spanBold">¿Quiénes </span>somos?
      </h3>

      <div className="separador-mobile">
        <p className="quienes-text-mobile">
          Somos Constructora Scalcini, una empresa que construye más que
          estructuras: creamos soluciones duraderas adaptadas a las necesidades
          de nuestros clientes. Cada miembro de Scalcini aporta dedicación y
          experiencia. Desde los cimientos hasta los detalles finales, nuestro
          compromiso es entregar proyectos que combinen calidad y funcionalidad.
        </p>

        <img src={quehacemos} alt="" />
      </div>
      <img src={imagentemporal} id="img-pc-quienes" alt="" />
      <div className="container-quienes-text">
        <h3 className="quienes-title">
          <span className="spanBold">¿Quiénes </span>somos?
        </h3>

        <p className="quienes-text">
          Somos Constructora Scalcini, una empresa que construye más que
          estructuras: creamos soluciones duraderas adaptadas a las necesidades
          de nuestros clientes. Cada miembro de Scalcini aporta dedicación y
          experiencia. Desde los cimientos hasta los detalles finales, nuestro
          compromiso es entregar proyectos que combinen calidad y funcionalidad.
        </p>
      </div>
      <div className="linea abajo-derecha"></div>
      <div className="linea-mobile-hero-izquierda"></div>
      <div className="linea-mobile-hero-derecha"></div>
    </section>
  );
};
