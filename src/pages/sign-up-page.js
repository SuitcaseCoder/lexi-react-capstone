//------------- SIGNUP PAGE ---------------- //

import React, {Component} from 'react';

import NavBar from '../components/navbar';
import Signup from '../components/sign-up';

class SignupPage extends Component {
    // constructor() {
    //     super()

    // }
    render(){
        
        return (
                <div>
                <NavBar />
                <section>
                    <Signup />
                </section>
                </div>
        )
    }

}


export default SignupPage;

