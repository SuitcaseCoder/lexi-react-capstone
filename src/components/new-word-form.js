//------------- NEW WORD FORM ---------------- //
import React, {Component} from 'react';
import {connect} from 'react-redux';

import './new-word-form.css';

import addNewWord from '../actions/index.js';
// import displayWords from '../actions/index.js';

class NewWord extends Component {
    constructor(props){
        super(props);
        this.state = {
            word:'',
            definition: ''
        };
          
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleDefChange = this.handleDefChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleWordChange(event){
        this.setState({
            word:  event.target.value,
        });
    }

    handleDefChange(event){
        this.setState({
            definition: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.word);
        console.log(this.state.definition);
        this.props.dispatch(addNewWord(this.state.word, this.state.definition));
        
        //all fetch requests be done in Async actions
        //dispatch a fetch request to a different action 
        // replace alert with dispatch ---  dispatch action that'll make ajax request 
    }

    render() {
        return(
            <div>
            <h2>just maybe a new word</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Word
                    <input type="text" value={this.state.word} onChange={this.handleWordChange} />
                </label>
                <label>
                    Definition
                    <textarea value={this.state.definition} onChange={this.handleDefChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    word: state.word,
    definition: state.definition

});

export default connect(mapStateToProps)(NewWord);
