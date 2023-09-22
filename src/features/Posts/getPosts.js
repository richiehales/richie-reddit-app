import { setPosts, setFetchingData } from './postsSlice';
import { fetchPosts, fetchSearchResults } from '../../api/api';

export const fetchPostsData = (selectedSubreddit) => async (dispatch) => {
  try {
    dispatch(setFetchingData(true));
    const postsData = await fetchPosts(selectedSubreddit);
    dispatch(setPosts(postsData));
    dispatch(setFetchingData(false));
  } catch (error) {
    dispatch(setFetchingData(false));
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};

export const fetchSearchData = (searchItem) => async (dispatch) => {
  if (searchItem !== '') {
  try {
    dispatch(setFetchingData(true));
    const searchData = await fetchSearchResults(searchItem);
    dispatch(setPosts(searchData));
    dispatch(setFetchingData(false));
  } catch (error) {
    dispatch(setFetchingData(false));
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
}
};

