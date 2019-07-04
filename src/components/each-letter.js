import React from 'react';

export default function EachLetter(props) {

    // listenWordSelected(event){
    //     this.setState({
    //         deletedWord:  event.target.value,
    //     });
    // }

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

