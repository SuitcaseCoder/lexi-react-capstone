import React from 'react';

import NavBar from './navbar';
import Header from './header';
import HowTo from './how-to';
import GetStarted from './get-started';

export default function LandingPage(){
    return (
        <div>
            <NavBar />
            <h1>it is working</h1>
        <Header />
        <HowTo />
        <GetStarted />
        </div>
    );
}
