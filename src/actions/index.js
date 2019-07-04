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

// -------------------------------------------------------------------
// GET WORDS
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
            dispatch(fetchWordsSuccess(words));
        });
};

// -------------------------------------------------------------------

export const DELETE_WORD = "DELETE_WORD";
const deleteWord = (deleteWord) => ({
    type: DELETE_WORD,
        deleteWord,
});

export const deleteSelectedWord = (deletedWord) => dispatch => {
    fetch(`http://localhost:8080/delete/{deleteWord}`,{
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                deletedWord,
        })
    })
    .then(res => {
        console.log(res)
        return res.json();
    })
    .then((deletedWord) => {
        dispatch(deleteWord(deletedWord));
    })
}

// -------------------------------------------------------------------
// POST - CREATE NEW USER
export const CREATE_USER = "CREATE_USER";
const createUser = (newUser) => ({
    type: CREATE_USER,
        newUser
});

export const createNewUser = (newUser) => dispatch => {
    fetch(`http://localhost:8080/create-user`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                newUser,
        })
    })
    .then((createdUser)=> {
        dispatch(createUser(createdUser));
    })
}
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// USER LOGIN
export const USER_LOGIN = 'USER_LOGIN';
const login = (loginCreds) => ({
    type: USER_LOGIN,
        login
})

export const userLogin = (loginCreds) => dispatch => {
    fetch(`http://localhost:8080/login`,{
        method: '',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                loginCreds,
        })
    })
    .then((loggedIn)=> {
        dispatch(createUser(loggedIn));
    })
}

// -------------------------------------------------------------------



//actions to consider: 
// DELETE word
// POST/create word
// GET all words
// login
// signup
// view/PUT word


// export default fetchWords;
export default addNewWord;
// export default deleteSelectedWord
// export default displayWords;