import { fromJS, Map } from "immutable";
import {
  fetchNotificationsSuccess,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { notificationsNormalizer } from "../schema/notifications";
import {
  notificationReducer,
  fetchNotificationsSuccessAction,
} from "./notificationReducer";

const defaultState = {
  filter: "DEFAULT",
  notifications: [
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
  ],
};

const normalizedNotifications = {
  ...defaultState,
  notifications: notificationsNormalizer(defaultState.notifications),
};

const readNotificationState = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available",
    },
  ],
};

const readNormalizedNotifications = {
  ...readNotificationState,
  notifications: notificationsNormalizer(readNotificationState.notifications),
};

const urgentFilterState = {
  filter: "URGENT",
  notifications: [
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
  ],
};

const urgentNormalizedNotifications = {
  ...urgentFilterState,
  notifications: notificationsNormalizer(urgentFilterState.notifications),
};

describe("notificationReducer", () => {
  it("should return the initial state for the default case", () => {
    const newState = notificationReducer(Map(), "");
    expect(newState).toEqual(Map());
  });

  it("should return data from FETCH_NOTIFICATIONS_SUCCESS", () => {
    // Task is unclear if we should use
    // action creator for FETCH_NOTIFICATIONS_SUCCESS
    // So I tested using both
    // const fetchNotificationsSuccessAction in notificationReducer
    // And using the fetchCourseSuccess action creator
    const fetchNotificationsSuccessActionFromCreator =
      fetchNotificationsSuccess();
    const newState = notificationReducer(
      Map(),
      fetchNotificationsSuccessAction
    );
    expect(newState.toJS()).toEqual(normalizedNotifications);
    const secondNewState = notificationReducer(
      Map(),
      fetchNotificationsSuccessActionFromCreator
    );
    expect(secondNewState.toJS()).toEqual(normalizedNotifications);
  });

  it("should return the data with the right course property isRead === true for MARK_AS_READ", () => {
    const markAsReadAction = markAsAread(2);
    const newState = notificationReducer(
      fromJS(normalizedNotifications),
      markAsReadAction
    );
    expect(newState.toJS()).toEqual(readNormalizedNotifications);
  });

  it("should return the data with the right course property filter === 'URGENT' type for SET_TYPE_FILTER", () => {
    const setNotificationFilterAction = setNotificationFilter("URGENT");
    const newState = notificationReducer(
      fromJS(normalizedNotifications),
      setNotificationFilterAction
    );
    expect(newState.toJS()).toEqual(urgentNormalizedNotifications);
  });
});
