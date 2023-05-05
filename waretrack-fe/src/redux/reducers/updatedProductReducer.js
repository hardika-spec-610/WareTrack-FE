import { UPDATE_PRODUCT } from "../actions";

const initialState = {
  updatProduct: null,
  isLoading: false,
  error: null,
};

const updatedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        error: null,
      };

    case "UPDATE_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updatedProductReducer;
