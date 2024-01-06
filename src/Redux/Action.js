import axios from "axios";
import { LOGIN, LOGOUT, REGESTER , ADD_PRODUCT, GET_PRODUCT, SINGLE_PRODUCT} from "./ActionType";


export const regester = (userData) => {
    return {
        type: REGESTER,
        payload: userData,
    };
};

export const login = (userData) => {
    return {
        type: LOGIN,
        payload: userData,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
  });
  
 
  export const GetProduct = () => async (dispatch) => {
    let res = await axios.get("http://localhost:8090/products");
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  };

  export const singleProduct = (id) => async (dispatch) => {
    let res = await axios.get(`http://localhost:8090/products/${id}`);
    dispatch({
      type: SINGLE_PRODUCT,
      payload: res.data,
    });
  };