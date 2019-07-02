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
        console.log(action.words);
        return Object.assign({}, state, {
            words: action.words
        })
        // return action.words.map((oneWord)=>{
        //     console.log('testing', oneWord);
        //     return Object.assign({}, state, {
        //         // serialize data in server.js , then I won't need the map at all. then do action words and action definition
        //         //then copy array of words into new array of words
        //         words: [...state.words, {
        //             word: oneWord.word,
        //             definition: oneWord.definition
        //         }]  
        //     });
        // })
    }
    return state 
}