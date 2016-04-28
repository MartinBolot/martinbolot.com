import React, { Component } from 'react';

export default class Experience extends Component {
    render(){
        return(
            <section className="success" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>{this.props.data.title}</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-lg-6 col-lg-offset-3">
                            <div className="emphasis">
                                <p className="text-center">
                                    {this.props.data.content.emagineurs.title}
                                </p>
                                <ul>
                                    <li>
                                        <strong>Missions :</strong> {this.props.data.content.emagineurs.missions}
                                    </li>
                                    <li>
                                        <strong>Activités :</strong>
                                        <ul>
                                            {
                                                this.props.data.content.emagineurs.activity.map((el,ind) => {
                                                    return(
                                                        <li key={ind}>{el}</li>
                                                    );
                                                },this)
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Statut :</strong> {this.props.data.content.emagineurs.status}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-sm-5 text-center col-sm-offset-1">
                            <p>
                                {this.props.data.content.stageEmagineurs.title}<br/>
                                {this.props.data.content.stageEmagineurs.subtitle}<br/>
                                <a href={'http://'+this.props.data.content.stageEmagineurs.url} target="_blank">{this.props.data.content.stageEmagineurs.url}</a>
                            </p>
                        </div>
                        <div className="col-sm-5 text-center">
                            <p>
                                {this.props.data.content.optimisationRef.title}<br/>
                                {this.props.data.content.optimisationRef.subtitle}<br/>
                                <a href={'http://'+this.props.data.content.optimisationRef.url} target="_blank">{this.props.data.content.optimisationRef.url}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
