import React from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { MyContext } from "../App/AppContext";

const Footer = () => {
    return (
        <MyContext.Consumer>
            {(value) => (
                <footer className={css(styles.footerStyle)}>
                    <p>
                        Copyright {getFullYear()} - {getFooterCopy(true)}
                    </p>
                    {value.user.isLoggedIn && (
                        <p style={{ marginLeft: "24px" }}>
                            <a href="###">Contact Us</a>
                        </p>
                    )}
                </footer>
            )}

        </MyContext.Consumer>
    );
};

const styles = StyleSheet.create({
    footerStyle: {
        maxHeight: '10vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic'
    },
})

export default Footer;
