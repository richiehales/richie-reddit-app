import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../../store/getPosts';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../Comments/commentsSlice';
import './posts.css';



export function Posts() {

  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts.data?.children);
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);                   // data? - make sure fetched before trying to map
  const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit);              // Get the selectedSubreddit from the Redux store
    
  useEffect(() => {
    dispatch(fetchPostsData(selectedSubreddit));          // Pass the selectedSubreddit directly to the fetchPostsData function in getPosts.js
  }, [dispatch, selectedSubreddit]);

  const handleSelectComment = (comment, title) => {    
    if (commentsButton === 'Show Comments') {
      dispatch(setSelectedComments(comment));
      dispatch(setSelectedCommentsTitle(title));
      dispatch(setButtons('Hide Comments'));        
    } else {
      dispatch(setButtons('Show Comments'));
      dispatch(setSelectedComments(comment));     
    }
  };

  const postsDisplayStyle = commentsButton === 'Show Comments' ? {} : { display: 'none' };          // Toggle comments on/off
  
  const postItems = postsData && postsData.map((item) => (                       // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='postItems' > 
      <div className='title'>
        <h2>{item.data.title}</h2>
      </div>
      <br />
      <div>
        {item.data.selftext}
      </div>
      <div>
        <img src={item.data.url} alt="" className='image'/>
      </div>
      <div>           
        Author: <span>{item.data.author}</span>
      </div>
      <div>
        <a href='#commentsDiv'>
          <button onClick={() => handleSelectComment(item.data.permalink, item.data.title)}>
            {commentsButton}
          </button>
        </a>
      </div>
    </div>
  ));

  return (
    <div className="posts" >
      <div>
        {postItems}
      </div>
    </div>
  )  
}


