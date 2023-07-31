import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/Posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer
  },
});
