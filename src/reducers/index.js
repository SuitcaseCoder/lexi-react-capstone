import * as actions from '../actions';

const initialState = {
    words: [{
        word:'',
        definition: ''
    }],
    authToken: null,
    currentuser: null,
    loading: false,
    loginProcess: 'form',
    error: null,
    signupProcess: 'form',
    signupError: null,
    signupMessage: ''
};

export const lexiReducer = (state = initialState, action) => {
    console.log('action .... ', action);
    if(action.type === actions.ADD_WORD){
        return Object.assign({}, state, {
            words: [...state.words, {
                word: action.word.word,
                definition: action.word.definition
            }]
        });
    }

    if(action.type === actions.FETCH_WORDS_SUCCESS){
        return Object.assign({}, state, {
            words: action.words
        })
    }
    

    if(action.type === actions.DELETE_WORD_SUCCESS){
        return Object.assign({}, state, {
            words: action.updatedWordList
        })
    }

    if(action.type === actions.CREATE_USER){
        return Object.assign({}, state,{
            username: action.username,
            password: action.password,
            firstName: action.firstName,
            lastName: action.lastName,
            signupProcess: 'done',
            signupError: action.signupError,
            signupMessage: action.signupMessage
        })
    }
    
    // if (action.type === actions.SIGNUP_SUCCESS) {
    //     return Object.assign({}, state, {
    //         signupProcess: 'done',
    //         loading: false, 
    //         error: null
    //     })
    // } else 
    if (action.type === actions.SIGNUP_ERROR){
        return Object.assign({}, state, {
            signupProcess: 'form',
            loading: false, 
            signupMessage: action.signupMessage,
            signupCode: action.signupCode
        });
    }

    // if(action.type === actions.USER_LOGIN){
    //     return Object.assign({}, state,{
    //         username: action.username,
    //         password: action.password,
    //     })
    // }

// ---------------------------------------------------

    if(action.type === actions.SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === actions.CLEAR_AUTH) {
        return Object.assign({}, state, {
            authToken: null,
            currentuser: null
        });
    } else if (action.type === actions.AUTH_REQUEST) {
        return Object.assign({}, state, {
            loginProcess: 'spinning',
            loading: true,
            error: null
        });
    } else if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loginProcess: 'done',
            loading: false, 
            error: null
        });
    } else if (action.type === actions.AUTH_ERROR){
        return Object.assign({}, state, {
            loginProcess: 'form',
            loading: false, 
            error: action.error
        });
    }
    
    if(action.type === actions.EDIT_WORD_SUCCESS){
        return Object.assign({}, state, {
            //updated word/s
        })
    }
    return state 
}

// ---------------------------------------------------
// handle edit word reducer. 