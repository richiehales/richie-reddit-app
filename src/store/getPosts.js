import { setPosts } from '../features/Posts/postsSlice';
import { fetchDataFromPostsAPI } from './api';

export const fetchPostsData = () => async (dispatch) => {
  try {
    const postsData = await fetchDataFromPostsAPI();
    dispatch(setPosts(postsData.data));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};