import React from 'react';
import BodySection from './BodySection';
import { css, StyleSheet } from "aphrodite";

import PropTypes from 'prop-types'
const styles = StyleSheet.create({

    bodySectionWithMarginontainer: {
        margiBottom: "40px"
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