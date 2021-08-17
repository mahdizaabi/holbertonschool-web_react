import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const user = {
  email: "dude@lebowski.com",
  password: "thatrugtiedtheroomtogether",
};
jest.mock("node-fetch", () => require("fetch-mock").sandbox());
const fetchMock = require("node-fetch");

describe("uiActions", () => {
  it("should return correct value for login action creator", () => {
    const result = login("thedude@biglebowski.com", "tietheroomtogetherman");
    expect(result).toEqual({
      type: LOGIN,
      user: {
        email: "thedude@biglebowski.com",
        password: "tietheroomtogetherman",
      },
    });
  });

  it("should return correct value for logout action creator", () => {
    const result = logout();
    expect(result).toEqual({ type: LOGOUT });
  });

  it("should return correct value for displayNotificationDrawer action creator", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it("should return correct value for hideNotificationDrawer action creator", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe("loginRequest", () => {
  it("should verify store received LOGIN and LOGIN_SUCCESS actions", () => {
    fetchMock.get("/login-success.json", 200);
    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginSuccess());
    });
  });

  it("should verify store received LOGIN and LOGIN_FAILURE actions", () => {
    fetchMock.get(
      "/login-success.json",
      { throws: new Error("fetch failed") },
      {
        overwriteRoutes: true,
      }
    );
    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[2]).toEqual(login(user.email, user.password));
      expect(actions[3]).toEqual(loginFailure());
    });
  });
});
