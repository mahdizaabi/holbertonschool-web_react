import React from 'react';
import { shallow } from 'enzyme';
import {Footer} from './Footer';



describe('<Footer />', () => {

    it('Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.last().text()).toBe("Copyright 2021 - Holberton School");
    });
});