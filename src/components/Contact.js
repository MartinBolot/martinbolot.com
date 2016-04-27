import React, { Component } from 'react';

export default class Contact extends Component {
    render(){
        return(
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Contacts</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <p>
                                <strong>Martin Bolot</strong><br/>
                                <a href="https://github.com/MartinBolot" target="_blank" >Profil GitHub</a><br/>
                                <a href="mailto:martin@martinbolot.com">martin[at]martinbolot.com</a><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
