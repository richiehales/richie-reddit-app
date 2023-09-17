import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsData } from './getComments';
import { setButtons } from './commentsSlice';
import './comments.css';

export function Comments() {
  const selectedComments = useSelector((state) => state.comments.selectedComments);             // Get the selectedComments from the Redux store
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);         // Get the commentsButtonsDisplay from the Redux store
  const selectedCommentsTitle = useSelector((state) => state.comments.selectedCommentsTitle);   // Get the selectedCommentsTitle from the Redux store
  const commentsData = useSelector((state) => state.comments.comments.data?.children);          // data? - make sure fetched before trying to map
  const dispatch = useDispatch();
  const commentsList = useRef();

  useEffect(() => {
    dispatch(fetchCommentsData(selectedComments));         // Pass the selectedComments directly to the fetchCommentsData function in getComments.js
  }, [dispatch, selectedComments]);

  const handleHideComment = () => {    
    if (commentsButton === 'Show Comments') {
      dispatch(setButtons('Hide Comments'));   
    } 
    if (commentsButton === 'Hide Comments') {
      dispatch(setButtons('Show Comments'));   
    }
  };

  const toHome = () => {
    window.scrollTo(0,0)
    commentsList.current.scrollTo(0,0)
  }

  const commentsItems = commentsData && commentsData.map((item, index) => (       // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='comment=div'>
      <div className='comment-number'>
        Comment {index + 1}
      </div>
      <div className='comment-body'>
        {item.data.body}
      </div>
      <hr className='comments-data-divider'/>
      <div className='comment-info'>
        <div className='comment-author'>
          Author: <span>{item.data.author}</span>
        </div>
        <button 
          className='top-button-comment'
          onClick={() => toHome()}>
            Back To Top            
        </button>  
      </div>
      <hr className='comments-divider'/>
    </div>    
  ));

  return (
    <div id='commentsDiv' className='comments'>
      <div className='comments-header'>
        <div className='comments-data'>
          <Link 
            to="/"            
            onClick={handleHideComment}>
              <button className="comment-link">
                Posts
              </button>
          </Link>
          <div className='comments-length'>
            {commentsData?.length} comments
          </div>
        </div>
        <hr className='comments-data-divider'/>      
        <div className='comments-title'>
          <h2>{selectedCommentsTitle}</h2>
        </div>
      </div>
      <hr className='comments-main-divider'/>
      <div className='comments-items' ref={commentsList}>
        {commentsItems}
      </div>
    </div>
  )
}

