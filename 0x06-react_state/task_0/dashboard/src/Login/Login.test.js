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
    expect(wrapper.find('div.App-login input')).toHaveLength(2);
    expect(wrapper.find('div.App-login label')).toHaveLength(2);
	});
});
