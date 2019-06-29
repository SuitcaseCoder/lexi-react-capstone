import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';


import Layout from './pages/layout';
import Homepage from './pages/homepage';
import ListOfWords from './pages/list-of-words';
import LoginPage from './pages/login-page';
import CreateNewWord from './pages/create-new-word';
import LandingPage from './pages/landing-page';

import './index.css';

import store from './store';



ReactDOM.render(
    <Provider store={store}>
    {/* <LandingPage /> */}
    <Router>
        <Link to="addword">add</Link>
        <Route path="/" component={Layout}></Route>
             <Route exact path = "login" component= {LoginPage}></Route>
            <Route exact path = "landingpage" component= {LandingPage}></Route>
            <Route exact path = "homepage" component= {Homepage}></Route>
            <Route exact path = "mylist" component= {ListOfWords}></Route>
            <Route exact path = "addword" component={CreateNewWord}></Route>

    </Router>
    </Provider>, document.getElementById("root")
);
