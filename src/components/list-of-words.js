import React from 'react';
import NavBar from './navbar.js';
import EachLetter from './each-letter';

export default function listOfWords(){
    return (
        <div>
            <NavBar />
            <h2>My Lexi List</h2>
            <EachLetter />
        </div>
    )
}