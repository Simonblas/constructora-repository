import React from 'react'
import { HeroSection } from './homeComponents/HeroSection'


export const Home = () => {
  return (
    <div id='HomeContainer'>
      <h1 className='Title'>Scalcini Constructora</h1>
      <h2 className='Subtitle'>A la medida de tus proyectos</h2>
      <HeroSection />
    </div>
  )
}
