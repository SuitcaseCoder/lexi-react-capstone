//------------- MY LIST PAGE ---------------- //
import React from 'react';
import EachLetter from '../components/each-letter.js';
import LettersList from '../components/letters-list';

import '../components/list-of-words.css';

export default class ListOfWords extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                words: [{
                    word: 'Apfel',
                    def: 'apple'
                    },{
                    word: 'Baum',
                    def: 'tree'
                    },{
                    word: 'Chance',
                    def: 'chance like in english, but with a french accent'
                    },{
                    word: 'deine',
                    def: 'yours'
                    }
                ]
            }
        }
 
        // render() {
        //     const words = this.state.words.map((word,index)=>{
        //         if(word[0] === {letter}){
        //             <div key={index}>
        //             <EachLetter {...word} />
        //             </div>
        //         }
        //     }
        //     );

    render() {
        const words = this.state.words.map((word,index)=>(
                <div key={index}>
                <EachLetter {...word} />
                </div>
        )
        );

        return ( 
            <div>
                <ul className="entireList">
                    <li className="eachLetter">
                        <LettersList />
                        <ul className="wordsInEachLetter">
                            {words}
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}



// action would make the ajax request/ in actions
// data comes back// as json object must map through it in fetch rquet in component
//  dispatch a separate sync action with type property/ in component
//  update the state with data / by doing:
//  connect and mapstateToProp with that state // ??