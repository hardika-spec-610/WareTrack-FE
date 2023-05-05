import { GET_PRODUCTS } from "../actions";

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
      };
    default:
      return state;
  }
};

export default allProductsReducer;
