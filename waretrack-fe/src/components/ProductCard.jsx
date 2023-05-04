import { Card, Col } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Col className=" col-12 mb-4 col-sm-12 mb-sm-4 col-md-4 mb-md-4 col-lg-4 mb-lg-4 col-xl-3 d-flex justify-content-stretch">
      <Card className="product-card w-100">
        <div>
          <Card.Img
            variant="top"
            src={props.imageUrl}
            className="pro-img px-3 pt-3"
          />

          <Card.Title className="product-title px-3 pt-3">
            {props.name}
          </Card.Title>
        </div>
        <div className="mt-auto">
          <Card.Body className="px-3">
            <Card.Text>
              <span className="d-flex">
                <span className="sub-text-color">Category</span>
                <span className="ml-auto ">{props.category}</span>
              </span>
              <span className="d-flex">
                <span className="sub-text-color">Price</span>
                <span className="ml-auto price-color">{props.price}€</span>
              </span>
            </Card.Text>
          </Card.Body>
          <hr className="m-0" />
          <div className="d-flex justify-content-beetween aöign-items-center">
            <Link className="btm-btn eye-btn">
              <BsEyeFill size="22px" color="#808191" className="white-icon" />
            </Link>
            <Link className="btm-btn edit-btn">
              <MdEditDocument
                size="22px"
                color="#808191"
                className="white-icon"
              />
            </Link>
            <Link className="btm-btn delete-btn">
              <MdDelete size="22px" color="#808191" className="white-icon" />
            </Link>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;