import notifications from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});
const mySchema = [notification];
const normalizedNotifications = normalize(notifications, mySchema);

function getAllNotificationsByUser(userId) {
  const result = [];
  const notificationsObj = normalizedNotifications.entities.notifications;
  const messagesObj = normalizedNotifications.entities.messages;
  for (const notificationId in notificationsObj) {
    if (notificationsObj[notificationId].author === userId) {
      const contextId = notificationsObj[notificationId].context;
      result.push(messagesObj[contextId]);
    }
  }
  return result;
}

export { normalizedNotifications, getAllNotificationsByUser };
