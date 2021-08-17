import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";
import fetch from "node-fetch";

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function setLoadingState(boolean) {
  return {
    type: SET_LOADING_STATE,
    payload: boolean,
  };
}

export function setNotifications(array) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: array,
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("/notifications.json")
      .then((data) => data.json())
      .then((array) => dispatch(setNotifications(array)))
      .catch((err) => console.log(err))
      .then(() => dispatch(setLoadingState(false)));
  };
}
