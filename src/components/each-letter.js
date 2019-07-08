import React from 'react';

export default function EachLetter(props) {
    console.log(props)
    console.log(props._id);
    
    return (
        <div>
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="wordDefinition">{props.definition}</div>
                <button className="deleteThisWord" onClick={props.handleDeleteButton}>delete</button>
            </li>
        </div>
        );      
    };

