import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { MyContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
    it('renders a <Header /> component', () => {
        const value = { user: { email: '', password: '', isLoggedIn: true }, logOut: () => { } }

        const wrapper = mount(<MyContext.Provider value={value}><Header /></MyContext.Provider>);
        expect(wrapper).toHaveLength(1);
    });


    it('renders a <Header /> component and checks contents', () => {
        const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => { } }
        const wrapper = mount(<MyContext.Provider value={value}><Header /></MyContext.Provider>);
        expect(wrapper.find('header h1')).toHaveLength(1);
        expect(wrapper.find('header img')).toHaveLength(1);
    });

    it('Check logoutSection is created', () => {
        const value = { user: { email: 'test@test.fr', password: 'test', isLoggedIn: true, logOut: () => { } }, logOut: () => { } }
        const wrapper = mount(<MyContext.Provider value={value}><Header /></MyContext.Provider>);
        expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });
    it('Check logout() is called', () => {
        
        const value = { user: { email: 'test@test.fr', password: 'test', isLoggedIn: true, logOut: () => { } }, logOut: () => { } }
        const logOutSpy = jest.spyOn(value, 'logOut');
        const wrapper = mount(<MyContext.Provider value={value}><Header /></MyContext.Provider>);
        wrapper.find('#logoutSection a').simulate("click");
        expect(logOutSpy).toBeCalled();
    });

    
});
