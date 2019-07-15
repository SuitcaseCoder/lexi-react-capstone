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
        isDeleted: false,
        // learningProgress: 'white',
        isRed: 'white',
        isYellow: 'white',
        isGreen: 'white'
    };

        this.handleUpdatedWord = this.handleUpdatedWord.bind(this);
        this.handleUpdatedDef = this.handleUpdatedDef.bind(this);

        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleSubmitEditButton = this.handleSubmitEditButton.bind(this);

        this.handleRedClick = this.handleRedClick.bind(this);
        this.handleYellowClick = this.handleYellowClick.bind(this);
        this.handleGreenClick = this.handleGreenClick.bind(this);


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
        this.setState({
            isDeleted: true
        })
        this.props.dispatch(fetchWords());
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

//------------------------------------------

    handleRedClick(e){
        e.preventDefault();
        console.log(this.state.isRed);
        this.setState({
            isRed: this.state.isRed === 'white' ? 'rgba(255,0,0, 0.5)' : 'white'
            // isRed: 'red'
        })

    };


    handleYellowClick(e){
        e.preventDefault();
        console.log('yellow clicked');
        this.setState({
            isYellow: this.state.isYellow === 'white' ? 'rgba(255,255,0, 0.5)' : 'white'
        })
    };

    handleGreenClick(e){
        e.preventDefault();
        console.log('green clicked');
        this.setState({
            isGreen: this.state.isGreen === 'white' ? 'rgba(0,128,0, 0.5)' : 'white'
            // isGreen: 'green'
        })
    };

//------------------------------------------

    render() {
        console.log('okay now it should be the color clicked.....', this.state.isRed, this.state.isYellow, this.state.isGreen)
        const words = this.props.words.map((word,index)=>(
            <EachLetter {...word} key={index} 
            handleDeleteButton={this.handleDeleteButton}  
            handleEditButton={this.handleEditButton} 
            handleRedClick={this.handleRedClick}
            handleYellowClick={this.handleYellowClick}
            handleGreenClick={this.handleGreenClick}
            isRed={this.state.isRed}
            isYellow={this.state.isYellow}
            isGreen={this.state.isGreen}
            // learningProgress={this.learningProgress}
            />
        ));

    
        if(this.state.isEditing === false){
            return (
            <div className="wordListPageContainer">
            <h2 className="wordListTitle">Your List of Words</h2>
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
    learningProgress: state.learningProgress
})

export default connect(mapStateToProps)(ListOfWords);