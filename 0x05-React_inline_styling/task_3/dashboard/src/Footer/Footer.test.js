import React from 'react';
import { shallow } from 'enzyme';
import {Footer} from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('<Footer />', () => {

    it('Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.last().text()).toBe("Copyright 2021 - Holberton School");
    });
});