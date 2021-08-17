import React, { PureComponent } from "react";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { fetchNotifications } from "../actions/notificationActionCreators";

export default class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.array,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  };

  shouldMenuBeHidden() {
    return this.props.displayDrawer ? true : false;
  }

  componentDidMount() {
    fetchNotifications();
  }

  render() {
    const menuItemClassName = css(
      styles.menuItemStyle,
      this.shouldMenuBeHidden() && styles.displayNone
    );
    return (
      <>
        <div
          className={`menuItem ${menuItemClassName}`}
          onClick={this.props.handleDisplayDrawer}
        >
          Your notifications
        </div>
        {this.props.displayDrawer && (
          <div className={css(styles.notificationPanelStyle)}>
            <div className="Notifications">
              {this.props.listNotifications.length > 0 ? (
                <>
                  <p style={{ display: "inline" }}>
                    Here is the list of notifications
                  </p>
                  <button
                    style={{ float: "right" }}
                    aria-label="Close"
                    onClick={this.props.handleHideDrawer}
                  >
                    <img src={icon} alt="" style={{ height: "3vh" }} />
                  </button>
                  <ul className={css(styles.listStyle)}>
                    {this.props.listNotifications.map((notification, index) => (
                      <NotificationItem
                        key={index}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        // markNotificationAsRead={() => {
                        //   this.props.markNotificationAsRead(notification.id);
                        // }}
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
      animationDuration: "1s, 500ms",
      animationIterationCount: "3",
    },
  },

  listStyle: {
    listStyle: "none",
    padding: 0,
  },

  displayNone: {
    display: "none",
  },
});

const mapStateToProps = (state) => {
  const notificationsList = [
    ...Object.values(
      state.notifications.valueSeq().toArray()[2].entities.messages
    ),
  ];
  return {
    listNotifications: notificationsList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: dispatch(fetchNotifications()),
});

const ConnectedNotifications = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export { ConnectedNotifications };
