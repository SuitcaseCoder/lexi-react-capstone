import React from 'react';
// import './each-letter.css';

export default function Challenge(props) {
    constructor(props){
        super(props);
        this.state = {
            currentQuestion: '',
            currentAnswer: ''
        }
        
        setCurrentQA(){
            this.setState({
                currentQuestion: this.props.definition,
                currentAnswer: this.props.word
            })
        }

        // const letterId = props._id;
        return (
            <form onSubmit={this.submitAnswer} className="formStyle">
                <label className="Challenge" value={this.state.definition}>
                <Challenge />
                </label>
                <input placeholder="Answer" type="text" onChange={this.handleAnswerChange} className="answerInput"/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
            // <input type=button

            // <li className="eachChallenge">
            //     <div className="challengeName">{props.definition}</div>
            //     <div className="answerInput" className="wordDefinition"></div>
            // </li>
        )      
    }
}