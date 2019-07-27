//------------- LOGIN FORM ---------------- //
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router';


import {login} from '../actions/index.js';

import './form.css';
import './login-page.css';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Login',
            username: '',
            password: '',
            // ,error: '';
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
        this.props.dispatch(login(this.state.username, this.state.password));
    }

    render() {
        // console.log(window.localStorage.getItem("authToken"));
        
        if(this.props.isLoggedIn === true) {
            return (
                <Redirect to ="/addword" />
            )
        } else if(this.props.loginProcess === 'spinning'){
            return (
                <div className="loading">login loading</div>
            )
        } else if(this.props.isLoggedIn === false){

            return(
                //redux form vs not
                <div className="formComponentContainer">
                <h2 className="formTitle">{this.state.title}</h2>
                <form onSubmit={this.handleLoginSubmit} className="formStyle">
                <div className="loginErr" value={this.props.error}>{this.props.error}</div>
                    <label>
                        {/* Username */}
                        <input placeholder="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        {/* Password */}
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePassChange} />
                    </label>
                    <input type="submit" value="login" />
                </form>
                </div>
            )
        }
    }
}


//this is redux state . provides info from redux store to component. 
const mapStateToProps = state => ({
    //left creating prop, right getting from state
    loginProcess: state.loginProcess,
    error: state.error,
    isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(LoginForm);
