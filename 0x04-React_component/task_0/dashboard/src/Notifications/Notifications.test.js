import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications } from './Notifications';
import { getLatestNotification } from '../utils';


describe('<Notifications />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });


    it('<Notification /> : notifications are not rendered when notifiactionsList is empty', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(0);
    })


    it('<Notification /> : notifications are rendered when notifiactionsList is not empty', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true, "listNotifications": [{ id: 1, type: "default", value: "test", html: "" }] });
        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(1);
    })

    it('first <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.setProps({ "displayDrawer": true, "listNotifications": [{ id: 1, type: "default", value: "test", html: "" }] });
        expect(wrapper.find(".listNotificationItems").children().first().html()).toBe("<li type=\"default\">test</li>")
    })

    it('last <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true, "listNotifications": [{ id: 1, html: { __html: "test" } }] })
        expect(wrapper.find(".listNotificationItems")
            .children().last().html())
            .toBe("<li>test</li>")
    })

    it("div.Notifications displayed when dispalydrawer is false", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": false })
        expect(wrapper.find('.listNotificationItems').exists()).toBeFalsy()
    })
    it("div.Notifications not displayed when dispalydrawer is true", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true, "listNotifications": [{ id: 1 }] })
        expect(wrapper.find('.listNotificationItems').exists()).toBeTruthy()
    })
    it("Menu item is displayed when displayDrawer is true and displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.find('.menuItem').exists()).toBeTruthy()
        wrapper.setProps({ "displayDrawer": false })
        expect(wrapper.find('.menuItem').exists()).toBeTruthy()
    })

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

    it("component renders correctly 3 notification", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({
            "displayDrawer": true, "listNotifications": [
                { id: 1, type: "defualt", value: "new course available" },
                { id: 2, type: "urgent", value: "new resumee avaialble" },
                { id: 3, type: "ultraUrgent", html: getLatestNotification() }
            ]
        })
        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(3);
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