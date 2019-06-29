//-------------  HOMEPAGE ---------------- //

import React, {Component} from 'react';
// import {connect} from 'react-redux';

import NavBar from '../components/navbar';
import Header from '../components/header';
// import NewWord from './new-word-form';

import '../components/landing-page.css';


class Homepage extends Component {
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


