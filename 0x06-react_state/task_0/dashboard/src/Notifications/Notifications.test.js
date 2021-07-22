import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'
import NotificationItem from './NotificationItem';
import { getLatestNotification } from "../utils";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});



  it('renders an <Notifications /> component and verifies text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
	});


  it('ensures .menuItem is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensures div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
	});

  it('ensures .menuItem is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensures div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
	});

  it('verifies that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperTwo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
	});

 

  it('verifies that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).not.toEqual('Here is the list of notifications');
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('verifies console.log output when calling the function markAsRead on an instance of the component', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  it('verifies that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setProps({
      listNotifications: []
    });
    expect(spy).toHaveReturnedWith(false);
    spy.mockRestore();
  });

  it('verifies that when updating the props of the component with a longer list, the component does rerender', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setProps({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New majors available" },
      ]
    });
    expect(spy).toHaveReturnedWith(true);
    spy.mockRestore();
  });

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={listNotifications} handleDisplayDrawer={mockHandleDisplayDrawer} />);
    const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
    wrapper.find('.menuItem').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockHandleHideDrawer}/>);
    const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
    wrapper.find('.Notifications button').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});
});