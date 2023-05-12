import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import NavbarComponent from "./NavbarComponent";
import addToCart from "../assets/add-to-cart-icon.svg";
import euro from "../assets/euro-icon.svg";
import outOfStock from "../assets/out-of-stock-icon.svg";
// import category from "../assets/Thumbnail-tiles-view-icon.svg";
import "../css/styles.css";
import DashboardCard from "./DashboardCard";
import { useEffect } from "react";
import { getAllProducts, listOrders } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderList.orders);
  // const isLoading = useSelector((state) => state.orderList.isLoading);
  // const isError = useSelector((state) => state.orderList.isError);
  const products = useSelector((state) => state.allProducts.products.products);
  // console.log("productsdashboard", products);

  let totalProducts = products.length;

  const totalStoreValue = products.reduce((total, product) => {
    const productValue = product.quantity * product.price;
    return total + productValue;
  }, 0);

  let totalSale = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  const outOfStockProducts = products.filter(
    (product) => product.quantity === 0
  );

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      window.location.href = "/";
      // Reload the page
      // window.location.reload();
    }
    dispatch(listOrders());
    dispatch(getAllProducts());
    gellProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gellProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/sort`,
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("productSort", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <h5>Dashboard</h5>

          <Row className="mt-3">
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color1">
                <DashboardCard
                  cartTitle="Total Products"
                  numbers={totalProducts}
                  icon={addToCart}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color2">
                <DashboardCard
                  cartTitle="Total Store Value"
                  numbers={totalStoreValue}
                  icon={euro}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color3">
                <DashboardCard
                  cartTitle="Out of Stock"
                  numbers={outOfStockProducts.length}
                  icon={outOfStock}
                />
              </div>
            </Col>
            {/* <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color4">
                <DashboardCard
                  cartTitle="All Categories"
                  numbers="2"
                  icon={category}
                />
              </div>
            </Col> */}
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color4">
                <DashboardCard
                  cartTitle="Total Sale"
                  numbers={totalSale.toFixed(0)}
                  icon={euro}
                />
              </div>
            </Col>
            {/* <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color4">
                <DashboardCard
                  cartTitle="Total Order"
                  numbers={
                    orders ? <span>{orders.length}</span> : <span>0</span>
                  }
                  icon={addToCart}
                />
              </div>
            </Col> */}
          </Row>
          <Row className="mt-2">
            <Col xs={12} sm={12} md={6} lg={7} xl={7}>
              <div>
                <iframe
                  title="Sale statistics"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="350px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645bb892-53b8-4307-87e0-984ac09dc12e&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={5} xl={5}>
              <div>
                <iframe
                  title="Products statistics"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="350px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645bbd1d-b515-4562-81a7-ba9511b11db9&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div>
                <iframe
                  title="Total orders"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="150px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645d3b09-6e2f-487a-8fbf-41609fcd1da2&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
                <iframe
                  title="Total Categories"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="150px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645d487b-d4d9-4f75-8fab-2dd97090ad92&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} xl={5}>
              <div>
                <iframe
                  title="Category wise products"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="300px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645d3e56-2da3-4381-87dc-6df9ee07e609&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
              <div>
                <iframe
                  title="Total Products"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
                  }}
                  width="100%"
                  height="300px"
                  src="https://charts.mongodb.com/charts-waretrack-wqdfw/embed/charts?id=645d3d15-6cd4-4a9d-8b59-d817f408580a&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
