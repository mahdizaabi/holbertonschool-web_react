import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
describe('<CourseList />', () => {
  it('<CourseList /> renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
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
