import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  posts: [],
  searchTerm: '',
  selectedSubreddit: 'r/pics/',
  fetchingData: false
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
    setSearch: (state, action) => {
      state.searchTerm = action.payload; 
    },
    setFetchingData: (state, action) => {
      state.fetchingData = action.payload; 
    },
  }
})

export const { setSelectedSubreddit, setPosts, setSearch, setFetchingData } = postsSlice.actions;
export default postsSlice.reducer;
//export const selectPosts = (state) => state.posts.posts; //state.posts(initialState posts: []).posts(name: 'posts')
