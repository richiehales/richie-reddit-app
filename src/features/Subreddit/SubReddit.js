import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { subRedditPosts } from "../Subreddit/subRedditSlice.js";
import { setSelectedSlice } from '../Posts/selectionSlice';

export function SubReddit() {

    const subReddit = useSelector(subRedditPosts)
  
    const dispatch = useDispatch();    
  
    const handleSelectSlice = (buttonId) => {
      dispatch(setSelectedSlice(buttonId));
    }; 
    
    const subRedditButtons = subReddit.map((button) => {
      return(
        <div key={nanoid()} className="posts" >
          <button onClick={() => handleSelectSlice(button.id)}>
            {button.title}
          </button>
        </div>
  
      )
     })
  
    return (
      <div className="postItems">
        <div>

        </div>
        <div>
          <button onClick={() => handleSelectSlice('postsSlice')}>Home Page</button> <br/>
          {subRedditButtons}
        </div>
      </div>
  
    ) 
  }
