import React from 'react';
import './get-started.css';

// onClick() {
//     render/return <NewWordForm />
// }
// and then call the onclick function within the button props ?

export default function getStarted() {
        return (
            <section class="getStarted">
                <button id="getStarted" role="button">
                    Get started
                </button>
            </section>  
        )
}