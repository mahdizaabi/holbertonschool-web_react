import React from 'react';
import { shallow } from 'enzyme';
import {LoginComponent} from './Login';

describe('<LoginComponent />', () => {

    it('LoginComponent renders without crashing', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper).toHaveLength(1);
    });
    it('Login component have 2 inputs', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper.find('.App-body input')).toHaveLength(2);
    });

    it('Login component have 2 Label', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper.find('.App-body label')).toHaveLength(2);
    });

});