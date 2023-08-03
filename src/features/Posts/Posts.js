import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsData } from '../../store/getPosts';
import './posts.css';

export function Posts() {

  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts.posts.data?.children); // data? - make sure fetched before trying to map
  const selectedSubreddit = useSelector((state) => state.posts.selectedSubreddit); // Get the selectedSubreddit from the Redux store

  useEffect(() => {
    dispatch(fetchPostsData(selectedSubreddit)); // Pass the selectedSubreddit directly to the fetchPostsData function
  }, [dispatch, selectedSubreddit]);

  const postItems = postsData && postsData.map((item) => (    // mayData && - make sure data is fetched before trying to map
    <div  key={item.data.id} className='postItems'>
      <div className='title'>{item.data.title}</div>
      <br />
      <div>{item.data.selftext}</div>
      <div>
        <img src={item.data.thumbnail} alt="To be Fixed"/>
      </div>
    </div>
  ));

  return (
    <div className="posts">
      {postItems}
    </div>
  )  
}


