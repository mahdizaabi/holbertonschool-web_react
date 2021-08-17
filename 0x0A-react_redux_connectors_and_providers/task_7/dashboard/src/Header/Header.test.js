/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

const loggedInUser = {
  email: "thedude@lebowski.com",
  password: "thedudeabides",
};

describe("<Header />", () => {
  it("renders a <Header /> component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Header /> component and checks contents", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("header h1")).toHaveLength(1);
    expect(wrapper.find("header img")).toHaveLength(1);
  });

  it("renders a <Header /> component with default context and verifies that logoutSection is not created", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  it("renders a <Header /> component with user defined and verifies that logoutSection is created", () => {
    const wrapper = shallow(<Header user={loggedInUser} />);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });
});
