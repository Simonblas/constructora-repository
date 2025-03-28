import { useState } from "react";
import imgBeneficio from "../assets/png-menu-hamburguesa/img-ben.png";
import imgContacto from "../assets/png-menu-hamburguesa/img-cel.png";
import imgHome from "../assets/png-menu-hamburguesa/img-home.png";
import imgProyecto from "../assets/png-menu-hamburguesa/img-proy.png";
import imgServicio from "../assets/png-menu-hamburguesa/img-servicio.png";
import imgToggle from "../assets/png-menu-hamburguesa/img-toggle.png";
import { Link, useLocation } from "react-router-dom";

export const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleBlur = () => {
    setIsOpen(false); 
  };

  return (
    <nav id="navCelu">
      <button onClick={() => setIsOpen(!isOpen)} onBlur={handleBlur}>
        <img id="img-toggle" src={imgToggle} alt="" />
      </button>
      <ul
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.25s linear, visibility 0.25s linear",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: location.pathname === "/" ? "gray" : "",
            }}
          >
            <img src={imgHome} alt="" />
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/servicios"
            style={{
              color: location.pathname === "/servicios" ? "gray" : "",
            }}
          >
            <img src={imgServicio} alt="" />
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/beneficios"
            style={{
              color: location.pathname === "/beneficios" ? "gray" : "",
            }}
          >
            <img src={imgBeneficio} alt="" />
            Beneficios
          </Link>
        </li>
        <li>
          <Link
            to="/proyectos"
            style={{
              color: location.pathname === "/proyectos" ? "gray" : "",
            }}
          >
            <img src={imgProyecto} alt="" />
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            style={{
              color: location.pathname === "/contacto" ? "gray" : "",
            }}
          >
            <img src={imgContacto} alt="" />
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
