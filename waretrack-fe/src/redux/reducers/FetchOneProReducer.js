import { GET_ONE_PRODUCT } from "../actions";

const initialState = {
  oneProduct: [],
  isLoading: true,
  isError: false,
};

const FetchOneProReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT:
      console.log(action.payload);
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
};

export default FetchOneProReducer;
