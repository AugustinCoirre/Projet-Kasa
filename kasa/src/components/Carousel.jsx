import '../styles/Carousel.css';
import React, { useState } from 'react';
import ArrowLeft from '../assets/arrow-left.png';
import ArrowRight from '../assets/arrow-right.png';

function Carousel({ pictures }) {
    //récupère un tableau d'images

    const [index, setIndex] = useState(0); // variable de compteur, défini au départ sur 0
    const totalPictures = pictures.length - 1; // nombre max d'images

    if (index < 0) setIndex(totalPictures); // si inférieur à zéro, défini le nombre d'images max
    if (index > totalPictures) setIndex(0); // si supérieur au max d'images, alors met à zéro

    return (
        <div className="carousel">
            {/* affiche la première image */}
            <div className="div-image">
                <img
                    src={pictures[index]}
                    className="classImage"
                    key={'car-' + index}
                    alt={'photo ' + index}
                />
            </div>

            {/* si + d'une image */}
            {totalPictures > 0 && (
                <div>
                    {' '}
                    {/* les boutons pour les arrows left (-1) et right (+1)*/}
                    <button onClick={() => setIndex(index - 1)}>
                        <img
                            src={ArrowLeft}
                            className="arrow-left"
                            alt={'flèche gauche pour revenir à la photo d avant ' + index}
                        />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>
                        <img
                            src={ArrowRight}
                            className="arrow-right"
                            alt={'flèche droite pour passer a la photo d apres ' + index}
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Carousel;
