// import {_addNewWord} from '../checkingNewWordThunk';

export const ADD_WORD = 'ADD_WORD';
 const addWord = (word) => ({
    type: ADD_WORD,
    word
});

export const addNewWord = (word,def) => dispatch => {
    fetch(`https://evening-sierra-54551.herokuapp.com/words`).then(res => {
        return res.json();
    }).then(words => {
        dispatch(addWord(words));
    })
}

export const DISPLAY_ALL_WORDS = 'DISPLAY_ALL_WORDS';
const displayAllWords = (allWords) => ({
    type: DISPLAY_ALL_WORDS,
    allWords
});

export const displayWords = (allWords) => dispatch => {
    fetch(`https://evening-sierra-54551.herokuapp.com/words`)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(allWords => {
        dispatch(displayAllWords(allWords));
    })
}

//actions to consider: 
// DELETE word
// POST/create word
// GET all words
// login
// signup
// view/PUT word


// export default addNewWord;
export default displayWords;