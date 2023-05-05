import AddProForm from "./AddProForm";
import NavbarComponent from "./NavbarComponent";
import Sidebar from "./Sidebar";
import "../css/styles.css";

const AddProducts = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <h5>Add New Products</h5>
          <div className="white-bg-radius mt-3">
            <AddProForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProducts;
