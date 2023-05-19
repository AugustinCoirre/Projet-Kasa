import '../styles/Banner.css';
import React from 'react';

function Banner({ imgBanner, textBanner }) {
    return (
        <>
            <div className="composant-banner">
                <img src={imgBanner} alt="Photo bord de mer" />
                <p>{textBanner}</p>
            </div>
        </>
    );
}

export default Banner;
