import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import { CourseListRow } from './CourseListRow';


describe('<CourseList />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseListRow />);
    });
    
    it('Render a row with two cells when isHeader is False', () => {
        wrapper.setProps({
            isHeader: false,
            textFirstCell: 'testFirstCell',
            textSecondCell: 'testSecondCell'
        });
        expect(wrapper.children()).toHaveLength(4);
        expect(wrapper.html()).toBe("<tr class=\"row\" style=\"background-color:#f5f5f5ab\"> <td>testFirstCell</td><td>testSecondCell</td> </tr>")
    });
    it('Renders two cells when Isheader true, and textSecond is present', () => {
        wrapper.setProps({ isHeader: true, textFirstCell: "firstCell", textSecondCell: "secondCell" });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.html()).toBe("<tr class=\"row\" style=\"background-color:#deb5b545\"><th>firstCell</th><th>secondCell</th></tr>")
    });



    it('RenderOnly one cell when isHeader true', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper).toHaveLength(1);
    });
    it('correct style for the cell when isHeader true', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper.html()).toBe("<tr class=\"row\" style=\"background-color:#deb5b545\"><th colSpan=\"2\"></th></tr>")
    });

    it('RenderOnly one cell when isHeader true with colSpan = 2', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.children()).toHaveLength(1);
        expect(wrapper.html().includes("colSpan=\"2\"")).toBeTruthy()
    });
    
   
});

