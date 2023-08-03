import { setPosts } from '../features/Posts/postsSlice';
import { fetchPosts } from './api';

export const fetchPostsData = (selectedSubreddit) => async (dispatch) => {
  try {
    const postsData = await fetchPosts(selectedSubreddit);
    dispatch(setPosts(postsData));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};

