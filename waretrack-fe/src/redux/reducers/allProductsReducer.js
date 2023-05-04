import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
} from "../actions";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
