import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Bannerlogement from '../components/Bannerlogement';
import Collapse from '../components/Collapse';

import logements from '../assets/logements.json';
import photoprofil from '../assets/point.png';
import staron from '../assets/star-on.png';
import staroff from '../assets/star-off.png';

import '../styles/Fiche.css';

function Fiche() {
    console.log(logements);
    return (
        <>
            <Header />
            <Bannerlogement />
            <div id="composant-title">
                <div className="left">
                    <div className="title">
                        <h3>Cozy loft on the Canal Saint-martin</h3>
                        <p>Paris, île-de-France</p>
                    </div>
                    <div className="tags">
                        <div className="tag">Cozy</div>
                        <div className="tag">Canal</div>
                        <div className="tag">Paris 10</div>
                    </div>
                </div>
                <div className="right">
                    <div className="profil">
                        <p className="name-profil">Alexandre Dumas</p>
                        <img src={photoprofil} className="photo-profil"></img>
                    </div>
                    <div className="stars">
                        <img src={staron} alt="etoile" className="star" />
                        <img src={staron} alt="etoile" className="star" />
                        <img src={staron} alt="etoile" className="star" />
                        <img src={staroff} alt="etoile" className="star" />
                        <img src={staroff} alt="etoile" className="star" />
                    </div>
                </div>
            </div>
            {/* <Collapse /> */}
            <Footer />
        </>
    );
}

export default Fiche;
