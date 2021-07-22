import React from "react";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.headerStyle)}>
      <img src={logo} className={css(styles.logoStyle)} alt="logo" />
      <h1 className={css(styles.titleStyle)}>School dashboard</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    alignItems: 'center',
    height: '25vh',
    minHeight: 150,
  },

  logoStyle: {
    height: '100%',
  },

  titleStyle: {
    color: '#E0344B',
    fontSize: '2.5rem',
    marginLeft: '1rem',
  }
})

export default Header;
