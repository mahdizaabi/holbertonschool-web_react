import { Map } from "immutable";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

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

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const allNotifications = {
        notifications: notificationsNormalizer(action.payload),
      };
      return state.mergeDeep(allNotifications);
    }
    case MARK_AS_READ: {
      return state.setIn(
        [
          "notifications",
          "entities",
          "messages",
          action.index.toString(),
          "isRead",
        ],
        true
      );
    }
    case SET_TYPE_FILTER: {
      return state.set("filter", action.filter);
    }
    case SET_LOADING_STATE: {
      return state.set("loading", action.payload);
    }
    default:
      return state;
  }
}
