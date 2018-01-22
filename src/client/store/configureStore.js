import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import fetchDataReducer from '../reducers/fetchDataReducer';

const initState = {};

export default () => createStore( fetchDataReducer, initState, applyMiddleware(thunk) );
