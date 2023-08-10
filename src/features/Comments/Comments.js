import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsData } from '../../store/getComments';
import { setButtons } from './commentsSlice';

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
    } else {
      dispatch(setButtons('Show Comments'));   
    }
  };

  const commentsDisplayStyle = commentsButton === 'Hide Comments' ? {} : { display: 'none' };       // Toggle comments on/off 

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

  return(
    <div id='commentsDiv'>           
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
  )
}
