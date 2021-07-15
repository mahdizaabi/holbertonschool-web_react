
import React from 'react';
import holbertonLogo from '../assets/holberton.jpg';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    image: {
        height: "120px",
        width: "200px",
        flex: 0.1
    },
    container: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        borderBottom: "5px solid #EB0045",
        height: "200px"
    },
    text: {
        texAlign: "center",
        color: "#EB0045",
        margin: "0 38px",
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: 800
    }
});
export const Header = () => {
    return (
        <div className={css(styles.container)}>
            <img className={css(styles.image)} src={holbertonLogo} alt="logo" />
            <h1 className={css(styles.text)}>School dashboard</h1>
        </div>
    )
}



