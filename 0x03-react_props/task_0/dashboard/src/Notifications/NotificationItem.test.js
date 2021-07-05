import React from 'react';
import { shallow } from 'enzyme';
import { NotificationItem } from './NotificationItem';


describe('<NotificationItem />', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    /* Props testing  */
    it('Correctly Renderding dummy props just for test purposes', () => {
        const wrapper = shallow(<NotificationItem
            type="default"
            value="test"
        />);
        expect(wrapper.props().children).toBe("test");
        expect(wrapper.text()).toBe("test");
        expect(wrapper.props().type).toBe("default");
    });
    it('Correctly inject Html', () => {
        const wrapper = shallow(<NotificationItem
            html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.html()).toBe("<li><u>test</u></li>");
    });
});