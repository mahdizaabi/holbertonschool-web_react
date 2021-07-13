import React from 'react';
import PropTypes from 'prop-types'


 const NotificationItem = ({ type, value, html, markAsRead, id }) => {
    if (html) {
        return (
            <li
            type={type}
            onClick={()=>markAsRead(id)}
            dangerouslySetInnerHTML={html}>
            </li>
        )
    }
    return (
        <li
        onClick={()=>markAsRead(id)}
        type={type}>
            {value}
        </li>
    )
}


NotificationItem.prototype = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    markAsRead:PropTypes.func.isRequired
}
NotificationItem.defaultProps = {
    markAsRead: function(){},
}

export {NotificationItem};