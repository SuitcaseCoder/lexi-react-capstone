import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
// import { Link } from 'react-router-dom';


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
        <Route path="/" component={Layout}></Route>
             <Route path="/login-page" component= {LoginPage}></Route>
            <Route path="/addword" component={CreateNewWord}></Route>
            <Route path="/landingpage" component= {LandingPage}></Route>
            <Route path="/homepage" component= {Homepage}></Route>
            <Route path="/mylist" component= {ListOfWords}></Route>

    </Router>
    </Provider>, document.getElementById("root")
);
