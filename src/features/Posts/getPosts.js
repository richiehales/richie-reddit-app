import { setPosts } from './postsSlice';
import { fetchPosts, fetchSearchResults } from '../../store/api';

export const fetchPostsData = (selectedSubreddit) => async (dispatch) => {
  try {
    const postsData = await fetchPosts(selectedSubreddit);
    dispatch(setPosts(postsData));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};

export const fetchSearchData = (searchItem) => async (dispatch) => {
  if (searchItem !== '') {
  try {
    const searchData = await fetchSearchResults(searchItem);
    dispatch(setPosts(searchData));
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
}
};

