import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appConfigSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/user";
import categoryReducer from "./slices/categories";
import utilReducer from "./slices/utilsSlice";
import orderReducer from "./slices/orderSlice";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
    user: userReducer,
    categories: categoryReducer,
    utils: utilReducer,
    orders: orderReducer,
    blogs: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
  }),
});
