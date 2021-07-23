import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
    it('renders a <Login /> component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders a <Login /> component and checks contents', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-login input')).toHaveLength(3);
        expect(wrapper.find('div.App-login label')).toHaveLength(2);
    });

  
    it('submit button is desabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitInput = wrapper.find('input[type="submit"]')
       
        expect(submitInput.prop('disabled')).toBeTruthy();
    });

    it('submit button is enabled after the two inputs not empty', () => {
        const wrapper = shallow(<Login />);
        const submitInput = wrapper.find({ type: 'submit' })
        wrapper.find("input").at(0).simulate("change",{target: { name: 'email', value: 'thedudeabides@lebowski.com' } });
        wrapper.find("input").at(1).simulate("change",{target: { name: 'password', value: 'thedudeabides@lebowski.com' } });
        expect(wrapper.find({ type: 'submit' }).prop("disabled")).toBe(false);
    });

});
