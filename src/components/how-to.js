import React from 'react';
import './how-to.css';

export default function HowTo()  {
    // render() {
    //     const stepOne = this.props.stepOne;
    //     const stepTwo = this.props.stepTwo;
    //     const stepThree = this.props.stepThree;
    
    const stepOne = "Just learned a new word, you don't want to forget five minutes from now? You can now create your very own lexicon with Lexi!";
    const stepTwo = "Click on 'Get Started' to register an account and login. Add, view, edit, or delete any word by navigating through the top links.";
    const stepThree = "Don't want an account yet, but still want to test it out? Skip to login and use these credentials:      Username: demo Password: password123";

        return (
            <section className="howItWorks">
                <div className="howToSteps" id="step1"> {stepOne} </div>
                <div className="howToSteps" id="step2"> {stepTwo} </div>
                <div className="howToSteps" id="step3"> {stepThree} </div>
            </section>
        )
        
    // }
}