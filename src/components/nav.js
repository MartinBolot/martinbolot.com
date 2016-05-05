import React, { Component } from 'react';

export default class Nav extends Component {
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#page-top">{this.props.data.fullName}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            {
                                Object.keys(this.props.data.sections)
                                    .filter((el) => { return el !== 'motivation'; })
                                    .map((sectionKey) => {
                                        return(
                                            <li key={sectionKey} className="page-scroll">
                                                <a href={'#'+sectionKey}>
                                                    {
                                                        this.props.data.sections[sectionKey].menuTitle ?
                                                            (this.props.data.sections[sectionKey].menuTitle) : (this.props.data.sections[sectionKey].title)
                                                    }
                                                </a>
                                            </li>
                                        );
                                    },this)
                            }
                            <li className=""><a href="?fr" className="switch_lang switch_fr">FR</a><span>/</span><a  href="?en" className="switch_lang switch_en">EN</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
