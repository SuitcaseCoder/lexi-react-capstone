import React from 'react';
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
        <Button id="getStarted" onClick={(props)=> {props.handleClickGetStarted()}}/>
        </div>
    )
}


function Button(props){
    return <button onClick={()=> props.onClick()}>get started</button>
}
