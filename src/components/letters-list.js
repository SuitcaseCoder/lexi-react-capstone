import React from 'react';
// import {Link} from 'react-router-dom';

import EachLetter from '../components/each-letter.js';
import './each-letter.css';


export default class lettersList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        //state should be something that changes/is changeable ... letters aren't gonna change
          letters: ['a','b','c','d','e','f','g','h','i','j','k',"l", "m", "n", "o", "p",
          "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        }
    }
      render() {
          const letters = this.state.letters.map((letter, index)=>(
            
            <li key={index}>
            <h2>{letter}</h2>
            <EachLetter {...letter} />
            </li>
          ));

          
          return (
            <ul>
            {letters}
            </ul>
          )
        }    
}

//mapping redux state to props or something like that.
