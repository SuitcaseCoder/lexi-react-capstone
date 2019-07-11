//------------- LOGIN FORM ---------------- //
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router';


import {login} from '../actions/index.js';

import './form.css';

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
        
        if(this.props.loginProcess === 'done') {
            return <Redirect to ="/mylist" />
        } else if(this.props.loginProcess === 'spinning'){
            return (
                <div className="loading">login loading</div>
            )
        } else if(this.props.loginProcess === 'form'){

            return(
                //redux form vs not
                <div className="formComponentContainer">
                <div className="loginErr" value={this.props.error}></div>
                <h2 className="formTitle">{this.state.title}</h2>
                <form onSubmit={this.handleLoginSubmit} className="formStyle">
                    <label>
                        {/* Username */}
                        <input placeholder="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        {/* Password */}
                        <input placeholder="Password" type="text" value={this.state.password} onChange={this.handlePassChange} />
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
    // username: state.username,
    // password: state.password,
    //left creating prop, right getting from state
    loginProcess: state.loginProcess,
    error: state.error
});

export default connect(mapStateToProps)(LoginForm);
