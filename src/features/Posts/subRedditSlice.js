import {  createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 3,
    title: "Sub Reddit Page - POST 3",
    comment: "Sub Reddit Page - Comment 3"
  },
  {
    id: 4,
    title: "Sub Reddit Page - POST 4",
    comment: "Sub Reddit Page - Comment 4"
  }
]

export const subRedditSlice = createSlice({
  name: 'subReddit',
  initialState,
  reducers: {
    toggleB: (state) => {
        state.isToggled = !state.isToggled;
      },
  }
})

export default subRedditSlice.reducer;
export const { toggleB } = subRedditSlice.actions;
export const subRedditPosts = (state) => state.subReddit;