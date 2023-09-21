import { setFetchingData } from '../features/Posts/postsSlice';
import { store } from '../store/store';

const API_ROOT = 'https://www.reddit.com';
const SEARCH = 'https://www.reddit.com/search.json?q='

export const fetchPosts = async (selectedSubreddit) => { 
  try {
    store.dispatch(setFetchingData(true));
    const response = await fetch(`${API_ROOT}/${selectedSubreddit}/.json`);
    if (!response.ok) {
      store.dispatch(setFetchingData(false));
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    store.dispatch(setFetchingData(false));
    return data;
  } catch (error) {
    // Handle errors, log, or throw as necessary
    console.error('Error fetching posts data:', error);
    store.dispatch(setFetchingData(false));
    throw error;
  }
};

export const fetchSearchResults = async (searchItem) => {
  try {
    store.dispatch(setFetchingData(true));
    const response = await fetch(`${SEARCH}${searchItem}`);
    if (!response.ok) {
      store.dispatch(setFetchingData(false));
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    store.dispatch(setFetchingData(false));
    return data;
  } catch (error) {
    store.dispatch(setFetchingData(false));
    // Handle errors, log, or throw as necessary
    console.error('Error fetching posts data:', error);
    throw error;
  }
};

export const fetchSubreddits = async () => {
  try {
    store.dispatch(setFetchingData(true));
    const response = await fetch('https://www.reddit.com/subreddits.json');
    if (!response.ok) {
      store.dispatch(setFetchingData(false));
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    store.dispatch(setFetchingData(false));
    return data;
  } catch (error) {
    store.dispatch(setFetchingData(false));
    // Handle errors, log, or throw as necessary
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchCommments = async (selectedComments) => {
  try {
    store.dispatch(setFetchingData(true));
    const response = await fetch(`${API_ROOT}/${selectedComments}.json`);
    if (!response.ok) {
      store.dispatch(setFetchingData(false));
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    store.dispatch(setFetchingData(false));
    return data[1];
  } catch (error) {
    store.dispatch(setFetchingData(false));
    // Handle errors, log, or throw as necessary
    console.error('Error fetching data:', error);
    throw error;
  }
};


