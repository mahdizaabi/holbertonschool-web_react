import React from 'react';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({

    appBody: {
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: "18px",
        padding: "18px",
        flex: "0.6",
        fontWeight: "800",
        paddingBottom: "100px"
    },
    text: { paddingBottom: "48px" }
})


export const LoginComponent = () => {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}>           
            <p className={css(styles.text)}>Login to access the full dashboard</p>
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