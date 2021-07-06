import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications } from './Notifications';

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
        wrapper.setProps({ "displayDrawer": true, "listNotifications":[{id:1, type:"default", value:"test", html:"" }]});
        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(1);
    })

    it('first <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.setProps({ "displayDrawer": true, "listNotifications":[{id:1, type:"default", value:"test", html:"" }]});
        expect(wrapper.find(".listNotificationItems").children().first().html()).toBe("<li>test</li>")
    })

    it('last <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true,  "listNotifications":[{id:1,html:{__html: "test"}}] })
        expect(wrapper.find(".listNotificationItems")
            .children().last().html())
            .toBe("<li>test</li>")
    })

    describe("div.Notifications displayed when dispalydrawer is false", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": false })
        expect(wrapper.find('.listNotificationItems').exists()).toBeFalsy()
    })
    describe("div.Notifications not displayed when dispalydrawer is true", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true, "listNotifications":[{id:1}] })
        expect(wrapper.find('.listNotificationItems').exists()).toBeTruthy()
    })
    describe("Menu item is displayed when displayDrawer is true and displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.find('.menuItem').exists()).toBeTruthy()
        wrapper.setProps({ "displayDrawer": false })
        expect(wrapper.find('.menuItem').exists()).toBeTruthy()

    })


});