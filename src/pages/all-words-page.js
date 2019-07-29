//------------- ALL WORDS PAGE ---------------- //
import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import{fetchAllWords} from '../actions';
import {addNewWord} from '../actions';

import EachWordItem from '../components/eachWordItem';

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

        this.handleAddToMyListButton = this.handleAddToMyListButton.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllWords());
    }

    handleAddToMyListButton(wordAdded, defAdded, event){
        event.preventDefault();
        this.props.dispatch(addNewWord(wordAdded, defAdded));
    }

//------------------------------------------

    render() {

        console.log('from all-words-page isLoggedin =  ', this.props.isLoggedIn);
        if(this.props.isLoggedIn === false){
            return <Redirect to="/login-page" />
        } else {
            const allWords = this.props.allWords.map((word,index)=>(
                <EachWordItem {...word} key={index}  
                handleAddToMyListButton={this.handleAddToMyListButton} 
                />
            ));
            return(
                <div className="wordListPageContainer">
                <ul className="wordListContainer">
                <h2 className="wordListTitle">All Words</h2>
                    {allWords}
                </ul>
                </div> 
            )
        }

    } 
    
}


const mapStateToProps = state => ({
    allWords: state.allWords,
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(AllWords);