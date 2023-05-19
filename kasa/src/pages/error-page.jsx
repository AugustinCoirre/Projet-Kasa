import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Error-page.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ErrorPage() {
    return (
        <>
            <div class="flex">
                <Header />
                <div className="error commun-error">
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p>
                        <Link to="/">Retourner sur la page d’accueil</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
