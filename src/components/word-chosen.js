//------------- WORD CHOSEN  ---------------- //
import React from 'react';

import NavBar from './navbar';

import './word-chosen.css';

export default function WordChosen() {
    return(
        <div>
            <NavBar />
            <div>
                <p>[word chosen here]</p>
                <p>[word description here]</p>
                <button>edit/save</button>
                {/* if editing then change text to save. if not editing then leave as edit */}
                <button>delete</button>
            </div>
        </div>
    )
}
