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
import { user as defaultUser, MyContext } from "./AppContext";

const marginLeftStyle = {
    marginLeft: '2rem'
}
const htmlObj = {
    __html: getLatestNotification(),
};

const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: htmlObj },
];
export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this)
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this)

        this.state = {
            displayDrawer: false,
            user: defaultUser,
            logOut: () => {
                this.setState({ user: defaultUser })
            },
            listNotifications
        };
    }



    logIn(email, password) {
        this.setState({ user: { email: email, password: password, isLoggedIn: true } });

    }
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeydown);
    }

    handleKeydown(event) {
        if (event.ctrlKey && event.key === "h") {
            alert("Logging you out");
            this.state.logOut();
        }
    };

    handleDisplayDrawer() { this.setState({ displayDrawer: true }); }

    handleHideDrawer() { this.setState({ displayDrawer: false }); }

    markNotificationAsRead(id) {

        this.setState({
            listNotifications: this.state.listNotifications.filter(item => item.id !== id)
        })
    }
    render() {
        const listCourses = [
            { id: 1, name: "ES6", credit: 60 },
            { id: 2, name: "Webpack", credit: 20 },
            { id: 3, name: "React", credit: 40 },
        ];


        const { displayDrawer } = this.state;
        return (
            <MyContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
                <div className={css(styles.bodyStyle)}>
                    <Notifications
                        listNotifications={this.state.listNotifications}
                        displayDrawer={displayDrawer}
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}
                        markNotificationAsRead={this.markNotificationAsRead}
                    />
                    <div className="App">
                        <Header />
                        <hr className={css(styles.hrStyle)} />
                        {this.state.user.isLoggedIn ? (
                            <BodySectionWithMarginBottom title="Course list">
                                <CourseList listCourses={listCourses} />
                            </BodySectionWithMarginBottom>
                        ) : (
                            <BodySectionWithMarginBottom title="Log in to continue">
                                <Login logIn={this.logIn} />
                            </BodySectionWithMarginBottom>
                        )}
                        <BodySection title="News from the School">
                            <p style={marginLeftStyle}>Graduation date is September 17th!</p>
                        </BodySection>
                        <hr className={css(styles.hrStyle)} />
                        <Footer className={css(styles.footerStyle)} />
                    </div>
                </div>
            </MyContext.Provider>

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
