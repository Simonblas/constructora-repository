import flechaderecha from "../../assets/flechaderechapalo.png";
import { Link } from "react-router-dom";

export const SliderProyecto3 = () => {
  return (
    <div className="container-proyecto" id="slider-proyecto-3">
      <h2 className="nombre-ciudad">Azul</h2>
      <h3 className="titulo-proyecto">Frigorífico DEVESA</h3>
      <p className="clase-proyecto">Trabajos varios</p>
      <Link to="proyecto3" className="conoce-mas">
        Conocé Más <img src={flechaderecha} alt="" />
      </Link>
    </div>
  );
};
