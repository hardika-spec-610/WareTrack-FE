import { Button, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";
import "../css/styles.css";
import NavbarComponent from "./NavbarComponent";
import Sidebar from "./Sidebar";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const products = useSelector((state) => state.allProducts.products.products);
  console.log("products", products);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("search", query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getAllProducts());
  };

  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
    setSortBy(eventKey);
    // Perform sort operation
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <h5>Products</h5>
          <div className="d-flex mt-3">
            <div>
              <Form
                onSubmit={handleSubmit}
                className="input-group d-flex align-items-center py-0"
              >
                <BsSearch size={18} className="search-icon" />
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search product by name..."
                  className="search-input ml-2 text-truncate"
                />
              </Form>
            </div>
            <div className="ml-auto d-flex">
              <DropdownButton
                className="sort-btn"
                title={` ${selectedOption ? selectedOption : "Sort by"} `}
                variant="secondary"
                id="dropdown-sort-by"
              >
                <Dropdown.Item
                  eventKey="Name"
                  active={selectedOption === "Name"}
                  onSelect={handleOptionSelect}
                >
                  Name
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Category"
                  active={selectedOption === "Category"}
                  onSelect={handleOptionSelect}
                >
                  Category
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Price"
                  active={selectedOption === "Price"}
                  onSelect={handleOptionSelect}
                >
                  Price
                </Dropdown.Item>
              </DropdownButton>
              <Button className="csv-btn ml-2" variant="success">
                Export csv
              </Button>
            </div>
          </div>
          {query !== "" ? (
            <>
              <h4 className="px-0 mb-3 mt-5">Searched Song</h4>
              <Row>
                {products
                  .filter((searchedProduct) =>
                    searchedProduct.name.toLocaleLowerCase().includes(query)
                  )
                  .map((p) => (
                    <ProductCard
                      key={p._id}
                      imageUrl={p.imageUrl}
                      name={p.name}
                      price={p.price}
                    />
                  ))}
              </Row>
            </>
          ) : (
            <Row className="mt-4">
              {products &&
                products.map((p) => (
                  <ProductCard
                    key={p._id}
                    imageUrl={p.imageUrl}
                    name={p.name}
                    price={p.price}
                  />
                ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};
export default Products;
