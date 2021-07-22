import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('renders a <Header /> component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <Header /> component and checks contents', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header h1')).toHaveLength(1);
    expect(wrapper.find('header img')).toHaveLength(1);
	});
});
