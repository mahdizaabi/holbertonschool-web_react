/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<NotificationItem />', () => {
  it('renders a <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
	});

	

	it('renders a <NotificationItem /> componentfd with type and value props', () => {
		const wrapper = shallow(<NotificationItem  html={{ __html: '<u>test</u>' }}/>);
		expect(wrapper.html()).toContain('<u>test</u>');
	});

	
});
