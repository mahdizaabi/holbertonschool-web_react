import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { Map } from "immutable";

describe("rootReducer", () => {
  it("verifies the initial state from rootReducer", () => {
    const store = createStore(rootReducer);
    expect(store.getState()).toEqual({
      courses: Map(),
      notifications: Map(),
      ui: Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
      }),
    });
  });
});
