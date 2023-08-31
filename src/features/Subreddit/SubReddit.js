import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../Posts/getPosts';
import { fetchSubredditsData } from './getSubReddit';
import { setSelectedSubreddit, setSearch } from '../Posts/postsSlice';
import { setButtons } from '../Comments/commentsSlice';
import './subReddit.css';


export function SubReddit() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.subReddits.posts.data?.children);     // data? - make sure fetched before trying to map
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);
  const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit);
  const searchItem = useSelector((state) => state.posts.searchTerm);

  const handleSelectSlice = (buttonId) => {
    dispatch(setSelectedSubreddit(buttonId));
    if (commentsButton === 'Hide Comments') {
      dispatch(setSearch(''))
      dispatch(setButtons('Show Comments'));
      
    }
  };  

  useEffect(() => {
    console.log('fetch Subreddit useEffect')
    dispatch(fetchSubredditsData());            // Fetch list of subreddits to map to buttons
  }, [dispatch]);

  useEffect(() => { 
    if (searchItem === '') {
      console.log('Fetch Posts useEffect Run (SubReddit.js)')
      dispatch(fetchPostsData(selectedSubreddit));      // Fetch subreddit posts         
    }
  }, [searchItem, dispatch, selectedSubreddit]);
  

  const subRedditButtons = myData && myData.map((item) => (      // mayData && - make sure data is fetched before trying to map
    <div key={item.data.display_name} className='buttons'>
        <Link 
          to="/"
          className="reddit-link"
          onClick={() => handleSelectSlice(item.data.display_name_prefixed)}>
            {item.data.display_name}
        </Link>        
    </div>
  ));

  return (
    <div className='subReddits'>
      {subRedditButtons}
    </div>
  );
};


