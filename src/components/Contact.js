import React, { Component } from 'react';

export default class Contact extends Component {
    render(){
        return(
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>{this.props.data.title}</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <p>
                                <strong>{this.props.data.content.name}</strong><br/>
                                <a href={this.props.data.content.github} target="_blank" >Profil GitHub</a><br/>
                                <a href="mailto:martin@martinbolot.com">{this.props.data.content.mail}</a><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
