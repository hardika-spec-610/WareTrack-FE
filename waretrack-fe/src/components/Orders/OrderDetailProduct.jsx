import { Card, Col, Row, Table } from "react-bootstrap";
import "../../css/styles.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaUserAlt, FaTruckMoving } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const OrderDetailProduct = (props) => {
  return (
    <Card className="mt-4">
      <Card.Header className="text-white order-header d-flex align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <AiTwotoneCalendar />
            <p className="mb-0 ml-2">{props.createdAt}</p>
          </div>
          <div>Order ID: {props.orderId}</div>
        </div>
        <select
          className="ml-auto"
          onChange={props.handleStatusChange}
          value={props.isDelivered ? "Delivered" : "Awaiting payment"}
        >
          <option disabled value="">
            change status
          </option>
          <option>Awaiting payment</option>
          <option>Delivered</option>
        </select>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="d-flex">
              <div className="icon-block">
                <div className="light-icon-color">
                  <FaUserAlt fill="#1366d9" size="20px" />
                </div>
              </div>
              <div className="order-right-info">
                <p className="mb-0 font-weight-bold">Customer</p>{" "}
                <p className="mb-0">{props.userName}</p>{" "}
                <a href={`mailto:${props.email}`} className="mb-0">
                  {props.email}
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="d-flex">
              <div className="icon-block">
                <div className="light-icon-color">
                  <FaTruckMoving fill="#1366d9" size="20px" />
                </div>
              </div>
              <div className="order-right-info">
                <p className="mb-0 font-weight-bold">Order Info</p>{" "}
                <p className="mb-0">Shipping: {props.city}</p>{" "}
                <p className="mb-0">Pay method: {props.paymentMethod}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="d-flex">
              <div className="icon-block">
                <div className="light-icon-color">
                  <HiLocationMarker fill="#1366d9" size="20px" />
                </div>
              </div>
              <div className="order-right-info">
                <p className="mb-0 font-weight-bold">Deliver to</p>{" "}
                <p className="mb-0">
                  Address: {props.street}, {props.shippingCity},{props.zip}{" "}
                  {props.country}
                </p>{" "}
              </div>
            </div>
          </Col>
        </Row>
        <Table responsive className="mt-5">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.oderedItem.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex">
                    <div className="img-b">
                      <img
                        src={item.product?.imageUrl}
                        alt={item.product?.name}
                        className="w-100"
                      />
                    </div>
                    <div className="info-b">
                      <p className="ml-3">{item.product?.name}</p>
                    </div>
                  </div>
                </td>
                <td>{item.product?.price}€</td>
                <td>{item.qty}</td>
                <td>
                  {parseFloat(item.qty) * parseFloat(item.product.price)}€
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-end">
          <div className="d-flex flex-column">
            <span className="mr-4">Subtotal:</span>
            <span className="mr-4">Shipping cost:</span>
            <span className="mr-4">Tax cost:</span>
            <span className="mr-4">Grand total:</span>
            <span className="mr-4">Status:</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span>{props.subtotal}€</span>
            <span>{props.shippingCost}€</span>
            <span>{props.taxPrice}€</span>
            <b>{props.grandTotal}€</b>
            {props.isPaid ? (
              <span className="btn-success px-2">Payment done</span>
            ) : (
              <span className="btn-danger px-2">Not Paid</span>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderDetailProduct;
