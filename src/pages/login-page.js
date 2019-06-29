//------------- LOGIN PAGE ---------------- //

import React, {Component} from 'react';

import Login from '../components/login';

class LoginPage extends Component {
    render(){
        console.log('login page rendered')
        return (
                <div>
                    <h1>HELLO LOGIN PAGE</h1>

                <section>
                    <Login />
                </section>
                </div>
        )
    }

}



export default LoginPage;

