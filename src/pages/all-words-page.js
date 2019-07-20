//------------- ALL WORDS PAGE ---------------- //
import React from 'react';

import {connect} from 'react-redux';
import{fetchAllWords} from '../actions';
import {addNewWord} from '../actions';

import EachWordItem from '../components/eachWordItem';
// import LettersList from '../components/letters-list';

import '../components/list-of-words.css';
import '../components/form.css';
import '../components/new-word-form.css';


export class AllWords extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allWords:[{word: '', definition: ''}],
            words: [{
            word:'',
            definition:''
        }],
        isEditing: false,
        editingWordId: '',
        editingWord: '',
        editingDef: '',
        isDeleted: false,
        isRed: 'white',
        isYellow: 'white',
        isGreen: 'white',
        activeWordId: ''
    };

    //change to "add to my list" button
        this.handleAddToMyListButton = this.handleAddToMyListButton.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllWords());
    }

    handleAddToMyListButton(wordAdded, defAdded, event){
        console.log('add to my list clicked and word added and def added is......', wordAdded, defAdded);
        event.preventDefault();
        this.props.dispatch(addNewWord(wordAdded, defAdded));
    }

//------------------------------------------

    render() {
        const allWords = this.props.allWords.map((word,index)=>(
            <EachWordItem {...word} key={index}  
            //change to 'add to my list' button
            handleAddToMyListButton={this.handleAddToMyListButton} 
            />
        ));

        return (
            <div className="wordListPageContainer">
            {/* <h2 className="wordListTitle">All Words</h2> */}
            <ul className="wordListContainer">
            <h2 className="wordListTitle">All Words</h2>
                {allWords}
            </ul>
            </div> 
        )

    } 
    
}


const mapStateToProps = state => ({
    allWords: state.allWords,
})

export default connect(mapStateToProps)(AllWords);