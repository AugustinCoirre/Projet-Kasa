import React, { useState } from 'react';
import '../styles/Collapse.css';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';

function Collapse({ title, content }) {
    // collapse par défaut fermer
    const [contentVisible, setContentVisible] = useState(false);

    // à chaque clic sur le collapse, ça inverse la valeur
    const affContent = () => {
        setContentVisible(!contentVisible); // inverse la valeur actuelle
    };

    // défini les classes selon si c'est visible ou hide
    const collapseContent =
        (contentVisible ? 'visible' : 'hidden') + ' collapse';
    const collapseArrow = contentVisible ? ArrowUp : ArrowDown;

    return (
        <div className="collapse">
            {/* affiche le titre et l'arrow */}
            <div className="collapse__header" onClick={affContent}>
                <span>{title}</span>
                <div className="arrowValue">
                    <img src={collapseArrow} alt="" />
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    );
}

export default Collapse;
