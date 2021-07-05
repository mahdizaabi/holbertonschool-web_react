import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LoginComponent } from '../Login/Login';
import {Notifications} from '../Notifications/Notifications';

function App() {
  return (
    <div className="container">
      <Notifications></Notifications>
      <Header></Header>
      <LoginComponent></LoginComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
