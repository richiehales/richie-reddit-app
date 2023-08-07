import { setComments } from '../features/Comments/commentsSlice';
import { fetchCommments } from './api';

export const fetchCommentsData = (selectedComments) => async (dispatch) => {
  try {
    const commentsData = await fetchCommments(selectedComments);
    dispatch(setComments(commentsData));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};


