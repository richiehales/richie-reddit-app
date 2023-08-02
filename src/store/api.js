export const fetchDataFromAPI = async () => {
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

