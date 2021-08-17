/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<NotificationItem />', () => {
  it('renders a <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <NotificationItem /> component with type and value props', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.props()['data-notification-type']).toEqual('default');
		expect(wrapper.text()).toEqual('test');
		expect(wrapper.html()).toContain('data-notification-type="default"');
		expect(wrapper.html()).toContain('test</li>');
	});

	it('renders a <NotificationItem /> component with type and value props', () => {
		const wrapper = shallow(<NotificationItem  html={{ __html: '<u>test</u>' }}/>);
		expect(wrapper.html()).toContain('<u>test</u>');
	});
});
