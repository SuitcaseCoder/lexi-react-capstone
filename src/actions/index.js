// import { wordsReducer } from "../reducers";
import {_addNewWord} from '../checkingNewWordThunk';

//action
export const ADD_WORD = 'ADD_WORD';
//action creator . just
// export const addWord = (word,definition) => ({
//     type: ADD_WORD,
//     word,
//     definition
// });

export const addNewWord = () => dispatch => {
    alert('addNewWord action creator reached')
    fetch(`https://evening-sierra-54551.herokuapp.com/words`).then(res => {
        alert('fetch call made it back correctly');
        return res.json();
    }).then(words => {
        dispatch(addNewWord(words));
    })
}


//actions to consider: 
// DELETE word
// POST/create word
// GET all words
// login
// signup
// view/PUT word


export default addNewWord;