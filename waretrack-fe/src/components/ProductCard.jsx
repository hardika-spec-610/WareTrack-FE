import { Card, Col } from "react-bootstrap";
import { BsEyeFill } from "react-icons/bs";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import image1 from "../assets/image-commen.svg";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(props.product));
    }
  };
  return (
    <Col className=" col-12 mb-4 col-sm-12 mb-sm-4 col-md-4 mb-md-4 col-lg-4 mb-lg-4 col-xl-3 d-flex justify-content-stretch">
      <Card className="product-card w-100">
        <div>
          {props.imageUrl ? (
            <Card.Img
              variant="top"
              src={props.imageUrl}
              className="pro-img px-3 pt-3"
            />
          ) : (
            <img src={image1} className="pro-img px-3 pt-3" alt="box" />
          )}

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
                <span className="sub-text-color">ProductInStock</span>
                <span className="ml-auto">{props.quantity}</span>
              </span>
              <span className="d-flex">
                <span className="sub-text-color">Price</span>
                <span className="ml-auto price-color">{props.price}€</span>
              </span>
            </Card.Text>
          </Card.Body>
          <hr className="m-0" />
          <div className="d-flex justify-content-beetween aöign-items-center">
            <Link
              className="btm-btn eye-btn"
              to={`/details/${props.productId}`}
            >
              <BsEyeFill size="22px" color="#808191" className="white-icon" />
            </Link>
            <Link className="btm-btn edit-btn" to={`/edit/${props.productId}`}>
              <MdEditDocument
                size="22px"
                color="#808191"
                className="white-icon"
              />
            </Link>
            <Link className="btm-btn delete-btn" onClick={handleDelete}>
              <MdDelete size="22px" color="#808191" className="white-icon" />
            </Link>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
