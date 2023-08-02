import { createSlice } from '@reduxjs/toolkit';

const initialState = {  
  posts: []
}

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    setSubReddits: (state, action) => {
      state.posts = action.payload; // Replace the state with the new data received from the API.
    },
  },
});

export const { setSubReddits } = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const selectSubRedditSlice = (state) => state.subReddits;