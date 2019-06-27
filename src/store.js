import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {addWordReducer} from './reducers';

export default createStore(
    addWordReducer,
    applyMiddleware(thunk)
);