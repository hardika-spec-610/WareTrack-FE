import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import NavbarComponent from "./NavbarComponent";
import addToCart from "../assets/add-to-cart-icon.svg";
import euro from "../assets/euro-icon.svg";
import outOfStock from "../assets/out-of-stock-icon.svg";
import category from "../assets/Thumbnail-tiles-view-icon.svg";
import "../css/styles.css";
import DashboardCard from "./DashboardCard";
import { useEffect } from "react";
import { listOrders } from "../redux/actions";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      window.location.href = "/";
      // Reload the page
      // window.location.reload();
    }
    dispatch(listOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  numbers="50"
                  icon={addToCart}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color2">
                <DashboardCard
                  cartTitle="Total Store Value"
                  numbers="50.000"
                  icon={euro}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color3">
                <DashboardCard
                  cartTitle="Out of Stock"
                  numbers="2"
                  icon={outOfStock}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mb-3 mb-sm-3">
              <div className="card-wrapper card-color4">
                <DashboardCard
                  cartTitle="All Categories"
                  numbers="2"
                  icon={category}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
