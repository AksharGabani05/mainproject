


import { ADD_PRODUCT, GET_PRODUCT, SINGLE_PRODUCT } from "../ActionType";

let initialState = {
  products: [],

};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };

    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };

      case SINGLE_PRODUCT:
      return {
        ...state,
        single_product: payload,
      };
    default:
      return state;
  }
};

export default productReducer;