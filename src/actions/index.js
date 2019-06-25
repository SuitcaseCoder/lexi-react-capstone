// import { wordsReducer } from "../reducers";

export const ADD_WORD = 'ADD_WORD';
export const addWord = (word,definition) => ({
    type: ADD_WORD,
    word,
    definition
});

// should each ACTION be separate? for ex: ADD_WORD & ADD_DEFINITION

//actions to consider: 
// delete word
// edit/update word

