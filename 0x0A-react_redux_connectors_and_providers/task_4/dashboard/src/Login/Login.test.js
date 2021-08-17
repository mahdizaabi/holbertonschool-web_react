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

	it('verifies that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(true);
	});

	it('verifies that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find({ name: 'email' }).simulate('change', { target: { name: 'email', value: 'thedudeabides@lebowski.com' } });
    wrapper.find({ name: 'password' }).simulate('change', { target: { name: 'password', value: 'markazeronextframedude' } });
    expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(false);
	});
});
