import React from 'react';

export default function EachLetter(props) {

    return (
        <div>
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="wordDefinition">{props.definition}</div>
                <button className="deleteThisWord" onClick={(e) => props.handleDeleteButton(props._id, e)}
                >delete</button>
            </li>
        </div>
        );      
    };

