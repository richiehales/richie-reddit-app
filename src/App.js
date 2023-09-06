import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header  from './features/Header/Header';
import { Posts } from './features/Posts/Posts';
import { SubReddit } from './features/Subreddit/SubReddit';
import { Comments } from './features/Comments/Comments';
import Footer  from './features/Footer/Footer';



function App() {
  return (
    <div>
      <Header />
      <div className='homePage'>
      <SubReddit />
      <Routes>
        <Route path="/" element={ <Posts /> } />
        <Route path="/Comments" element={ <Comments /> } />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


