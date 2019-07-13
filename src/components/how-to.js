import React from 'react';
import './how-to.css';

export default function HowTo()  {
    // render() {
    //     const stepOne = this.props.stepOne;
    //     const stepTwo = this.props.stepTwo;
    //     const stepThree = this.props.stepThree;
    
    const stepOne = "Just learned a new word, you don't want to forget five minutes from now? You can now create your very own lexicon with Lexi!";
    const stepTwo = "Click on 'Get Started' to register an account and login. Demo Login: username: demo password: password123";
    const stepThree = "Add, view, edit, or delete any word by navigating through the top links";

        return (
            <section className="howItWorks">
                <div className="howToSteps" id="step1"> {stepOne} </div>
                <div className="howToSteps" id="step2"> {stepTwo} </div>
                <div className="howToSteps" id="step3"> {stepThree} </div>
            </section>
        )
        
    // }
}