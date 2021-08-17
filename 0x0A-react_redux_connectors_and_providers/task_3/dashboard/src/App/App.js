import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer, { ConnectedFooter } from "../Footer/Footer";
import Header, { ConnectedHeader } from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "../actions/uiActionCreators";
import PropTypes from "prop-types";

const marginLeftStyle = {
  marginLeft: "2rem",
};

const htmlObj = {
  __html: getLatestNotification(),
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: htmlObj },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  markNotificationAsRead(id) {
    const newNotifications = this.state.listNotifications.filter(
      (notification) => notification.id !== id
    );
    this.setState({ listNotifications: newNotifications });
  }

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <div className={css(styles.bodyStyle)}>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.displayNotificationDrawer}
          handleHideDrawer={this.props.hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <ConnectedHeader />
          <hr className={css(styles.hrStyle)} />
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.props.login} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p style={marginLeftStyle}>Graduation date is September 17th!</p>
          </BodySection>
          <hr className={css(styles.hrStyle)} />
          <ConnectedFooter className={css(styles.footerStyle)} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  hrStyle: {
    margin: "0",
    height: ".2rem",
    backgroundColor: "#E0344B",
  },

  footerStyle: {
    maxHeight: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontStyle: "italic",
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.toJS().isUserLoggedIn,
  displayDrawer: state.toJS().isNotificationDrawerVisible,
});

const mapDispatchToProps = (dispatch) => ({
  displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
  hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  login: (email, password) => dispatch(loginRequest(email, password)),
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { mapStateToProps, mapDispatchToProps, ConnectedApp };
