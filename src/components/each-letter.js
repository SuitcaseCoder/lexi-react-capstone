import React from 'react';

import NavBar from './navbar';
import ExampleWord from './example-word';


export default function EachLetter() {

    return (
        // how do I make this change by letter. so alphabetize it and display the correct letter? 
        
        <section class="letter-section" id="a">
        <h2>
          {/* {letter}  */}
        </h2>
        <ul>
          <li id="word1" class="a">
            <a href="#">
              <ExampleWord />
            </a>
          </li>
          <li id="word2" class="a">
            <a href="#">Apfel</a>
          </li>
          <li id="word3" class="a">
            <a href="#">Armeise</a>
          </li>
        </ul>
      </section>
    )
}