import React from 'react';
import logo from '../assets/img/Artboard18100.png';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

const Header = () =>{
    return(
        <header className="header">
        <button className="scrollup" onClick={()=> scroll.scrollToTop()}>
        </button>
        <img className="logo" src={logo} alt="logo"/>
        <nav class="navmenu">
          <ul class="topmenu">
            <li><a href="#Arkkimetodi">Arkkimetodi</a></li>
            <li><a href="#Palvelut ">Palvelut 
               <i className="fa fa-angle-down"></i>
            </a>
              <ul className="submenu">
                <a href="#">
                <li><Link to="services" smooth={true} duration={1000}>Tuotteemme</Link></li>
                </a>
              </ul>
            </li>
            <li><a href="#Meistä">Meistä
               <i className="fa fa-angle-down"></i>
            </a>
              <ul className="submenu">
                <a href="#">
                <li><Link to="info" smooth={true} duration={1000} href="#Tiedotus">Tiedotus</Link></li>
                </a>
              </ul>
            </li>
            <li><a href="#Yhteys">Yhteys 
               <i className="fa fa-angle-down"></i>
            </a>
              <ul className="submenu">
                <a href="#">
                <li><Link to="contact" smooth={true} duration={1000}>Osoite</Link></li>
                </a>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;