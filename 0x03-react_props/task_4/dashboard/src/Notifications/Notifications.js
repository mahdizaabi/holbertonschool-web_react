import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { getLatestNotification } from '../utils';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types'

const Notifications = ({ displayDrawer }) => (

    <div className="containerx">
        <div className="menuItem">
            Your notifications
        </div>

        {displayDrawer && <div className="Notifications" style={{ "paddingBottom": "18px" }}>

            <div style={{ "padding": "18px", "display": "flex", "justifyContent": "space-between" }}>
                {displayDrawer && <p style={{ "fontSize": "12px" }}>
                    Here is the lists of notifications
                </p>}
                <button
                    type="submit"
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                >
                    <img src={closeIcon} alt="" width="24" height="10" />
                </button>
            </div>

            <div style={{ "padding": "0 18px" }} className="list">

                {displayDrawer && <ul style={{ "padding": "0 18px" }} className="listNotificationItems">

                    <NotificationItem type="dafault" value="New course available" />
                    <NotificationItem type="urgent" value="New resume available" />
                    <NotificationItem type="ultraUrgent" html={getLatestNotification()} />
                </ul>}

            </div>

        </div>}

    </div>)

Notifications.prototype = {
    displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
    displayDrawer: true,

};

export { Notifications };