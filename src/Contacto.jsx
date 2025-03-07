import React from 'react'
import whatsappcontacto from './assets/whatsappcontacto.png'
import instagramcontacto from './assets/instagramcontacto.png'
import facebookcontacto from './assets/facebookcontacto.png'
import linkedincontacto from './assets/linkedincontacto.png'
import { Formulario } from "./homeComponents/Formulario";
import { MapaGoogle } from './contactoComponentes/MapaGoogle';
import { BotonMapaGoogle } from './contactoComponentes/BotonMapaGoogle';

export const Contacto = () => {
    return (
        <div className='container-contacto'>
            <h1> <span style={{ WebkitTextStroke: '2px #00CEFF' }}>C</span>ontacto</h1>
            <section className='container-hero-contacto'>
                <div className='container-mapa'>
                    {/* <BotonMapaGoogle /> */}
                    {/* <MapaGoogle /> */}
                </div>
                <Formulario />
            </section>
            <div className='container-redes'>
                <div className='linea-redes-izquierda'></div>
                <img src={whatsappcontacto} alt="" />
                <img src={instagramcontacto} alt="" />
                <img src={facebookcontacto} alt="" />
                <img src={linkedincontacto} alt="" />
                <div className='linea-redes-derecha'></div>
            </div>
        </div >

    )
}
