import React from 'react';


export const NotificationItem = ({ type, value, html }) => {
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