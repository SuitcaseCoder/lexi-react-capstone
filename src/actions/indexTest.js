import {CREATE_USER, createUser, ADD_WORD, addWord} from './index';

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
