import axios from "axios";
import { LOGIN, LOGOUT, REGESTER , ADD_PRODUCT, GET_PRODUCT, SINGLE_PRODUCT, ADD_CART, GET_CART, REMOVE_PRODUCT} from "./ActionType";


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
    let res = await axios.get("https://onlinedata1.onrender.com/products");
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  };

  export const singleProduct = (id) => async (dispatch) => {
    let res = await axios.get(`https://onlinedata1.onrender.com/products/${id}`);
    dispatch({
      type: SINGLE_PRODUCT,
      payload: res.data,
    });
  };

  export const addCart = (data) => async (dispatch) => {
    let res = await axios.post("https://onlinedata1.onrender.com/cart", data);
  
    dispatch({
      type: ADD_CART,
      payload: res.data,
    });
  };
  
  
  
  export const GetCart = () => async (dispatch) => {
    let res = await axios.get("https://onlinedata1.onrender.com/cart");
    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  };
  
  
  
  
  export const deleteCart = (id) => async (dispatch) => {
    let res = await axios.delete(`https://onlinedata1.onrender.com/cart/${id}`);
    dispatch({
      type: REMOVE_PRODUCT,
      payload: id,
    });
  };