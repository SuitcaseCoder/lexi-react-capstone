import {createStore} from 'redux'

import {wordsReducer} from './reducers';

export default createStore(wordsReducer)