import React from 'react';

// import NavBar from './navbar';

import './get-started.css';


export default function GetStarted(props) {
    
    return (
        <div className="getStartedBtnDiv">
        <Link to="signup" className="linktosignup"><button className="getStarted">Get Started</button></Link>
        </div>
    )
}


// function Button(props){
//     return <button onClick={()=> props.onClick()}>get started</button>
// }
