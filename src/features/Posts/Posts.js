import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../../store/getPosts';
import { fetchCommentsData } from '../../store/getComments';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../Comments/commentsSlice';
import './posts.css';



export function Posts() {

  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts.data?.children);                   // data? - make sure fetched before trying to map
  const commentsData = useSelector((state) => state.comments.comments.data?.children);          // data? - make sure fetched before trying to map
  const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit);              // Get the selectedSubreddit from the Redux store
  const selectedComments = useSelector((state) => state.comments.selectedComments);             // Get the selectedComments from the Redux store
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);         // Get the commentsButtonsDisplay from the Redux store
  const selectedCommentsTitle = useSelector((state) => state.comments.selectedCommentsTitle);   // Get the selectedCommentsTitle from the Redux store
  
  useEffect(() => {
    dispatch(fetchPostsData(selectedSubreddit));          // Pass the selectedSubreddit directly to the fetchPostsData function in getPosts.js
  }, [dispatch, selectedSubreddit]);

  useEffect(() => {
    dispatch(fetchCommentsData(selectedComments));         // Pass the selectedComments directly to the fetchCommentsData function in getComments.js
  }, [dispatch, selectedComments]);

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

  const handleHideComment = () => {    
    if (commentsButton === 'Show Comments') {
      dispatch(setButtons('Hide Comments'));   
    } else {
      dispatch(setButtons('Show Comments'));   
    }
  };

  const postsDisplayStyle = commentsButton === 'Show Comments' ? {} : { display: 'none' };          // Toggle comments on/off
  const commentsDisplayStyle = commentsButton === 'Hide Comments' ? {} : { display: 'none' };       // Toggle comments on/off 

  const postItems = postsData && postsData.map((item) => (                       // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='postItems' style={postsDisplayStyle} > 
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

  console.log(selectedCommentsTitle)

  const commentsItems = commentsData && commentsData.map((item) => (        // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='comments'>
      <div className='commentBody'>
        {item.data.body} <br/>
      </div>
      <div className='commentAuthor'>
        Author: <span>{item.data.author}</span>
      </div>
    </div>   
  ));

  return (
    <div className="posts" >
      <div>
        {postItems}
      </div>
      <div style={commentsDisplayStyle} id='commentsDiv'>           
        <button onClick={() => handleHideComment()}>
          {commentsButton}
        </button>
        <div className='commentsTitle'>
          <h2>{selectedCommentsTitle}</h2>
        </div>
        <div>
          {commentsItems}
        </div>
      </div> 
    </div>
  )  
}


