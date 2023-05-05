import { ADD_PRODUCT } from "../actions";

const initialState = {
  isLoading: true,
  isError: false,
  product: null,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default addProductReducer;
