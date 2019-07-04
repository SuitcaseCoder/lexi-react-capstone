//------------- LOGIN FORM ---------------- //
import React, {Component} from 'react';

import {connect} from 'react-redux';

import userLogin from '../actions/index.js';


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Login',
            username: '',
            password: ''
        };
          
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            username:  event.target.value,
        });
    }

    handlePassChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleLoginSubmit(event){
        event.preventDefault();
        this.props.dispatch(userLogin(this.state.username, this.state.password));
        alert('A user has logged in: ' + this.state.username + this.state.password);
    }

    render() {
        return(
            <div>
            <h2>{this.state.title}</h2>
            <form onSubmit={this.handleLoginSubmit}>
                <label>
                    Email
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
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


const mapStateToProps = state => ({
    username: state.username,
    password: state.password,
});

export default connect(mapStateToProps)(LoginForm);
