import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { Map } from "immutable";

describe("rootReducer", () => {
  it("verifies the initial state from rootReducer", () => {
    const store = createStore(rootReducer);
    expect(store.getState()).toEqual({
      courses: Map(),
      notifications: Map({
        loading: false,
        filter: "DEFAULT",
        notifications: {
          entities: {
            notifications: {},
            messages: {},
            users: {},
          },
        },
      }),
      ui: Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
      }),
    });
  });
});
