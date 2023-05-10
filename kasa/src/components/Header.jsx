import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
    const isActiveStyle = { textDecoration: 'underline' };

    // Utilisation d'un tableau en prévision d'ajout au menu
    const menuItems = [
        { to: '/', label: 'Accueil' },
        { to: '/about', label: 'A Propos' }
    ];

    // défini le choix actif et affiche le label du menu
    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink
                to={to}
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
            >
                {label}
            </NavLink>
        </li>
    );

    return (
        <div id="header">
            <Link to="/" className="img-header">
                <img src={logo} alt="Logo du site Kasa" className="logo" />
            </Link>
            <nav className="header-menu">
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Header;
