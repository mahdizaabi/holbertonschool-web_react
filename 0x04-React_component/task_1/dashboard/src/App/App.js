import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LoginComponent } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils';
import { CourseList } from '../CourseList/CourseList';
const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  const NotficationsList = [
    { id: 1, type: "defualt", value: "new course available", html:'' },
    { id: 2, type: "urgent", value: "new resumee avaialble" ,  html:'' },
    { id: 3, type: "ultraUrgent", html: getLatestNotification() }

  ]
class App extends React.Component {

    handelKeyPress(e){
        if(e.key === "h" && e.ctrlKey){
            alert("Logging you out");
            this.props.logOut();

        }
    }
    componentDidMount() {
    document.addEventListener('keydown', this.handelKeyPress)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', (e)=>this.handelKeyPress(e));
    }
    render() {
      return  (
        <div className="container">
          <Notifications
            displayDrawer={this.props.isLoggedIn}
            listNotifications={NotficationsList}
          ></Notifications>
          <Header></Header>
          {this.props.isLoggedIn && <CourseList listCourses={listCourses}> </CourseList>}
          {!this.props.isLoggedIn && <LoginComponent></LoginComponent>}
          <Footer></Footer>
        </div>
      );
    }
  }
  App.prototypes = {
    logOut:  PropTypes.func
}


App.defaultProps = {
  isLoggedIn: true,
  logOut: function(){}
}
export default App;
