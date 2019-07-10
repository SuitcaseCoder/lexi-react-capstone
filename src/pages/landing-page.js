import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/header';
import HowTo from '../components/how-to';

// import SignupPage from './sign-up-page';



import '../components/landing-page.css';

class LandingPage extends Component {
    render(){
        return( 
            <div>
                <Header />
                <HowTo />
                <div className="linkToSignup">
                    <Link to="/signup"><button>Get Started</button></Link>
                </div>
            </div>
        )
    }
}


export default LandingPage;


