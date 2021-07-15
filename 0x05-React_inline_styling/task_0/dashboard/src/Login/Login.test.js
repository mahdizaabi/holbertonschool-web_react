import React from 'react';
import { shallow } from 'enzyme';
import {LoginComponent} from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
describe('<LoginComponent />', () => {

    it('LoginComponent renders without crashing', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper).toHaveLength(1);
    });
   
});