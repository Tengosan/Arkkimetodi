import React from 'react';
import postinvcards from '../assets/img/Artboard12100.svg';
import businesscards from '../assets/img/Artboard13100.svg';
import posters from '../assets/img/Artboard9100.svg';
import envelopes from '../assets/img/Artboard15100.svg';
import brochures from '../assets/img/Artboard7100.svg';
import stickers from '../assets/img/Artboard8100.svg';
import blueprints from '../assets/img/Artboard14100.svg';
import designservices from '../assets/img/Artboard10100.svg';
import postalservices from '../assets/img/Artboard11100.svg';
import courierservice from '../assets/img/Artboard16100.svg';
import printchecklist from '../assets/img/Artboard17100.svg';



const Content = () => {
    return (
        <div className="content-container" id="services">
            <h1>Suosituimmat tuotteemme</h1>
            <div className="content">
                <div className="item">
                    <img src={postinvcards} alt="postinvcards" />
                    <h2>POSTI- JA KUTSUKORTIT</h2>
                    <p>Teemme halutessasi painotiedostot meillä 
                    </p>
                </div>
                <div className="item">
                    <img src={businesscards} alt="businesscards" />
                    <h2>KÄYNTIKORTIT</h2>
                    <p>Käyntikortit
                    </p>
                </div>
                <div className="item">
                    <img src={posters} alt="posters" />
                    <h2>JULISTEET</h2>
                    <p>Teemme julisteet, suurkuvatulosteet ja 
                        taideprintit laajalle valikoimalle eri 
                        materiaaleja - halutessasi pohjustettuna kapa- tai kennolevylle. 
                        Julisteen maksimileveys 140cm.
                    </p>
                </div>
                <div className="item">
                    <img src={envelopes} alt="envelopes" />
                    <h2>KIRJEKUORET</h2>
                    <p>Painamme yrityksenne kirjekuoret 
                    </p>
                </div>
                <div className="item">
                    <img src={brochures} alt="brochures" />
                    <h2>ESITTEET</h2>
                    <p>Erikokoiset ja muotoiset esitteet
                    </p>
                </div>
                <div className="item">
                    <img src={stickers} alt="stickers" />
                    <h2>TARRAT</h2>
                    <p>Paperitarrat etiketteihin, sekä muotoonleikatut vinyylitarrat.
                       Valitettavasti emme tee läpinäkyviä ikkunatarroja, 
                       joissa on valkoista, tai suuria monimutkaisia siirtotarroja.
                    </p>
                </div>
                <div className="item">
                    <img src={blueprints} alt="blueprints" />
                    <h2>RAKENNUSPIIRUSTUKSET</h2>
                    <p>Teemme kopioinnin lisäksi CAD-tulosteet värillisenä tai mustavalkoisena.
                        Jälkikäsittelyt teemme toiveesi mukaan; taitettuna, 
                        seläkkeellä tai ilman, sarjoitettuna, ja valmiiksi mapitettuina. 
                    </p>
                </div>
                <div className="item">
                    <img src={designservices} alt="designservices" />
                    <h2>GRAAFINEN SUUNNITTELU</h2>
                    <p>Ei valmista painomateriaalia? Ei hätää, 
                        sillä halutessasi teemme ja suunnittelemme 
                        painotiedostot toiveesi mukaan, sekä muokkaamme 
                        aineistonne painokelpoiseksi.
                    </p>
                </div>
                <div className="item">
                    <img src={postalservices} alt="postalservices" />
                    <h2>POSTITUSPALVELU</h2>
                    <p>Teemme kustomoituja postituksia suoraan asiakkaanne ovelle.
                         Joukkokirjeenä postittaminen ja osoitetarrojen tekeminen, 
                         sekä kirjeiden personointi onnistuu myös kauttamme.
                    </p>
                </div>
                <div className="item">
                    <img src={courierservice} alt="courierservice" />
                    <h2>LÄHETTIPALVELU</h2>
                    <p>Biokaasulla toimivat lähettiautomme ajavat 
                        pääkaupunkiseudulla ja tarvittaessa kauempanakin. 
                        Halutessanne haemme ja viemme piirustukset ja tuotteet 
                        suoraan toivomaanne osoitteeseen.
                    </p>
                </div>
                <div className="item">
                    <img src={printchecklist} alt="printchecklist" />
                    <h2>AINEISTO-OHJE</h2>
                    <p>Haluatko tarkastaa miten on parasta lähettää meille ainesto? 
                        Katso ohjeet täältä 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content;