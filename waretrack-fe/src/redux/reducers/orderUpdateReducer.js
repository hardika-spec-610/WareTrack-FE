import { UPDATE_ORDER } from "../actions";

const initialState = {
  orders: [],
  isLoading: true,
  isError: false,
};

const orderUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderUpdateReducer;
