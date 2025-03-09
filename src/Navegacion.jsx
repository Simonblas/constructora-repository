import React from 'react'
import { Link, Route, Routes } from 'react-router';
import { Beneficios } from './Beneficios.jsx';
import { Proyectos } from './Proyectos.jsx';
import { Servicios } from "./Servicios.jsx";
import { Contacto } from './Contacto.jsx';
import { Home } from './Home.jsx';
import { Proyecto1 } from './ProjectComponents/pages/Proyecto1.jsx';
import { Proyecto2 } from './ProjectComponents/pages/Proyecto2.jsx';
import { Proyecto3 } from './ProjectComponents/pages/Proyecto3.jsx';
import { Proyecto4 } from './ProjectComponents/pages/Proyecto4.jsx';
import logo from "./assets/logo.png";

export const Navegacion = () => {
    return (
        <>

            <header>
                <div className='ContainerLogo'>
                    <img id='logo' src={logo} alt="" />
                    <p className='LogoText'>Scalcini <br /> Constructora</p>
                </div>
                <nav className='barraNav'>
                    <Link to='/' className='linksNav'>
                        Inicio
                    </Link>
                    <Link to='/servicios' className='linksNav'>
                        Servicios
                    </Link>
                    <Link to='/beneficios' className='linksNav'>
                        Beneficios
                    </Link>
                    <Link to='/proyectos' className='linksNav'>
                        Proyectos
                    </Link>
                    <Link to='/contacto' className='linksNav'>
                        Contacto
                    </Link>
                </nav>
            </header >

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/beneficios' element={<Beneficios />} />
                <Route path='/proyectos' element={<Proyectos />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/contacto' element={<Contacto />} />
                {/* rutas hijas de proyectos */}
                <Route path='/proyectos/proyecto1' element={<Proyecto1 />} />
                <Route path='/proyectos/proyecto2' element={<Proyecto2 />} />
                <Route path='/proyectos/proyecto3' element={<Proyecto3 />} />
                <Route path='/proyectos/proyecto4' element={<Proyecto4 />} />
            </Routes>

        </>
    )
}
