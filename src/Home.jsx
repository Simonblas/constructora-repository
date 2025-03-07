import React, { useEffect, useRef } from 'react'
import { HeroSection } from './homeComponents/HeroSection'
import { QuienesSomos } from './homeComponents/QuienesSomos'
import { QueHacemos } from './homeComponents/QueHacemos'
import { ComoLoHacemos } from './homeComponents/ComoLoHacemos'
import flechaabajohome from './assets/Flechabajohome.png'

export const Home = () => {
  const nuestrosTipsRef = useRef(null);
  // funcion que cuando se hace click en el boton te lleva al elemento
  const scrollToElement = () => {
    if (nuestrosTipsRef.current) {
      const topPosition = nuestrosTipsRef.current.getBoundingClientRect().top + window.pageYOffset;  // Obtener la posición del elemento
      window.scrollTo({
        top: topPosition - 400,  // Restar 500px a la posición
        behavior: 'smooth',
      });
    }
  }

  return (
    <div id='HomeContainer'>
      <h1 className='Title'>Scalcini Constructora</h1>
      <h2 className='Subtitle'>A la medida de tus proyectos</h2>
      <HeroSection />
      <button className='btn-home' onClick={scrollToElement}>
        <p>¡Nuestros Tips!</p>
        <img src={flechaabajohome} alt="" />
      </button>
      <QuienesSomos />
      <QueHacemos />
      <ComoLoHacemos ref={nuestrosTipsRef} />
    </div>
  )
}
