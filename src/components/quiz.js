import React from 'react';
// import './each-letter.css';

export default function Quiz(props) {
    constructor(props){
        super(props);
        this.state = {
            isCorrect: false,
            currentQuestion: '',
            currentAnswer: ''
        }
    };

        // this.handleUpdatedWord = this.handleUpdatedWord.bind(this);

    // componentDidMount() {
    //     this.props.dispatch();
    // }

    // handleSubmitEditButton(event, wordId, updatedWord, updatedDef){
    //     event.preventDefault();
    //     this.props.dispatch(editWord(wordId, updatedWord, updatedDef));
    //     this.setState({
    //         isEditing: false
    //     })
    // }

    handleCurrentQA{
        this.setState({

        })
    }

    render() {
        const words = this.props.words.map((word,index)=>(

            <Challenge {...word} key={index} onClick={this.handleCurrentQA}/>
        ));

    return (
        <div>
            {/* <form onSubmit={this.handleNewWordSubmit} className="formStyle">
                <label className="Challenge" value={this.state.definition}>
                <Challenge />
                </label>
                <input placeholder="Answer" type="text" onChange={this.handleAnswerChange} className="answerInput"/>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form> */}
        </div>
        );      
}

//passing each definition as the value to the 'Challenge' label
// read the input value of the answer
// if the answer === correctAnswer THEN turn green and stay green
// if the answer !== correctAnswer THEN turn red
// on submit read above logic (if correct or wrong) AND change state



const mapStateToProps = state => ({
    words: state.words,
})

export default connect(mapStateToProps)(Quiz);