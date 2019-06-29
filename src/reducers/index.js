import * as actions from '../actions';

// const initialState = {
//     letterLists: [{
//         title: 'Letter List A',
//         words: [{
//             word: 'A Example Word 1',
//             definition: 'A Example Definition 1'
//         },{
//             word: 'A Example Word 2',
//             definition: 'A Example Definition 2'
//         }, {
//             word: 'A Example Word 3',
//             definition: 'A Example Definition 3'
//         }] 
//     },{
//         title: 'Letter List B',
//         words: [
//             {
//                 word: 'B Example Word 1',
//                 definition: 'B Example Definition 1'
//             }, {
//                 word: 'B Example Word 2',
//                 definition: 'B Example Definition 2'
//             }
//         ]
//     },{
//         title: 'Letter List C',
//         words: [
//             {
//                 word: 'C Example Word 1',
//                 definition: 'C Example Definition 1'
//             }, {
//                 word: 'C Example Word 2',
//                 definition: 'C Example Definition 2'
//             },{
//                 word: 'C Example Word 3',
//                 definition: 'C Example Definition 3'
//             }
//         ]
//     }]
// };


const initialState = {
    wordsA: [{
        // letter: 'A',
        word: 'Apfel',
        definition: 'Ein Obst, der von Baeume waechst.A yummy fruit that grows on trees.'
    }, {
        // letter: 'A',
        word: 'abnehmen',
        definition: 'duenner zu werden. to lose weight'
    }],
    wordsB: [{
        // letter: 'B',
        word: 'Baum',
        definition: 'Eine grosse Pflanze mit vielen Blaetter. A tree.'
    }]
};

export function addWordReducer(state=initialState, action){
    if(action.type === actions.ADD_WORD){
        return Object.assign({}, state, {
            words: [ ...state.words, {
                word: action.word,
                definition: action.definition
            }]
        });
   
    }
    return state;
}

//help.
// export const wordsReducer = (state=initialState, action) => {
//     if (action.type === actions.ADD_WORD) {
//         return Object.assign({}, state, {
//             letterLists: [...state.letterLists, {
//                 words: [...state.words, {
//                     word: action.word,
//                     definition: action.definition
//                 }]
//             }]
//         })
//         // do something
//         // return newState;
//     }
//     else if (action.type === DO_SOME_THING_ELSE) {
//         // do something else
//         return newState;
//         }
//     return state;
// };

