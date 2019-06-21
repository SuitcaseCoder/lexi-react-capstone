// import { wordsReducer } from "../reducers";

export const ADD_WORD = 'ADD_WORD';
export const addWord = (word,definition) => ({
    type: ADD_WORD,
    word,
    definition
});

// should ADD_WORD & ADD_DEFINITION be separate? 

//actions to consider: 
// delete word
// edit/update word

