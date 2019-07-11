//------------- MY LIST PAGE ---------------- //
import React from 'react';

import {connect} from 'react-redux';
import{fetchWords} from '../actions';
import {deleteSelectedWord} from '../actions';
import {editWord} from '../actions';

import EachLetter from '../components/each-letter.js';
// import LettersList from '../components/letters-list';

import '../components/list-of-words.css';
import '../components/form.css';
import '../components/new-word-form.css';


export class ListOfWords extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            words: [{
            word:'',
            definition:''
        }],
        isEditing: false,
        editingWordId: '',
        editingWord: '',
        editingDef: '',

    };

        this.handleUpdatedWord = this.handleUpdatedWord.bind(this);
        this.handleUpdatedDef = this.handleUpdatedDef.bind(this);

        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleSubmitEditButton = this.handleSubmitEditButton.bind(this);

    }
    componentDidMount() {
        this.props.dispatch(fetchWords());
    }

    handleUpdatedWord(event){
        this.setState({
            editingWord:  event.target.value,
        });
    }

    handleUpdatedDef(event){
        this.setState({
            editingDef: event.target.value
        })
    }
//------------------------------------------
    handleDeleteButton(wordId, event){
        event.preventDefault();
        this.props.dispatch(deleteSelectedWord(wordId));
    }

    handleEditButton(wordId, word, def, event){
        event.preventDefault();
        this.setState({
            isEditing: true,
           editingWordId: wordId,
            editingWord: word,
            editingDef: def
        })
       
    }

    handleSubmitEditButton(event, wordId, updatedWord, updatedDef){
        event.preventDefault();
        this.props.dispatch(editWord(wordId, updatedWord, updatedDef));
        this.setState({
            isEditing: false
        })
    }

    render() {

        const words = this.props.words.map((word,index)=>(
            // <div key={index}>
            <EachLetter {...word} key={index} handleDeleteButton={this.handleDeleteButton}  handleEditButton={this.handleEditButton}/>
            // </div>
        ));

    
        if(this.state.isEditing === false){
            return (
            <div className="wordListPageContainer">
            <h2 className="wordListTitle">Words</h2>
            <ul className="wordListContainer">
                {words}
            </ul>
            </div> )

        } else {
            return ( 
                <div className="formComponentContainer">
                    <h2 className="formTitle">Edit</h2>
                    <form onSubmit={this.handleSubmitEditButton} className="formStyle">
                    <label>
                    {/* Word */}
                    <input placeholder="Word" type="text" value={this.state.editingWord} onChange={this.handleUpdatedWord} />
                    </label>
                    <label>
                    {/* Definition */}
                    <input placeholder="Definition" type="text" value={this.state.editingDef} onChange={this.handleUpdatedDef} className="defInputField"/>
                    </label>
                    <input id={this.state.editingWordId} type="submit" value="Submit" onClick={(e) => this.handleSubmitEditButton(e, this.state.editingWordId, this.state.editingWord, this.state.editingDef)} />
                    </form> 
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    words: state.words,
})

export default connect(mapStateToProps)(ListOfWords);