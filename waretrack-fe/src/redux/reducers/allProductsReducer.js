import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../actions";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
        isError: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (element) => element._id !== action.payload
        ),
        isLoading: false,
        isError: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (element) => element._id !== action.payload._id
          ),
          action.payload,
        ],
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default allProductsReducer;
