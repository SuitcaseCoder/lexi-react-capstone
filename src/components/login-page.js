//------------- LOGIN PAGE ---------------- //

import React, {Component} from 'react';

import Login from './login';
import NavBar from './navbar';

class LoginPage extends Component {
    constructor() {
        super()

    }
    render(){
        
        return (
                <div>
                <NavBar />
                <section>
                    <Login />
                </section>
                </div>
        )
    }

}



export default LoginPage;

