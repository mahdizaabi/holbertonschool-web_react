import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications } from './Notifications';
import { getLatestNotification } from '../utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Notifications />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });





    it("Notification correctly displayed when notifictionlist is empty", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true, "listNotifications": [] })
        expect(wrapper.text().includes("no new Notifications")).toBeTruthy()
    })
    it("message correctly displayed when no props passed", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.text().includes("no new Notifications")).toBeTruthy()
    });

    it("'Here is the list of notifications' message not desplayes when list is empty", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.text().includes("Here is the list of notifications")).toBeFalsy();
    });

   

    it('Unit test of the method markAsRead', ()=>{
      const consoleSpy = jest.spyOn(console, "log");
      const wrapper = shallow(<Notifications />);
      const instance = wrapper.instance();
      instance.markAsRead(14)
      expect(consoleSpy).toHaveBeenCalledWith("Notification 14 has been marked as read");
      jest.restoreAllMocks();

    })

});