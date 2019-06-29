//------------- NAVBAR ---------------- //

import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

// import LoginPage from './login-page';
// import LandingPage from '../pages/landing-page';
// import Homepage from './homepage';
import './navbar.css';

//---------------------
// import Homepage from '../pages/homepage';
// import ListOfWords from '../pages/list-of-words';
// import LoginPage from '../pages/login-page';
// import CreateNewWord from '../pages/create-new-word';


class NavBar extends Component {
    // constructor(){
    //   super();
  
    //   this.state = {
    //     displayLogin: false,
    //     displayHP: false,
    //     displayNewWord: false,
    //     displayHowTo: false
    //   } 
    // }
  
    // handleLoginClick() {
    //   this.setState({
    //     displayLogin: !this.state.displayLogin
    //   })
    // }

    // handleNewWordClick(){
    //     this.setState({
    //         displayNewWord: !this.state.displayNewWord
    //     })
    // }

    // handleLogoClick(){
    //     this.setState({
    //         displayHP: !this.state.displayHP
    //     })
    // }

    // handleHowToClick(){
    //     this.setState({
    //         displayHP: !this.state.displayHowTo
    //     })
    // }
  
    // render() {
    //   if ( this.state.displayLogin ) {
    //     return (
    //     //   <LoginPage />
    //       <Route path="/login" component={LoginPage}/>
    //       )    
    //   }

    //   if (this.state.displayNewWord){
    //       return(
    //           <CreateWordPage />
    //       )
    //   }

    //   if( this.state.displayHP ) {
    //       return (
    //           <Homepage />
    //       )
    //   }

    //   if( this.state.displayHowTo ) {
    //     return (
    //         <LandingPage />
    //     )
    // }
render() {
    const { location } = this.props;

    const loginClass = location.pathname.match(/login-page/) ? "active" : "";

      return (
          <Router>
                <nav>
                    <ul>
                        <li className={loginClass}> 
                            <Link to="login-page">Login</Link>
                        </li>
                        <li>
                        <Link to="addword"><button>Add Word</button></Link>
                            {/* <a
                                href="#newWord"
                                onClick={() => this.handleNewWordClick()}
                            >
                                New Word
                            </a> */}
                        </li>
                        <li>
                        <Link to="homepage">Lexi</Link>
                            {/* <a
                                href="#homepage"
                                onClick={() => this.handleLogoClick()}
                            >
                                Lexi
                            </a> */}
                        </li>
                        <li>
                        <Link to="landingpage">How To</Link>
                            {/* <a
                                href="#landingPage"
                                onClick={() => this.handleHowToClick()}
                            >
                                How to
                            </a> */}
                        </li>
                    </ul>
                </nav>
                {/* <Route exact path = "/" component= {LandingPage}></Route>
      <Route exact path = "login" component= {LoginPage}></Route>
      <Route exact path = "landingpage" component= {LandingPage}></Route>
      <Route exact path = "homepage" component= {Homepage}></Route>
      <Route exact path = "mylist" component= {ListOfWords}></Route>
      <Route exact path = "addword" component= {CreateNewWord}></Route> */}
             </Router>
      )
    }
}

export default NavBar;