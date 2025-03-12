import React from 'react'
import flechaabajohome from '../assets/Flechabajohome.png'

export const HeroText = () => {
  // funcion que cuando se hace click en el boton te lleva al elemento
  const scrollToElement = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight; // Punto máximo de scroll

    window.scrollTo({
      top: Math.min(maxScroll, window.scrollY + (maxScroll - window.scrollY - 400)), // Se mueve sin pasarse del máximo
      behavior: 'smooth',
    });
  };
  return (
    <div id='HeroTextContainer'>
      <h3 className='HeroTitle'><span className='spanBold'>Construir</span> con vos es nuestra mayor satisfacción.</h3>
      <p className='HeroText'>Somos Constructora Scalcini, una empresa que construye más que estructuras: creamos soluciones duraderas adaptadas a las necesidades de nuestros clientes. <br />
        <br />
        Cada miembro de Scalcini aporta dedicación y experiencia. <br />
        <br />
        Desde los cimientos hasta los detalles finales, nuestro compromiso es entregar proyectos que combinen calidad y funcionalidad</p>
      <button className='btn-home' onClick={scrollToElement}>
        <p>¡Nuestros Tips!</p>
        <img src={flechaabajohome} alt="" />
      </button>
    </div>
  )
}
