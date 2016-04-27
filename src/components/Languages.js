import React, { Component } from 'react';

export default class Languages extends Component {
    render(){
        return(
            <section className="success" id="languages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Langues</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-2">
                            <ul className="formation_list">
                                <li>
                                    <strong>Anglais : </strong> très bonne maîtrise (Voyages aux Etats-Unis en 2005 et 2011)
                                </li>
                                <li>
                                    <strong>Japonais : </strong> bonne maîtrise (Licence de japonais, Voyages au Japon en 2009 et 2013)
                                </li>
                                <li>
                                    <strong>Allemand : </strong> scolaire (Niveau BAC – Première langue)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
