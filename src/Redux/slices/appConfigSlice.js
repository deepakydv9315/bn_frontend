import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    isCartOpen: false,
    closeNavBar: true,
    isWishOpen: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setWishOpen: (state, action) => {
      state.isWishOpen = action.payload;
    },
    setNavbar: (state, action) => {
      state.closeNavBar = action.payload;
    },
  },
});
export default appConfigSlice.reducer;

export const { setLoading, setCartOpen,setWishOpen, setNavbar  } = appConfigSlice.actions;
