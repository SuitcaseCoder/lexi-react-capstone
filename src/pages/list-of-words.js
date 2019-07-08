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
    handleDeleteButton(event){
        event.preventDefault();
        console.log(this.props._id);
        //add deleted word as a param into deleteSelectedWord. figure out how to get word from word click.
        this.props.dispatch(deleteSelectedWord(this.props._id));
    }
//------------------------------------------
    render() {
        const words = this.props.words.map((word,index)=>(
            <div key={index}>
            <EachLetter {...word}  />
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