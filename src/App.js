import React from 'react';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landing-page.js';

import Homepage from './pages/homepage';
import ListOfWords from './pages/list-of-words';
import LoginPage from './pages/login-page';
import SignupPage from './pages/sign-up-page';
import CreateNewWord from './pages/create-new-word';
import WordChosen from './pages/word-chosen-page';



function App() {
  console.log({LoginPage})

  return (
    
    <Router> 
      <Route exact path = "/" component= {LandingPage}></Route>
      <Route exact path = "login" component= {LoginPage}></Route>
      <Route exact path = "signup" component= {SignupPage}></Route>
      <Route exact path = "homepage" component= {Homepage}></Route>
      <Route exact path = "mylist" component= {ListOfWords}></Route>
      <Route exact path = "addword" component= {CreateNewWord}></Route>
      <Route exact path = "/words:id" component= {WordChosen}></Route>
    </Router>
  );
}

// export default App;
