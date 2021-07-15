import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import { CourseListRow } from './CourseListRow';

import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
describe('<CourseList />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseListRow />);
    });
    



    it('RenderOnly one cell when isHeader true', () => {
        wrapper.setProps({ isHeader: true });
        expect(wrapper).toHaveLength(1);
    });
  
   
});

