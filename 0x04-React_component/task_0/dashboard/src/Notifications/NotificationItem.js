import React from 'react';
import PropTypes from 'prop-types'


 const NotificationItem = ({ type, value, html }) => {
    if (html) {
        return (
            <li type={type} dangerouslySetInnerHTML={html}>
            </li>
        )
    }
    return (
        <li type={type}>
            {value}
        </li>
    )
}


NotificationItem.prototype = {
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired
}


export {NotificationItem};