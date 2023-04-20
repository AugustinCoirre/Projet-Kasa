import { useRouteError } from 'react-router-dom';
import React from 'react';
import '../styles/Error-page.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div id="error-page">
                <h1>404</h1>
                <p>
                    Oups! La page que <br></br> vous demandez n'existe pas.
                </p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>

                <a className="retour-home" href="?">
                    {' '}
                    Retourner sur la page d'accueil
                </a>
            </div>
            <Footer />
        </>
    );
}
