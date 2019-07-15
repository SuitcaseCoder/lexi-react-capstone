import React from 'react';
import './each-letter.css';

export default function EachLetter(props) {
    {console.log(props)}
    const letterId = props._id;

    return (
        // <div>
            <li className="eachWord">
                <div className="wordTitle">{props.word}</div>
                <div className="liDiv" className="wordDefinition">{props.definition}</div>
                <span className="red" onClick={(e) => props.handleRedClick(e)} style={{backgroundColor:props.learningProgress}}></span>
                <span className="yellow" onClick={(e) => props.handleYellowClick(e)}></span>
                <span className="green" onClick={(e) => props.handleGreenClick(e)}></span>
                <button className="deleteThisWord" id="deleteWordBtn" onClick={(e) => props.handleDeleteButton(letterId, e)}
                >delete</button>
                <button className="editThisWord" id="editWordBtn" onClick={(e) => props.handleEditButton(letterId, props.word, props.definition, e)}
                >edit</button>
            </li>
        // </div>
        );      
}

    //edit button> modify state to say whether I'm editing or not and then render conditional (if editing show form if not show word) change word/def to form fields ' new section and switch based on the state editing or not' 
    //OR
    //create new component and call redirect to form

