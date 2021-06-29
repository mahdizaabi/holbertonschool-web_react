import React from 'react';
import holbertonLogo from './holberton.jpg'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App-header">
        <img src={holbertonLogo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
      Copyright 2020 - holberton School
      </div>
      
    </div>
  );
}

export default App;
