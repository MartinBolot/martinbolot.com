import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img id="profile_pic" className="img-responsive" src={'res/'+this.props.data.profilePic} alt="" />
                            <div className="intro-text">
                                <h1 className="name">{this.props.data.fullName}</h1>
                                <hr className="star-light" />
                                <span className="skills">{this.props.data.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
