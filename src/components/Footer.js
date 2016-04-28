import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        return(
            <footer className="text-center">
                <div className="footer-below">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {this.props.data.copyright}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
