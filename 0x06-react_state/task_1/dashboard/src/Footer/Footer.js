import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const Footer = () => {
  return (
    <footer className={css(styles.footerStyle)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    maxHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic'
  },
})

export default Footer;
