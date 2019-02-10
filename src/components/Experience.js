import React, { Component } from 'react';

export default class Experience extends Component {
    render(){
        const englishLanguage = (this.props.language === 'en');
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
                                    {this.props.data.content.sword.title}
                                </p>
                                <ul>
                                    <li>
                                        <strong>{ englishLanguage ? 'Role' : 'Missions'} :</strong> {this.props.data.content.sword.missions}
                                    </li>
                                    <li>
                                        <strong>{ englishLanguage ? 'Activities' : 'Activités'} :</strong>
                                        <ul>
                                            {
                                                this.props.data.content.sword.activity.map((el,ind) => {
                                                    return(
                                                        <li key={ind}>{el}</li>
                                                    );
                                                },this)
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>{ englishLanguage ? 'Status' : 'Statut'} :</strong> {this.props.data.content.sword.status}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-sm-5 text-center col-sm-offset-1">
                            <p>
                                {this.props.data.content.emagineurs.title}<br/>
                                {this.props.data.content.emagineurs.subtitle}<br/>
                                <a href={'http://'+this.props.data.content.emagineurs.url} target="_blank">{this.props.data.content.emagineurs.url}</a>
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
