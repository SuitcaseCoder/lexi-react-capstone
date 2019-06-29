import React from 'react';

import NavBar from './navbar';

import './get-started.css';

// onClick() {
//     render/return <NewWordForm />
// }
// and then call the onclick function within the button props ?

// handleGetStartedButton(){

// }

// export default function getStarted() {
//         return (
//             <section class="getStarted">
//                 <Button id="getStarted" >
//                     Get started
//                 </button>
//             </section>  
//         )
// }

export default function GetStarted(props) {
    
    return (
        <div>
        <NavBar />
        <div>
        <Link to="signup"><button className="getStarted">Get Started</button></Link>

        {/* <Link to="signup"><button className="getStarted" onClick={(props)=> {props.handleClickGetStarted()}}></button></Link> */}
        </div>
        </div>
    )
}


function Button(props){
    return <button onClick={()=> props.onClick()}>get started</button>
}
