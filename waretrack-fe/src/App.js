import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/Dashboard";
import SignUpcomponent from "./components/SignUpComponent";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import OrderMain from "./components/Orders/OrderMain";
import OrderDetailScreen from "./components/Orders/OrderDetailScreen";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, listOrders } from "./redux/actions";
import AccountSetting from "./components/AccountSetting";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <Router>
          <Routes>
            <Route element={<LoginComponent />} path="/" />
            <Route element={<SignUpcomponent />} path="/signup" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Products />} path="/products" />
            <Route element={<AddProducts />} path="/add-product" />
            <Route element={<ProductDetails />} path="/details/:productId" />
            <Route element={<EditProduct />} path="/edit/:productId" />
            <Route element={<OrderMain />} path="/orders" />
            <Route element={<OrderDetailScreen />} path="/orders/:orderId" />
            <Route element={<AccountSetting />} path="/account" />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
