import {CREATE_USER, createUser, ADD_WORD, addWord, EDIT_WORD_SUCCESS, editWordSuccess} from './index';

describe('createUser', () => {
    it('Should return the action', () => {
        const action = createUser(username, password, firstName, lastName);
        expect(action.type).toEqual(CREATE_USER);
        expect(action.username).toEqual(username);
    });
});

describe('addWord', () => {
    it('Should return the action', () => {
        const action = addWord(word,definition);
        expect(action.type).toEqual(ADD_WORD);
        expect(action.word).toEqual(definition);
    });
});

describe('editWordSuccess', () => {
    it('Should update the word being editied', () => {
        const action = editWordSuccess();
        expect(action.type).toEqual(EDIT_WORD_SUCCESS);
        expect(action.editedWord).toEqual(editedWord);
    });
});


