import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { selectPosts } from "./postsSlice.js";
import './posts.css';


export function Posts() {

    const posts = useSelector(selectPosts);
    
     
    const postItems = posts.map((post) => {     
     return (
      <div key={nanoid()} className="posts" >
        {post.title} <br />      
        {post.comment} <br />
      </div>
     )
    })
  
    return (
      <div className="postItems" >
        <div>
          {postItems}
        </div>
      </div>
    ) 
  }