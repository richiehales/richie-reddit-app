import React, { useRef }from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedComments, setButtons, setSelectedCommentsTitle } from '../Comments/commentsSlice';
import './posts.css';
import { FaReddit } from 'react-icons/fa';



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

  const isImageUrl = (url) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Add more extensions if needed
    const lowerCaseUrl = url.toLowerCase();
    return imageExtensions.some(ext => lowerCaseUrl.endsWith(ext));
  };

  const toHome = () => {
    window.scrollTo(0,0)
    postsList.current.scrollTo(0,0)
  }
 
  const postItems = postsData && postsData.map((item, index) => (        // mayData && - make sure data is fetched before trying to map
    <div key={item.data.id} className='post-items' >
      <div className='posts-number'>
        Post {index + 1}
      </div>
      <div className='title'>
        <h2>{item.data.title}</h2>
      </div>
      <br />
      <div className='posts-text'>
        {item.data.selftext}
      </div>
      <hr className='posts-data-divider'/>
      <div className='image'>
          {isImageUrl(item.data.url) ? (
            <img src={item.data.url} alt="Item" />
          ) : (
            <div className="post-logo">
            <FaReddit className="post-logo-icon" />
            <p>
              Reddit-no image
            </p>
          </div>
          )}
      </div>
      <hr className='posts-data-divider'/>
      <div className='posts-footer'>
        <div className='post-author'>           
          Author: <span>{item.data.author}</span>
        </div>
        <button 
          className='top-button'
          onClick={() => toHome()}>
            Back To Top            
        </button>      
        <div>
          <Link 
            to="/Comments"              
            onClick={() => handleSelectComment(item.data.permalink, item.data.title)}>
              <button className="post-link">
                Comments
              </button>           
          </Link>
        </div>  
      </div>
      <hr className='posts-divider'/>
    </div>
  ));
  
  return (
    <div className='posts-header'>
        <div className='posts-data'>
          <div className='posts-length'>
            {postsData?.length} posts
          </div>
        </div>
        <hr className='posts-data-divider'/>
      <div className='posts-subreddit'>        
        {searchTerm !== '' && (
          <h1>Searchterm: {searchTerm}</h1>
        )}
        {searchTerm === '' && (
          <h1>Subreddit: {selectedSubreddit}</h1>
        )}      
      </div>
      <hr className='posts-main-divider'/>
      <div className="posts" ref={postsList}>
        {postItems}
      </div>
    </div>
  )  
}


