import React from 'react';

export default function EachLetter(props) {

        console.log({props})
    
    return (
        <div>
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="wordDefinition">{props.def}</div>
            </li>
        </div>
        );      
    };

    //  {/* // <Link to="/words/:wordid">{beispielWord}</Link> */}