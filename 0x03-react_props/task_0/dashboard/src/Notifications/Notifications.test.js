import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';
import { Notifications } from './Notifications';

describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    it('<Notification /> renders threeNotificationItem Components', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.containsAllMatchingElements([
            <NotificationItem />,
            <NotificationItem />,
            <NotificationItem />
        ])).toBeTruthy()
    })

    it('<Notification /> render 3 NotificationItem components', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find('.listNotificationItems').children()).toHaveLength(3);
    })

    it('first <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find(".listNotificationItems").children().first().html()).toBe("<li type=\"dafault\">New course available</li>")
    })

    it('last <NotificationItem /> node render the right html', () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.find(".listNotificationItems")
        .children().last().html())
        .toBe("<li type=\"ultraUrgent\"><strong>Urgent requirement</strong> - complete by EOD</li>")
    })

});