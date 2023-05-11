import {
  ORDER_LIST_ERROR,
  ORDER_LIST_LOADING,
  ORDER_LIST_SUCCESS,
} from "../actions";

const initialState = {
  orders: [],
  isLoading: true,
  isError: false,
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    case ORDER_LIST_LOADING:
      //   console.log(action.payload);
      return {
        ...state,
        isLoading: action.payload,
      };

    case ORDER_LIST_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default orderListReducer;
