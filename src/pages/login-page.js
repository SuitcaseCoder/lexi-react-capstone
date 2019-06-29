//------------- LOGIN PAGE ---------------- //

import React, {Component} from 'react';

import Login from '../components/login';
import NavBar from '../components/navbar';

class LoginPage extends Component {
    render(){
        console.log('login page rendered')
        return (
                <div>
                    <Login />
                    Login Page
                <NavBar location={this.props.location} />
                <section>
                    {/* <Login /> */}
                </section>
                </div>
        )
    }

}



export default LoginPage;

