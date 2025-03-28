import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Navegacion } from "./Navegacion.jsx";
import { Footer } from "./Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import logowhatsapp from "./assets/logowhatsapp.png";
import ScrollToTop from "./ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navegacion />
      <a href="https://wa.link/sq5tiv" target="_blank" id="whatsappBoton">
        <img src={logowhatsapp} alt="" />
      </a>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
