import notificationReducer from "../reducers/notificationReducer";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";
import {
  markAsAread,
  setNotifications,
} from "../actions/notificationActionCreators";
import notifications from "../../../../notifications.json";

const initialState = Map({
  loading: false,
  filter: "DEFAULT",
  notifications: {
    entities: {
      notifications: {},
      messages: {},
      users: {},
    },
  },
});
const defaultState = notificationReducer(
  initialState,
  setNotifications(notifications)
);
const normalizedNotifications = notificationsNormalizer(notifications);

const unreadNotifications = {
  "0f446b01-37c3-4884-9dc6-316f23b7711b": {
    guid: "0f446b01-37c3-4884-9dc6-316f23b7711b",
    isRead: false,
    type: "urgent",
    value:
      "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel",
  },
  "efb6c485-00f7-4fdf-97cc-5e12d14d6c41": {
    guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
    isRead: false,
    type: "default",
    value: "Cursus risus at ultrices mi.",
  },
  "de55f849-8fca-4ac7-afbb-41751f09d0c6": {
    guid: "de55f849-8fca-4ac7-afbb-41751f09d0c6",
    isRead: false,
    type: "default",
    value: "Cursus metus aliquam eleifend mi in nulla posuere. ",
  },
  "cec84b7a-7be4-4af0-b833-f1485433f66e": {
    guid: "cec84b7a-7be4-4af0-b833-f1485433f66e",
    isRead: false,
    type: "urgent",
    value:
      "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. ",
  },
  "98fe7af4-8300-461f-a376-c147b2987616": {
    guid: "98fe7af4-8300-461f-a376-c147b2987616",
    isRead: false,
    type: "default",
    value:
      "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac",
  },
  "4cc5bc3a-98fe-4392-b97d-6a41da1d944b": {
    guid: "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
    isRead: false,
    type: "default",
    value:
      "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue",
  },
  "f8d66cca-63ec-4f19-a422-a3e1c8f05a36": {
    guid: "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
    isRead: false,
    type: "urgent",
    value:
      "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor",
  },
  "280913fe-38dd-4abd-8ab6-acdb4105f922": {
    guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
    isRead: false,
    type: "urgent",
    value:
      "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
  },
  "8094c267-ab84-47e1-8801-58ddd23f3b2a": {
    guid: "8094c267-ab84-47e1-8801-58ddd23f3b2a",
    isRead: false,
    type: "default",
    value: "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit",
  },
  "cd1a09cf-ad6e-4478-9662-18a292807e2e": {
    guid: "cd1a09cf-ad6e-4478-9662-18a292807e2e",
    isRead: false,
    type: "urgent",
    value: "Nulla malesuada pellentesque elit eget gravida cum sociis",
  },
};

describe("notificationSelector", () => {
  it("should return the filter type from state", () => {
    const result = filterTypeSelected(defaultState);
    expect(result).toEqual("DEFAULT");
  });

  it("should return a list of the message entities within the reducer", () => {
    const result = getNotifications(defaultState);
    expect(result.toJS()).toEqual(normalizedNotifications.entities.messages);
  });

  it("should return a list of the message entities within the reducer where isRead === false", () => {
    const result = getUnreadNotifications(defaultState);
    console.log(`result.toJS()`, result.toJS());
    expect(result.toJS()).toEqual(unreadNotifications);
  });
});
