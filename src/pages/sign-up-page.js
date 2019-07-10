//------------- SIGNUP PAGE ---------------- //

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Signup from '../components/sign-up';

import '../components/sign-up-page.css';

class SignupPage extends Component {

    render(){
        
        return (
                <div className="signupPageContainer">
                    <Signup />
                    <div className="loginOnSignupPage">already have an account? <Link to="/login-page" className="alreadyHaveLogin">login</Link></div>
                </div>
        )
    }

}


export default SignupPage;

