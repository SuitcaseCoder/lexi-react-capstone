import React from 'react';

export default function EachLetter(props) {
    console.log('testing props in each-letter', props.word, props.definition);
    return (
        <div>
            <li className="eachWord">
                Hello there
                <div className="wordTitle">{props.word}</div>
                <div className="wordDefinition">{props.definition}</div>
            </li>
        </div>
        );      
    };

