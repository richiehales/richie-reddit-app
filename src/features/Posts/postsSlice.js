import {  createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "Title 1",
    comment: "Comment 1"
  },
  {
    id: 2,
    title: "Title 2",
    comment: "Comment 2"
  }
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export default postsSlice.reducer;
export const selectPosts = (state) => state.posts;
