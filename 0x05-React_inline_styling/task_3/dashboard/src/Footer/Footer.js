import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';

import { css, StyleSheet } from "aphrodite";

/***Styles: ***/

const styles = StyleSheet.create({
    
    footerStyle: {
        borderTop: "5px solid #EB0045",
        textAlign: "center",
        flex: "0.1",
        paddingTop: "12px",
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'",
        fontWeight: 500
    }
});
export const Footer = () => {
    return (
        <div className={css(styles.footerStyle)}>
            Copyright {getFullYear()} - {getFooterCopy(true)}
        </div>
    )
}