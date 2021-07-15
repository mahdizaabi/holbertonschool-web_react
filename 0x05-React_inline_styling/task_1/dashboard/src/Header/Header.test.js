import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {

    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);

    });
 
    
   
    it('Header have h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<h1>School dashboard</h1>)).toBeFalsy();
    });
});