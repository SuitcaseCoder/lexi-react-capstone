//------------- NAVBAR ---------------- //


import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import './navbar.css';


class NavBar extends Component {

render() {

      return (
                <nav>
                    <ul>
                        <li > 
                            <Link to="/login-page">Login</Link>
                        </li>
                        <li>
                        <Link to="addword"><button>Add Word</button></Link>
                        </li>
                        <li>
                        <Link to="homepage">Lexi</Link>
                        </li>
                        <li>
                        <Link to="landingpage">How To</Link>
                        </li>
                        <li>
                        <Link to="mylist">my Lexi list</Link>
                        </li>
                    </ul>
                </nav>
               
      )
    }
}

export default NavBar;