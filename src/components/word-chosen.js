//------------- WORD CHOSEN  ---------------- //
import React from 'react';

import NavBar from './navbar';

import './word-chose.css';

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

// what's the difference between the above and the below??

// export default class WordChosen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             wordChosen: {
//                 word: 'exampleWord',
//                 definition: 'example definition blah blah'
//             }
//         }
//     }

//     render() {
//         const wordChosen = this.state.wordChosen.map((word, index) => 
//             <li key={index}>
//                 <WordChosen {...wordChosen} />
//             </li>
//         );
//         return (
//             <div>
//                 <h3>{this.props.word}</h3>
//                 <p className="wordChosen">
//                     {wordChosen}
//                 </p>
//             </div>
//         )
//     }
// }

// WordChosen.defaultProps = {
//     word: 'test'
// };