import '../styles/Header.css';
import logo from '../assets/logo.svg'

function Header() {

   return ( 
    <div id="header">
        <div className="img-header">
            <img className="logo" src={logo} alt="logo entreprise kasa" />
        </div>
        <div className="header-menu">
            <ul>
                <li>Accueil</li>
                <li>A&nbsp;propos</li>
            </ul>
        </div>
    </div>
   )
}

export default Header