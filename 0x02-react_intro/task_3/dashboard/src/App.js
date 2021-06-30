import React from 'react';
import holbertonLogo from './holberton.jpg'
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import { Notifications } from './Notifications';


function App() {
  return (
    <div className="container">
          <Notifications />
      <div className="App-header">
        <img src={holbertonLogo} alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <form style={{ "display": "flex", "flex-direction": "column", "width": "20%" }}>
            <label htmlFor="email">Email</label>
            <input type="email" style={{ "flex-basis": "0.2" }} name="email" id="email" />
            <label htmlFor="pwdInput">Password</label>
            <input type="password" name="pwdInput" id="pwdInput" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>

      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>

    </div>
  );
}

export default App;
