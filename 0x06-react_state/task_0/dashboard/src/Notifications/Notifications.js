import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer != this.props.displayDrawer
    )
      return true;
    return false;
  }

  markAsRead(id) { console.log(`Notification ${id} has been marked as read`); }

  shouldMenuBeHidden() { return this.props.displayDrawer ? true : false; }

  render() {
    const menuItemClassName = css(
      styles.menuItemStyle,
      this.shouldMenuBeHidden() && styles.displayNone
    )
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={`menuItem ${menuItemClassName}`} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notificationPanelStyle)}>
            <div className="Notifications">
              {listNotifications.length > 0 ? (
                <>
                  <p style={{ display: "inline" }}>
                    Here is the list of notifications
                  </p>
                  <button
                    style={{ float: "right" }}
                    aria-label="Close"
                    onClick={handleHideDrawer}
                  >
                    <img src={icon} alt="" style={{ height: "3vh" }} />
                  </button>
                  <ul className={css(styles.listStyle)}>
                    {this.props.listNotifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={() => {
                          this.markAsRead(notification.id);
                        }}
                      />
                    ))}
                  </ul>
                </>
              ) : (
                <p>No new notification for now</p>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "100%": {
    transform: "translateY(5px)",
  },
};

const styles = StyleSheet.create({
  notificationPanelStyle: {
    border: "1px red dashed",
    padding: "1rem",
    width: "35%",
    float: "right",
    "@media (max-width: 900px)": {
      border: "none",
      height: "100vh",
      width: "100vw",
      float: "none",
      padding: 0,
      fontSize: 20,
    },
  },

  menuItemStyle: {
    display: "flex",
    justifyContent: "flex-end",
    float: "right",
    backgroundColor: "#fff8f8",
    "@media (max-width: 900px)": {
      display: "none",
    },
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 500ms',
      animationIterationCount: '3',
    },
  },

  listStyle: {
    listStyle: "none",
    padding: 0,
  },

  displayNone: {
    display: 'none',
  },
});
