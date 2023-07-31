import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { selectPosts } from "./postsSlice.js";
import { subRedditPosts } from "./subRedditSlice.js";
import { setSelectedSlice } from './selectionSlice';
import './posts.css';

export function Posts() {

  const posts = useSelector(selectPosts);
  const subReddit = useSelector(subRedditPosts)

  const selectedSlice = useSelector((state) => state.selection.selectedSlice);
  const dispatch = useDispatch();

  const handleSelectSlice = (sliceName) => {
    dispatch(setSelectedSlice(sliceName));
  };    
   
  const postItems = posts.map((post) => {  
    if (selectedSlice === 'postsSlice') {   
    return (
    <div key={nanoid()} className="posts" >
      {post.title} <br />      
      {post.comment} <br />
    </div>
   )}
      return undefined
  })

  const subRedditItems = subReddit.map((post) => {
    if (selectedSlice === 'subRedditSlice') {     
    return (
     <div key={nanoid()} className="posts" >
       {post.title} <br />      
       {post.comment} <br />
     </div>
    )}
    return undefined
   })

  return (
    <div className="postItems">
      <div>
        <div>
          {postItems}
          {subRedditItems}
        </div>
      </div>
      <div>
        <button onClick={() => handleSelectSlice('postsSlice')}>Home Page</button> <br/>
        <button onClick={() => handleSelectSlice('subRedditSlice')}>Sub Reddit Page</button>
      </div>
    </div>

  ) 
}

// Testing fetch subreddits - need to map these to buttons
// This will return 25 subreddits
fetch(`https://www.reddit.com/subreddits.json`)
    .then(res => res.json())
    .then(data => console.log(data))










