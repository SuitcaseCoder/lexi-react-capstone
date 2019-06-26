import React from 'react';
import './how-to.css';

export default function HowTo()  {
    // render() {
    //     const stepOne = this.props.stepOne;
    //     const stepTwo = this.props.stepTwo;
    //     const stepThree = this.props.stepThree;
    
    const stepOne = "Just learned a new word, you don't want to forget five minutes from now? Get Started to begin saving new words to your list";
    const stepTwo = "Access and view your list of words from your 'lexi-list' in the navbar";
    const stepThree = "view, edit, or delete any word by clicking on it from your 'lexi-list";

        return (
            <section className="howItWorks">
                <div className="howToSteps" id="step1"> {stepOne} </div>
                <div className="howToSteps" id="step2"> {stepTwo} </div>
                <div className="howToSteps" id="step3"> {stepThree} </div>
            </section>
        )
        
    // }
}