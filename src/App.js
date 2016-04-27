import React, { Component } from 'react';

import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Experience from "./components/Experience.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Languages from "./components/Languages.js";
import Nav from "./components/Nav.js";
import ScrollTop from "./components/ScrollTop.js";
import Skills from "./components/Skills.js";


export default class App extends Component {
    render(){
        return (
            <div>
                <Nav data={this.props.data} />
                <Header data={this.props.data} />
                <Skills data={this.props.data.skills} />
                <Experience data={this.props.data.portfolio} />
                <About data={this.props.data.about} />
                <Languages data={this.props.data.languages} />
                <Contact data={this.props.data.contact} />
                <Footer data={this.props.data} />
                <ScrollTop />
            </div>
        );
    }
    logData(){
        console.log(this.props.data);
    }
}
