import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import selectionReducer from '../features/Posts/selectionSlice';
import postsReducer from '../features/Posts/postsSlice';
import subRedditReducer from '../features/Posts/subRedditSlice';

export const store = configureStore({
  reducer: {
    selection: selectionReducer,
    posts: postsReducer,
    subReddit: subRedditReducer, 
    counter: counterReducer
  },
});
