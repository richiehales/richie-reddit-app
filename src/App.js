import React from 'react';
import './App.css';
import Header  from './features/Header/Header';
import { Posts } from './features/Posts/Posts';
import { SubReddit } from './features/Subreddit/SubReddit';
import { Comments } from './features/Comments/Comments';



function App() {
  return (
    <div>
      <Header />
      <main className="App-content">
        <SubReddit />
        <Posts className='posts'/>
        <Comments />
      </main>
    </div>
  );
}

export default App;
