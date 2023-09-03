import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../Comments/commentsSlice';
import './posts.css';



export function Posts() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts.data?.children);
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);     // data? - make sure fetched before trying to map
    
  const handleSelectComment = (comment, title) => {    
    if (commentsButton === 'Show Comments') {
      dispatch(setSelectedComments(comment));
      dispatch(setSelectedCommentsTitle(title));
      dispatch(setButtons('Hide Comments'));
    } 
    if (commentsButton === 'Hide Comments') {      
      dispatch(setSelectedComments(comment));
      dispatch(setButtons('Show Comments'));     
    }
  };
   
  const postItems = postsData && postsData.map((item) => (        // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='postItems' > 
      <div className='title'>
        <h2>{item.data.title}</h2>
      </div>
      <br />
      <div>
        {item.data.selftext}
      </div>
      <div className='image'>
        <img src={item.data.url} alt="" />
      </div>
      <div className='postsFooter'>
        <div>           
          Author: <span>{item.data.author}</span>
        </div>
        <div>
          <Link 
            to="/Comments"
            className="post-link"  
            onClick={() => handleSelectComment(item.data.permalink, item.data.title)}>
              {commentsButton}
          </Link>
        </div>  
      </div>
    </div>
  ));

  return (
    <div className="posts" >
      {postItems}
    </div>
  )  
}


