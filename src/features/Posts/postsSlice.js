import {  createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: "Home Page - POST 1",
    comment: "Home Page - Comment 1",
    selectedSubreddit: '/r/Home'
  },
  {
    id: 2,
    title: "Home Page - POST 2",
    comment: "Home Page - Comment 2"
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
