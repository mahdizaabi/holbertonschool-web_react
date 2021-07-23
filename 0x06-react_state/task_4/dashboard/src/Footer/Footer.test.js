import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { MyContext } from '../App/AppContext';

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

    it('Link is not displayed when user logged out', () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.find('footer p')).toHaveLength(1);
    });

    it('Link is  displayed when user is logged in', () => {
        const value = { user: { email: '', password: '', isLoggedIn: true }, logOut: () => { } }
        const wrapper = mount(<MyContext.Provider value={value}><Footer /></MyContext.Provider>);
        expect(wrapper.find('footer a').text()).toContain('Contact Us');
    });
});
