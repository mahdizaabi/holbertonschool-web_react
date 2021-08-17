import {
  fetchNotificationsSuccess,
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
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

describe("notificationReducer", () => {
  it("should return the initial state for the default case", () => {
    const newState = notificationReducer(undefined, "");
    expect(newState).toEqual({
      filter: "DEFAULT",
      notifications: [],
    });
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
      undefined,
      fetchNotificationsSuccessAction
    );
    expect(newState).toEqual(defaultState);
    const secondNewState = notificationReducer(
      undefined,
      fetchNotificationsSuccessActionFromCreator
    );
    expect(secondNewState).toEqual(defaultState);
  });

  it("should return the data with the right course property isRead === true for MARK_AS_READ", () => {
    const markAsReadAction = markAsAread(2);
    const newState = notificationReducer(defaultState, markAsReadAction);
    expect(newState).toEqual(readNotificationState);
  });

  it("should return the data with the right course property filter === 'URGENT' type for SET_TYPE_FILTER", () => {
    const setNotificationFilterAction = setNotificationFilter("URGENT");
    const newState = notificationReducer(
      defaultState,
      setNotificationFilterAction
    );
    expect(newState).toEqual(urgentFilterState);
  });
});
