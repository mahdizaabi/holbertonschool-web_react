import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications} from './Notifications'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();
describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    /* Props testing  */

    it('Unit test of the method markAsRead', ()=>{
        const wrapper = shallow(<Notifications />);
        const instance = wrapper.instance();
        const markAsReadSpy =jest.fn();

        const id = 14;
        const wrapperx = shallow(<NotificationItem
            type="urgent"
            value = "test"
            markAsRead = {markAsReadSpy}
            id = {id} />);
        wrapperx.simulate("click")
        expect(markAsReadSpy).toHaveBeenCalledWith(14);
        jest.restoreAllMocks();

      })

  
});