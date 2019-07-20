import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
// import {BrowserRouter as Route} from 'react-router-dom';
// import { ListOfWords } from '../pages/list-of-words';

import {normalizeResponse} from '../normalizeResponse';
import { API_BASE_URL } from "../config";


// -----------------FETCH WORDS SUCCESS-------------------
export const FETCH_ALL_WORDS_SUCCESS = 'FETCH__ALL_WORDS_SUCCESS';
export const fetchAllWordsSuccess = allWords => ({
    type: FETCH_ALL_WORDS_SUCCESS,
    allWords
});

export const fetchAllWords = () => (dispatch) => {
    // ${API_BASE_URL}
    // http://localhost:8080

    fetch(`${API_BASE_URL}/allWords`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
        }
    })
        // .then(res => normalizeResponseErrors(res))
        .then(res => res.json(res))
        .then((allWords) => {console.log('allWords,,,,,', allWords)
        dispatch(fetchAllWordsSuccess(allWords))
    })
        .catch(err => {
            console.log(err);
            // dispatch(fetchProtectedDataError(err));
        });
};


// --------------------ADD WORD--------------------
export const ADD_WORD = 'ADD_WORD';
 const addWord = (word, definition) => ({
    type: ADD_WORD,
        word,
        definition
});

export const addNewWord = (word, definition) => dispatch => {
    const authToken =  localStorage.getItem(`authToken`);
    fetch(`${API_BASE_URL}/create-word/protected`,{
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
    })
}

// -----------------FETCH WORDS SUCCESS-------------------
export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const fetchWordsSuccess = words => ({
    type: FETCH_WORDS_SUCCESS,
    words
});

export const fetchWords = () => (dispatch) => {
    // ${API_BASE_URL}
    // http://localhost:8080
    const authToken =  localStorage.getItem(`authToken`);

    fetch(`${API_BASE_URL}/words/protected`,{
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

// ------------------DELETE WORD SUCCESS----------------------

export const DELETE_WORD_SUCCESS = "DELETE_WORD_SUCCESS";
const deleteWordSuccess = (updatedWordList) => ({
    type: DELETE_WORD_SUCCESS,
        updatedWordList,
        isDeleted: true
});


export const deleteSelectedWord = (deletedWordId) => dispatch => {
    const authToken =  localStorage.getItem(`authToken`);
    fetch(`${API_BASE_URL}/delete/${deletedWordId}`,{
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
        dispatch(deleteWordSuccess(updatedWords))

        // console.log(res.status);
        // if (res.status === 204){
        //     //add deleteSuccess action here.
        //     console.log(deletedWordId)
        //     dispatch(deleteWord(deletedWordId));
        // }
    })
}


// ------------------CREATE USER---------------------

export const CREATE_USER = "CREATE_USER";
const createUser = (username, password, firstName, lastName) => ({
    type: CREATE_USER,
        username,
        password,
        firstName,
        lastName
});

export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const signupError = (signupError,signupMessage) => ({
    type: SIGNUP_ERROR,
    signupError,
    signupMessage
});

// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
// export const signupSuccess = createdUser => ({
//     type: SIGNUP_SUCCESS,
//     createdUser
// });

export const createNewUser = (username, password, firstName, lastName) => dispatch => {
    fetch(`${API_BASE_URL}/create-user`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            username,
            password,
            firstName,
            lastName
        })
    })
    .then(res => normalizeResponse(res))
    .then(res=> res.json())
    .then((createdUser)=> {
        dispatch(createUser(createdUser));
    })
    .catch(err => {
        const {code, message} = err;
        if (code === 422){
            dispatch(signupError(code, message))
        }
    })
}

// ---------------EDIT WORD SUCCESS----------------------

export const EDIT_WORD_SUCCESS = "EDIT_WORD_SUCCESS";
const editWordSuccess = (editedWord) => ({
    type: EDIT_WORD_SUCCESS,
    editedWord
});

// pass word as the object and log it
export const editWord = (wordId, updatedWord, updatedDef) => dispatch => {
    const authToken = localStorage.authToken;
    fetch(`${API_BASE_URL}/editWord/${wordId}`,{
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
        dispatch(editWordSuccess(editedWord));
        dispatch(fetchWords());
    })
}



// --------------- AUTH CHECKS --------------------
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH,
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser, 
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


// --------------- LOGIN --------------------

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return(
        fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res =>  
            res.json())

        //getting the token
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const {code} = err;
            const message = 
                code === 401 ? 'Incorrect username or password' : 'Unable to login, please try again';
                dispatch(authError(message));
        })
    );
};



export const refreshAuthtoken = () => (dispatch, getState) => {
    dispatch(authRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
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


