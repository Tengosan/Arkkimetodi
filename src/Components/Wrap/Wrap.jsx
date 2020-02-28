import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import wrap from '../assets/img/Artboard22100.png';

var wrapStyle = {
    width: "100%",
    height: "20%",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${wrap})`
};

const Wrap = () => {
    return (
        <div className="wrap" style={wrapStyle}>
            <h1>DIGIPAINO ARKKIMETODI</h1>
            <p>-Ihmisen kokoinen digipaino Tapiolassa </p>
            <div className="contacts-container">
                <ul className="contacts">
                    <li><a href="#">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        09-420 8901
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        kopio@arkkimetodi.fi
                    </a>
                    </li>
                    <li><a href="#">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Tietäjäntie 2, 02130 Espoo
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Wrap;