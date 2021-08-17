import notificationReducer, {
  fetchNotificationsSuccessAction,
} from "../reducers/notificationReducer";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";
import { markAsAread } from "../actions/notificationActionCreators";

const initialState = notificationReducer(
  Map(),
  fetchNotificationsSuccessAction
);
const notifications = [
  {
    id: 1,
    isRead: false,
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    isRead: false,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    isRead: false,
    type: "urgent",
    value: "New data available",
  },
];
const normalizedNotifications = notificationsNormalizer(notifications);
const markAsReadAction = markAsAread(2);
const readNotificationState = notificationReducer(
  initialState,
  markAsReadAction
);
const unreadNotifications = [
  {
    id: 1,
    isRead: false,
    type: "default",
    value: "New course available",
  },
  {
    id: 3,
    isRead: false,
    type: "urgent",
    value: "New data available",
  },
];
const normalizedUnreadNotifications =
  notificationsNormalizer(unreadNotifications);

describe("notificationSelector", () => {
  it("should return the filter type from state", () => {
    const result = filterTypeSelected(initialState);
    expect(result).toEqual("DEFAULT");
  });

  it("should return a list of the message entities within the reducer", () => {
    const result = getNotifications(initialState);
    expect(result.toJS()).toEqual(
      normalizedNotifications.entities.notifications
    );
  });

  it("should return a list of the message entities within the reducer where isRead === false", () => {
    const result = getUnreadNotifications(readNotificationState);
    expect(result.toJS()).toEqual(
      normalizedUnreadNotifications.entities.notifications
    );
  });
});
