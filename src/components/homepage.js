//-------------  HOMEPAGE ---------------- //

import React, {Component} from 'react';
// import {connect} from 'react-redux';

import NavBar from './navbar';
import Header from './header';
// import NewWord from './new-word-form';

import './landing-page.css';


class Homepage extends Component {
    constructor() {
        super()

    }
    render(){
        
        return (
                <div>
                <NavBar />
                <Header />
                <section>
                    <h1>Hello there</h1>
                </section>
                </div>
        )
    }

}



export default Homepage;


