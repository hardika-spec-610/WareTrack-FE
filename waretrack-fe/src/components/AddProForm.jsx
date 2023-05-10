import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddProForm = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "electronics",
    quantity: 0,
    description: "",
  });
  const [imageFile, setFile] = useState(null);

  const uploadIamge = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const sendNewItem = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(addProduct),

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let newProduct = await response.json();
        console.log("data", newProduct);
        return newProduct;
      } else {
        toast.error("problem posting product");
        // console.log(response);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let createProduct = await dispatch(addProductAction(addProduct));
    let createProduct = await sendNewItem();
    console.log("createProduct1", createProduct);
    if (createProduct && createProduct._id) {
      setAddProduct({
        name: "",
        brand: "",
        price: "",
        category: "electronics",
        quantity: 0,
        description: "",
      });
      console.log("createProduct", createProduct);
      console.log("createdBlogID", createProduct._id);

      console.log("file", setFile);
      if (setFile) {
        postImage(setFile[0], createProduct._id);
      }
      toast.success("Add new product successful!");
    } else {
      toast.error("problem posting product");
    }
  };

  const postImage = async (file, productId) => {
    try {
      console.log(file, productId);
      const formData = new FormData();
      formData.append("imageUrl", imageFile);
      let res = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${productId}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (res.ok) {
        console.log("You made it!");
      } else {
        console.log("Try harder!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Product Name*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          required
          className="pro-input"
          value={addProduct.name}
          onChange={(e) =>
            setAddProduct({ ...addProduct, name: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select Category*</Form.Label>
        <Form.Control
          as="select"
          className="pro-input"
          required
          value={addProduct.category}
          onChange={(e) =>
            setAddProduct({ ...addProduct, category: e.target.value })
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
          className="pro-input"
          required
          value={addProduct.brand}
          onChange={(e) =>
            setAddProduct({ ...addProduct, brand: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Selling Price"
          required
          className="pro-input"
          value={addProduct.price}
          onChange={(e) =>
            setAddProduct({ ...addProduct, price: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Product in stock*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Product in stock"
          required
          className="pro-input"
          value={addProduct.quantity}
          onChange={(e) =>
            setAddProduct({ ...addProduct, quantity: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description*</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className="pro-input"
          required
          placeholder="Product Description"
          value={addProduct.description}
          onChange={(e) =>
            setAddProduct({ ...addProduct, description: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.File type="file" accept="image/*" onChange={uploadIamge} />
      </Form.Group>
      <div>
        <Button type="submit" className="mt-2 w-25 blue-btn ">
          Add Product
        </Button>
      </div>
    </Form>
  );
};

export default AddProForm;
