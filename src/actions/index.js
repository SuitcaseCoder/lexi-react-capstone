import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
// import {BrowserRouter as Route} from 'react-router-dom';
// import { ListOfWords } from '../pages/list-of-words';

// import {normalizeResponseErrors} from 
// -------------------------------------------------------------------
export const ADD_WORD = 'ADD_WORD';
 const addWord = (word, definition) => ({
    type: ADD_WORD,
        word,
        definition
});

export const addNewWord = (word, definition) => dispatch => {
    const authToken =  localStorage.getItem(`authToken`);
    fetch(`https://evening-sierra-54551.herokuapp.com/create-word/protected`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
                word,
                definition
    })
    })
    .then(res => {
        return res.json();
    })
    .then((word,definition) => {
        dispatch(addWord(word,definition));
        alert(`thanks for feeding me a bunch of letters`);
    })
}

// -------------------------------------------------------------------
// GET WORDS - change to require tokens
export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const fetchWordsSuccess = words => ({
    type: FETCH_WORDS_SUCCESS,
    words
});

export const fetchWords = () => (dispatch) => {
    // https://evening-sierra-54551.herokuapp.com
    // http://localhost:8080
    const authToken =  localStorage.getItem(`authToken`);

    fetch(`http://localhost:8080/words/protected`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
        // .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((words) => dispatch(fetchWordsSuccess(words)))
        .catch(err => {
            console.log(err);
            // dispatch(fetchProtectedDataError(err));
        });
};

// -------------------------------------------------------------------

export const DELETE_WORD_SUCCESS = "DELETE_WORD_SUCCESS";
const deleteWordSuccess = (updatedWordList) => ({
    type: DELETE_WORD_SUCCESS,
        updatedWordList
});
// to re-render list without deleted word


export const deleteSelectedWord = (deletedWordId) => dispatch => {

    console.log(`line 72 actions ` , {deletedWordId});
    const authToken =  localStorage.getItem(`authToken`);
    fetch(`http://localhost:8080/delete/${deletedWordId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
                deletedWordId,
        })
    })
    .then(res => res.json())
    .then(updatedWords => {
        // dispatch(deleteWord(deletedWordId));
        console.log(`hey this is the delete res: `, updatedWords);
        dispatch(deleteWordSuccess(updatedWords))

        // console.log(res.status);
        // if (res.status === 204){
        //     //add deleteSuccess action here.
        //     console.log(deletedWordId)
        //     dispatch(deleteWord(deletedWordId));
        // }
    })
}



// -------------------------------------------------------------------
// POST - CREATE NEW USER
//create user success
export const CREATE_USER = "CREATE_USER";
const createUser = (username, password, firstName, lastName) => ({
    type: CREATE_USER,
        username,
        password,
        firstName,
        lastName
});

export const createNewUser = (username, password, firstName, lastName) => dispatch => {
    fetch(`http://localhost:8080/create-user`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            username,
            password,
            firstName,
            lastName
        })
    })
    .then((createdUser)=> {
        console.log(createdUser);
        dispatch(createUser(createdUser));
    })
}
// -------------------------------------------------------------------
// HANDLE EDIT BUTTON - PUT REQUEST
export const EDIT_WORD_SUCCESS = "EDIT_WORD_SUCCESS";
const editWordSuccess = (editedWord) => ({
    type: EDIT_WORD_SUCCESS,
    editedWord
});

// pass word as the object and log it
export const editWord = (wordId, updatedWord, updatedDef) => dispatch => {
    console.log(`what's being sent as params to editWord: `, wordId, updatedWord, updatedDef)
    const authToken = localStorage.authToken;
    fetch(`http://localhost:8080/editWord/${wordId}`,{
        method: 'PUT',
        headers: {'Content-Type':'application/json',
        Authorization: `Bearer ${authToken}`
    },
        body: JSON.stringify({
            wordId,
            updatedWord,
            updatedDef
        })
    })
    .then((editedWord)=> {
        console.log('essentially the res here -------', editedWord);
        dispatch(editWordSuccess(editedWord));
        dispatch(fetchWords());
    })
}



// -------------------------------------------------------------------
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return(
        fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res =>  res.json())
        //getting the token
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const {code} = err;
            const message = 
                code === 401 ? 'Incorrect username or password' : 'Unable to login, please try again';
        dispatch(authError(err));
        return Promise.reject(
            // new SubmissionError({
               { _error: message}
            // })
        );
        })
    );
};

export const refreshAuthtoken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`http://localhost:8080/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(({authtoken}) => storeAuthInfo(authtoken, dispatch))
        .catch(err => {
            dispatch(authError(err));
            dispatch(clearAuth());
            clearAuthToken(authToken);
        });
};


