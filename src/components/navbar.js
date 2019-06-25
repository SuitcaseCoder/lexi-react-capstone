import React, {Component} from 'react';

import Login from './login';
import LandingPage from './landing-page';
import './navbar.css';


class NavBar extends Component {
    constructor(){
      super();
  
      this.state = {
        displayLogin: false,
        displayHP: false
      }
    }
  
    handleLoginClick() {
      this.setState({
        displayLogin: !this.state.displayLogin
      })
    }

    handleLogoClick(){
        this.setState({
            displayHP: !this.state.displayHP
        })
    }
  
    render() {
      if ( this.state.displayLogin ) {
        return (
          {Login }
        )    
      }

      if( this.state.displayHP ) {
          return (
              <LandingPage />
          )
      }

      return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#login"
                        onClick={() => this.handleLoginClick()}
                    >
                        login
                    </a>
                </li>
                <li>
                    <a
                        href="#landingPage"
                        onClick={() => this.handleLogoClick()}
                    >
                        lexi
                    </a>
                </li>
            </ul>
        </nav>
      )
    }
}

export default NavBar;