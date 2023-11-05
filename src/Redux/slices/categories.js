import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Get All Categories
export const getCategories = createAsyncThunk(
  "/api/v1/categories",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/categories");
      console.log(response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);
//Create New Category
export const createNewCategory = createAsyncThunk(
  "/api/v1/categories/add-cat",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/api/v1/add-cat", body);
      console.log("This is New Category", response);
      return response.data;
    } catch (e) {
      console.log(e.response.data);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Create Category by id
export const createCategory = createAsyncThunk(
  "/api/v1/category/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is Body for Category Section ", body);
      const response = await axiosClient.delete(`/api/v1/category/${body.id}`);
      console.log("This is Deleted Category", response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);


//Delete Category
export const deleteCategory = createAsyncThunk(
  "/api/v1/category/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is Body for Category Section ", body);
      const response = await axiosClient.delete(`/api/v1/category/${body.id}`);
      console.log("This is Deleted Category", response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//CategoryDetail
export const getCategoryDetails = createAsyncThunk(
  "/api/v1/category/delete/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("This is Body for Category Section ", body);
      const response = await axiosClient.get(`/api/v1/category/${body.id}`);
      console.log("This is Category info", response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Settings Slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    error: "",
    success: false,
    category: {},
  },
  reducers: {
    setStatusResponse: (state) => {
      state.success = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        if (action.payload.statusCode == 200) {
          state.categories = action.payload.result;
        }
      })
      .addCase(createNewCategory.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 200) {
          state.success = true;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 200) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(getCategoryDetails.fulfilled, (state, action) => {
        if (action.payload?.statusCode == 200) {
          state.category = action.payload.result;
        } else {
          state.error = action.payload.message;
        }
      });
  },
});

const categoryReducer = categorySlice.reducer;
export const { setStatusResponse } = categorySlice.actions;
export default categoryReducer;
