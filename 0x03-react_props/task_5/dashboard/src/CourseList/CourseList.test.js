import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';

describe('<CourseList />', () => {
  it('<CourseList /> renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });
  describe('<CourseList /> have 5 rows:', () => {
    it('<CourseList /> Header have 2 rows when list not empty', () => {
      const wrapper = shallow(<CourseList />);
      wrapper.setProps({
        listCourses: [{ id: 1, type: "defualt", value: "new course available", html: '' },
        { id: 2, type: "urgent", value: "new resumee avaialble", html: '' },
        { id: 3, type: "ultraUrgent", html: { __html: "testHtml" } }]
      })
      expect(wrapper.find('#CourseList').children()).toHaveLength(2);
    });
    it('<CourseList /> tbody have 3 rows when list is not empty:', () => {
      const wrapper = shallow(<CourseList />);
      wrapper.setProps({
        listCourses: [{ id: 1, type: "defualt", value: "new course available", html: '' },
        { id: 2, type: "urgent", value: "new resumee avaialble", html: '' },
        { id: 3, type: "ultraUrgent", html: { __html: "testHtml" } }]
      })
      expect(wrapper.find('#CourseList tbody').children()).toHaveLength(3);
    });

    it("renders correctly when passing an empty course List", () => {

      const wrapper = shallow(<CourseList />);
      wrapper.setProps({"listCourses": []})
      expect(wrapper.html().includes("No course available yet")).toBeTruthy()
    })
    it("renders correctly when not passing props", () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.html().includes("No course available yet")).toBeTruthy()
    })



  });
});