import React, { Component } from 'react';

export default class Languages extends Component {
    render(){
        return(
            <section className="success" id="languages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>{this.props.data.title}</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-2">
                            <ul className="formation_list">
                                {
                                    this.props.data.content.languages.map((language,index) => {
                                        return(
                                            <li key={index}>
                                                <strong>{language.title} : </strong> {language.level}
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
