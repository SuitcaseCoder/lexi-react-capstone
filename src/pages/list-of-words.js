//------------- MY LIST PAGE ---------------- //
import React from 'react';

import {connect} from 'react-redux';
import{fetchWords} from '../actions';
import {deleteSelectedWord} from '../actions';

import EachLetter from '../components/each-letter.js';
// import LettersList from '../components/letters-list';

import '../components/list-of-words.css';

export class ListOfWords extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            words: [{
            word:'',
            definition:''
        }]
    };
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(fetchWords());
    }

//------------------------------------------
    handleDeleteButton(wordId, event){
        event.preventDefault();
        this.props.dispatch(deleteSelectedWord(wordId));
    }
//------------------------------------------
    render() {
        const words = this.props.words.map((word,index)=>(
            <div key={index}>
            <EachLetter {...word}  handleDeleteButton={this.handleDeleteButton}  />
            {/* wordId={this.props._id} */}
            </div>
    ));

    return (
        <div>
            <h2>all of my words</h2>
            <ul>
                {words}
            </ul>
        </div>
    )
    }
}

const mapStateToProps = state => ({
    words: state.words,
})

export default connect(mapStateToProps)(ListOfWords);