//------------- NAVBAR ---------------- //


import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import './navbar.css';


class NavBar extends Component {

render() {

      return (
                <nav>
                    <ul className="navBarUl">
                        <li> 
                            <Link to="/login-page" className="navLink">Login</Link>
                        </li>
                        <li>
                        <Link to="addword" className="navLink">Add Word</Link>
                        </li>
                        {/* <li>
                        <Link to="homepage" className="navLink">Lexi</Link>
                        </li> */}
                        <li>
                        <Link to="mylist" className="navLink">my Lexi list</Link>
                        </li>
                        <li>
                        <Link to="landingpage" className="navLink">Lexi</Link>
                        </li>
                    </ul>
                </nav>
               
      )
    }
}

export default NavBar;