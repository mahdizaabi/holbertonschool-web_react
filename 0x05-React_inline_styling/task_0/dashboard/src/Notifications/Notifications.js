import React from 'react';
import closeIcon from '../assets/closeIcon.png';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types'
import { NotificationItemShape } from '../utils';

import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    containerx: {
        width: "30%",
        position: "absolute",
        right: 0,
        fontSize: "18px",
        marginRight: "12px",
        fontWeight: "800",
        border: "2px dashed #EB0045",
        marginTop:"18px"
    },
    menuItem: {
        textAlign: " right",
        fontSize: "18px",
        color: "#EB0045"
    },
    notifications: {
        border: "2px dashed #EB0045",
        fontWeight: 700,
        marginRight: 0,
    },
    button: {
        position: "absolute",
        right: "4px",
        top: "26px"
    }
});

const ulStyles = StyleSheet.create({
    default: {
        fontSize: "14px",
        color: "blue"
    },
    urgent: {
        fontSize: "14px",
        color: "red",
        fontWeight: "600"
    },
    ultraUrgent: {
        fonSize: "16px",
        color: "rgb(161, 5, 5)",
        fontWeight: "500",
    }
})

class Notifications extends React.Component {
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

  
    render() {
        return (<div className={css(styles.containerx)}>
            <div className={css(styles.menuItem)}>
                Your notifications
            </div>

            {(this.props.displayDrawer && this.props.listNotifications.length === 0 && "no new Notifications") || (this.props.displayDrawer && <div className="Notifications" style={{ "paddingBottom": "18px" }}>

                <div style={{ "padding": "18px", "display": "flex", "justifyContent": "space-between" }}>
                    {this.props.displayDrawer && <p style={{ "fontSize": "12px" }}>
                        Here is the lists of notifications
                    </p>}
                    <button
                      className={css(styles.button)}
                        type="submit"
                        aria-label="Close"
                        onClick={() => console.log("Close button has been clicked")}
                    >
                        <img src={closeIcon} alt="" width="24" height="10" />
                    </button>
                </div>

                <div style={{ "padding": "0 18px" }} className="list">

                    {this.props.displayDrawer && <ul style={{ "padding": "0 18px" }} className="listNotificationItems">
                        {this.props.listNotifications.map(item => {
                const className = item.type === "urgent" ? css(ulStyles.urgent) : item.type === "ultraUrgent" ? css(ulStyles.ultraUrgent) : css(ulStyles.default);
                            return (
                                <NotificationItem
                                    markAsRead={this.markAsRead}
                                    key={item.id}
                                    id={item.id}
                                    type={item.type}
                                    value={item.value}
                                    html={item.html || ''}
                                    className = {className}
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
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export { Notifications };