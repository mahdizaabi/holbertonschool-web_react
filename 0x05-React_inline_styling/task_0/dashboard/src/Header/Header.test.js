import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';


describe('<Header />', () => {

    it('Header renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);

    });
    it('Header have two childrens', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div').children()).toHaveLength(2)
    })

    it('Header have img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header img')).toHaveLength(1);
    });
   
    it('Header have h1', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains(<h1>School dashboard</h1>)).toBeTruthy();
    });
});