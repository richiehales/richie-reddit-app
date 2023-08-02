import { setSubReddits } from '../features/Subreddit/subRedditSlice';
import { fetchSubreddits } from './api';

export const fetchMyData = () => async (dispatch) => {
  try {
    const data = await fetchSubreddits();
    dispatch(setSubReddits(data));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching data:', error);
  }
};

