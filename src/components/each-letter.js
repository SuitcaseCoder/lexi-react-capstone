import React from 'react';

export default function EachLetter(props) {
    const letterId = props._id;
    return (
        <div>
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="wordDefinition">{props.definition}</div>
                <button className="deleteThisWord" onClick={(e) => props.handleDeleteButton(letterId, e)}
                >delete</button>
            </li>
        </div>
        );      
    };

