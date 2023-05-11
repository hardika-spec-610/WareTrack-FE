export const GET_ALL_LOGIN = "GET_ALL_LOGIN";
export const REGISTER_USER = "REGISTER_USER";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_LOADING = "ADD_PRODUCT_LOADING";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ORDER_LIST_LOADING = "ORDER_LIST_LOADING";
export const ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS";
export const ORDER_LIST_ERROR = "ORDER_LIST_ERROR";

let token = localStorage.getItem("accessToken");
console.log("token", token);
// const token = getState().login.token;

export const registerUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const newUserData = await response.json();
        console.log("newUserData", newUserData);
        dispatch({
          type: REGISTER_USER,
          payload: newUserData,
        });
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("userdata", data.users);
        dispatch({
          type: GET_USERS,
          payload: data.users,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("products", data);
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOneProduct = (productId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("one product", data);
        dispatch({
          type: GET_ONE_PRODUCT,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProductAction = (productData) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const newProductData = await response.json();
        console.log("newProductData", newProductData);
        dispatch({
          type: ADD_PRODUCT,
          payload: newProductData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (productId, data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product.");
      }

      const updatedProduct = await response.json();
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updatedProduct,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (data, productImage) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();

        if (productImage) {
          const formData = new FormData();
          formData.append("imageUrl", productImage);

          try {
            let response = await fetch(
              `${process.env.REACT_APP_BE_URL}/products/${data._id}/upload`,
              {
                method: "POST",
                body: formData,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (response.ok) {
              dispatch(getAllProducts());
              // console.log("Image Uploaded Successfully");
            }
          } catch (error) {
            console.log(error);
          }
        }
        // console.log("postdata", data);
        dispatch({
          type: CREATE_PRODUCT,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProductImage = (productId, data) => {
  return async (dispatch) => {
    console.log("what the fuck is happening here", data);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${productId}/upload`,
        {
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch(getAllProducts());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BE_URL}/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        dispatch({
          type: DELETE_PRODUCT,
          payload: productId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const listOrders = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("order", data);
        dispatch({
          type: ORDER_LIST_SUCCESS,
          payload: data,
        });
        dispatch({
          type: ORDER_LIST_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: ORDER_LIST_LOADING,
          payload: false,
        });
        dispatch({
          type: ORDER_LIST_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: ORDER_LIST_LOADING,
        payload: false,
      });
      dispatch({
        type: ORDER_LIST_ERROR,
        payload: true,
      });
    }
  };
};
