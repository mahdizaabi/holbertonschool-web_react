/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('renders a <Footer /> component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <Footer /> component and checks contents', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer p').text()).toContain('Copyright');
	});

	it('verifies that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer p').length).toBe(1);
	});

  it('verifies that the link is displayed when the user is logged in within the context', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find('footer a').text()).toContain('Contact Us');
	});
});
