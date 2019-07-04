import * as actions from '../actions';

const initialState = {
    words: [{
        word:'',
        definition: ''
    }]
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

    return state 
}