import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import fetch from "node-fetch";

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return function (dispatch) {
    // the function should dispatch the login action
    // using the action creator previously created
    dispatch(login(email, password));
    return (
      // the function should fetch the API /login-success.json
      fetch("/login-success.json")
        // if it succeeds, dispatch the loginSuccess action
        .then(() => dispatch(loginSuccess()))
        // if the API fails, dispatch the loginFailure action
        .catch(() => dispatch(loginFailure()))
    );
  };
}
