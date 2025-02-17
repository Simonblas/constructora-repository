import React from 'react'
import { Formulario } from "./Formulario";
import { HeroText } from './HeroText';

export const HeroSection = () => {
    return (
        <div id='HeroSectionContainer'>
            <HeroText />
            <Formulario />
        </div>
    )
}
