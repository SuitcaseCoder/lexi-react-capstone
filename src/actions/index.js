import {_addNewWord} from '../checkingNewWordThunk';

export const ADD_WORD = 'ADD_WORD';
//  const addWord = (word,definition) => ({
//     type: ADD_WORD,
//     word,
//     definition
// });

export const addNewWord = (word,def) => dispatch => {
    alert('addNewWord action creator reached')
    fetch(`https://evening-sierra-54551.herokuapp.com/{word}`).then(res => {
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