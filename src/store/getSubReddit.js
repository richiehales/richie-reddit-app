import { setSubReddits } from '../features/Subreddit/subRedditSlice';
import { fetchDataFromAPI } from './api';

export const fetchMyData = () => async (dispatch) => {
  try {
    const data = await fetchDataFromAPI();
    dispatch(setSubReddits(data));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching data:', error);
  }
};

