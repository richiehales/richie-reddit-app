const API_ROOT = 'https://www.reddit.com';

export const fetchPosts = async (selectedSubreddit) => {
  
    try {
      const response = await fetch(`${API_ROOT}/${selectedSubreddit}.json`);
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



/*
console.log('From api.js')
console.log(fetchDataFromPostsAPI())
console.log(fetchSubreddits())
*/
  