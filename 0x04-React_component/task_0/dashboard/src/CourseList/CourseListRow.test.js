import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import { CourseListRow } from './CourseListRow';


describe('<CourseList />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseListRow />);
    });
    
    it('Render a row with two cells win isHeader is False', () => {
        wrapper.setProps({
            textFirstCell: 'testFirstCell',
            textSecondCell: 'testSecondCell'
        });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.html()).toBe("<tr class=\"row\"> <td>testFirstCell </td><td>testSecondCell</td> </tr>")
    });
    it('Renders two cells when Isheader true, andtextSecond is present', () => {
        wrapper.setProps({ isHeader: true, textFirstCell: "firstCell", textSecondCell: "secondCell" });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.html()).toBe("<tr class=\"row\"><th>firstCell </th><th>secondCell</th></tr>")
    });


    it('RenderOnly one cell when isHeader true', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.html()).toBe("<tr class=\"row\"><th colSpan=\"2\"></th></tr>")
    });

    it('RenderOnly one cell when isHeader true with colSpan = 2', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.children()).toHaveLength(1);
        expect(wrapper.html().includes("colSpan=\"2\"")).toBeTruthy()
    });
    
   
});

