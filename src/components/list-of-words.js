import React from 'react';
import NavBar from './navbar.js';
import EachLetter from './each-letter';

import './list-of-words.css';

export default function listOfWords(){
    return (
        <div>
            <NavBar />
            <h2>My Lexi List</h2>
            <section>
                <EachLetter />
            </section>
        </div>
    )
}