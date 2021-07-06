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
      wrapper.setProps({listCourses: [{ id: 1, type: "defualt", value: "new course available", html:'' },
      { id: 2, type: "urgent", value: "new resumee avaialble" ,  html:'' },
      { id: 3, type: "ultraUrgent", html: {__html: "testHtml"} }]})
      expect(wrapper.find('#CourseList').children()).toHaveLength(2);
    });
    it('<CourseList /> tbody have 3 rows:', () => {
      const wrapper = shallow(<CourseList />);
      wrapper.setProps({listCourses: [{ id: 1, type: "defualt", value: "new course available", html:'' },
      { id: 2, type: "urgent", value: "new resumee avaialble" ,  html:'' },
      { id: 3, type: "ultraUrgent", html: {__html: "testHtml"} }]})
      expect(wrapper.find('#CourseList tbody').children()).toHaveLength(3);
    });
  });
});