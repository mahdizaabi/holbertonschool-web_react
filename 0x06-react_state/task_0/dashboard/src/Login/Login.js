import React from "react";
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className="App-login">
      <div className={css(styles.loginStyle)}>
        <p className={css(styles.loginPStyle)}>Login to access the full dashboard</p>
        <form className={css(styles.loginFormStyle)}>
          <label className={css(styles.smallLabel)}>
            Email:
            <input type="text" name="email" />
          </label>
          <label className={css(styles.smallLabel)}>
            Password:
            <input type="text" nam="password" />
          </label>
          <button>OK</button>
        </form>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  loginStyle: {
    minHeight: 150,
    margin: '40px auto 150px auto',
    '@media (max-width: 900px)': {
      minHeight: 0,
      margin: 0,
    }
  },

  loginPStyle: {
    margin: '3rem 0rem 0rem 2rem',
    '@media (max-width: 900px)': {
      marginTop: 0,
    }
  },

  loginFormStyle: {
    margin: '1rem 0rem 2rem 2rem',
  },

  smallLabel: {
    '@media (max-width: 900px)': {
        display: 'block',
    }
  }
})

export default Login;
