import React from 'react';
import './each-letter.css';

export default function EachLetter(props) {
    const letterId = props._id;

    return (
            <li className="eachWord" key={letterId}>
                <div className="wordTitle">{props.word}</div>
                <div className="liDiv" className="wordDefinition">{props.definition}</div>
                {/* <LearningProgress/> */}
                {/* <span className="red" key={letterId} style={{backgroundColor:props.isRed}} onClick={(e) => props.handleRedClick(letterId, e)}>still learning</span>
                <span className="yellow" style={{backgroundColor:props.isYellow}} onClick={(e) => props.handleYellowClick(e)}>almost got it</span>
                <span className="green" style={{backgroundColor:props.isGreen}} onClick={(e) => props.handleGreenClick(e)}>got it!</span> */}
                <button className="deleteThisWord" id="deleteWordBtn" onClick={(e) => props.handleDeleteButton(letterId, e)}
                >delete</button>
                <button className="editThisWord" id="editWordBtn" onClick={(e) => props.handleEditButton(letterId, props.word, props.definition, e)}
                >edit</button>
            </li>
        );      
}
