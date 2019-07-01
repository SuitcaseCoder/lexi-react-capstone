//------------- SIGNUP PAGE ---------------- //

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Signup from '../components/sign-up';

class SignupPage extends Component {
    // constructor() {
    //     super()

    // }
    render(){
        
        return (
                <div>
                <section>
                    <Signup />
                </section>
                <div>already have an account? <Link to="/login-page">login</Link></div>
                </div>
        )
    }

}


export default SignupPage;

