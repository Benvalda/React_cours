import React from 'react';
import { Link } from 'react-router-dom';
import moi from "../img/moi.png"

const Nav = () => {
    return (
        <nav className='nav nav-tabs d-flex justify-content-between align-items-center bg-primary'>
            <div className='moi'><img src={moi} alt='moi'/></div> 
            <ul className='d-flex gap-4'>
                <li className='nav-item list-unstyled'><Link to="/" className="nav-link text-light">Acceuil</Link></li>
                <li className='nav-item list-unstyled'><Link to="/about" className="nav-link text-light">A propos</Link></li>
                <li className='nav-item list-unstyled'><Link to="/news" className="nav-link text-light">Actualités</Link></li>
                <li className='nav-item list-unstyled'><Link to="/faq" className="nav-link text-light">FAQ</Link></li>
                <li className='nav-item list-unstyled'><Link to="/contact" className="nav-link text-light">Contacts</Link></li>
            </ul>
            <div className='moi'><img src={moi} alt='moi'/></div> 
        </nav>
    );
};

export default Nav;