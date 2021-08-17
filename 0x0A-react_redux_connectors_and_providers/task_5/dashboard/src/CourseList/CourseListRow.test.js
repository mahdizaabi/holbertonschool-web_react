import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
  it('renders a <CourseListRow /> component', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="First cell text"/>);
    expect(wrapper).toHaveLength(1);
	});

	it('renders a <CourseListRow /> component with isHeader set to true and textSecondCell === null', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell text" />);
		expect(wrapper.find('th')).toHaveLength(1);
		expect(wrapper.find('th').get(0).props.colSpan).toEqual(2);
		expect(wrapper.find('th').get(0).props.children).toEqual('First cell text');
	});

	it('renders a <CourseListRow /> component with isHeader set to true and textSecondCell !== null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell text" textSecondCell="Second cell text"/>);
		expect(wrapper.find('th')).toHaveLength(2);
		expect(wrapper.find('th').get(0).props.children).toEqual('First cell text');
		expect(wrapper.find('th').get(1).props.children).toEqual('Second cell text');
	});

	it('renders a <CourseListRow /> component with isHeader set to false by default', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="First cell text"/>);
		expect(wrapper.find('tr td')).toHaveLength(2);
	});
});
