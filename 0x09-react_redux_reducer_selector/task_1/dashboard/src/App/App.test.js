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

StyleSheetTestUtils.suppressStyleInjection();

const loggedInUser = { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true };

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

  it("checks component behavior when isLoggedIn === true", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedInUser });
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it("checks behavior of logOut prop", () => {
    const map = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      map[event] = cb;
    });
    window.alert = jest.fn();

    const wrapper = mount(<App />);
    wrapper.setState({ user: loggedInUser });
    map.keydown({ ctrlKey: true, key: "h" });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    window.alert.mockRestore();
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

  it("verifies that the logIn function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn(loggedInUser.email, loggedInUser.password);
    expect(wrapper.state().user.email).toBe('thedude@aim.com');
    expect(wrapper.state().user.password).toBe('thedudeabides');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it("verifies that the logOut function updates the state correctly", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: loggedInUser });
    wrapper.state().logOut();
    expect(wrapper.state().user.email).toBe('');
    expect(wrapper.state().user.password).toBe('');
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('verifies that markNotificationAsRead removes notification from listNotifications in state', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New majors available" },
      ]
    });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state().listNotifications).toEqual([
      { id: 1, type: 'default', value: 'New course available' },
      { id: 3, type: 'urgent', value: 'New majors available' }
    ])
  })
});
