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
                <div className="title-left">
                    <p className="title">Cozy loft on the Canal Saint-martin</p>
                    <p>Paris, île-de-France</p>
                </div>
                <div className="title-right">
                    <p className="name-profil">Alexandre Dumas</p>
                    <img src={photoprofil} className="photo-profil"></img>
                </div>
            </div>
            <div id="class-star">
                <div id="component-class">
                    <div className="class">Cozy</div>
                    <div className="class">Canal</div>
                    <div className="class">Paris 10</div>
                </div>
                <div id="stars">
                    <img src={staron} alt="etoile" className="star" />
                    <img src={staron} alt="etoile" className="star" />
                    <img src={staron} alt="etoile" className="star" />
                    <img src={staroff} alt="etoile" className="star" />
                    <img src={staroff} alt="etoile" className="star" />
                </div>
            </div>
            <Collapse />
            <Footer />
        </>
    );
}

export default Fiche;
