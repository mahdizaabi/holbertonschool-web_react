/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Notification from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from 'aphrodite';
import { MyContext } from "./AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe("<App />", () => {
  it("renders an <App /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("checks for a <Notifications /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notification)).toHaveLength(1);
  });

  it("checks for a <Header /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("checks for a <Login /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("checks for a <Footer /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("checks that <CourseList /> component is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  
  it("verifies default state for displayDrawer === false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("verifies that after calling handleDisplayDrawer, the state === true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("verifies that after calling handleHideDrawer, the state === false", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
  it("checks if logout() is called  when pressing down the key", () => {
    const map = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      map[event] = cb;
    });
    window.alert = jest.fn();
/*  use mound because eventshould be attached when component is MOUNTED!!! */
    const wrapper = mount(<App />);
    wrapper.setState({ user: { email: "email", password: "password", isLoggedIn: true } });
    map.keydown({ ctrlKey: true, key: "h" });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    window.alert.mockRestore();
  });

  it('Check logIn() update the state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn();
    expect(wrapper.state().user.isLoggedIn).toBe(true)
});


it('Check logOut() update the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.state().logOut();
    expect(wrapper.state().user.isLoggedIn).toBeFalsy()
});
});
