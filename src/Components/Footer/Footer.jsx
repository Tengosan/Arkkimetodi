import React from 'react';
import footerlogo from '../assets/img/Artboard18100.png';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer_content" id="contact">
                <img className="footerlogo" src={footerlogo} alt="footerlogo"/>

                <ul className="footer_info">
                    <p>Espoon Arkkimetodi Oy</p>
                    <li>Tietäjäntie 2, 02130 Espoo</li>
                    <li>Puh. 09-420 89 01</li>
                    <li>Yhteydenotot ja aineiston lähetys
                        kopio@arkkimetodi.fi</li>
                    <li>Ma-Pe 8.00-16.00</li>
                </ul>

                <ul className="footer_info fix">
                    <p>Services</p>
                    <li>Posti- ja kutsukortit</li>
                    <li>Käyntikortit</li>
                    <li>Julisteet</li>
                    <li>Kirjekuoret</li>
                    <li>Esitteet</li>
                    <li>Tarrat</li>
                    <li>Rakennuspiirustukset</li>
                    <li>Graafinen suunnittelu</li>
                    <li>Postituspalvelu</li>
                    <li>Lähettipalvelu</li>
                </ul>

                <ul className="footer_info">
                    <a href="#">Aineisto-ohje</a>
                    <a href="#">Lataa aineisto-ohje PDF tästä</a>
                </ul>
            </div>
        </div>
    )
}

export default Footer;