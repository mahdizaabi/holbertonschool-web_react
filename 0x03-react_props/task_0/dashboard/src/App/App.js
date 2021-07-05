import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LoginComponent } from '../Login/Login';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <LoginComponent></LoginComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
