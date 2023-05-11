import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import loginReducer from "../reducers/loginReducer";
import sessionStorage from "redux-persist/es/storage/session";
import { registerUserReducer } from "../reducers/registerUserReducer";
import usersReducer from "../reducers/usersReducer";
import allProductsReducer from "../reducers/allProductsReducer";
import addProductReducer from "../reducers/addProductReducer";
import FetchOneProReducer from "../reducers/FetchOneProReducer";
import orderListReducer from "../reducers/orderReducer";
import orderDetailsReducer from "../reducers/orderDetailsReducer";

const persistConfig = {
  storage: sessionStorage,
  key: "root", // this brings the whole redux store into persistency
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_ENV_SECRET_SUPER_SP0TYFY_KEY_SECOND2,
  //   }),
  // ],
};
const combinedReducer = combineReducers({
  login: loginReducer,
  register: registerUserReducer,
  allUsers: usersReducer,
  allProducts: allProductsReducer,
  newProduct: addProductReducer,
  specificPro: FetchOneProReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
