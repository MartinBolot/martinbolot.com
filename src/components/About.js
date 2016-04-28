import React, { Component } from 'react';

export default class About extends Component {
    render(){
        return(
            <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>{this.props.data.title}</h2>
                                <hr className="star-primary" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-2">
                                <ul className="formation_list">
                                    {
                                        this.props.data.content.formations.map((formation,index) => {
                                            return(
                                                <li key={index}>
                                                    <strong>{formation.year} : </strong> {formation.subject}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}
