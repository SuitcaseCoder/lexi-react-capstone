import React, {Component} from 'react';
import NavBar from './navbar';

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
        alert('A user has signed up: ' + this.state.email + this.state.password);
    }

    render() {
        return(
            <div>
                <NavBar />
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
                <input type="submit" value="sign up" />
            </form>
            </div>
        )
    }
}

export default SignUpForm;