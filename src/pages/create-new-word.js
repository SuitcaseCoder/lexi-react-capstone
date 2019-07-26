//------------- CREATE WORD PAGE ---------------- //

import React from 'react';
import { Redirect } from 'react-router-dom';
import {Component} from 'react';
import { connect } from 'react-redux';
import NewWordForm from '../components/new-word-form.js';

import '../components/create-new-word.css';
// import { NewWordForm } from './new-word-form.js';

class CreateNewWord extends Component {
   render(){
        const result = !this.props.isLoggedIn ? (
                <Redirect to="login-page" />
                ) : <div className="newworddiv">
                <NewWordForm />
            </div>
        return result;
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(CreateNewWord)
//mapStateToProps
//turn this into a class
//connect to store using mapStateToProps
