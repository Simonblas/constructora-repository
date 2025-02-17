import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navegacion } from "./Navegacion.jsx";
import { Footer } from './Footer.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navegacion />
      <Footer />
    </BrowserRouter>
  </StrictMode >
); 
