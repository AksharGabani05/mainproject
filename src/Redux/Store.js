// store.js
import {  combineReducers, legacy_createStore } from 'redux';
import authenticationReducer from './Reducers/User';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
});

const store =  legacy_createStore(rootReducer);

export default store;
