import React, { useEffect } from 'react';
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

  const commentsItems = commentsData && commentsData.map((item, index) => (       // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='commentDiv'>
      <div className='commentBody'>
        {item.data.body}
      </div>
      <div className='commentInfo'>
        <div className='commentAuthor'>
          Author: <span>{item.data.author}</span>
        </div>
        <div className='commentNumber'>
          Comment {index + 1}
        </div>
      </div>
    </div>    
  ));

  return (
    <div id='commentsDiv' className='comments'>
      <div className='commentsHeader'>
        <div className='commentsComment'>
          <Link 
            to="/" 
            className="comment-link" 
            onClick={handleHideComment}>
              {commentsButton}
          </Link>
          <div className='commentsLength'>
            {commentsData?.length} comments
          </div>
        </div>      
        <div className='commentsTitle'>
          <h2>{selectedCommentsTitle}</h2>
        </div>
      </div>
      <div className="commentsItemsWrapper">
        {commentsItems}
      </div>
    </div>
  )
}

