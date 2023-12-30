// reducer.js
import { LOGIN, LOGOUT, REGESTER } from '../ActionType';
// import { ActionTypes } from './actions';

const initialState = {
  users: [], 
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case REGESTER:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: true,
        };

    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
