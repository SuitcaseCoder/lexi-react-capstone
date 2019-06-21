import React from 'react';


import NavBar from './navbar';
import Header from './header';
import HowTo from './how-to';
import GetStarted from './get-started';

import './landing-page.css';


export default function LandingPage(){
    return (
        <div>
        <NavBar />
        <Header />
        <section>
        <HowTo />
        </section>
        <section>
        <GetStarted />
        </section>
        </div>
    );
}
