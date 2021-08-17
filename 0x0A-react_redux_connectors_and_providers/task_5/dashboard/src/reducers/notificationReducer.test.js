import { Map } from "immutable";
import {
  setLoadingState,
  setNotifications,
} from "../actions/notificationActionCreators";
import { notificationsNormalizer } from "../schema/notifications";
import notificationReducer from "./notificationReducer";
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

const normalizedNotifications = notificationsNormalizer(notifications);

describe("notificationReducer", () => {
  it("should return the initial state for the default case", () => {
    const newState = notificationReducer(initialState, "");
    expect(newState).toEqual(initialState);
  });

  it("should return correct notifications attribute in new state from setNotifications action", () => {
    const newState = notificationReducer(
      initialState,
      setNotifications(notifications)
    );
    expect(newState.toJS().notifications.entities.notifications).toEqual(
      normalizedNotifications.entities.notifications
    );
  });

  it("should return correct users attribute in new state from setNotifications action", () => {
    const newState = notificationReducer(
      initialState,
      setNotifications(notifications)
    );
    expect(newState.toJS().notifications.entities.users).toEqual(
      normalizedNotifications.entities.users
    );
  });

  it("should return correct messages attribute in new state from setNotifications action", () => {
    const newState = notificationReducer(
      initialState,
      setNotifications(notifications)
    );
    expect(newState.toJS().notifications.entities.messages).toEqual(
      normalizedNotifications.entities.messages
    );
  });

  it("should return new state with loading === true from setLoadingState action", () => {
    const newState = notificationReducer(initialState, setLoadingState(true));
    expect(newState.toJS().loading).toEqual(true);
  });
});
