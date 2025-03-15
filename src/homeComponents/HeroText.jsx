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
      <p className='HeroText'>En Constructora Scalcini, no solo levantamos estructuras, sino que damos vida a proyectos diseñados para durar. Con una visión enfocada en la calidad y la eficiencia, creamos espacios funcionales que responden a las necesidades de cada cliente.<br />
        <br />
        Desde la planificación hasta la entrega final, nuestro compromiso es claro; hacer que cada obra sea un reflejo de confianza, solidez y excelencia.</p>
      <button className='btn-home' onClick={scrollToElement}>
        <p>¡Nuestros Tips!</p>
        <img src={flechaabajohome} alt="" />
      </button>
    </div>
  )
}
