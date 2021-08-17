/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App, { mapStateToProps } from "./App";
import { ConnectedNotifications } from "../Notifications/Notifications";
import { ConnectedHeader } from "../Header/Header";
import Login from "../Login/Login";
import { ConnectedFooter } from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";
import { fromJS } from "immutable";

StyleSheetTestUtils.suppressStyleInjection();

describe("<App />", () => {
  it("renders an <App /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("checks for a <Notifications /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ConnectedNotifications)).toHaveLength(1);
  });

  it("checks for a <Header /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ConnectedHeader)).toHaveLength(1);
  });

  it("checks for a <Login /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("checks for a <Footer /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ConnectedFooter)).toHaveLength(1);
  });

  it("checks that <CourseList /> component is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it("checks component behavior when isLoggedIn === true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});

describe("Redux tests", () => {
  it("verifies mapStateToProps returns the right object for isUserLoggedIn and isNotificationDrawerVisible", () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      }),
    };
    const result = mapStateToProps(state);
    expect(result.isLoggedIn).toEqual(true);
    expect(result.displayDrawer).toEqual(true);
  });
});
