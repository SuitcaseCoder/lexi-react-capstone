//------------- NAVBAR ---------------- //

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { clearAuthToken } from '../local-storage';

import {clearAuth} from '../actions/index.js';


import './navbar.css';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
    this.props.dispatch(clearAuth());
    clearAuthToken();

    }

    render() {
        // window.localStorage.getItem('authToken')
        console.log('logged In status on navbar', this.props.isLoggedIn);
        if(this.props.isLoggedIn === true){
            return (
                <nav>
                <ul className="navBarUl">
                    <li> 
                        <Link to="landingpage" className="navLink" onClick={this.handleLogout}>Logout</Link>
                    </li>
                    <li>
                        <Link to="addword" className="navLink">Add Word</Link>
                    </li>
                    <li>
                        <Link to="allWords" className="navLink">All Words</Link>
                    </li>
                    <li>
                        <Link to="mylist" className="navLink">My List</Link>
                    </li>
                </ul>
                </nav>
            )
        } else {
        // if (!window.localStorage.getItem("authToken")) {
            return (
                <nav>
                <ul className="navBarUl">
                    <li> 
                        <Link to="/login-page" className="navLink">Login</Link>
                    </li>
                    <li>
                        <Link to="landingpage" className="navLink">Lexi Homepage</Link>
                    </li>
                </ul>
                </nav>
            )
        } 
    }

}



const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    clearAuth: state.clearAuth
});

export default connect(mapStateToProps)(NavBar);
