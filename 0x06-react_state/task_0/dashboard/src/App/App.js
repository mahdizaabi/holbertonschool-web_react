import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from 'aphrodite';

const marginLeftStyle = {
	marginLeft: '2rem'
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = { displayDrawer: false };
  }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  handleDisplayDrawer() { this.setState({ displayDrawer: true }); }

  handleHideDrawer() { this.setState({ displayDrawer: false }); }

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const htmlObj = {
      __html: getLatestNotification(),
    };
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: htmlObj },
    ];

    const { displayDrawer } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <div className={css(styles.bodyStyle)}>
        <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
        <div className="App">
          <Header />
          <hr className={css(styles.hrStyle)}/>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p style={marginLeftStyle}>Graduation date is September 17th!</p>
          </BodySection>
          <hr className={css(styles.hrStyle)}/>
          <Footer className={css(styles.footerStyle)}/>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    fontFamily: 'Arial, Helvetica, sans-serif'
  },

  hrStyle: {
    margin: '0',
    height: '.2rem',
    backgroundColor: '#E0344B'
  },

  footerStyle: {
    maxHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic'
  },
})
