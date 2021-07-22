import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types'
import { NotificationItemShape } from '../utils';




class Notifications extends React.Component {
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.listNotifications.length > this.props.listNotifications.length ||
            nextProps.displayDrawer !== this.props.displayDrawer
        )
            return true;
        return false;
    }

    render() {
        return (<div className="containerx">
            <div className="menuItem" onClick={() => this.props.handleDisplayDrawer()}>
                Your notifications
            </div>

            {(this.props.displayDrawer && this.props.listNotifications.length === 0 && "no new Notifications") || (this.props.displayDrawer && <div className="Notifications" style={{ "paddingBottom": "18px" }}>

                <div style={{ "padding": "18px", "display": "flex", "justifyContent": "space-between" }}>
                    {this.props.displayDrawer && <p style={{ "fontSize": "12px" }}>
                        Here is the lists of notifications
                    </p>}
                    <button
                        id="btn"
                        type="submit"
                        aria-label="Close"
                        onClick={() => this.props.handleHideDrawer()}
                    >
                        <img src={closeIcon} alt="" width="24" height="10" />
                    </button>
                </div>

                <div style={{ "padding": "0 18px" }} className="list">

                    {this.props.displayDrawer && <ul style={{ "padding": "0 18px" }} className="listNotificationItems">
                        {this.props.listNotifications.map(item => {
                            return (
                                <NotificationItem
                                    markAsRead={this.markAsRead}
                                    key={item.id}
                                    id={item.id}
                                    type={item.type}
                                    value={item.value}
                                    html={item.html || ''}
                                />
                            )
                        })}
                    </ul>}
                </div>
            </div>)}

        </div>

        )
    }
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func

}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export { Notifications };