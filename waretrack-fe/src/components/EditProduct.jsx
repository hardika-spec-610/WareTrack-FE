import NavbarComponent from "./NavbarComponent";
import "../css/styles.css";
import EditProductForm from "./EditProductForm";

const EditProduct = () => {
  return (
    <div className="navbar-wrapper">
      <NavbarComponent />
      <div className="hero-section edit-section ">
        <h5>Edit Products</h5>
        <div className="white-bg-radius mt-3">
          <EditProductForm />
        </div>
      </div>
    </div>
  );
};
export default EditProduct;
