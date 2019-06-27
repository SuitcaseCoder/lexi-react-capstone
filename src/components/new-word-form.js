//------------- NEW WORD FORM ---------------- //
import React, {Component} from 'react';
import {connect} from 'react-redux';

import './new-word-form.css';

import NavBar from './navbar';
import addNewWord from '../actions/index.js';

class NewWord extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Add a New Word',
            wordValue: '',
            defValue: ''
        };
          
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleDefChange = this.handleDefChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleWordChange(event){
        this.setState({
            wordValue:  event.target.value,
        });
    }

    handleDefChange(event){
        this.setState({
            defValue: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(addNewWord(this.state.wordValue));
        alert('you clicked a button');

        //dispatch a fetch request to a different action 
        // replace alert with dispatch ---  dispatch action that'll make ajax request 
    }

    render() {
        return(
            <div>
            <h2>{this.state.title}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Word
                    <input type="text" value={this.state.wordValue} onChange={this.handleWordChange} />
                </label>
                <label>
                    Definition
                    <textarea value={this.state.defValue} onChange={this.handleDefChange} />
                </label>
                <input type="submit" value="Submit" />
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