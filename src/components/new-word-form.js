//------------- NEW WORD FORM ---------------- //
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

import './form.css';
import './new-word-form.css';

import {addNewWord} from '../actions/index.js';
// import displayWords from '../actions/index.js';

class NewWord extends Component {
    constructor(props){
        super(props);
        this.state = {
            word:'',
            definition: '',
            returnToList: false

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
        this.props.dispatch(addNewWord(this.state.word, this.state.definition));
        this.setState({returnToList: true})
    };

    render() {
        if(this.state.returnToList === true) {
            return <Redirect to ="/mylist" />
        } 

        return(
            <div className="formComponentContainer">
            <h2 className="formTitle">Add Word</h2>
            <form onSubmit={this.handleNewWordSubmit} className="formStyle">
                <label>
                    {/* Word */}
                    <input placeholder="Word" type="text" value={this.state.word} onChange={this.handleWordChange} />
                </label>
                <label>
                    {/* Definition */}
                    <input placeholder="Definition" type="text" value={this.state.definition} onChange={this.handleDefChange} className="defInputField"/>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    word: state.word,
    definition: state.definition,

});

export default connect(mapStateToProps)(NewWord);
