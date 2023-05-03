import { Col, Row } from "react-bootstrap";
import "../css/styles.css";

const DashboardCard = (props) => {
  return (
    <Row className="align-items-center">
      <Col xs={8} sm={8} md={8} lg={8}>
        <div>
          <p className="mb-0">{props.cartTitle}</p>
          <p className="mb-0 number-size">{props.numbers}</p>
        </div>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4} className="pr-0">
        <div className="text-right">
          <img src={props.icon} alt="cart icon" />
        </div>
      </Col>
    </Row>
  );
};
export default DashboardCard;
