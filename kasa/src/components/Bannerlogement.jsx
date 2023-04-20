import '../styles/Bannerlogement.css';
import React from 'react';
import imagebanner from '../assets/img-test.png';

function Bannerlogement() {
    return (
        <>
            <div className="composant-bannerlogement">
                <img src={imagebanner} alt="Photo bord de mer" />
            </div>
        </>
    );
}

export default Bannerlogement;
