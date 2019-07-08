import * as actions from '../actions';

const initialState = {
    // words: [{
    //     word:'',
    //     definition: ''
    // }]
    authToken: null,
    currentuser: null,
    loading: false,
    error: null
};

export const lexiReducer = (state = initialState, action) => {
    if(action.type === actions.ADD_WORD){
        return Object.assign({}, state, {
            words: [...state.words, {
                word: action.word,
                definition: action.definition
            }]
        });
    }

    if(action.type === actions.FETCH_WORDS_SUCCESS){
        return Object.assign({}, state, {
            words: action.words
        })
    }
    
    if(action.type === actions.DELETE_WORD){
        // return Object.assign({}, state, {

        // })
    }

    if(action.type === actions.CREATE_USER){
        return Object.assign({}, state,{
            username: action.username,
            password: action.password,
            firstName: action.firstName,
            lastName: action.lastName
        })
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
            loading: true,
            error: null
        });
    } else if (action.type === actions.AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false, 
            error: action.error
        });
    }
    
    return state 
}