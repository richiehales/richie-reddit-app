import { configureStore } from '@reduxjs/toolkit';
import selectionReducer from '../features/Posts/selectionSlice';
import postsReducer from '../features/Posts/postsSlice';
import subRedditReducer from '../features/Subreddit/subRedditSlice';

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
    posts: postsReducer,
    subReddits: subRedditReducer
  },
});
