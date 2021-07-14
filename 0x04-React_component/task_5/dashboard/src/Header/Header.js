
import React from 'react';
import holbertonLogo from '../assets/holberton.jpg';
import './Header.css';

export const Header = () => {
    return (
        <div className="App-header">
            <img src={holbertonLogo} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}



