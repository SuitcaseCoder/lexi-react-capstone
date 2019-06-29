//------------- LOGIN FORM ---------------- //
import React, {Component} from 'react';

import NavBar from './navbar';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Login',
            email: '',
            password: ''
        };
          
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event){
        this.setState({
            email:  event.target.value,
        });
    }

    handlePassChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        alert('A user has logged in: ' + this.state.email + this.state.password);
    }

    render() {
        return(
            <div>
                <NavBar location = { this.props.location } />
            <h2>{this.state.title}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <label>
                    Password
                    <input type="text" value={this.state.password} onChange={this.handlePassChange} />
                </label>
                <input type="submit" value="login" />
            </form>
            </div>
        )
    }
}

export default LoginForm;