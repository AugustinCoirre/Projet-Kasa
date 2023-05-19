import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cards.css';
import logements from '../assets/logements.json';

// composant qui récupère la liste des logements

const Cards = () => {
    return (
        <div className="composant-cards">
            {/* liste la base de données */}

            {logements.map(logement => {
                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="card" key={logement.id}>
                        <Link
                            className="card-img"
                            to={{
                                pathname: '/logement',
                                search: '?_id=' + logement.id
                            }}
                        >
                            <img src={logement.cover} alt={logement.title} />
                            <div class="card-img-opa"></div>
                            <p>{logement.title}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
