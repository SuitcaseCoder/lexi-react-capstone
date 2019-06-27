//------------- MY LIST PAGE ---------------- //
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

// action would make the ajax request/ in actions
// data comes back// as json object must map through it in fetch rquet in component
//  dispatch a separate sync action with type property/ in component
//  update the state with data / by doing:
//  connect and mapstateToProp with that state // ??