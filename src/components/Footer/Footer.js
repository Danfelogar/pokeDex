import React from 'react';

import './Footer.css';

export const Footer = () => {

    return (
        <nav className="footer">
            <div/>
            <div className="footer-wrap-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" className="footer-img" />
            </div>
            <div className="footer-wrap-content">
            <h2>Danfelogar frontend developer, made with love © 2021</h2>
            </div>
            <div className="footer-social-networks">
            <a href="https://www.instagram.com/danfelo18/"
            ><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/daniel.pologarcia/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/daniel-felipe-polo-garcia-9a985b210/"
            ><i class="fab fa-linkedin-in"></i></a>
            </div>

        </nav>
    );
}