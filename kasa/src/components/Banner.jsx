import '../styles/Banner.css';
import React from 'react';
import imagebanner from '../assets/fond-banner.png';

function Banner() {
    return (
        <>
            <div className="composant-banner">
                <img src={imagebanner} alt="Photo bord de mer" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </>
    );
}

export default Banner;
