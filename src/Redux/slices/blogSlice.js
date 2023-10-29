import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios/axios";
import { setLoading } from "./appConfigSlice";

//Create a Blog:
export const createBlog = createAsyncThunk(
    "/api/v1/admin/blog/new",
    async (body, thunkAPI) => {
        try {
          thunkAPI.dispatch(setLoading(true));
          console.log(body, "aman");
          const { data } = await axiosClient.post(
            "/api/v1/admin/blog/new",
            body
          );
          console.log("This is created Blog", data);
          return data;
        } catch (error) {
          console.log(error.response.data);
          return error;
        } finally {
          thunkAPI.dispatch(setLoading(false));
        }
    }
)

//Get All Blogs
export const getBlogs = createAsyncThunk(
    "api/v1/blogs",
    async (_, thunkAPI) => {
        try{
            thunkAPI.dispatch(setLoading(true));
            const response = await axiosClient.get("/api/v1/blogs");
            return response.data;
        }
        catch(e){
            return Promise.reject(e);
        }
        finally {
            thunkAPI.dispatch(setLoading(false));
        }
    }
);

//Delete Blogs:
export const deleteBlog = createAsyncThunk(
    async (body, thunkAPI) => {
      try {
        thunkAPI.dispatch(setLoading(true));
        console.log("This is Body for Blog Section ", body);
        const response = await axiosClient.delete(`/api/v1/admin/blog/${body.id}`);
        console.log("This is Deleted Blog", response);
        return response.data;
      } catch (e) {
        return Promise.reject(e);
      } finally {
        thunkAPI.dispatch(setLoading(false));
      }
    }
);

//Get single Blog Details:
export const getBlogDetails = createAsyncThunk(
    "/api/v1/blog/:id",
    async (  body  , thunkAPI) => {
        try{
            thunkAPI.dispatch(setLoading(true));
            console.log(body);
            const response = await axiosClient.get(`/api/v1/blog/${ body.id }`);
            return response.data;
        }catch(error){
            console.log(error.response.data);
        }finally{
            thunkAPI.dispatch(setLoading(false));
        }
    }
);

//Update blog:
export const updateBlog = createAsyncThunk(
    "/api/v1/admin/blog/",
    async (body, thunkAPI) => {
        try{
            console.log(body);
            thunkAPI.dispatch(setLoading(true));
            const { data } = await axiosClient.put(
                `api/v1/admin/blog/${body._id}`,
            )
            console.log("Updated Blog", data);
            return data;
        }catch(error){
            console.log(error.response.data);
            return error;
        }finally {
            thunkAPI.dispatch(setLoading(false));
        }
    }
)

//Settings Slice:
const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        error: "",
        success: false,
        blog: {},
    },
    reducer: {
        setStatusResponse: (state) => {
            state.success = false;
            state.error = "";
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getBlogs.fulfilled, (state, action) => {
            if (action.payload.statusCode == 200) {
              state.blogs = action.payload.result;
            }
            else {
                state.error = action.payload.message;
              }
          })
          .addCase(createBlog.fulfilled, (state, action) => {
            if (action.payload?.statusCode == 200) {
              state.success = true;
              state.message = "Blog Created Succesfully";
            } else {
              state.error = action.payload?.message;
            }
          })
          .addCase(deleteBlog.fulfilled, (state, action) => {
            if (action.payload?.statusCode == 200) {
              state.success = true;
            } else {
              state.error = action.payload?.message;
            }
          })
          .addCase(getBlogDetails.fulfilled, (state, action) => {
            if(action.payload?.statusCode == 200) {
                state.blog = action.payload.result;
            }
            else {
                state.error = action.payload?.message;
            }
          })
          .addCase(updateBlog.fulfilled, (state, action) => {
            if(action.payload?.statusCode == 200) {
                state.success = true;
            }else{
                state.error = action.payload?.message;
            }
          })

    },
});

const blogReducer = blogSlice.reducer;
export const { setStatusResponse } = blogSlice.actions;
export default blogReducer;