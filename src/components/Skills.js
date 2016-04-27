import React, { Component } from 'react';

export default class Skills extends Component {
    render(){
        return(
            <section id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Compétences en programmation</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-lg-12 text-center">
                            <p id="js_skill" className="hard_skill stars_4">
                                <strong>JavaScript :</strong>
                            </p>
                            <p>
                                ( + NodeJS, AngularJS, React, D3JS)
                            </p>
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-lg-5 col-lg-offset-2">
                            <p id="css_skill" className="hard_skill stars_4">
                                <strong>CSS3 :</strong>
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <p id="html_skill" className="hard_skill stars_4">
                                <strong>HTML5 :</strong>
                            </p>
                        </div>
                    </div>
                    <div className="row space_before_row">
                        <div className="col-lg-12 text-center">
                            <p id="sql_skill" className="hard_skill stars_3">
                                <strong>SQL, PHP, Java, C/C++ :</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
