import React from 'react';
import './each-letter.css';

export default function EachLetter(props) {
    const wordAddedId = props._id;

    return (
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="liDiv" className="wordDefinition">{props.definition}</div>
                {/* <LearningProgress/> */}
                <button className="addToMyList" id="addWordBtn" onClick={(e) => props.handleAddToMyListButton(wordAddedId, e)}
                >Add to My List</button>

            </li>
        );      
}
