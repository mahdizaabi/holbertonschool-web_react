import React from 'react';
import  BodySection  from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types'


const BodySectionWithMarginBottom = ({ children, title }) => (
    <div className="bodySectionWithMargin">
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