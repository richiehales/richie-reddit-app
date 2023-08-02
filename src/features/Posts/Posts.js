import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { selectPosts } from "./postsSlice.js";
//import { fetchPostsData } from '../../store/getPosts';
import './posts.css';

export function Posts() {

  const posts = useSelector(selectPosts);
  
  const postItems = posts.map((post) => {  
    if ('postsSlice') {   
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
        
        </div>
      </div>
    </div>

  ) 
}

