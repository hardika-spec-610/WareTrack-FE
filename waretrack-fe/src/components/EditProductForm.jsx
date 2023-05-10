import { useEffect, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getOneProduct, updateProductImage } from "../redux/actions";
import { useNavigate, useParams } from "react-router";
const token = localStorage.getItem("accessToken");

const EditProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.productId);
  const proDetails = useSelector((state) => state.specificPro.oneProduct);
  //   console.log("proDetails", proDetails);
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  const isError = useSelector((state) => state.allProducts.isLoading);

  const [editFormProduct, setEditFormProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "electronics",
    quantity: 0,
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    dispatch(getOneProduct(params.productId));
    setEditFormProduct({
      name: proDetails.name,
      brand: proDetails.brand,
      price: proDetails.price,
      category: proDetails.category,
      quantity: proDetails.quantity,
      description: proDetails.description,
      imageUrl: proDetails.imageUrl,
    });
    // if (proDetails) {
    //   window.location.reload();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("updating with", editFormProduct);
      if (typeof editFormProduct.imageUrl === "object") {
        const formData = new FormData();
        formData.append("imageUrl", editFormProduct.imageUrl);
        dispatch(updateProductImage(params.productId, formData));
      }
      const productDetails = {
        name: document.getElementById("name").value,
        brand: document.getElementById("brand").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        quantity: document.getElementById("quantity").value,
        description: document.getElementById("description").value,
      };

      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${params.productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productDetails),
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        console.log("updatedProduct", updatedProduct);
        setEditFormProduct(updatedProduct);
        const interval = setInterval(() => {
          // navigate to product page after 2 seconds
          toast.success("Update product successfully!");
          navigate("/products");
          clearInterval(interval);
        }, 2000);
      } else {
        console.log("Error fetching Data!");
      }

      //   dispatch(updateProduct(params.productId, productDetails));
      // dispatch(getAllProducts());
    } catch (error) {
      console.log("Error fetching Data!");
    }
  };

  return (
    <>
      {isLoading && ( // isLoading is true or false
        <Spinner animation="border" variant="success" />
      )}
      {isError && <Alert variant="danger">Aww snap, we got an error!😨</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Product Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            className="pro-input"
            id="name"
            value={editFormProduct.name}
            onChange={(e) =>
              setEditFormProduct({ ...editFormProduct, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Category*</Form.Label>
          <Form.Control
            as="select"
            className="pro-input"
            id="category"
            value={editFormProduct.category}
            onChange={(e) =>
              setEditFormProduct({
                ...editFormProduct,
                category: e.target.value,
              })
            }
          >
            <option>electronics</option>
            <option>household</option>
            <option>clothing</option>
            <option>beauty</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand"
            id="brand"
            className="pro-input"
            value={editFormProduct.brand}
            onChange={(e) =>
              setEditFormProduct({
                ...editFormProduct,
                brand: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Selling Price"
            id="price"
            className="pro-input"
            value={editFormProduct.price}
            onChange={(e) =>
              setEditFormProduct({
                ...editFormProduct,
                price: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product in stock*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product in stock"
            className="pro-input"
            id="quantity"
            value={editFormProduct.quantity}
            onChange={(e) =>
              setEditFormProduct({
                ...editFormProduct,
                quantity: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="description"
            className="pro-input"
            placeholder="Product Description"
            value={editFormProduct.description}
            onChange={(e) =>
              setEditFormProduct({
                ...editFormProduct,
                description: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            type="file"
            id="imageUrl"
            onChange={(e) => {
              // console.log(e.target.files[0]);
              setEditFormProduct({
                ...editFormProduct,
                imageUrl: e.target.files[0],
              });
              console.log(
                "imageurl",
                editFormProduct.imageUrl,
                typeof e.target.files[0]
              );
            }}
          />
        </Form.Group>
        <div>
          <Button type="submit" className="mt-2 w-25 blue-btn ">
            Edit Product
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EditProductForm;
