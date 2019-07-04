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
        this.handleNewWordSubmit = this.handleNewWordSubmit.bind(this);
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

    handleNewWordSubmit(event){
        event.preventDefault();
        console.log(this.state.word);
        console.log(this.state.definition);
        this.props.dispatch(addNewWord(this.state.word, this.state.definition));
        console.log('thank you for feeding me letters')
    }

    render() {
        return(
            <div>
            <h2>just maybe a new word</h2>
            <form onSubmit={this.handleNewWordSubmit}>
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
