import React from 'react';
import './each-letter.css';

export default function EachLetter(props) {
    const defAdded = props.definition;

    return (
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="liDiv" className="wordDefinition">{props.definition}</div>
                <button className="addToMyList" id="addWordBtn" onClick={(e) => props.handleAddToMyListButton(props.word, defAdded, e)}
                >Add to My List</button>
            </li>
        );      
}
