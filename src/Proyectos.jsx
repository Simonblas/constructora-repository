import React from 'react'
import { Link } from 'react-router-dom';

export const Proyectos = () => {
    return (
        <>

            <div className='containerProyectos'>
                <Link to='proyecto1' className='ProjectCard'>
                    <img className='imgProjectCard' src="./src/assets/fondo-home.jpeg" alt="" />
                </Link>
                <Link to='proyecto2' className='ProjectCard'>
                    <img className='imgProjectCard' src="./src/assets/fondo-home.jpeg" alt="" />
                </Link>
                <Link to='proyecto3' className='ProjectCard'>
                    <img className='imgProjectCard' src="./src/assets/fondo-home.jpeg" alt="" />
                </Link>
                <Link to='proyecto4' className='ProjectCard'>
                    <img className='imgProjectCard' src="./src/assets/fondo-home.jpeg" alt="" />
                </Link>
            </div>

        </>
    )
}
