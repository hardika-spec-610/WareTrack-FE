import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneProduct } from "../redux/actions";
import NavbarComponent from "./NavbarComponent";
import "../css/styles.css";
import { Card, Col, Row } from "react-bootstrap";
import { format, parseISO } from "date-fns";

const ProductDetails = () => {
  const params = useParams();
  console.log("PARAMS ARE: ", params);
  console.log("the id of the chosen movie is", params.productId);
  const dispatch = useDispatch();
  const proDetails = useSelector((state) => state.specificPro.oneProduct);
  console.log("proDetails", proDetails);

  useEffect(() => {
    dispatch(getOneProduct(params.productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params.productId]);

  return (
    <div className="navbar-wrapper">
      <NavbarComponent />
      <div className="details-wrapper">
        <div className="details-block">
          <Row>
            <Col xs={12} sm={12} md={5} lg={5} xl={5}>
              <div className="py-4 px-4">
                <img
                  src={proDetails.imageUrl}
                  alt="product"
                  width="100%"
                  className="detail-img"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
              <div className="right-details-block">
                <h3>{proDetails.name}</h3>
                <p>{proDetails.description}</p>
                <Card.Body>
                  <Card.Text>
                    <span className="d-flex mb-2">
                      <span className="sub-text-color">Category</span>
                      <span className="ml-auto ">{proDetails.category}</span>
                    </span>
                    <span className="d-flex mb-2">
                      <span className="sub-text-color">Products In stock</span>
                      <span className="ml-auto ">{proDetails.quantity}</span>
                    </span>
                    <span className="d-flex mb-2">
                      <span className="sub-text-color">Brand</span>
                      <span className="ml-auto ">{proDetails.brand}</span>
                    </span>
                    <span className="d-flex mb-2">
                      <span className="sub-text-color">Price</span>
                      <span className="ml-auto price-color">
                        {proDetails.price}€
                      </span>
                    </span>
                    <span className="d-flex mb-2">
                      <span className="sub-text-color">CreatedAt</span>
                      <span className="ml-auto">
                        {new Date(proDetails.createdAt).toLocaleDateString()}
                      </span>
                    </span>
                    <span className="d-flex">
                      <span className="sub-text-color">UpdatedAt</span>
                      <span className="ml-auto ">
                        {" "}
                        {new Date(proDetails.updatedAt).toLocaleDateString()}
                      </span>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
