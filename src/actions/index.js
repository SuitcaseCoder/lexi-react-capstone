// import {_addNewWord} from '../checkingNewWordThunk';

export const ADD_WORD = 'ADD_WORD';
 const addWord = (word,definition) => ({
    type: ADD_WORD,
        word,
        definition
});

export const addNewWord = (word, definition) => dispatch => {
    fetch(`https://evening-sierra-54551.herokuapp.com/words`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                word,
                definition
    })
    })
    .then(res => {
        console.log(res)
        return res.json();
    })
    .then((word,definition) => {
        dispatch(addWord(word,definition));
    })
}


//actions to consider: 
// DELETE word
// POST/create word
// GET all words
// login
// signup
// view/PUT word

export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const fetchWordsSuccess = words => ({
    type: FETCH_WORDS_SUCCESS,
    words
});

export const fetchWords = () => dispatch => {
    // https://evening-sierra-54551.herokuapp.com
    // http://localhost:8080
    fetch(`https://evening-sierra-54551.herokuapp.com/words`,{
        method: 'get',
        headers: {'Content-Type':'application/json'}
        }
    )
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json();
        })
        .then(words => {
            console.log('from fetch words: ', words);
            dispatch(fetchWordsSuccess(words));
        });
};


export default fetchWords;
// export default addNewWord;
// export default displayWords;