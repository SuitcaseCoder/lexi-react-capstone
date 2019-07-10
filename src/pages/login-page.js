//------------- LOGIN PAGE ---------------- //

import React, {Component} from 'react';

import Login from '../components/login';

import '../components/login-page.css';

class LoginPage extends Component {
    render(){
        return (
            <div className="pageContainer">
                <Login />
            </div>
        )
    }

}



export default LoginPage;

