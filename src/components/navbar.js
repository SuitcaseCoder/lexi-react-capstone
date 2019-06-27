//------------- NAVBAR ---------------- //

import React, {Component} from 'react';

import LoginPage from './login-page';
import LandingPage from './landing-page';
import CreateWordPage from './create-new-word';
import Homepage from './homepage';
import './navbar.css';


class NavBar extends Component {
    constructor(){
      super();
  
      this.state = {
        displayLogin: false,
        displayHP: false,
        displayNewWord: false,
        displayHowTo: false
      }
    }
  
    handleLoginClick() {
      this.setState({
        displayLogin: !this.state.displayLogin
      })
    }

    handleNewWordClick(){
        this.setState({
            displayNewWord: !this.state.displayNewWord
        })
    }

    handleLogoClick(){
        this.setState({
            displayHP: !this.state.displayHP
        })
    }

    handleHowToClick(){
        this.setState({
            displayHP: !this.state.displayHowTo
        })
    }
  
    render() {
      if ( this.state.displayLogin ) {
        return (
          <LoginPage />
        )    
      }

      if (this.state.displayNewWord){
          return(
              <CreateWordPage />
          )
      }

      if( this.state.displayHP ) {
          return (
              <Homepage />
          )
      }

      if( this.state.displayHowTo ) {
        return (
            <LandingPage />
        )
    }

      return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#login-page"
                        onClick={() => this.handleLoginClick()}
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a
                        href="#newWord"
                        onClick={() => this.handleNewWordClick()}
                    >
                        New Word
                    </a>
                </li>
                <li>
                    <a
                        href="#homepage"
                        onClick={() => this.handleLogoClick()}
                    >
                        Lexi
                    </a>
                </li>
                <li>
                    <a
                        href="#landingPage"
                        onClick={() => this.handleHowToClick()}
                    >
                        How to
                    </a>
                </li>
            </ul>
        </nav>
      )
    }
}

export default NavBar;