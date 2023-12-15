import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ProductData } from "../../Data/productsData";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";
// import Swal from "sweetalert2";
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import axios from "axios";
import "./product.css";

// to get all products
export const getAllProducts = createAsyncThunk(
  "/api/v1/products",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      let link = `/api/v1/products`;
      if (body?.category) {
        link = `/api/v1/products?productCategory=${body.category}`;
      }
      const response = await axiosClient.get(link);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// product fetch be Id
export const getProductDetail = createAsyncThunk(
  "/api/v1/product/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is Get Product Body : ", body.id);
      const response = await axiosClient.get(`/api/v1/product/${body.id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// get All Admin Products
export const getAdminProducts = createAsyncThunk(
  "/api/v1/admin/products",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/admin/products");
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e.response.data);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// get All Categories
export const getAllCategories = createAsyncThunk(
  "/api/v1/categories",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/categories");
      return response.data;
    } catch (e) {
      console.log(e);
      return Promise.reject(e.message);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// to create Product
export const createProduct = createAsyncThunk(
  "/api/v1/admin/product/new",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await axiosClient.post(
        "/api/v1/admin/product/new",
        body
      );
      console.log("This is created Product", data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//create Product by Admin only
export const updateProduct = createAsyncThunk(
  "/api/v1/product/admin/update/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await axiosClient.put(
        `/api/v1/admin/product/${body._id}`,
        body
      );
      console.log("This is Updated Product", data);
      return data;
    } catch (error) {
      return error;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Delete Product by admin only
export const deleteProduct = createAsyncThunk(
  "/api/v1/product/admin/:id",
  async (body, thunkAPI) => {
    try {
      const { data } = await axiosClient.delete(
        `/api/v1/admin/product/${body.id}`
      );
      console.log("This is created Product", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    success: false,
    message: "",
    error: false,
    isDeleted: false,
    categories: [],
    products: [],
    productDefaultPrice: {},
    isAlreadyInCart: false,
    product: {},
    cartProduct: [],
    carts: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

  reducers: {
    //Clear Error State
    resetStatusError: (state) => {
      state.error = "";
      state.success = false;
      state.message = "";
      state.isDeleted = false;
    },
    // ! To Add Product In Cart
    addToCart: (state, action) => {
      let { productId, sku, price, weight, quantity } = action.payload;
      let product = state.product;

      // ! Find item in cart with matching productId
      let item = state.carts.find(
        (item) => item._id === productId && item.productDefaultPrice.sku === sku
      );

      // ? If item doesn't exist, create new one
      if (!item) {
        let arr = product.productDetails.find((item) => item.sku === sku);

        if (arr) {
          product.productDefaultPrice = { price, quantity, sku, weight };
          state.carts.push(product);
        }

        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      } else {
        // ? If item exist, update quantity
        item.productDefaultPrice = { price, quantity, sku, weight };
        localStorage.setItem("cartItems", JSON.stringify(state.carts));
      }
    },

    //Update Cart
    updateCart: (state, action) => {
      let { val, sku, id } = action.payload;
      state.carts.find(
        (item) =>
          item._id === id &&
          item.productDefaultPrice.sku === sku &&
          (item.productDefaultPrice.quantity = val)
      );
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },

    // Remove Cart
    removeCart: (state, action) => {
      let { id, sku } = action.payload;
      let arr = state.carts.filter(
        (item) => item._id === id && item.productDefaultPrice.sku !== sku
      );

      state.carts = arr;
      localStorage.setItem("cartItems", JSON.stringify(state.carts));
      if (arr) {
        // Swal.fire({
        //   title: "Removed",
        //   text: "Successfully Deleted From your Cart",
        //   icon: "success",
        //   width: "450px",
        //   showConfirmButton: false,
        //   allowOutsideClick: false,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   showCloseButton: true,
        //   closeButtonHtml: "&times;",
        //   customClass: {
        //     popup: "custom-popup",
        //     closeButton: "custom-close-button",
        //     title: "s-title",
        //   },
        //   timer: 1500,
        //   position: "bottom-end",
        // });
      }
    },

    //Clear Cart
    clearCart: (state, action) => {
      state.carts = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
      if (state.carts.length === 0) {
        // Swal.fire({
        //   title: "Cart Cleared",
        //   text: "Successfully Clear your Cart",
        //   icon: "success",
        //   allowOutsideClick: false,
        //   allowEscapeKey: false,
        //   allowEnterKey: false,
        //   showCloseButton: true,
        //   closeButtonHtml: "&times;",
        //   customClass: {
        //     popup: "custom-popup",
        //     closeButton: "custom-close-button",
        //     title: "s-title",
        //   },
        //   showConfirmButton: false,
        //   timer: 1500,
        //   position: "bottom-end",
        // });
      }
    },

    //CartProduct
    cartProduct: (state, action) => {
      let { id } = action.payload;
      let arr = state.carts.find((item) => item._id === id);
      if (arr) {
        state.cartProduct.push(id);
      }
    },

    setStatusResponse: (state) => {
      state.success = false;
      state.error = "";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
        // console.log("This is Payload", state.products.products);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 200) {
          state.success = true;
          state.message = "Create Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.products = action.payload.result;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isDeleted = true;
        } else {
          state.isDeleted = false;
          state.error = action.payload?.message;
        }
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.categories = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.product = action.payload.result;
          // get max price of product
          state.productDefaultPrice = state.product.productDetails.sort(
            (a, b) => {
              return b.price - a.price;
            }
          )[0];
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.success = true;
          state.message = "Product Is Updated Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      });
  },
});

export const productsReducer = productSlice.reducer;
export const { resetStatusError, setStatusResponse } = productSlice.actions;
export default productsReducer;
