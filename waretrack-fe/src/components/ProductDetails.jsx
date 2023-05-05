import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOneProduct } from "../redux/actions";
import NavbarComponent from "./NavbarComponent";
import "../css/styles.css";

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
  }, []);

  return (
    <div className="navbar-wrapper">
      <NavbarComponent />
      <div className="details-wrapper"></div>
    </div>
  );
};
export default ProductDetails;
