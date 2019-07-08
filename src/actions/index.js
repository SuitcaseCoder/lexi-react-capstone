import jwtDecode from 'jwt-decode';
import {saveAuthToken, clearAuthToken} from '../local-storage';
// -------------------------------------------------------------------
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
// GET WORDS - change to require tokens
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

// -------------------------------------------------------------------
// USER LOGIN
// export const USER_LOGIN = 'USER_LOGIN';
// const login = (username, password) => ({
//     type: USER_LOGIN,
//         username,
//         password
// })

// export const userLogin = (username, password) => dispatch => {
//     fetch(`http://localhost:8080/login`, {
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({
//                 username,
//                 password
//         })
//     })
//     .then((loggedInUser)=> {
//         dispatch(login(loggedInUser));
//     })
// }

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

        // .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const {code} = err;
            const message = 
                code === 401 ? 'Incorrect username or password' : 'Unable to login, please try again';
        dispatch(authError(err));
        // return Promise.reject(
        //     // new SubmissionError({
        //     //     _error: message
        //     })
        // );
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

// -------------------------------------------------------------------

//actions to consider: 
// DELETE word
// POST/create word
// GET all words
// login
// signup
// view/PUT word

