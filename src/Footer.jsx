import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
            <h2>¿Tenés dudas o querés saber más?</h2>
            <button ><a href="https://wa.link/sq5tiv" target='_blank'>Necesito asesoramiento</a> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvtlMENhDAMBIdOoBOuEzqBqwRRCa3QCchSHgjQ2d6DH/nkE80k61UqHl7Vw3xegZuwElEPTMDi0iE9A4MPBf6JSLIvqIEZsN1e4EqyAkslJVEEKYkqCEt+CdZIS3ZnLmdyt6A5XurfiEagLY06wU2mCqxJLlwVhOGKIAVXBF2JxhpzmfkdQ7b/6ButsDrkKF9u0SsIJ+Ae3AArIiEZqLDdhgAAAABJRU5ErkJggg==" />
            </button>
            <div className="footer-info">
                <p className='titulo-info'>Scalcini Construcciones</p>
                <p className='text-info'>2281-584936</p>
                <p className='text-info'>Azul</p>
                <p className='text-info'>Buenos Aires</p>
                <p className='text-info'>Argentina</p>
            </div>
        </footer>
    );
};