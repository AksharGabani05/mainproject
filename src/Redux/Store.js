// store.js
// store.js
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import authenticationReducer from './Reducers/User';
import productReducer from './Reducers/productreducer';


const rootReducer = combineReducers({
  authentication: authenticationReducer,
  products: productReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
