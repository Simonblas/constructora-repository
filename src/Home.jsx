import React from 'react'
import { HeroSection } from './homeComponents/HeroSection'
import { QuienesSomos } from './homeComponents/QuienesSomos'
import { QueHacemos } from './homeComponents/QueHacemos'
import { ComoLoHacemos } from './homeComponents/ComoLoHacemos'

export const Home = () => {

  return (
    <div id='HomeContainer'>
      <h1 className='Title'>Scalcini Constructora</h1>
      <h2 className='Subtitle'>A la medida de tus proyectos</h2>
      <HeroSection />
      <QuienesSomos />
      <QueHacemos />
      <ComoLoHacemos />
    </div>
  )
}
