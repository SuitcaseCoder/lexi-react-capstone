import {CREATE_USER, createUser} from './index';

describe('createUser', () => {
    it('Should return the action', () => {
        const action = createUser(username, password, firstName, lastName);
        expect(action.type).toEqual(CREATE_USER);
        expect(action.username).toEqual(username);
    });
});

// describe('addCard', () => {
//     it('Should return the action', () => {
//         const text = 'Card text';
//         const listIndex = 10;
//         const action = addCard(text, listIndex);
//         expect(action.type).toEqual(ADD_CARD);
//         expect(action.text).toEqual(text);
//         expect(action.listIndex).toEqual(listIndex);
//     });
// });