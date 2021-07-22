import React from 'react';
import  BodySection  from './BodySection';
import PropTypes from 'prop-types'
import { css, StyleSheet } from "aphrodite";
const styles = StyleSheet.create({

    bodySectionWithMarginontainer: {
        marginBottom: "40px",
    }
});

const BodySectionWithMarginBottom = ({ children, title }) => (
    <div className={css(styles.bodySectionWithMarginontainer)}>
        <BodySection title={title}>
            {children}
        </BodySection>
    </div>
)


BodySectionWithMarginBottom.prototypes = {
    props: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}



export default BodySectionWithMarginBottom;