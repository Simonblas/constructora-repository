import React from 'react'
import { HeroText } from './HeroText';
import { HeroPick } from './HeroPick';

export const HeroSection = () => {
    return (
        <div id='HeroSectionContainer'>
            <HeroText />
            <HeroPick />
        </div>
    )
}