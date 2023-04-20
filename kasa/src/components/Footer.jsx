import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo-footer.svg';

function Footer() {
    return (
        <div id="footer">
            <div className="img-footer">
                <img className="logo" src={logo} alt="logo entreprise kasa" />
            </div>
            <div className="footer-rights">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
}

export default Footer;
