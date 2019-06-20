const initialState = {
    wordsA: [{
        letter: 'A',
        word: 'Apfel',
        definition: 'Ein Obst, der von Baeume waechst.A yummy fruit that grows on trees.'
    }, {
        letter: 'A',
        word: 'abnehmen',
        definition: 'duenner zu werden. to lose weight'
    }],
    wordsB: [{
        letter: 'B',
        word: 'Baum',
        definition: 'Eine grosse Pflanze mit vielen Blaetter. A tree.'
    }]
};

//help.
export const wordsReducer = (state=initialState, action) => {
    if (action.type === actions.DO_SOME_THING) {
        // do something
        return newState;
    }
    else if (action.type === DO_SOME_THING_ELSE) {
        // do something else
        return newState;
        }
    return state;
};

