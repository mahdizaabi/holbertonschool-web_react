import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';

describe('<CourseList />:w', () => {
  it('<CourseList /> renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });
  describe('<CourseList /> have 5 rows:', () => {
    it('<CourseList /> Header have 2 rows', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find('#CourseList').children()).toHaveLength(2);
    });
    it('<CourseList /> tbody have 3 rows:', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find('#CourseList tbody').children()).toHaveLength(3);
    });
  });
});