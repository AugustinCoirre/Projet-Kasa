import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import ErrorPage from '../pages/error-page';

import logements from '../assets/logements.json';
import photoprofil from '../assets/point.png';
import staron from '../assets/star-on.png';
import staroff from '../assets/star-off.png';

import '../styles/Fiche.css';
import records from '../assets/logements.json';

const arrayStars = [1, 2, 3, 4, 5];

function Fiche() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    // cherche l'id dans le fichier logements.json
    const record = records.find(element => element.id === idLogement);

    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return <ErrorPage />;

    // récupère la liste des équipements
    const equipements = record.equipments.map((element, index) => (
        <li className="description-content" key={'equip-' + index.toString()}>
            {element}
        </li>
    ));

    return (
        <>
            <Header />
            <Carousel pictures={record.pictures} />
            <div id="composant-title">
                <div className="left">
                    <div className="title">
                        <h3>{record.title}</h3>
                        <p>{record.location}</p>
                    </div>
                    <div className="tags">
                        {record.tags.map((element, index) => {
                            return (
                                <p className="tag" key={'tag-' + index}>
                                    {element}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div className="right">
                    <div className="profil">
                        <p className="name-profil">{record.host.name}</p>
                        <img
                            src={record.host.picture}
                            alt={record.title}
                            className="photo-profil"
                        ></img>
                    </div>
                    <div className="stars">
                        {arrayStars.map(element => {
                            const nbreEtoiles = parseInt(record.rating);
                            return (
                                <span
                                    key={'star-' + element}
                                    className={
                                        element <= nbreEtoiles
                                            ? 'staron'
                                            : 'staroff'
                                    }
                                ></span>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* affiche la description et les équipements */}
            <div className="collapseLogement">
                <Collapse title="Description" content={record.description} />
                <Collapse title="Equipements" content={equipements} />
            </div>
            <Footer />
        </>
    );
}

export default Fiche;
