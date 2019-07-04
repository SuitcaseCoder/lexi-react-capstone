//------------- SIGN UP FORM ---------------- //

import React, {Component} from 'react';
import {connect} from 'react-redux';

import createNewUser from '../actions/index.js';

// import NavBar from './navbar';
// import Header from './header';

// export default function SignUp(){
//     return (
//         <div>
//             <NavBar />
//         <div>
//             <h2>Sign Up for Lexi</h2>
//             <form>
//                 <label>Email</label>
//                 <field>Email</field>

//                 <label>Password</label>
//                 <field>Password</field>

//                 <button>Sign Up</button>
//             </form>
//         </div>
//         </div>
//     )
// }


class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Sign Up',
            username: '',
            password: '',
            firstName: '',
            lastName: ''
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
        console.log(this.state.username + this.state.password + this.state.firstName + this.state.lastName);
        this.props.dispatch(createNewUser(this.state.username, this.state.password, this.state.firstName, this.state.lastName));
        alert('A user has signed up: ' + this.state.username + this.state.password);
    }

    render() {
        return(
            <div>
                <h2>sign up here</h2>
            <h2>{this.state.title}</h2>
            <form onSubmit={this.handleNewUserSubmit}>
                <label>
                    Username
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </label>
                <label>
                    Password
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                <label>
                    First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </label>
                <label>
                    Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </label>
                <input type="submit" value="sign up" />
            </form>
            </div>
        )
    }
}

// export default SignUpForm;
const mapStateToProps = state => ({
    username: state.username,
    password: state.password,
    firstName: state.firstName,
    lastName: state.lastName

});

export default connect(mapStateToProps)(SignUpForm);
