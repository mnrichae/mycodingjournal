import * as React from 'react';
import './App.css';
import Thoughts from './components/Thoughts'
import Tasks from './components/Tasks'


function App() {


  return (
      <div class="container mt-5 p-5">
        <h1>My Coding Journal</h1>
        <div class="row">
          <div class="col-md-6 border border-solid">
            <Thoughts />
          </div>
          <div class="col-md-6 border border-solid">
            <Tasks />
          </div>
        </div>
      </div>
  );
}

export default App;
