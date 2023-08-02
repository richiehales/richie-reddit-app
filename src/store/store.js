import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/Posts/postsSlice';
import subRedditReducer from '../features/Subreddit/subRedditSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    subReddits: subRedditReducer
  },
});
