import React, { Component } from 'react';

export default class Experience extends Component {
    render(){
        return(
            <section className="success" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Expérience</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-lg-6 col-lg-offset-3">
                            <div className="emphasis">
                                <p className="text-center">
                                    Agence E-magineurs
                                </p>
                                <ul>
                                    <li>
                                        <strong>Missions :</strong> Découpage, intégration et configuration de sites internet
                                    </li>
                                    <li>
                                        <strong>Activités :</strong>
                                        <ul>
                                            <li>Réalisation de gabarits grâce à HTML et CSS</li>
                                            <li>Développement de diverses fonctionnalités en JavaScript</li>
                                            <li>Intégration des gabarits dans le CMS TYPO3</li>
                                            <li>Configuration du CMS et de ses extensions</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Statut :</strong> CDI
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-sm-5 text-center col-sm-offset-1">
                            <p>
                                Stage intégration contenu Web<br/>
                                Agence E-magineurs<br/>
                                <a href="http://www.e-magineurs.com" target="_blank">www.e-magineurs.com</a>
                            </p>
                        </div>
                        <div className="col-sm-5 text-center">
                            <p>
                                Optimisation référencement Web<br/>
                                Degustatio<br/>
                                <a href="http://www.degustatio.fr" target="_blank">www.degustatio.fr</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
