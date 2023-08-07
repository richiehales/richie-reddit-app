import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  posts: [],
  searchTerm: '',
  selectedSubreddit: 'r/pics/',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload; // Replace the state with the new posts data received from the API.
    },
  }
})

export const { setSelectedSubreddit, setPosts } = postsSlice.actions;
export default postsSlice.reducer;
//export const selectPosts = (state) => state.posts.posts; //state.posts(initialState posts: []).posts(name: 'posts')
