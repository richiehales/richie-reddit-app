import { setComments } from './commentsSlice';
import { setFetchingData } from '../Posts/postsSlice';
import { fetchCommments } from '../../api/api';

export const fetchCommentsData = (selectedComments) => async (dispatch) => {
  try {
    dispatch(setFetchingData(true));
    const commentsData = await fetchCommments(selectedComments);
    dispatch(setComments(commentsData));
    dispatch(setFetchingData(false));
  } catch (error) {
    dispatch(setFetchingData(false));
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};


