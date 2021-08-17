import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_LOADING_STATE,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";
import {
  fetchNotifications,
  markAsAread,
  setLoadingState,
  setNotificationFilter,
  setNotifications,
} from "./notificationActionCreators";
import notifications from "../../../../notifications.json";
import notificationReducer from "../reducers/notificationReducer";
import { Map } from "immutable";

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

describe("notificationActions", () => {
  it("should return correct value for markAsAread action creator", () => {
    const result = markAsAread(1);
    expect(result).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it("should return correct value for setNotificationFilter action creator with DEFAULT filter", () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
  });

  it("should return correct value for setNotificationFilter action creator with URGENT filter", () => {
    const result = setNotificationFilter(NotificationTypeFilters.URGENT);
    expect(result).toEqual({ type: SET_TYPE_FILTER, filter: "URGENT" });
  });

  it("should return correct value for setLoadingState action creator with true", () => {
    const result = setLoadingState(true);
    expect(result).toEqual({ type: SET_LOADING_STATE, payload: true });
  });

  it("should return correct value for setNotifications action creator with array", () => {
    const result = setNotifications(notifications);
    expect(result).toEqual({
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications,
    });
  });
});
