const API_ROOT = 'https://www.reddit.com';
//    https://www.reddit.com/search/?q=drugs
//    const SEARCH = 'https://www.reddit.com/search/?q='
//    http://www.reddit.com/search.json?q=ferrari
const SEARCH = 'http://www.reddit.com/search.json?q='

export const fetchPosts = async (selectedSubreddit) => {  
  try {
    const response = await fetch(`${API_ROOT}/${selectedSubreddit}/.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors, log, or throw as necessary
    console.error('Error fetching posts data:', error);
    throw error;
  }
};

export const fetchSearchResults = async (searchItem) => {
  try {
    console.log(`${SEARCH}${searchItem}`)
    const response = await fetch(`${SEARCH}${searchItem}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors, log, or throw as necessary
    console.error('Error fetching posts data:', error);
    throw error;
  }
};

export const fetchSubreddits = async () => {
  try {
    const response = await fetch('https://www.reddit.com/subreddits.json');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors, log, or throw as necessary
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchCommments = async (selectedComments) => {
  try {
    const response = await fetch(`${API_ROOT}/${selectedComments}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data[1];
  } catch (error) {
    // Handle errors, log, or throw as necessary
    console.error('Error fetching data:', error);
    throw error;
  }
};


