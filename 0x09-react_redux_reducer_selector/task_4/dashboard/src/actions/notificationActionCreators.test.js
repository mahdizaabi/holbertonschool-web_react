import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";
import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";

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
});
