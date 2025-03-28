import { Link, Navigate, Route, Routes, useLocation } from "react-router";
import { Beneficios } from "./Beneficios.jsx";
import { Proyectos } from "./Proyectos.jsx";
import { Servicios } from "./Servicios.jsx";
import { Contacto } from "./Contacto.jsx";
import { Home } from "./Home.jsx";
import { Proyecto1 } from "./ProjectComponents/pages/Proyecto1.jsx";
import { Proyecto2 } from "./ProjectComponents/pages/Proyecto2.jsx";
import { Proyecto3 } from "./ProjectComponents/pages/Proyecto3.jsx";
import { Proyecto4 } from "./ProjectComponents/pages/Proyecto4.jsx";
import logo from "./assets/logo.png";
import { MenuToggle } from "./MenuToggleComponents/MenuToggle.jsx";

export const Navegacion = () => {
  const location = useLocation(); // Usamos useLocation para obtener la ruta actual

  return (
    <>
      <header>
        <div className="ContainerLogo">
          <img id="logo" src={logo} alt="" />
          <p className="LogoText">
            Scalcini <br /> Constructora
          </p>
        </div>
        <MenuToggle />
        <nav className="barraNav">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "linksNav active" : "linksNav"
            }
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={
              location.pathname === "/servicios"
                ? "linksNav active"
                : "linksNav"
            }
          >
            Servicios
          </Link>
          <Link
            to="/beneficios"
            className={
              location.pathname === "/beneficios"
                ? "linksNav active"
                : "linksNav"
            }
          >
            Beneficios
          </Link>
          <Link
            to="/proyectos"
            className={
              location.pathname === "/proyectos"
                ? "linksNav active"
                : "linksNav"
            }
          >
            Proyectos
          </Link>
          <Link
            to="/contacto"
            className={
              location.pathname === "/contacto" ? "linksNav active" : "linksNav"
            }
          >
            Contacto
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/*" element={<Navigate to="/" />} />
        {/* rutas hijas de proyectos */}
        <Route path="/proyectos/proyecto1" element={<Proyecto1 />} />
        <Route path="/proyectos/proyecto2" element={<Proyecto2 />} />
        <Route path="/proyectos/proyecto3" element={<Proyecto3 />} />
        <Route path="/proyectos/proyecto4" element={<Proyecto4 />} />
      </Routes>
    </>
  );
};
