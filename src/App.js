import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header  from './features/Header/Header';
import { Posts } from './features/Posts/Posts';

function App() {
  return (
    <div>
      <Header />
      <main className="App-content">
        <Posts />
        {/*<Counter />*/}
      </main>
    </div>
  );
}

export default App;
