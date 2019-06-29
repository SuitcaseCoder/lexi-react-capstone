import React, {Component} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from '../components/navbar';
import Header from '../components/header';
import HowTo from '../components/how-to';

// import SignupPage from './sign-up-page';



import '../components/landing-page.css';

class LandingPage extends Component {
    render(){
        // const { query } = this.props.location;
        return(
            
            <div>
                Landing Page 
                <NavBar location = {this.props.location} />
                <Header />
                <section>
                <HowTo />
                </section>
                <section>
                <div>
                    {/* <Button 
                        id="getStarted" 
                        onClick={()=> {this.handleClickGetStarted()}}
                    /> */}
                </div>
                </section>
            </div>
        )
    }
}

// class LandingPage extends Component {
//     constructor() {
//         super()

//         this.state = {
//             displaySignup: false
//         }
//     }

//     handleClickGetStarted(){
//         this.setState({
//             displaySignup: !this.state.displaySignup
//         })
//     }

//     render(){
//         if( this.state.displaySignup ){
//             return(
//                 <SignupPage />
//             )
//         }
//         return (
//                 <div>
                     
//                     <NavBar />
//                     <Header />
//                     <section>
//                     <HowTo />
//                     </section>
//                     <section>
//                     <div>
//                         <Button 
//                             id="getStarted" 
//                             onClick={()=> {this.handleClickGetStarted()}}
//                         />
//                     </div>
//                     </section>
//                 </div>
//         )
//     }

// }

// function Button(props){
//     return <button onClick={()=> props.onClick()}>get started</button>
// }


export default LandingPage;


