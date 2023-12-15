import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Get All Pincode
export const getAllPincodes = createAsyncThunk(
  "/api/v1/admin/pincodes",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/util/pincodes");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

//Create Pincode
export const createPincode = createAsyncThunk(
  "/api/v1/admin/pincodes/create",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post(
        "/api/v1/util/pincode/create",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Update Pincode:
export const updatePincode = createAsyncThunk(
  "/api/v1/admin/pincode/update",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log(body);
      const { data } = await axiosClient.put(
        `api/v1/util/pincode/${body.id}`,
        body
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e.response.data);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Get Single Pincode Details:
export const getPincodeDetail = createAsyncThunk(
  "/api/v1/pincode/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get(`/api/v1/util/pincode/${body.id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e.response.data);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Delete Pincode:
export const deletePincode = createAsyncThunk(
  "/api/v1/util/pincode/:id",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const { data } = await axiosClient.delete(
        `/api/v1/util/pincode/${body.id}`
      );
      console.log("Pincode Deleted", data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    }
  }
);

//Get All Coupon
export const getAllCoupons = createAsyncThunk(
  "/api/v1/admin/create/coupon",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/api/v1/util/coupons");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);
//Get All Coupons
export const createCoupon = createAsyncThunk(
  "/api/v1/admin/coupon/create",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post(
        "/api/v1/util/coupon/create",
        body
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
//Update Coupons
export const updateCoupon = createAsyncThunk(
  "/api/v1/admin/coupon/update",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { data } = await axiosClient.put(
        `/api/v1/util/coupon/${body._id}`,
        body
      );
      console.log("This is updated Coupon", data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Get Single Coupon Detais:
export const getCouponDetail = createAsyncThunk(
  "/api/v1/admin/coupon/:id",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get(`/api/v1/util/coupon/${body.id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      console.log(e.response.data);
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Delete Coupon:
export const deleteCoupon = createAsyncThunk(
  "/api/v1/util/coupon/:id",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const { data } = await axiosClient.delete(
        `/api/v1/util/coupon/${body.id}`
      );
      console.log("Coupon Delete:", data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    }
  }
);

//Offer Header TagLine
export const createAndUpdateHeader = createAsyncThunk(
  "/api/v1/admin/util/header",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/api/v1/util/header", body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);
export const getHeaderTagLine = createAsyncThunk(
  "/api/v1/admin/util/get/header",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/api/v1/util/header", body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

//Delete Header:
export const deleteHeader = createAsyncThunk(
  "/api/v1/util/header/:id",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const { data } = await axiosClient.delete(
        `/api/v1/util/header/${body.id}`
      );
      console.log("Header Delete:", data);
      return data;
    } catch (error) {
      console.log(error.response.data);
      return error;
    }
  }
);

//Send Message To Our Email
export const sendMessage = createAsyncThunk(
  "/api/v1/admin/utils/message",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.post("/api/v1/util/sendMessage", body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

// Settings Slice
const utilSLice = createSlice({
  name: "utils",
  initialState: {
    pincodes: [],
    pin: {},
    coupons: [],
    coupon: {},
    error: "",
    success: false,
    headerTagLine: "",
  },
  reducers: {
    setStatusResponse: (state, action) => {
      state.success = action.payload;
      state.error = "";
      state.isDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPincodes.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.pincodes = action.payload.result;
        }
      })
      .addCase(createPincode.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(updatePincode.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.success = true;
          state.message = "Pincode Is Updated Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getPincodeDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.pincode = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(deletePincode.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isDeleted = true;
        } else {
          state.isDeleted = false;
          state.error = action.payload?.message;
        }
      })
      .addCase(createAndUpdateHeader.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(getHeaderTagLine.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.headerTagLine = action.payload.result;
        }
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.coupons = action.payload.result;
        }
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 201) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(updateCoupon.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.success = true;
          state.message = "Coupon Is Updated Succesfully ";
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(getCouponDetail.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.coupon = action.payload.result;
        } else {
          state.error = action.payload?.message;
        }
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        if (action.payload.statusCode === 200) {
          state.isDeleted = true;
        } else {
          state.isDeleted = false;
          state.error = action.payload?.message;
        }
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        if (action.payload?.statusCode === 200) {
          state.success = true;
        } else {
          state.error = action.payload.message;
        }
      });
  },
});

export default utilSLice.reducer;
export const { setStatusResponse } = utilSLice.actions;
