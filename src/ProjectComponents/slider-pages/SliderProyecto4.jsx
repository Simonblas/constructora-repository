import flechaderecha from "../../assets/flechaderechapalo.png";
import { Link } from "react-router-dom";

export const SliderProyecto4 = () => {
  return (
    <div className="container-proyecto">
      <h2 className="nombre-ciudad">Ciudad</h2>
      <h3 className="titulo-proyecto">Titulo del proyecto</h3>
      <p className="clase-proyecto">clase de proyecto</p>
      <Link to="proyecto4" className="conoce-mas">
        Conocé Más <img src={flechaderecha} alt="" />
      </Link>
    </div>
  );
};
