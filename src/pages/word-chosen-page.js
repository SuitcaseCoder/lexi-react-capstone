import React, {Component} from 'react';

import NavBar from '../components/navbar';
import WordChosen from '../components/word-chosen';

class WordChosenPage extends Component {
    // constructor() {
    //     super()
    // }
    render(){
        
        return (
                <div>
                <NavBar />
                <section>
                    <WordChosen />
                </section>
                </div>
        )
    }

}

export default WordChosenPage;

