import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
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
    const newState = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    expect(newState.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});
