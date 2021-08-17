import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import uiReducer from "./uiReducer";

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

describe("uiReducer", () => {
  it("should return initial state when no action is passed to uiReducer", () => {
    const newState = uiReducer(initialState, "");
    expect(newState).toEqual(initialState);
  });

  it("should return initial state when SELECT_COURSE is passed to uiReducer", () => {
    const newState = uiReducer(initialState, SELECT_COURSE);
    expect(newState).toEqual(initialState);
  });

  it("should update isNotificationDrawerVisible property in state to true when DISPLAY_NOTIFICATION_DRAWER is passed to uiReducer", () => {
    const newState = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);
    expect(newState.isNotificationDrawerVisible).toEqual(true);
  });
});
