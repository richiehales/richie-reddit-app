import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { selectPosts } from "./postsSlice.js";
import './posts.css';

export function Posts() {

  const posts = useSelector(selectPosts);
  

  const selectedSlice = useSelector((state) => state.selection.selectedSlice);
 
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


// Testing fetch subreddits - need to map these to buttons
// This will return 25 subreddits
fetch(`https://www.reddit.com/subreddits.json`)
  .then(response => response.json())
  .then(data => console.log(data))


/*
// Logs first subReddit ([0] - Home)
fetch(`https://www.reddit.com/subreddits.json`)
  .then(response => response.json())
  .then(data => console.log(data.data.children[1]))
*/

/*
fetch(`https://www.reddit.com/subreddits.json`)
  .then(response => response.json())
  .then(data => console.log((data.data.children).map((title) => title.data.display_name)))
*/

