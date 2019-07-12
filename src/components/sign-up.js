//------------- SIGN UP FORM ---------------- //

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';


import {createNewUser} from '../actions/index.js';

import './form.css';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Sign Up',
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            // error: ''
            // goToCreateWord: false
        };
          
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);

        this.handleNewUserSubmit = this.handleNewUserSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value,
        });
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleFirstNameChange(event){
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange(event){
        this.setState({
            lastName: event.target.value
        })
    }

    handleNewUserSubmit(event){
        event.preventDefault();
        this.props.dispatch(createNewUser(this.state.username, this.state.password, this.state.firstName, this.state.lastName));
        // this.setState({goToCreateWord: true})
    }

    render() {

        if(this.props.signupProcess === 'done') {
            return <Redirect to ="/login-page" />
        } else if(this.props.signupProcess === 'form'){
            return(
                <div className="formComponentContainer">
                <h2 className="formTitle">{this.state.title}</h2>
                <form onSubmit={this.handleNewUserSubmit} className="formStyle">
                <div className="signupErr" value={this.props.signupMessage}>{this.props.signupMessage}</div>

                    <label>
                        {/* Username */}
                        <input placeholder="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        {/* Password */}
                        <input placeholder="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <label>
                        {/* First Name */}
                        <input placeholder="First Name" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                    </label>
                    <label>
                        {/* Last Name */}
                        <input placeholder="Last Name" type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                    </label>
                    <input type="submit" value="sign up" />
                </form>
                <div className="loginOnSignupPage">already have an account? <Link to="/login-page" className="alreadyHaveLogin">login</Link></div>
                </div>
            )
        }
    }
}

// export default SignUpForm;
const mapStateToProps = state => ({
    // username: state.username,
    // password: state.password,
    // firstName: state.firstName,
    // lastName: state.lastName,
    signupProcess: state.signupProcess,
    signupError: state.signupError,
    signupMessage: state.signupMessage

});



export default connect(mapStateToProps)(SignUpForm);
