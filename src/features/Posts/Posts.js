import React, { useRef }from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../Comments/commentsSlice';
import './posts.css';



export function Posts() {
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts.data?.children);
  const searchTerm = useSelector((state) => state.posts.searchTerm);
  const commentsButton = useSelector((state) => state.comments.commentsButtonsDisplay);     // data? - make sure fetched before trying to map
  const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit);
  const postsList = useRef();
   
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

  const toTop = () => {
    postsList.current.scrollTo(0,0)
  }

 
  const postItems = postsData && postsData.map((item, index) => (        // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='postItems' >
      <div className='postsNumber'>
        Post {index + 1}
      </div>
      <div className='title'>
        <h2>{item.data.title}</h2>
      </div>
      <br />
      <div className='postsText'>
        {item.data.selftext}
      </div>
      <hr className='postsDataDivider'/>
      <div className='image'>
        <img src={item.data.url} alt="no media available" />
      </div>
      <hr className='postsDataDivider'/>
      <div className='postsFooter'>
        <div className='postAuthor'>           
          Author: <span>{item.data.author}</span>
        </div>

        <div>
          <Link 
            to="/Comments"
            className="post-link"  
            onClick={() => handleSelectComment(item.data.permalink, item.data.title)}>
              Comments
          </Link>
        </div>  
      </div>
      <hr className='postsDivider'/>
    </div>
  ));
  
  return (
    <div className='postsHeader'>
        <div className='postsData'>
          <div>
            <button 
              className='homeButton'
              onClick={() => toTop()}>
              Posts Home            
            </button>
          </div>
          <div className='postsLength'>
            {postsData?.length} posts
          </div>
        </div>
        <hr className='postsDataDivider'/>
      <div className='postsSubreddit'>        
        {searchTerm !== '' && (
          <h1>Searchterm: {searchTerm}</h1>
        )}
        {searchTerm === '' && (
          <h1>Subreddit: {selectedSubreddit}</h1>
        )}      
      </div>
      <hr className='postsMainDivider'/>
      <div className="posts" ref={postsList}>
        {postItems}
      </div>
    </div>
  )  
}


