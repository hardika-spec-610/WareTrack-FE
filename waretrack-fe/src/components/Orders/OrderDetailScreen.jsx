import { Alert, Button, Spinner } from "react-bootstrap";
import NavbarComponent from "../NavbarComponent";
import Sidebar from "../Sidebar";
import "../../css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderDetails, updateOrder } from "../../redux/actions";
import { useNavigate, useParams } from "react-router";
import OrderDetailProduct from "./OrderDetailProduct";
import { format } from "date-fns";

const OrderDetailScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log("PARAMS ARE: ", params);
  const orderDetail = useSelector((state) => state.orderDetails.orders);
  console.log("orderDetail ", orderDetail);
  const { orderItems } = orderDetail;
  const isLoading = useSelector((state) => state.orderDetails.isLoading);
  const isError = useSelector((state) => state.orderDetails.isError);

  const handleStatusChange = (event) => {
    console.log(event);
    const selectedStatus = event.target.value;
    // console.log(selectedStatus);
    const updatedIsDelivered = selectedStatus === "Delivered";
    dispatch(updateOrder(params.orderId, { isDelivered: updatedIsDelivered }));
    dispatch(getOrderDetails(params.orderId));
  };

  const total = orderItems.reduce(
    (acc, item) => acc + item.qty * item.product.price,
    0
  );

  console.log("total", total);

  useEffect(() => {
    dispatch(getOrderDetails(params.orderId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.orderId]);

  const handleBackClick = () => {
    navigate("/orders");
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <Button
            variant="outline-success"
            className="search-btn"
            onClick={handleBackClick}
          >
            Back to Order
          </Button>
          {isLoading && <Spinner animation="border" variant="success" />}
          {isError && (
            <Alert variant="danger">Aww snap, we got an error!😨</Alert>
          )}
          <OrderDetailProduct
            orderId={params.orderId}
            handleStatusChange={handleStatusChange}
            isDelivered={orderDetail.isDelivered}
            createdAt={format(new Date(orderDetail.createdAt), "PPpp")}
            userName={orderDetail.user?.firstName}
            email={orderDetail.user?.email}
            city={orderDetail.user?.address?.city}
            paymentMethod={orderDetail.paymentMethod}
            street={orderDetail.user?.address?.street}
            shippingCity={orderDetail.user?.address?.city}
            zip={orderDetail.user?.address?.zip}
            country={orderDetail.user?.address?.country}
            oderedItem={orderDetail.orderItems}
            subtotal={total.toFixed(2)}
            shippingCost={orderDetail.shippingPrice}
            taxPrice={orderDetail.taxPrice}
            grandTotal={orderDetail.totalPrice}
            isPaid={orderDetail.isPaid}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailScreen;
