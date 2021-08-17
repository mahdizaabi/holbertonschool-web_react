import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

const filterTypeSelected = (state) => state.get("filter");

const getNotifications = (state) => {
  const notifications = state.getIn(["notifications", "entities", "messages"]);
  return Map(notifications);
};

const getUnreadNotifications = (state) => {
  const notifications = state.getIn(["notifications", "entities", "messages"]);
  return Map(notifications).filter(
    (notification) => notification.isRead !== true
  );
};

export { filterTypeSelected, getNotifications, getUnreadNotifications };
