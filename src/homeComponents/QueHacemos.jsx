import React from 'react'
import quehacemos from "../assets/quehacemos.jpg";
import fondohacemos1 from "../assets/fondohacemos1.jpg";
import fondohacemos2 from "../assets/fondohacemos2.jpg";
import fondohacemos3 from "../assets/fondohacemos3.jpg";

export const QueHacemos = () => {
    return (
        <section className='container-que-hacemos'>

            <div className='container-que-hacemos-text'>

                <h3 className='hacemos-title'>¿Que <span className='spanBold'>hacemos</span>?</h3>

                <div className='container-cards-hacemos'>
                    <div className='container-hijo-hacemos'>
                        <img className='hacemos-img' src={fondohacemos1} alt="" />
                        <p className='hacemos-text'>Diseñamos estructuras personalizadas.</p>
                    </div>

                    <div className='container-hijo-hacemos'>
                        <img className='hacemos-img' src={fondohacemos2} alt="" />
                        <p className='hacemos-text'>Construimos con materiales de alta calidad que garantiza la durabilidad.</p>
                    </div>

                    <div className='container-hijo-hacemos'>
                        <img className='hacemos-img' src={fondohacemos3} alt="" />
                        <p className='hacemos-text'>Nos adaptamos a tus tiempos.</p>
                    </div>
                </div>

            </div>
            <div className='linea abajo'></div>
            <img className='img-principal' src={quehacemos} alt="" />

        </section>
    )
}
