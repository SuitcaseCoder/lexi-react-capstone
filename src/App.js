import React from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import LandingPage from './pages/landing-page.js';

import Homepage from './pages/homepage';
import ListOfWords from './pages/list-of-words';
import Login from './components/login';
import SignupPage from './pages/sign-up-page';
import CreateNewWord from './pages/create-new-word';
import AllWordsPage from './pages/all-words-page';
import Navbar from './components/navbar';


function App() {

  return (

    <Provider store={store}>
    <Router>
      <Navbar />
          <Route exact path="/" component={LandingPage}></Route>
            <Route path="/login-page" component={Login}></Route>
            <Route path="/addword" component={CreateNewWord}></Route>
            <Route path="/landingpage" component={LandingPage}></Route>
            <Route path="/homepage" component={Homepage}></Route>
            <Route path="/allWords" component={AllWordsPage}></Route>
            <Route path="/mylist" component={ListOfWords}></Route>
            <Route path="/signup" component={SignupPage}></Route>
    </Router>
    </Provider>
    
  );
}

export default App;
