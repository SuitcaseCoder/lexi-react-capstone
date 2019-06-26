import React, {Component} from 'react';
// import {reduxForm, Field} from 'redux-form';

import './new-word-form.css';


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
        alert('A word was submitted: ' + this.state.wordValue + this.state.defValue);
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

export default NewWord;