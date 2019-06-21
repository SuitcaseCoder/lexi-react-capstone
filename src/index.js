import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/landing-page';
import CreateNewWord from './components/create-new-word';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CreateNewWord />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
