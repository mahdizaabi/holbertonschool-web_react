import React from 'react';
import './Login.css';

export const LoginComponent = () => {
    return (
        <React.Fragment>
            <div className="App-body">           
            <p>Login to access the full dashboard</p>
            <div className="form">
                <form style={{ "display": "flex", "flexDirection": "column", "width": "20%" }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" style={{ "flexBasis": "0.2" }} name="email" id="email" />
                    <label htmlFor="pwdInput">Password</label>
                    <input type="password" name="pwdInput" id="pwdInput" />
                    <button type="submit">OK</button>
                </form>
            </div>
            </div>
        </React.Fragment>
    )
}