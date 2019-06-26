import React, {Component} from 'react';
// import {connect} from 'react-redux';

import NavBar from './navbar';
import Header from './header';
import HowTo from './how-to';
// import GetStarted from './get-started';
import SignUp from './sign-up';
// import Login from './login';
// import NewWord from './new-word-form';

import './landing-page.css';


class LandingPage extends Component {
    constructor() {
        super()

        this.state = {
            displaySignup: false
        }
    }

    handleClickGetStarted(){
        this.setState({
            displaySignup: !this.state.displaySignup
        })
    }

    render(){
        if( this.state.displaySignup ){
            return(
                <SignUp />
            )
        }
        return (
            <div>
                <NavBar />
                {/* <SignUp />
                <Login />
                <NewWord /> */}
                <Header />
                <section>
                <HowTo />
                </section>
                <section>
                <div>
                    <Button 
                        id="getStarted" 
                        onClick={()=> {this.handleClickGetStarted()}}
                    />
                </div>
                </section>
            </div>
        )
    }

}

function Button(props){
    return <button onClick={()=> props.onClick()}>get started</button>
}

export default LandingPage;


