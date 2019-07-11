import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
// import {BrowserRouter as Route} from 'react-router-dom';
// import { ListOfWords } from '../pages/list-of-words';

// import {normalizeResponseErrors} from 


// --------------------ADD WORD--------------------
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

// -----------------FETCH WORDS SUCCESS-------------------
export const FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS';
export const fetchWordsSuccess = words => ({
    type: FETCH_WORDS_SUCCESS,
    words
});

export const fetchWords = () => (dispatch) => {
    // https://evening-sierra-54551.herokuapp.com
    // http://localhost:8080
    const authToken =  localStorage.getItem(`authToken`);

    fetch(`https://evening-sierra-54551.herokuapp.com/words/protected`,{
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
        updatedWordList
});


export const deleteSelectedWord = (deletedWordId) => dispatch => {

    console.log(`line 72 actions ` , {deletedWordId});
    const authToken =  localStorage.getItem(`authToken`);
    fetch(`https://evening-sierra-54551.herokuapp.com/delete/${deletedWordId}`,{
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
export const signupError = error => ({
    type: SIGNUP_ERROR,
    error
});

// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
// export const signupSuccess = createdUser => ({
//     type: SIGNUP_SUCCESS,
//     createdUser
// });

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
    // .then(res=> res.json)
    .then((createdUser)=> {
        console.log(createdUser);
        dispatch(createUser(createdUser));
    })
    .catch(err => {
        console.log('made it to the err', err)
        const {reason, message, location} = err;
        if (reason === 'ValidationError'){
            console.log('line 158 ... ', message, location)
            dispatch(signupError(message,location))
        }
        // const message = 
        //     code === 422 ? 'Incorrect username or password' : 'Unable to login, please try again';
        //     console.log(message);
        //     dispatch(signupError(message));
    })
}

// .catch(err => {
//     const {reason, message, location} = err;
//     if (reason === 'ValidationError') {
//         // Convert ValidationErrors into SubmissionErrors for Redux Form
//         return Promise.reject(
//             new SubmissionError({
//                 [location]: message
//             })
//         );
//     }
// });
// ---------------EDIT WORD SUCCESS----------------------

export const EDIT_WORD_SUCCESS = "EDIT_WORD_SUCCESS";
const editWordSuccess = (editedWord) => ({
    type: EDIT_WORD_SUCCESS,
    editedWord
});

// pass word as the object and log it
export const editWord = (wordId, updatedWord, updatedDef) => dispatch => {
    console.log(`what's being sent as params to editWord: `, wordId, updatedWord, updatedDef)
    const authToken = localStorage.authToken;
    fetch(`https://evening-sierra-54551.herokuapp.com/editWord/${wordId}`,{
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



// --------------- AUTH CHECKS --------------------
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


// --------------- LOGIN --------------------

export const login = (username, password) => dispatch => {
    dispatch(authRequest());
    return(
        fetch(`https://evening-sierra-54551.herokuapp.com/api/auth/login`, {
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
    return fetch(`https://evening-sierra-54551.herokuapp.com/auth/refresh`, {
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


