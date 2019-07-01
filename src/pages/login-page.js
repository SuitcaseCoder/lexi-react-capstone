//------------- LOGIN PAGE ---------------- //

import React, {Component} from 'react';

import Login from '../components/login';

class LoginPage extends Component {
    render(){
        return (
                <div>
                    <h1>Login to your Lexi Account</h1>
                <section>
                    <Login />
                </section>
                </div>
        )
    }

}



export default LoginPage;

