import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LoginComponent } from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils';
import { CourseList } from '../CourseList/CourseList';


function App({ isLoggedIn }) {
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
  return (
    <div className="container">
      <Notifications
        displayDrawer={isLoggedIn}
        listNotifications={NotficationsList}
      ></Notifications>
      <Header></Header>
      {isLoggedIn && <CourseList listCourses={listCourses}> </CourseList>}
      {!isLoggedIn && <LoginComponent></LoginComponent>}
      <Footer></Footer>
    </div>
  );
}
App.defaultProps = {
  isLoggedIn: true
}
export default App;
