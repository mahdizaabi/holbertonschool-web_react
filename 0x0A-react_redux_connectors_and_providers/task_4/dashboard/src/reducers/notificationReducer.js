import { Map } from "immutable";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map();

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const fullNotificationsObjs = action.data.map((notification) => ({
        id: notification.id,
        isRead: false,
        type: notification.type,
        value: notification.value,
      }));
      const allNotifications = {
        filter: NotificationTypeFilters.DEFAULT,
        notifications: notificationsNormalizer(fullNotificationsObjs),
      };
      return state.merge(allNotifications);
    }
    case MARK_AS_READ: {
      return state.setIn(
        [
          "notifications",
          "entities",
          "notifications",
          action.index.toString(),
          "isRead",
        ],
        true
      );
    }
    case SET_TYPE_FILTER: {
      return state.set("filter", action.filter);
    }
    default:
      return state;
  }
}

export const fetchNotificationsSuccessAction = {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available",
    },
  ],
};
