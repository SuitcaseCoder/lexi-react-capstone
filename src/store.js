import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {lexiReducer} from './reducers';



export default createStore(
    lexiReducer,
    applyMiddleware(thunk)
);
