import { setSubReddits } from './subRedditSlice';
import { fetchSubreddits } from '../../store/api';

export const fetchMyData = () => async (dispatch) => {
  try {
    const data = await fetchSubreddits();
    dispatch(setSubReddits(data));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching data:', error);
  }
};

