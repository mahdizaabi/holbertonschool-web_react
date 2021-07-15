import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LoginComponent } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils';
import { CourseList } from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import withLogging from '../HOC/WithLogging';
import { css, StyleSheet } from "aphrodite";

/***Styles: ***/

const styles = StyleSheet.create({
    
    container: {
        padding: "8px",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    }
});
const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
]

const NotficationsList = [
    { id: 1, type: "defualt", value: "new course available" },
    { id: 2, type: "urgent", value: "new resumee avaialble" },
    { id: 3, type: "ultraUrgent", html: getLatestNotification() }

]
const FooterWithLogging = withLogging(Footer);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handelKeyPress = this.handelKeyPress.bind(this);
    }

    handelKeyPress(e) {
        if (e.key === "h" && e.ctrlKey) {
            alert("Logging you out");
            this.props.logOut();

        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handelKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', (e) => this.handelKeyPress(e));
    }

    render() {
        return (
            <div className={css(styles.container)}>
                { /****Notifications***/}
                <Notifications
                    displayDrawer={this.props.isLoggedIn}
                    listNotifications={NotficationsList}
                ></Notifications>
                { /****Header** */}
                <Header></Header>
                { /****Body** */}
                {this.props.isLoggedIn && (<BodySectionWithMarginBottom title="Course list">
                    <CourseList listCourses={listCourses}></CourseList>
                </BodySectionWithMarginBottom>)}
                { /****News** */}
                {this.props.isLoggedIn && <BodySection title="News from the School">
                    <p>Hear the latest news of our School!</p>
                </BodySection>}

                { /****Login Component** */}
                {!this.props.isLoggedIn && (
                    <BodySectionWithMarginBottom title="Log in to continue">
                        <LoginComponent></LoginComponent>
                    </BodySectionWithMarginBottom>)}

                { /****<Footer></Footer>***/}
                <Footer />

            </div>
        );
    }
}
App.prototypes = {
    logOut: PropTypes.func
}


App.defaultProps = {
    isLoggedIn: true,
    logOut: function () { }
}
export default App;
