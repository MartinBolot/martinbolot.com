import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return(
            <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Formation</h2>
                                <hr className="star-primary" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-2">
                                <ul className="formation_list">
                                    <li>
                                        <strong>2016 : </strong> DUT Informatique en Année Spéciale - Université Lyon 1 (en cours)
                                    </li>
                                    <li>
                                        <strong>2012 : </strong> Licence LLCE spé Japonais - Université Jean Moulin Lyon 3 - Mention AB
                                    </li>
                                    <li>
                                        <strong>2009 : </strong> Baccalauréat Section Scientifique - Mention AB
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}
