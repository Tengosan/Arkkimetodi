import React from 'react';
import infotwrap from '../assets/img/Artboard6100.svg';
import widow from '../assets/img/Artboard19100.svg';


var infoBackground = {
    width: "100%",
    height: "410px",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${infotwrap})`
};

var advBackground = {
    // width: "25%",
    // height: "350px",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${widow})`
};

const Info = () => {
    return (
        <div className="info-container" id="info" style={infoBackground}>
            <div className="adv" style={advBackground}>
                <p>
                    Arkkimetodi on Espoossa toimiva digipaino. Teemme kattavasti erilaisia painoalan tuotteita. 
                    Tarjoamme luotettavaa ja nopeaa palvelua yli 20 vuoden kokemuksella.
                    Kysy tarjousta soittamalla tai sähköpostilla!
                </p>
            </div>
        </div>
    )
}

export default Info;