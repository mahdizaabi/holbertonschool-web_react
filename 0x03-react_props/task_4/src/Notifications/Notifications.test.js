import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications } from './Notifications';

describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    test.skip('<Notification /> renders threeNotificationItem Components', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.setProps({ "displayDrawer": true })

        console.log(wrapper.html())
        expect(wrapper.containsAllMatchingElements(
            <NotificationItem />,
        )).toBeTruthy()
    })

    it('<Notification /> render 3 NotificationItem components', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })

        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(3);
    })

    it('first <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />);
        wrapper.setProps({ "displayDrawer": true })

        wrapper.setProps({ "displayDrawer": true });
        expect(wrapper.find(".listNotificationItems").children().first().html()).toBe("<li type=\"dafault\">New course available</li>")
    })

    it('last <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
        expect(wrapper.find(".listNotificationItems")
            .children().last().html())
            .toBe("<li type=\"ultraUrgent\"><strong>Urgent requirement</strong> - complete by EOD</li>")
    })

    describe("notfication displayed when dispalydrawer is false", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": false })
        expect(wrapper.find('.listNotificationItems').exists()).toBeFalsy()
    })
    describe("notfication not displayed when dispalydrawer is true", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.setProps({ "displayDrawer": true })
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