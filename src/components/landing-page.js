// import React, {Component} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import NavBar from '../components/navbar';
// import Header from '../components/header';
// import HowTo from '../components/how-to';
// import SignupPage from '../components/sign-up-page';

// import './landing-page.css';


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
//             <Router>
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
//             </Router>
//         )
//     }

// }

// function Button(props){
//     return <button onClick={()=> props.onClick()}>get started</button>
// }

// export default LandingPage;


