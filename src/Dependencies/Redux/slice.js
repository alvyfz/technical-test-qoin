import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
   name: "store",
   initialState: {
      isOpen: true,
   },

   reducers: {
      setIsOpen: (state, action) => {
         state.isOpen = action.payload;
      },
   },
});

export const { setIsOpen } = slice.actions;
export default slice.reducer;
