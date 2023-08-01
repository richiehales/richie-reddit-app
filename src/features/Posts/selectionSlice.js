import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSlice: 'postsSlice', // Assuming 'posts' is the default selected slice
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setSelectedSlice: (state, action) => {
      state.selectedSlice = action.payload;
    },
  },
});

export const { setSelectedSlice } = selectionSlice.actions;
export default selectionSlice.reducer;
export const selection = (state) => state.selection;