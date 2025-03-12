import React from 'react'
import { HeroText } from './HeroText';
import { HeroPick } from './HeroPick';


export const HeroSection = () => {

    return (
        <section id='HeroSectionContainer'>
            <HeroText />
            <HeroPick />
        </section>
    )
}