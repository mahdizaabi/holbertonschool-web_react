import React from 'react';
import { shallow } from 'enzyme';
import {Notifications} from './Notifications'

describe('<Notifications />', () => {
  it('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});
  it('have a .Notifications class', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    console.log(wrapper.text())
    expect(wrapper.find('li')).toHaveLength(3);
  });


  it('Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text().includes('Here is the list of notifications')).toBeTruthy();
  });
});
