import React from 'react';
import PropTypes from 'prop-types'


 const NotificationItemUnmemo = ({ type, value, html, markAsRead, id }) => {
    if (html) {
        return (
            <li
            className={type}
            onClick={()=>markAsRead(id)}
            dangerouslySetInnerHTML={html}>
            </li>
        )
    }
    return (
        <li
        className={type}
        onClick={()=>markAsRead(id)}>
            {value}
        </li>
    )
}


NotificationItemUnmemo.prototype = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    markAsRead:PropTypes.func.isRequired
}
NotificationItemUnmemo.defaultProps = {
    markAsRead: function(){},
}
const NotificationItem = React.memo(NotificationItemUnmemo)


export {NotificationItem};