/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

const loggedInUser = {
  email: "thedude@lebowski.com",
  password: "thedudeabides",
};

describe("<Footer />", () => {
  it("renders a <Footer /> component", () => {
    const wrapper = shallow(<Footer user={loggedInUser} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Footer /> component and checks contents", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer p").text()).toContain("Copyright");
  });

  it("verifies that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("footer p").length).toBe(1);
  });

  it("verifies that the link is displayed when the user is logged in within the context", () => {
    const wrapper = shallow(<Footer user={loggedInUser} />);
    expect(wrapper.find("footer a").text()).toContain("Contact Us");
  });
});
