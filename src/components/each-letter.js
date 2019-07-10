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
                <button className="editThisWord" onClick={(e) => props.handleEditButton(letterId, props.word, props.definition, e)}
                >edit</button>
            </li>
        </div>
        );      
}

    //edit button> modify state to say whether I'm editing or not and then render conditional (if editing show form if not show word) change word/def to form fields ' new section and switch based on the state editing or not' 
    //OR
    //create new component and call redirect to form

