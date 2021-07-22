import React from 'react';
import PropTypes from 'prop-types'

const BodySection  = ({children, title}) => (
    <div className="bodySection">
        <h2>{title}</h2>
        {children}
    </div>
)


BodySection.prototypes = {
    props: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
export default BodySection;