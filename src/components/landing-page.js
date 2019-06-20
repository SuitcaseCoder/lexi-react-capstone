class GetStarted extends React.Component {
    render() {
        // const getStarted = this.props.getStarted;

        return (
            <section class="getStarted">
                <button id="getStarted" role="button">
                    Get started
                </button>
            </section>
           
        )
    }
}

class HowTo extends React.Component {
    render() {
        const stepOne = this.props.stepOne;
        const stepTwo = this.props.stepTwo;
        const stepThree = this.props.stepThree;

        return (
            <section class="howItWorks">
                <div class="howToSteps" id="step1"> stepOne </div>
                <div class="howToSteps" id="step2"> stepTwo </div>
                <div class="howToSteps" id="step3"> stepThree </div>
            </section>
        )
        
    }
}

class Header extends React.Component {
    render() {
        return (
            <header role="banner">
                <h1>Lexi</h1>
             </header>
        )
    }
}

