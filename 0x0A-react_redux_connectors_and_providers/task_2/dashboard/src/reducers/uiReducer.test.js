import { SELECT_COURSE } from "../actions/courseActionTypes";
import { displayNotificationDrawer, login } from "../actions/uiActionCreators";
import uiReducer from "./uiReducer";
import { Map } from "immutable";

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

describe("uiReducer", () => {
  it("should return initial state when no action is passed to uiReducer", () => {
    const newState = uiReducer(initialState, "");
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should return initial state when SELECT_COURSE is passed to uiReducer", () => {
    const newState = uiReducer(initialState, SELECT_COURSE);
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it("should update isNotificationDrawerVisible property in state to true when DISPLAY_NOTIFICATION_DRAWER is passed to uiReducer", () => {
    const newState = uiReducer(initialState, displayNotificationDrawer());
    expect(newState.toJS().isNotificationDrawerVisible).toEqual(true);
  });

  it("should update user property in state to user object when LOGIN is passed to uiReducer", () => {
    const user = {
      email: "thedude@lebowski.com",
      password: "dudeabides",
    };
    const newState = uiReducer(initialState, login(user.email, user.password));
    expect(newState.toJS().user).toEqual(user);
  });
});
